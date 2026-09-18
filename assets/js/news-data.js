/* 티움 소식 게시판 공통 데이터
   news.html 과 index.html 에서 공유합니다.
   이 파일을 수정·배포하면 소식 게시판과 메인 '티움 최신 소식'에
   동시에, 모든 방문자·기기에 반영됩니다. */

window.NEWS_TABS = [
  { cat: 'all',    label: '전체' },
  { cat: 'edu',    label: '교육·연구' },   // 교수학습 + 연구·데이터 + 러닝센터 통합
  { cat: 'notice', label: '공지' }
];

window.NEWS_POSTS = [
  /* 쌍핵각성 캠프 소식(news-camp1)은 2026-07 미개최 결정으로 숨김 —
     원문은 _archive/camp-ssanghaek-2026.html 에 보관 */
  {
    id: 'news-aischool-1', pin: true, category: 'notice', categoryLabel: '공지',
    title: '[모집] TIEUM AI 수다방 — AI, 엄마가 먼저 알아야 자녀도 도울 수 있습니다',
    summary: '티움이 이웃을 직접 찾아가는 AI 스쿨을 시작합니다. 9월 22일(화) 오전 10시, 용인 기흥구 북카페 꿈꾸는 정원에서 무료로 진행합니다.',
    date: '2026.09.18', author: '티움 사무국', views: 0,
    image: 'assets/images/news/ai-sudabang-poster2.jpg',
    content: `
      <h3>배우고 끝이 아닌, 결과물이 남는 동네 모임</h3>
      <p>&ldquo;인공지능 시대, 교육으로 세상을 변화시킵니다&rdquo;라는 슬로건대로, 티움이 직접 이웃들을 찾아가는 <strong>AI 스쿨</strong>을 시작합니다.</p>
      <p>AI를 다루는 온라인 강의는 많지만, 정작 오프라인에서 이런 강의를 찾아보기는 쉽지 않았습니다. 그래서 발상을 바꾸어, 지역 주민들과 함께하는 인공지능 아카데미를 열기로 했습니다. AI 시대에 부모가 먼저 알아야 할 이야기를 함께 나눕니다.</p>

      <div style="background:#f7f9fc;border-left:4px solid #1B4F8A;border-radius:8px;padding:20px 22px;margin:24px 0;">
        <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#1B4F8A;letter-spacing:.02em;">TIEUM AI 수다방</p>
        <p style="margin:0;line-height:2;font-size:14.5px;color:#4a5568;">
          <strong style="color:#1a1a2e;">일시</strong> &nbsp;2026년 9월 22일(화) 오전 10시<br/>
          <strong style="color:#1a1a2e;">장소</strong> &nbsp;북카페 꿈꾸는 정원 (용인시 기흥구 중동 665-28)<br/>
          <strong style="color:#1a1a2e;">주차</strong> &nbsp;무료 (중동 668-20 또는 중동 665-49, 도보 2분)<br/>
          <strong style="color:#1a1a2e;">대상</strong> &nbsp;AI와 자녀교육에 관심 있는 부모님<br/>
          <strong style="color:#1a1a2e;">참가비</strong> &nbsp;무료<br/>
          <strong style="color:#1a1a2e;">주최</strong> &nbsp;교육 비영리 사단법인 티움<br/>
          <strong style="color:#1a1a2e;">문의</strong> &nbsp;010-6579-0602
        </p>
      </div>

      <p>신청은 아래 포스터의 <strong>신청 QR</strong>을 스마트폰으로 촬영하시면 됩니다. 문의는 위 연락처로 주셔도 됩니다.</p>

      <p style="margin:24px 0 8px;font-weight:700;color:#1a1a2e;">포스터</p>
      <p style="margin:0 0 16px;"><img src="assets/images/news/ai-sudabang-poster2.jpg" alt="TIEUM AI 수다방 안내 포스터 — 우리 아이, AI를 써도 괜찮을까요?" style="width:100%;height:auto;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async"></p>
      <p style="margin:0;"><img src="assets/images/news/ai-sudabang-poster1.jpg" alt="TIEUM AI 수다방 안내 포스터 — AI, 엄마가 먼저 알아야 자녀도 도울 수 있습니다" style="width:100%;height:auto;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async"></p>
    `
  },
  {
    id: 'news-l1', pin: false, category: 'edu', categoryLabel: '교육·연구',
    title: '티움 러닝센터 정식 오픈 안내',
    summary: '교수학습법·연구·데이터·TMD 리더십 과정을 온라인으로 수강할 수 있는 티움 러닝센터가 문을 열었습니다.',
    date: '2025.03.01', author: '티움 사무국', views: 312,
    content: `
      <h3>티움 러닝센터 정식 오픈</h3>
      <p>교수학습법·연구·데이터·TMD 리더십 과정을 온라인으로 수강하실 수 있는 티움 러닝센터가 정식 오픈했습니다.</p>
      <ul>
        <li>수강 등록 코드는 티움 담당자에게 문의하세요.</li>
        <li>문의: <strong>johnchoi&#64;tieum&#46;org</strong></li>
      </ul>
      <p><a href="lms.html">러닝센터 바로가기 →</a></p>
    `
  }
];

