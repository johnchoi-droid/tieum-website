/* 티움 소식 게시판 공통 데이터
   news.html 과 index.html 에서 공유합니다.
   이 파일을 수정·배포하면 소식 게시판과 메인 '티움 최신 소식'에
   동시에, 모든 방문자·기기에 반영됩니다. */

window.NEWS_TABS = [
  { cat: 'all',        label: '전체' },
  { cat: 'teaching',   label: '교수학습' },
  { cat: 'research',   label: '연구·데이터' },
  { cat: 'camp',       label: '청소년 캠프' },
  { cat: 'lms',        label: '러닝센터' },
  { cat: 'newsletter', label: '뉴스레터' },
  { cat: 'notice',     label: '공지' }
];

window.NEWS_POSTS = [
  {
    id: 'news-camp1', pin: false, category: 'camp', categoryLabel: '청소년 캠프',
    title: '双核觉醒 쌍핵각성 — 연길 조선족 청소년 제주 캠프',
    summary: '중국 연길 조선족 청소년(초4~중3)을 위한 3박 4일 정체성·AI 진로 캠프. 2026년 7월 제주에서 열립니다.',
    date: '2026.05.30', author: '티움 사무국', views: 0,
    content: `
      <h3>双核觉醒 쌍핵각성 캠프 안내</h3>
      <p>중국 연길 거주 조선족 청소년(초4~중3)을 위한 <strong>3박 4일 몰입형 정체성·AI 진로 캠프</strong>입니다.<br>두 개의 정체성을 강점으로 전환하는 여섯 가지 연결 프로그램으로 구성됩니다.</p>
      <ul>
        <li><strong>일시:</strong> 2026년 7월 13일(월) ~ 16일(목) · 3박 4일</li>
        <li><strong>장소:</strong> 제주도 (펄 호텔 + SW미래채움 AI교육캠퍼스)</li>
        <li><strong>대상:</strong> 초등 4학년 ~ 중학 3학년 · 선착순 25명</li>
        <li><strong>총괄 코치:</strong> 고봉익 대표 (TMD교육그룹 · 티움 이사장)</li>
      </ul>
      <p>문의: <strong>johnchoi&#64;tieum&#46;org</strong> / 010-6579-0602</p>
    `
  },
  {
    id: 'news-l1', pin: false, category: 'lms', categoryLabel: '러닝센터',
    title: '티움 러닝센터 정식 오픈 안내',
    summary: '교수학습법·연구·데이터·TMD 리더십 과정을 온라인으로 수강할 수 있는 티움 러닝센터가 문을 열었습니다.',
    date: '2025.03.01', author: '티움 사무국', views: 312,
    content: `
      <h3>티움 러닝센터 정식 오픈</h3>
      <p>교수학습법·연구·데이터·TMD 리더십 과정을 온라인으로 수강하실 수 있는 <strong>티움 러닝센터</strong>가 정식 오픈했습니다.</p>
      <ul>
        <li>수강 등록 코드는 티움 담당자에게 문의하세요.</li>
        <li>문의: <strong>johnchoi&#64;tieum&#46;org</strong></li>
      </ul>
      <p><a href="lms.html">러닝센터 바로가기 →</a></p>
    `
  }
];
