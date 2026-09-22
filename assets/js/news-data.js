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
    id: 'news-aischool-1-review', pin: true, category: 'notice', categoryLabel: '공지',
    title: '[후기] 제1회 TIEUM AI 수다방 — "AI는 동료다"',
    summary: '9월 22일 용인 기흥 북카페에서 첫 AI 수다방을 열었습니다. 두 시간 뒤, 참가자들은 저마다 직접 만든 앱 하나를 손에 들고 돌아가셨습니다.',
    date: '2026.09.22', author: '티움 사무국', views: 0,
    image: 'assets/images/news/sudabang1-06.jpg',
    content: `
      <h3>첫 AI 수다방, 이렇게 열렸습니다</h3>
      <p>2026년 9월 22일(화) 오전, 용인 기흥 북카페 <strong>꿈꾸는 정원</strong>에서 첫 번째 <strong>TIEUM AI 수다방</strong>을 열었습니다. 컴퓨터를 잘 몰라도 괜찮다는 약속 하나로 모인 자리였습니다.</p>

      <p style="margin:22px 0 6px;"><img src="assets/images/news/sudabang1-06.jpg" alt="TIEUM AI 수다방 — 북카페에 모여 각자 노트북으로 실습하는 참가자들" style="width:100%;height:auto;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async"></p>
      <p style="margin:0 0 24px;font-size:13px;color:#718096;">각자 노트북을 펴고, 직접 만들어 보는 두 시간.</p>

      <p>두 시간 동안 이웃들과 마주 앉아 AI가 무엇인지, 우리 일상에서 어떻게 쓸 수 있는지 이야기를 나누었습니다. 그리고 각자 손으로 앱을 하나씩 만들어 보았습니다. 강의를 듣기만 하는 자리가 아니라, 옆에 앉아 같이 만들어 보는 자리였습니다.</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:24px 0 10px;">
        <img src="assets/images/news/sudabang1-01.jpg" alt="TIEUM AI 수다방 — 화면을 가리키며 설명하는 모습" style="width:100%;height:100%;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async">
        <img src="assets/images/news/sudabang1-02.jpg" alt="TIEUM AI 수다방 — 참가자 옆에서 함께 살펴보는 모습" style="width:100%;height:100%;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async">
        <img src="assets/images/news/sudabang1-04.jpg" alt="TIEUM AI 수다방 — 질문에 답하는 모습" style="width:100%;height:100%;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async">
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin:0 0 6px;">
        <img src="assets/images/news/sudabang1-05.jpg" alt="TIEUM AI 수다방 — 휴대폰 화면을 함께 보며 일대일로 도와주는 모습" style="width:100%;height:100%;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async">
        <img src="assets/images/news/sudabang1-03.jpg" alt="TIEUM AI 수다방 — 북카페 꿈꾸는 정원에 둘러앉은 참가자들" style="width:100%;height:100%;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async">
      </div>
      <p style="margin:0 0 26px;font-size:13px;color:#718096;">막히는 곳은 옆에 앉아 하나씩 함께 풀어 갔습니다.</p>

      <h4>참가자들이 남긴 말</h4>
      <p>마치고 나서 짧은 설문을 부탁드렸습니다. 답해 주신 분들은 모두 오늘 시간이 <strong>&lsquo;매우 도움이 되었다&rsquo;</strong>고 해 주셨습니다. 적어 주신 말을 그대로 옮깁니다.</p>

      <p style="margin:20px 0 8px;font-weight:700;color:#1a1a2e;">오늘 가장 기억에 남는 한 장면은?</p>
      <ul>
        <li>편안한 분위기와 소통</li>
        <li>누구나 됩니다</li>
        <li>AI는 동료다</li>
      </ul>

      <p style="margin:20px 0 8px;font-weight:700;color:#1a1a2e;">오늘 이 시간을 한 문장으로 표현한다면?</p>
      <ul>
        <li>편안하고 유익한 시간이었습니다.</li>
        <li>새 세상의 문 안에 들어왔다</li>
        <li>피하지 않고 함께 가기</li>
      </ul>

      <p style="margin:20px 0 8px;font-weight:700;color:#1a1a2e;">이번 주에 한 가지 해본다면?</p>
      <ul>
        <li>뉴스 클리핑</li>
        <li>안내문 만들기</li>
        <li>받아쓰기 앱 활용하고 하나 더 만들어 보기</li>
      </ul>

      <p>&lsquo;AI는 동료다&rsquo;, &lsquo;누구나 됩니다&rsquo;. 두 시간 전만 해도 AI를 멀게 느끼셨던 분들이 남긴 말입니다. 저희가 바라던 바로 그 자리였습니다.</p>

      <h4>다음 모임</h4>
      <p>AI 수다방은 계속 이어집니다. 참가자들께서 <strong>4주 정규 과정</strong>이 열리면 참여하고 싶다는 뜻을 전해 주셔서, 지금 과정을 준비하고 있습니다.</p>
      <p>다음 모임 안내를 받고 싶으시거나, 저희를 초청해 동네에서 함께 열고 싶으시면 편하게 연락 주세요.</p>

      <div style="background:#f7f9fc;border-left:4px solid #F5A623;border-radius:8px;padding:20px 22px;margin:20px 0;">
        <p style="margin:0;line-height:2;font-size:14.5px;color:#4a5568;">
          <strong style="color:#1a1a2e;">문의</strong> &nbsp;010-6579-0602 (전화 &middot; 문자)<br/>
          <strong style="color:#1a1a2e;">이메일</strong> &nbsp;johnchoi&#64;tieum&#46;org<br/>
          <strong style="color:#1a1a2e;">주최</strong> &nbsp;교육 비영리 사단법인 티움
        </p>
      </div>

      <p style="font-size:13px;color:#718096;">※ 참가자 사진은 개인정보 보호를 위해 얼굴을 가려 게재했습니다.</p>
    `
  },
  {
    id: 'news-aischool-1', pin: false, category: 'notice', categoryLabel: '공지',
    title: '[모집] TIEUM AI 수다방 — AI 어렵지 않습니다. 앱 하나 만들러 오세요',
    summary: '컴퓨터를 몰라도 괜찮습니다. 2시간 뒤 내가 직접 만든 앱 하나가 손에 남습니다. 9월 22일(화) 오전 10시, 용인 기흥 북카페 꿈꾸는 정원에서 무료로 진행합니다.',
    date: '2026.09.18', author: '티움 사무국', views: 0,
    image: 'assets/images/news/ai-sudabang-poster3.jpg',
    content: `
      <h3>배우고 끝이 아닌, 결과물이 남는 동네 모임</h3>
      <p>&ldquo;인공지능 시대, 교육을 통해 세상을 변화시킵니다&rdquo;라는 슬로건대로, 티움이 직접 이웃들을 찾아가는 <strong>AI 수다방</strong>을 시작합니다.</p>
      <p>AI를 다루는 온라인 강의는 많지만, 정작 오프라인에서 편하게 물어볼 자리는 찾기 어려웠습니다. 그래서 발상을 바꾸어, 지역 주민들과 함께 앉아 직접 만들어 보는 자리를 마련했습니다.</p>

      <ul>
        <li><strong>당신도 앱 하나 만들 수 있습니다.</strong> 못 할 것 같아도, 정말 됩니다.</li>
        <li><strong>컴퓨터 몰라도 괜찮습니다.</strong> 하나씩, 차근차근 가르쳐 드립니다.</li>
        <li><strong>2시간 뒤, 내가 직접 만든 앱 하나</strong>가 손에 남습니다.</li>
      </ul>

      <div style="background:#f7f9fc;border-left:4px solid #1B4F8A;border-radius:8px;padding:20px 22px;margin:24px 0;">
        <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#1B4F8A;letter-spacing:.02em;">TIEUM AI 수다방 &mdash; 동네 엄마아빠들의 AI 수다방</p>
        <p style="margin:0;line-height:2;font-size:14.5px;color:#4a5568;">
          <strong style="color:#1a1a2e;">일시</strong> &nbsp;2026년 9월 22일(화) 오전 10시<br/>
          <strong style="color:#1a1a2e;">장소</strong> &nbsp;북카페 꿈꾸는 정원 (경기 용인시 기흥구 중동 665-28)<br/>
          <strong style="color:#1a1a2e;">주차</strong> &nbsp;무료 주차 (도보 2분)<br/>
          <strong style="color:#1a1a2e;">대상</strong> &nbsp;AI가 궁금한 성인 누구나 &mdash; 컴퓨터를 몰라도 됩니다<br/>
          <strong style="color:#1a1a2e;">참가비</strong> &nbsp;0원<br/>
          <strong style="color:#1a1a2e;">정원</strong> &nbsp;20명 (선착순)<br/>
          <strong style="color:#1a1a2e;">강사</strong> &nbsp;최주안 교육학 박사<br/>
          <strong style="color:#1a1a2e;">주최</strong> &nbsp;교육 비영리 사단법인 티움<br/>
          <strong style="color:#1a1a2e;">문의</strong> &nbsp;010-6579-0602 (전화 &middot; 문자)
        </p>
      </div>

      <p><strong>준비물 &middot; 노트북 또는 태블릿</strong>을 가져오시면 훨씬 편하게 만들어 가실 수 있습니다. 없어도 괜찮습니다 &mdash; 옆에서 함께 만들어 드립니다.</p>

      <p><strong>가져가실 것</strong> &mdash; 내가 만든 앱 1개, 내 상황에 맞춘 AI 사용법, 프롬프트 카드.</p>

      <p><strong>왜 무료일까요?</strong> 사단법인 티움은 교육을 위한 비영리 단체입니다. 수익이 아니라, 교육으로 세상을 바꾸려 합니다.</p>

      <p>신청은 아래 포스터의 <strong>신청 QR</strong>을 스마트폰으로 촬영하시면 됩니다. 전화나 문자로 주셔도 됩니다.</p>

      <p style="margin:24px 0 8px;font-weight:700;color:#1a1a2e;">포스터</p>
      <p style="margin:0;"><img src="assets/images/news/ai-sudabang-poster3.jpg" alt="TIEUM AI 수다방 안내 포스터 — AI 어렵지 않습니다. 앱 하나 만들러 오세요. 9월 22일 화요일 오전 10시, 용인 기흥 북카페 꿈꾸는 정원" style="width:100%;height:auto;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async"></p>
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
