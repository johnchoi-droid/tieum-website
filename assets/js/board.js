/**
 * 티움 게시판 + 관리자 기능 + 파일 첨부
 * 각 페이지에서 window.BOARD_* 변수를 설정한 후 이 파일을 로드하세요.
 */
(function () {
  'use strict';

  /* ── 페이지별 설정 ─────────────────────────────── */
  const CFG = {
    key    : window.BOARD_STORAGE_KEY || 'tieum_board',
    pw     : window.BOARD_ADMIN_PW   || 'TIEUM_0421@',
    perPage: window.BOARD_PER_PAGE   || 8,
    tabs   : window.BOARD_TABS       || [{ cat: 'all', label: '전체' }],
    posts  : window.BOARD_POSTS      || [],
  };

  const K = {
    del : CFG.key + '_del',
    edit: CFG.key + '_edit',
    add : CFG.key + '_add',
  };

  const S = {
    page      : 1,
    tab       : 'all',
    isAdmin   : sessionStorage.getItem('tieum_admin') === '1',
    editId    : null,
    pendingNew: [],   // 새로 추가할 File 객체 배열
    pendingKeep: [],  // 수정 시 유지할 기존 첨부 메타 배열
  };

  /* ════════════════════════════════════════════════
     IndexedDB — 파일 저장소
  ════════════════════════════════════════════════ */
  const IDB_NAME  = 'tieum_attachments';
  const IDB_VER   = 1;
  const IDB_STORE = 'files';
  let   _db       = null;

  function getDB() {
    return new Promise((res, rej) => {
      if (_db) { res(_db); return; }
      const req = indexedDB.open(IDB_NAME, IDB_VER);
      req.onupgradeneeded = e =>
        e.target.result.createObjectStore(IDB_STORE, { keyPath: 'id' });
      req.onsuccess = e => { _db = e.target.result; res(_db); };
      req.onerror   = e => rej(e.target.error);
    });
  }

  function idbSave(record) {
    return getDB().then(db => new Promise((res, rej) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(record);
      tx.oncomplete = res;
      tx.onerror    = () => rej(tx.error);
    }));
  }

  function idbGet(id) {
    return getDB().then(db => new Promise((res, rej) => {
      const tx  = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(id);
      req.onsuccess = () => res(req.result);
      req.onerror   = () => rej(req.error);
    }));
  }

  function idbDel(id) {
    return getDB().then(db => new Promise((res) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).delete(id);
      tx.oncomplete = res;
    }));
  }

  /* 파일 저장 — Drive 우선, 미설정 시 IndexedDB */
  async function saveFileToIDB(file) {
    // Google Drive 연동이 활성화된 경우
    if (window.DriveUploader && window.DriveUploader.isReady()) {
      return await window.DriveUploader.upload(file);
    }
    // IndexedDB 폴백
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = async e => {
        const id = 'f' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
        await idbSave({ id, name: file.name, type: file.type, size: file.size, data: e.target.result });
        res({ fileId: id, name: file.name, type: file.type, size: file.size, source: 'local' });
      };
      reader.onerror = rej;
      reader.readAsArrayBuffer(file);
    });
  }

  /* 파일 다운로드 */
  window.bDownloadFile = async function (fileId, name, source, downloadUrl) {
    try {
      // Drive 파일
      if (source === 'drive' && downloadUrl) {
        window.open(downloadUrl, '_blank', 'noopener');
        return;
      }
      // IndexedDB 파일
      const rec = await idbGet(fileId);
      if (!rec) {
        alert('파일을 찾을 수 없습니다.\n이 파일은 현재 기기/브라우저에서만 다운로드할 수 있습니다.');
        return;
      }
      const blob = new Blob([rec.data], { type: rec.type || 'application/octet-stream' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = name || rec.name;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1000);
    } catch (e) {
      alert('다운로드 중 오류가 발생했습니다: ' + e.message);
    }
  };

  /* ── 파일 크기 포맷 ─────────────────────────────── */
  function fmtSize(bytes) {
    if (bytes < 1024)       return bytes + ' B';
    if (bytes < 1048576)    return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }

  /* ── 파일 아이콘 ─────────────────────────────────── */
  function fileIcon(name) {
    const ext = (name || '').split('.').pop().toLowerCase();
    if (ext === 'pdf')                         return '📄';
    if (['doc','docx'].includes(ext))          return '📝';
    if (['xls','xlsx'].includes(ext))          return '📊';
    if (['ppt','pptx'].includes(ext))          return '📋';
    if (['jpg','jpeg','png','gif','webp'].includes(ext)) return '🖼️';
    if (ext === 'hwp' || ext === 'hwpx')       return '📃';
    if (['zip','rar','7z'].includes(ext))      return '🗜️';
    return '📎';
  }

  /* ════════════════════════════════════════════════
     localStorage 헬퍼
  ════════════════════════════════════════════════ */
  function ls(key, def)       { try { return JSON.parse(localStorage.getItem(key) || def); } catch { return JSON.parse(def); } }
  function lsSet(key, val)    { localStorage.setItem(key, JSON.stringify(val)); }

  /* ── 원격 저장(Cloudflare Worker + KV): 모든 방문자에게 영구 반영 ──
     window.BOARD_API_URL 가 설정돼 있으면 사용. 없거나 실패 시 localStorage 로 자동 폴백. */
  const API  = (window.BOARD_API_URL || '').replace(/\/$/, '');
  const RKEY = encodeURIComponent(CFG.key);

  async function loadRemote() {
    if (!API) return;
    try {
      const r = await fetch(API + '/board/' + RKEY, { cache: 'no-store' });
      if (!r.ok) return;
      const d = await r.json();
      if (d && typeof d === 'object') {
        lsSet(K.edit, d.edit || {});
        lsSet(K.add,  d.add  || []);
        lsSet(K.del,  d.del  || []);
      }
    } catch (e) { /* 오프라인 → localStorage 사용 */ }
  }

  async function pushRemote() {
    if (!API) return;
    try {
      const res = await fetch(API + '/board/' + RKEY, {
        method : 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Pass': CFG.pw },
        body   : JSON.stringify({ edit: ls(K.edit,'{}'), add: ls(K.add,'[]'), del: ls(K.del,'[]') }),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
    } catch (e) {
      alert('⚠️ 서버 저장에 실패했습니다. 변경 내용은 이 브라우저에만 임시 저장되었습니다.\n인터넷 연결을 확인한 뒤 다시 저장해 주세요.\n(' + e.message + ')');
    }
  }

  /* ── 게시글 데이터 합산 ─────────────────────────── */
  function getAllPosts() {
    const deleted = new Set(ls(K.del, '[]').map(String));
    const edits   = ls(K.edit, '{}');
    const added   = ls(K.add,  '[]');
    const apply   = p => edits[String(p.id)] ? Object.assign({}, p, edits[String(p.id)]) : p;
    const base    = CFG.posts.filter(p => !deleted.has(String(p.id))).map(apply);
    const extra   = added.filter(p => !deleted.has(String(p.id))).map(apply);
    return [...extra, ...base];
  }

  function getFiltered() {
    const q = (document.getElementById('boardSearch').value || '').toLowerCase();
    return getAllPosts().filter(p =>
      (S.tab === 'all' || p.category === S.tab) &&
      (!q || p.title.toLowerCase().includes(q))
    );
  }

  /* ════════════════════════════════════════════════
     게시판 렌더링
  ════════════════════════════════════════════════ */
  function render() {
    const list  = getFiltered();
    const total = Math.ceil(list.length / CFG.perPage) || 1;
    if (S.page > total) S.page = total;
    const start = (S.page - 1) * CFG.perPage;
    const rows  = list.slice(start, start + CFG.perPage);
    const tbody = document.getElementById('boardBody');

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="5"><div class="board-empty">게시글이 없습니다.</div></td></tr>';
    } else {
      let n = list.length - start;
      tbody.innerHTML = rows.map(p => {
        const hasFiles = p.attachments && p.attachments.length > 0;
        return `
        <tr>
          <td class="col-num">${p.pin ? '<span class="pin-icon">📌</span>' : n--}</td>
          <td class="col-cat"><span class="board-badge badge-${p.category}">${p.categoryLabel}</span></td>
          <td>
            <span class="title-cell" onclick="bOpenPost('${p.id}')">${p.title}</span>${hasFiles ? ' <span class="attach-chip" title="첨부파일 ' + p.attachments.length + '개">📎 ' + p.attachments.length + '</span>' : ''}
            ${S.isAdmin ? `
              <span class="admin-row-btns">
                <button class="row-btn edit-btn" onclick="bEditPost('${p.id}')">수정</button>
                <button class="row-btn del-btn"  onclick="bDelPost('${p.id}')">삭제</button>
              </span>` : ''}
          </td>
          <td class="col-date">${p.date}</td>
          <td class="col-views">${p.views}</td>
        </tr>`;
      }).join('');
    }

    renderPagination(total);
    syncAdminUI();
  }

  function renderPagination(total) {
    const el = document.getElementById('boardPagination');
    if (total <= 1) { el.innerHTML = ''; return; }
    let h = `<button class="page-btn" onclick="bPage(${S.page-1})" ${S.page===1?'disabled':''}>‹</button>`;
    for (let i = 1; i <= total; i++)
      h += `<button class="page-btn ${i===S.page?'active':''}" onclick="bPage(${i})">${i}</button>`;
    h += `<button class="page-btn" onclick="bPage(${S.page+1})" ${S.page===total?'disabled':''}>›</button>`;
    el.innerHTML = h;
  }

  function syncAdminUI() {
    const show = (id, v) => { const e=document.getElementById(id); if(e) e.style.display=v; };
    show('writeBtn',  S.isAdmin ? 'inline-flex' : 'none');
    show('adminLink', S.isAdmin ? 'none' : '');
    show('logoutBtn', S.isAdmin ? '' : 'none');
    const bar = document.getElementById('adminIndicator');
    if (bar) bar.style.display = S.isAdmin ? 'flex' : 'none';
  }

  window.bPage = function (n) {
    const total = Math.ceil(getFiltered().length / CFG.perPage) || 1;
    if (n >= 1 && n <= total) { S.page = n; render(); }
  };

  /* ── 탭 / 검색 ──────────────────────────────────── */
  document.getElementById('boardTabs').addEventListener('click', e => {
    const btn = e.target.closest('.board-tab-btn');
    if (!btn) return;
    document.querySelectorAll('.board-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    S.tab = btn.dataset.cat; S.page = 1; render();
  });
  document.getElementById('searchBtn').addEventListener('click', () => { S.page=1; render(); });
  document.getElementById('boardSearch').addEventListener('keydown', e => {
    if (e.key === 'Enter') { S.page=1; render(); }
  });

  /* ════════════════════════════════════════════════
     글 읽기 모달
  ════════════════════════════════════════════════ */
  /* ── 묶음(브리핑) 글: 아티클 단위 페이지네이션 ── */
  let BRIEF = { articles: [], idx: 0, intro: '' };

  function parseArticles(content) {
    const tmp = document.createElement('div');
    tmp.innerHTML = content;
    let intro = '', cur = null; const articles = [];
    Array.from(tmp.childNodes).forEach(n => {
      const isH3 = n.nodeType === 1 && n.tagName === 'H3';
      const html = n.nodeType === 1 ? n.outerHTML : (n.textContent || '');
      if (isH3) { if (cur !== null) articles.push(cur); cur = html; }
      else if (cur === null) intro += html;
      else cur += html;
    });
    if (cur !== null) articles.push(cur);
    return { intro, articles };
  }

  function renderPostContent(content) {
    const parsed = parseArticles(content);
    const head = document.querySelector('#modalOverlay .modal-head');
    const oldBar = document.getElementById('briefBar');
    if (oldBar) oldBar.remove();

    // 단일 아티클(또는 묶음 아님) → 기존 방식 그대로
    if (parsed.articles.length < 2) {
      document.getElementById('modalBody').innerHTML = content;
      return;
    }

    // 묶음 글 → 고정 헤더에 번호 내비 + 본문은 현재 아티클만
    BRIEF = { articles: parsed.articles, idx: 0, intro: parsed.intro };
    // 제목 유형에 맞춰 안내 문구 변경 ([…인사이트]→본 인사이트는, […리포트]→본 리포트는, …)
    const titleText = (document.getElementById('modalTitle') || {}).textContent || '';
    let subject = '본 자료는';
    if (titleText.indexOf('인사이트') >= 0) subject = '본 인사이트는';
    else if (titleText.indexOf('리포트') >= 0) subject = '본 리포트는';
    else if (titleText.indexOf('브리핑') >= 0) subject = '본 브리핑은';
    else if (titleText.indexOf('큐레이션') >= 0) subject = '본 큐레이션은';
    const nums = parsed.articles.map((_, i) =>
      `<button class="brief-num" data-i="${i}" onclick="bGotoArticle(${i})">${i + 1}</button>`).join('');
    const bar = document.createElement('div');
    bar.id = 'briefBar';
    bar.className = 'brief-bar';
    bar.innerHTML =
      `<div class="brief-count">📚 ${subject} <b>${parsed.articles.length}개</b>의 아티클을 모았습니다. <span class="brief-hint">번호를 눌러 이동</span></div>` +
      `<div class="brief-nums">${nums}</div>`;
    head.appendChild(bar);

    document.getElementById('modalBody').innerHTML =
      `<div id="briefArticle"></div>
       <div class="brief-nav">
         <button id="briefPrev" class="brief-navbtn" onclick="bGotoArticle(BRIEF_IDX()-1)">← 이전 아티클</button>
         <span id="briefCounter"></span>
         <button id="briefNext" class="brief-navbtn brief-next" onclick="bGotoArticle(BRIEF_IDX()+1)">다음 아티클 →</button>
       </div>`;
    bGotoArticle(0);
  }

  window.BRIEF_IDX = function () { return BRIEF.idx; };
  window.bGotoArticle = function (i) {
    if (!BRIEF.articles.length) return;
    i = Math.max(0, Math.min(BRIEF.articles.length - 1, i));
    BRIEF.idx = i;
    document.getElementById('briefArticle').innerHTML = BRIEF.articles[i];
    document.querySelectorAll('#briefBar .brief-num').forEach(b =>
      b.classList.toggle('active', Number(b.dataset.i) === i));
    document.getElementById('briefCounter').textContent = (i + 1) + ' / ' + BRIEF.articles.length;
    const prev = document.getElementById('briefPrev'), next = document.getElementById('briefNext');
    prev.style.visibility = i === 0 ? 'hidden' : 'visible';
    next.textContent = (i === BRIEF.articles.length - 1) ? '처음으로 ↺' : '다음 아티클 →';
    if (i === BRIEF.articles.length - 1) next.onclick = function(){ bGotoArticle(0); };
    else next.onclick = function(){ bGotoArticle(BRIEF.idx + 1); };
    // 새 아티클은 위에서부터 읽도록 모달 상단으로 스크롤
    const box = document.querySelector('#modalOverlay .modal-box');
    if (box) box.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.bOpenPost = function (id) {
    const p = getAllPosts().find(x => String(x.id) === String(id));
    if (!p) return;
    p.views++;
    const added = ls(K.add, '[]');
    const edits = ls(K.edit, '{}');
    const inA = added.find(x => String(x.id) === String(id));
    if (inA) { inA.views = p.views; lsSet(K.add, added); }
    else { edits[String(id)] = Object.assign(edits[String(id)]||{}, { views: p.views }); lsSet(K.edit, edits); }

    document.getElementById('modalMeta').innerHTML = `
      <span class="board-badge badge-${p.category}">${p.categoryLabel}</span>
      <span class="meta-author">${p.author}</span>
      <span class="meta-date">${p.date}</span>
      <span class="meta-views">조회 ${p.views}</span>`;
    document.getElementById('modalTitle').textContent = p.title;
    renderPostContent(p.content);

    // 첨부파일 영역
    const attachEl = document.getElementById('modalAttachments');
    if (attachEl) {
      if (p.attachments && p.attachments.length > 0) {
        attachEl.innerHTML = `
          <div class="modal-attach-header">📎 첨부파일 (${p.attachments.length})</div>
          <ul class="modal-attach-list">
            ${p.attachments.map(f => {
              const isDrive = f.source === 'drive';
              const dlArgs  = isDrive
                ? `'${f.fileId}','${escHtml(f.name)}','drive','${f.downloadUrl}'`
                : `'${f.fileId}','${escHtml(f.name)}','local',''`;
              const badge   = isDrive
                ? '<span class="attach-src-badge drive-badge">Google Drive</span>'
                : '<span class="attach-src-badge local-badge">로컬</span>';
              return `
              <li class="modal-attach-item">
                <span class="attach-file-icon">${fileIcon(f.name)}</span>
                <span class="attach-file-name">${escHtml(f.name)}</span>
                <span class="attach-file-size">${fmtSize(f.size)}</span>
                ${badge}
                <button class="attach-dl-btn" onclick="bDownloadFile(${dlArgs})">
                  ⬇ 다운로드
                </button>
              </li>`;
            }).join('')}
          </ul>`;
        attachEl.style.display = '';
      } else {
        attachEl.innerHTML = '';
        attachEl.style.display = 'none';
      }
    }

    openModal('modalOverlay');
    history.pushState(null, '', '#' + id);
    render();
  };

  function closePostModal() {
    closeModal('modalOverlay');
    const bar = document.getElementById('briefBar');
    if (bar) bar.remove();
    history.pushState(null, '', location.pathname + location.search);
  }

  document.getElementById('modalClose').addEventListener('click', closePostModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target.id === 'modalOverlay') closePostModal();
  });

  /* ════════════════════════════════════════════════
     관리자: 삭제
  ════════════════════════════════════════════════ */
  window.bDelPost = async function (id) {
    if (!S.isAdmin || !confirm('이 게시글을 삭제하시겠습니까?')) return;
    // 첨부파일도 IndexedDB에서 삭제
    const p = getAllPosts().find(x => String(x.id) === String(id));
    if (p && p.attachments) {
      for (const f of p.attachments) { try { await idbDel(f.fileId); } catch(e){} }
    }
    const del = ls(K.del, '[]');
    if (!del.includes(String(id))) { del.push(String(id)); lsSet(K.del, del); }
    pushRemote();
    S.page = 1; render();
  };

  /* ════════════════════════════════════════════════
     관리자: 글쓰기 / 수정 모달
  ════════════════════════════════════════════════ */
  function buildWriteModal() {
    const tabOpts = CFG.tabs.filter(t => t.cat !== 'all')
      .map(t => `<option value="${t.cat}">${t.label}</option>`).join('');

    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal-overlay" id="writeModal">
        <div class="modal-box write-modal">
          <div class="modal-head">
            <h2 class="modal-title" id="writeModalHeading">새 글 쓰기</h2>
            <button class="modal-close" onclick="closeWriteModal()">✕</button>
          </div>
          <div class="modal-body write-modal-body">

            <div class="wf-row-top">
              <div class="wf-group" style="flex:1">
                <label class="wf-label">구분</label>
                <select class="wf-input wf-select" id="wCat">${tabOpts}</select>
              </div>
              <div class="wf-group wf-pin-group">
                <label class="wf-pin-label">
                  <input type="checkbox" id="wPin" /> 상단 고정 (공지)
                </label>
              </div>
            </div>

            <div class="wf-group">
              <label class="wf-label">제목</label>
              <input class="wf-input" type="text" id="wTitle" placeholder="제목을 입력하세요" />
            </div>

            <div class="wf-group">
              <label class="wf-label">작성자</label>
              <input class="wf-input" type="text" id="wAuthor" value="티움 사무국" />
            </div>

            <div class="wf-group">
              <label class="wf-label">내용</label>
              <div class="wf-toolbar" id="wToolbar">
                <button type="button" class="wf-tb" data-cmd="bold" title="굵게"><b>B</b></button>
                <button type="button" class="wf-tb" data-cmd="italic" title="기울임"><i>I</i></button>
                <button type="button" class="wf-tb" data-cmd="underline" title="밑줄"><u>U</u></button>
                <button type="button" class="wf-tb" data-cmd="strikeThrough" title="취소선"><s>S</s></button>
                <span class="wf-tb-sep"></span>
                <button type="button" class="wf-tb" data-block="h3" title="제목">제목</button>
                <button type="button" class="wf-tb" data-block="h4" title="소제목">소제목</button>
                <button type="button" class="wf-tb" data-block="p" title="본문">본문</button>
                <span class="wf-tb-sep"></span>
                <button type="button" class="wf-tb" data-size="2" title="작게">A−</button>
                <button type="button" class="wf-tb" data-size="5" title="크게">A＋</button>
                <span class="wf-tb-sep"></span>
                <button type="button" class="wf-tb" data-cmd="insertUnorderedList" title="글머리 목록">• 목록</button>
                <button type="button" class="wf-tb" data-cmd="insertOrderedList" title="번호 목록">1. 목록</button>
                <button type="button" class="wf-tb" data-block="blockquote" title="인용구">❝ 인용</button>
                <span class="wf-tb-sep"></span>
                <button type="button" class="wf-tb" data-link="1" title="링크 삽입">🔗</button>
                <button type="button" class="wf-tb" data-cmd="removeFormat" title="서식 지우기">⌫ 서식</button>
              </div>
              <div class="wf-editor" id="wEditor" contenteditable="true"
                   data-placeholder="내용을 입력하세요. 위 버튼으로 굵게·기울임·제목·목록·인용 등을 적용할 수 있습니다."></div>
            </div>

            <!-- ── 파일 첨부 ── -->
            <div class="wf-group">
              <label class="wf-label">
                첨부 파일
                <span class="wf-label-hint">PDF · Word · Excel · PowerPoint · HWP · 이미지 (파일당 최대 50MB)</span>
              </label>
              <div class="wf-dropzone" id="wDropzone">
                <input type="file" id="wFileInput" multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.hwp,.hwpx,.jpg,.jpeg,.png,.gif,.webp,.zip"
                  style="display:none" />
                <div class="wf-drop-area" id="wDropArea">
                  <span class="wf-drop-icon">📎</span>
                  <span class="wf-drop-text">파일을 끌어다 놓거나 <button type="button" class="wf-drop-btn" onclick="document.getElementById('wFileInput').click()">클릭하여 선택</button></span>
                </div>
              </div>
              <ul class="wf-file-list" id="wFileList"></ul>
            </div>

            <div class="wf-actions">
              <button class="btn-cancel-write" onclick="closeWriteModal()">취소</button>
              <button class="btn-primary" onclick="bSubmitPost()">저장하기</button>
            </div>
          </div>
        </div>
      </div>`);

    // 파일 입력 이벤트
    const fileInput = document.getElementById('wFileInput');
    fileInput.addEventListener('change', e => addPendingFiles(e.target.files));

    // 드래그 앤 드롭
    const dropArea = document.getElementById('wDropArea');
    dropArea.addEventListener('dragover',  e => { e.preventDefault(); dropArea.classList.add('drag-over'); });
    dropArea.addEventListener('dragleave', () => dropArea.classList.remove('drag-over'));
    dropArea.addEventListener('drop', e => {
      e.preventDefault();
      dropArea.classList.remove('drag-over');
      addPendingFiles(e.dataTransfer.files);
    });

    wireEditorToolbar();
  }

  /* ── WYSIWYG 에디터 툴바 (블로그형 서식 편집) ── */
  function wireEditorToolbar() {
    const tb = document.getElementById('wToolbar');
    const ed = document.getElementById('wEditor');
    if (!tb || !ed) return;
    // 버튼 누를 때 에디터 선택영역이 풀리지 않도록 mousedown 기본동작 차단
    tb.addEventListener('mousedown', e => { if (e.target.closest('.wf-tb')) e.preventDefault(); });
    tb.addEventListener('click', e => {
      const btn = e.target.closest('.wf-tb');
      if (!btn) return;
      ed.focus();
      try {
        if (btn.dataset.cmd) {
          document.execCommand(btn.dataset.cmd, false, null);
        } else if (btn.dataset.block) {
          document.execCommand('formatBlock', false, '<' + btn.dataset.block + '>');
        } else if (btn.dataset.size) {
          document.execCommand('fontSize', false, btn.dataset.size);
        } else if (btn.dataset.link) {
          const url = prompt('링크 주소(URL)를 입력하세요:', 'https://');
          if (url) document.execCommand('createLink', false, url);
        }
      } catch (err) { /* 무시 */ }
    });
  }

  /* 대기 파일 추가 */
  function addPendingFiles(fileList) {
    const MAX = 50 * 1024 * 1024; // 50MB
    Array.from(fileList).forEach(f => {
      if (f.size > MAX) { alert(`"${f.name}" 파일이 50MB를 초과하여 추가할 수 없습니다.`); return; }
      S.pendingNew.push(f);
    });
    document.getElementById('wFileInput').value = '';
    renderPendingFiles();
  }

  /* 대기 파일 목록 렌더 */
  function renderPendingFiles() {
    const ul = document.getElementById('wFileList');
    const allItems = [
      // 기존 유지 항목 (수정 모드)
      ...S.pendingKeep.map((f, i) => `
        <li class="wf-file-item wf-file-keep">
          <span class="wf-file-icon">${fileIcon(f.name)}</span>
          <span class="wf-file-name">${escHtml(f.name)}</span>
          <span class="wf-file-size">${fmtSize(f.size)}</span>
          <span class="wf-file-label">기존</span>
          <button type="button" class="wf-file-remove" onclick="removeKeepFile(${i})" title="제거">✕</button>
        </li>`),
      // 새로 추가할 파일
      ...S.pendingNew.map((f, i) => `
        <li class="wf-file-item">
          <span class="wf-file-icon">${fileIcon(f.name)}</span>
          <span class="wf-file-name">${escHtml(f.name)}</span>
          <span class="wf-file-size">${fmtSize(f.size)}</span>
          <span class="wf-file-label wf-new-label">새 파일</span>
          <button type="button" class="wf-file-remove" onclick="removeNewFile(${i})" title="제거">✕</button>
        </li>`),
    ];
    ul.innerHTML = allItems.join('') || '';
  }

  window.removeKeepFile = function (i) {
    S.pendingKeep.splice(i, 1);
    renderPendingFiles();
  };
  window.removeNewFile = function (i) {
    S.pendingNew.splice(i, 1);
    renderPendingFiles();
  };

  /* ── 열기 / 닫기 ─────────────────────────────────── */
  window.openWriteModal = function () {
    S.editId = null;
    S.pendingNew   = [];
    S.pendingKeep  = [];
    document.getElementById('writeModalHeading').textContent = '새 글 쓰기';
    document.getElementById('wCat').value    = CFG.tabs.find(t => t.cat !== 'all')?.cat || '';
    document.getElementById('wPin').checked  = false;
    document.getElementById('wTitle').value  = '';
    document.getElementById('wAuthor').value = '티움 사무국';
    document.getElementById('wEditor').innerHTML = '';
    renderPendingFiles();
    openModal('writeModal');
  };

  window.bEditPost = function (id) {
    if (!S.isAdmin) return;
    const p = getAllPosts().find(x => String(x.id) === String(id));
    if (!p) return;
    S.editId      = id;
    S.pendingNew  = [];
    S.pendingKeep = p.attachments ? [...p.attachments] : [];
    document.getElementById('writeModalHeading').textContent = '게시글 수정';
    document.getElementById('wCat').value    = p.category;
    document.getElementById('wPin').checked  = !!p.pin;
    document.getElementById('wTitle').value  = p.title;
    document.getElementById('wAuthor').value = p.author;
    document.getElementById('wEditor').innerHTML = p.content || '';
    renderPendingFiles();
    openModal('writeModal');
  };

  window.closeWriteModal = function () {
    closeModal('writeModal');
    S.editId = null;
    S.pendingNew  = [];
    S.pendingKeep = [];
  };

  /* ── 저장 ─────────────────────────────────────────── */
  window.bSubmitPost = async function () {
    const cat    = document.getElementById('wCat').value;
    const label  = CFG.tabs.find(t => t.cat === cat)?.label || cat;
    const title  = document.getElementById('wTitle').value.trim();
    const author = document.getElementById('wAuthor').value.trim() || '티움 사무국';
    const pin    = document.getElementById('wPin').checked;
    const ed     = document.getElementById('wEditor');
    const content = ed.innerHTML.trim();
    const plain  = (ed.textContent || '').trim();

    if (!title) { alert('제목을 입력해 주세요.'); return; }
    if (!plain) { alert('내용을 입력해 주세요.'); return; }

    // 새 파일 IndexedDB에 저장
    let newMeta = [];
    if (S.pendingNew.length > 0) {
      const saveBtn = document.querySelector('#writeModal .btn-primary');
      if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = '저장 중…'; }
      try {
        for (const f of S.pendingNew) {
          const meta = await saveFileToIDB(f);
          newMeta.push(meta);
        }
      } catch(e) {
        alert('파일 저장 중 오류가 발생했습니다: ' + e.message);
        if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = '저장하기'; }
        return;
      }
      if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = '저장하기'; }
    }

    const attachments = [...S.pendingKeep, ...newMeta];

    const d = new Date();
    const date = `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;

    if (S.editId !== null) {
      const added = ls(K.add, '[]');
      const edits = ls(K.edit, '{}');
      const inA = added.find(x => String(x.id) === String(S.editId));
      const patch = { category: cat, categoryLabel: label, title, author, pin, content, date, attachments };
      if (inA) { Object.assign(inA, patch); lsSet(K.add, added); }
      else     { edits[String(S.editId)] = Object.assign(edits[String(S.editId)]||{}, patch); lsSet(K.edit, edits); }
    } else {
      const np = { id: 'a'+Date.now(), pin, category: cat, categoryLabel: label,
                   title, author, date, views: 0, content, attachments };
      const added = ls(K.add, '[]');
      added.unshift(np);
      lsSet(K.add, added);
    }

    pushRemote();
    closeWriteModal();
    S.page = 1;
    render();
  };

  /* ════════════════════════════════════════════════
     관리자 로그인 / 로그아웃
  ════════════════════════════════════════════════ */
  function buildLoginModal() {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal-overlay" id="adminLoginModal">
        <div class="modal-box admin-login-box">
          <div class="modal-head">
            <h2 class="modal-title">관리자 로그인</h2>
            <button class="modal-close" onclick="closeAdminLogin()">✕</button>
          </div>
          <div class="modal-body" style="padding:24px 36px 36px">
            <p style="color:var(--text-2);margin-bottom:20px;font-size:.95rem;">관리자 비밀번호를 입력하세요.</p>
            <label class="wf-label">비밀번호</label>
            <input type="password" id="adminPwInput" class="wf-input"
              placeholder="비밀번호 입력"
              onkeydown="if(event.key==='Enter') doAdminLogin()"
              style="margin-bottom:8px;" />
            <p id="adminLoginErr" style="color:#e53e3e;font-size:.83rem;min-height:18px;margin-top:4px;"></p>
            <button class="btn-primary" style="width:100%;margin-top:14px;" onclick="doAdminLogin()">로그인</button>
          </div>
        </div>
      </div>`);
  }

  window.openAdminLogin  = function () {
    document.getElementById('adminPwInput').value = '';
    document.getElementById('adminLoginErr').textContent = '';
    openModal('adminLoginModal');
    setTimeout(() => document.getElementById('adminPwInput').focus(), 120);
  };
  window.closeAdminLogin = function () { closeModal('adminLoginModal'); };
  window.doAdminLogin    = function () {
    if (document.getElementById('adminPwInput').value === CFG.pw) {
      S.isAdmin = true;
      sessionStorage.setItem('tieum_admin', '1');
      closeModal('adminLoginModal');
      render();
    } else {
      document.getElementById('adminLoginErr').textContent = '비밀번호가 올바르지 않습니다.';
    }
  };
  window.adminLogout = function () {
    S.isAdmin = false;
    sessionStorage.removeItem('tieum_admin');
    render();
  };

  /* ── 모달 헬퍼 ──────────────────────────────────── */
  function openModal(id)  { const el=document.getElementById(id); if(el){ el.classList.add('open'); document.body.style.overflow='hidden'; } }
  function closeModal(id) { const el=document.getElementById(id); if(el){ el.classList.remove('open'); document.body.style.overflow=''; } }

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closePostModal();
    ['writeModal','adminLoginModal'].forEach(closeModal);
  });

  /* ── HTML 이스케이프 ─────────────────────────────── */
  function escHtml(s) {
    return String(s)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
  }

  /* ── 초기화 ─────────────────────────────────────── */
  buildWriteModal();
  buildLoginModal();
  render();                              // 즉시 렌더(정적/캐시)
  loadRemote().then(render);             // 원격 최신본 반영 후 재렌더

  // URL 해시로 직접 게시물 열기 (예: news.html#news-r1)
  const _initHash = location.hash.slice(1);
  if (_initHash) setTimeout(() => bOpenPost(_initHash), 50);

})();
