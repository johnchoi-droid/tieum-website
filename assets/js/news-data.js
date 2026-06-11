/* 티움 소식 게시판 공통 데이터
   news.html 과 index.html 에서 공유합니다.
   새 게시물을 추가하면 메인 페이지 '티움 최신 소식'에도 자동 반영됩니다. */

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
    id: 'news-nl1', pin: false, category: 'newsletter', categoryLabel: '뉴스레터',
    title: '티움 뉴스레터 2026년 5월호 발행',
    summary: '5월 한 달간 티움이 걸어온 발걸음 — 비전캠프 3기 준비, 카자흐스탄 현장 소식, 미래아카데미 보고.',
    date: '2026.05.29', author: '티움 사무국', views: 145,
    content: `
      <h3>티움 뉴스레터 2026년 5월호</h3>
      <p>5월 한 달간 티움이 걸어온 발걸음을 나눕니다.</p>
      <ul>
        <li>청소년 비전캠프 3기 준비 현황</li>
        <li>카자흐스탄 AI 한국어 센터 현장 소식</li>
        <li>미래아카데미 1기 중간 결과 보고</li>
      </ul>
      <p>전체 뉴스레터는 <a href="newsletter.html">뉴스레터 페이지</a>에서 확인하세요.</p>
    `
  },
  {
    id: 'news-nl2', pin: false, category: 'newsletter', categoryLabel: '뉴스레터',
    title: '티움 뉴스레터 2026년 4월호 발행',
    summary: '4월 한 달간 티움이 걸어온 발걸음 — PAS 봉사단 출발 준비, 미래아카데미 킥오프, 워크숍 후기.',
    date: '2026.04.30', author: '티움 사무국', views: 132,
    content: `
      <h3>티움 뉴스레터 2026년 4월호</h3>
      <p>4월 한 달간 티움이 걸어온 발걸음을 나눕니다.</p>
      <ul>
        <li>PAS 해외봉사단 카자흐스탄 출발 준비</li>
        <li>미래아카데미 1기 킥오프 행사</li>
        <li>교수학습법 워크숍 후기</li>
      </ul>
      <p>전체 뉴스레터는 <a href="newsletter.html">뉴스레터 페이지</a>에서 확인하세요.</p>
    `
  },
  {
    id: 'news-n1', pin: true, category: 'notice', categoryLabel: '공지',
    title: '사단법인 티움 2026년 사업계획 발표',
    summary: '청소년 비전캠프 3기, PAS 해외봉사단, 미래아카데미 1기 — 2026년 세 가지 핵심 사업을 안내합니다.',
    date: '2026.03.01', author: '티움 사무국', views: 210,
    content: `
      <h3>2026년 티움 사업계획</h3>
      <p>사단법인 티움은 2026년 세 가지 핵심 사업을 중심으로 활동합니다.</p>
      <ul>
        <li><strong>청소년 비전캠프 3기</strong> — PBL 기반 프로젝트형 교육 (2026.12~2027.2)</li>
        <li><strong>PAS 해외봉사단 프로젝트</strong> — 카자흐스탄 알마티 AI 한국어 센터 (2026.3~6)</li>
        <li><strong>미래아카데미 1기</strong> — 대한민국역사와미래재단 협력 청년 리더 양성 (2026.4~12)</li>
      </ul>
      <p>문의: <strong>johnchoi&#64;tieum&#46;org</strong></p>
    `
  },
  {
    id: 'news-t1', pin: false, category: 'teaching', categoryLabel: '교수학습',
    title: '2025 교수학습법 여름 워크숍 참가자 모집',
    summary: 'AI 시대 혁신적 교수학습법 집중 워크숍 — 2025년 7월 14~16일, 서울 서초구 티움 교육센터.',
    date: '2025.05.20', author: '티움 사무국', views: 124,
    content: `
      <h3>2025 교수학습법 여름 워크숍</h3>
      <p>티움은 오는 <strong>7월 14일~16일(2박 3일)</strong>, AI 시대에 맞는 혁신적 교수학습법 집중 워크숍을 개최합니다.</p>
      <ul>
        <li><strong>일시:</strong> 2025년 7월 14일(월) ~ 16일(수)</li>
        <li><strong>장소:</strong> 서울 서초구 티움 교육센터</li>
        <li><strong>대상:</strong> 교사, 해외 교육자, 교육 전문가</li>
        <li><strong>정원:</strong> 30명 (선착순)</li>
      </ul>
      <p>신청: <strong>johnchoi&#64;tieum&#46;org</strong> / 010-6579-0602</p>
    `
  },
  {
    id: 'news-r1', pin: false, category: 'research', categoryLabel: '연구·데이터',
    title: '동남아시아 교육 활동 보고 — AI 교육 효과 분석',
    summary: '티움 글로벌 팀이 동남아시아 3개국에서 AI 교육 활동을 성황리에 마쳤습니다. 참가 학생 320명, 만족도 94%.',
    date: '2025.05.15', author: '티움 연구팀', views: 95,
    content: `
      <h3>동남아시아 교육 활동 보고</h3>
      <p>티움 글로벌 팀이 동남아시아 3개국에서 진행한 AI 교육 활동을 성황리에 마쳤습니다.</p>
      <ul>
        <li>참가 학생 수: 총 320명</li>
        <li>교육 만족도: 94%</li>
        <li>AI 도구 활용 역량 향상도: 사전 대비 41% 향상</li>
      </ul>
      <p>세부 보고서는 <a href="research.html">연구 &amp; 데이터</a> 페이지에서 확인하실 수 있습니다.</p>
    `
  },
  {
    id: 'news-t2', pin: false, category: 'teaching', categoryLabel: '교수학습',
    title: 'AI 활용 수업 설계 특강 안내 (6월 21일)',
    summary: '현직 교사·교육자를 위한 AI 도구 활용 수업 설계 특강 — 6월 21일, 온라인 Zoom, 무료 참가.',
    date: '2025.05.08', author: '티움 사무국', views: 87,
    content: `
      <h3>AI 활용 수업 설계 특강</h3>
      <p>현직 교사와 교육자를 위한 <strong>AI 도구 활용 수업 설계</strong> 특강을 안내드립니다.</p>
      <ul>
        <li><strong>일시:</strong> 2025년 6월 21일(토) 오전 10시 ~ 오후 5시</li>
        <li><strong>장소:</strong> 온라인 (Zoom)</li>
        <li><strong>강사:</strong> 김형주 교수</li>
        <li><strong>참가비:</strong> 무료</li>
      </ul>
      <p>사전 신청: <strong>johnchoi&#64;tieum&#46;org</strong>으로 이메일 접수</p>
    `
  },
  {
    id: 'news-r2', pin: false, category: 'research', categoryLabel: '연구·데이터',
    title: '2025 상반기 교육 연구 결과 발표회 개최',
    summary: '2025년 상반기 교육 연구 결과 발표회 — 6월 10일 티움 교육센터 세미나실에서 열립니다.',
    date: '2025.04.20', author: '티움 연구팀', views: 68,
    content: `
      <h3>2025 상반기 교육 연구 결과 발표회</h3>
      <p>티움은 2025년 상반기 교육 연구 결과 발표회를 개최합니다.</p>
      <ul>
        <li><strong>일시:</strong> 2025년 6월 10일(화) 오후 2시</li>
        <li><strong>장소:</strong> 티움 교육센터 세미나실</li>
        <li><strong>발표 주제:</strong> AI 교육 효과 측정 모델, 디지털 교육 격차 현황</li>
      </ul>
      <p>참가 신청: <strong>johnchoi&#64;tieum&#46;org</strong></p>
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