/* ════════════════════════════════════════════════════════════
   실효 소식(Effective News) = NEWS_POSTS + 게시판 변경분 합산
   ────────────────────────────────────────────────────────────
   news.html 게시판에서 글을 추가·삭제·수정하면 그 변경분이
   Cloudflare Worker(KV)에 저장됩니다. 이 함수가 그 변경분을
   NEWS_POSTS(시드)에 합산해 Promise<배열>로 돌려주므로,
   메인 페이지 '티움 최신 소식'에도 게시판 변동이 자동 반영됩니다.
   Worker 미설정·오프라인·오류 시 NEWS_POSTS 원본으로 폴백합니다.
   (병합 규칙은 board.js 의 getAllPosts() 와 동일)

   필요한 전역값:
     window.BOARD_API_URL      (board-drive-config.js 에서 설정)
     window.BOARD_STORAGE_KEY  (기본값 'tieum_news')
   ════════════════════════════════════════════════════════════ */
window.getEffectiveNewsPosts = function () {
  var seed = (window.NEWS_POSTS || []).slice();
  var api  = (window.BOARD_API_URL || '').replace(/\/$/, '');
  var key  = window.BOARD_STORAGE_KEY || 'tieum_news';
  if (!api || typeof fetch !== 'function') return Promise.resolve(seed);

  var ctrl  = (typeof AbortController === 'function') ? new AbortController() : null;
  var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 4000) : null;
  var done  = function () { if (timer) { clearTimeout(timer); timer = null; } };

  return fetch(api + '/board/' + encodeURIComponent(key), {
      cache: 'no-store', signal: ctrl ? ctrl.signal : undefined
    })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      done();
      if (!d || typeof d !== 'object') return seed;
      var edit = d.edit || {};
      var add  = Array.isArray(d.add) ? d.add : [];
      var del  = new Set((Array.isArray(d.del) ? d.del : []).map(String));
      var apply = function (p) {
        return edit[String(p.id)] ? Object.assign({}, p, edit[String(p.id)]) : p;
      };
      var base  = seed.filter(function (p) { return !del.has(String(p.id)); }).map(apply);
      var extra = add.filter(function (p) { return !del.has(String(p.id)); }).map(apply);
      return extra.concat(base);   // 게시판과 동일: 추가글 먼저, 그다음 시드글
    })
    .catch(function () { done(); return seed; });
};

/* ────────────────────────────────────────────────────────────
   보안 헬퍼 — 게시글은 누구나(관리자 비밀번호 보유 시) 등록 가능하고
   제목·요약이 메인/게시판에 innerHTML로 렌더되므로, 출력 시 항상 escape한다.
   ──────────────────────────────────────────────────────────── */
window.escHtml = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
};

/* 텍스트로 새어 들어온 HTML 태그 조각 제거.
   외부 API에서 넘어온 제목에 <b>…</b> 같은 마크업이 섞이면 화면에 태그가
   글자 그대로 보인다. 제목·요약은 평문이어야 하므로 원시/이스케이프 모두 지운다. */
window.stripStrayTags = (function () {
  var TAGS = 'b|i|u|em|strong|span|small|font|mark|sub|sup|br|p|div';
  var RE = new RegExp('(?:&lt;|<)\\s*/?\\s*(?:' + TAGS + ')\\b[^<>&]{0,80}?(?:&gt;|>)', 'gi');
  return function (s) {
    return String(s == null ? '' : s).replace(RE, '').replace(/\s{2,}/g, ' ').trim();
  };
})();

/* 글 요약 — summary 우선, 없으면 content에서 텍스트만 안전 추출.
   DOMParser는 스크립트 실행·리소스 로드를 하지 않아 onerror 류 XSS가 발생하지 않는다.
   반환값은 평문이며, 호출부에서 다시 escHtml로 감싸 출력한다. */
window.newsExcerpt = function (p, n) {
  n = n || 90;
  if (p && p.summary) {
    var s = window.stripStrayTags(String(p.summary)).replace(/\s+/g, ' ');
    return s.length > n ? s.slice(0, n) + '…' : s;
  }
  if (!p || !p.content) return '';
  var text = '';
  try {
    var doc = new DOMParser().parseFromString(String(p.content), 'text/html');
    text = (doc.body.textContent || '').trim().replace(/\s+/g, ' ');
  } catch (e) {
    text = String(p.content).replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
  }
  text = window.stripStrayTags(text);   // 본문에 태그가 글자로 있던 경우까지 정리
  return text.length > n ? text.slice(0, n) + '…' : text;
};
