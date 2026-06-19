/**
 * 티움 LMS — 코스 데이터
 * ─────────────────────────────────────────────────────
 * 코스/강의를 추가·수정하려면 이 파일만 편집하세요.
 *
 * 영상 추가 방법:
 *   Google Drive: 파일 공유 → "링크 있는 모든 사용자" 설정
 *                 URL의 /d/XXXXXX/view 에서 XXXXXX 부분이 videoId
 *                 videoType: 'drive'
 *   YouTube:      youtube.com/watch?v=XXXXXX 에서 XXXXXX 부분이 videoId
 *                 videoType: 'youtube'
 *   미등록:        videoId: '' 로 두면 "준비 중" 화면 표시
 */

window.LMS_CONFIG = {
  title:    '티움 러닝센터',
  subtitle: 'AI 시대의 교육 전문가 과정',
  /* 수강 비밀번호는 제거됨 — 무료 멤버십(이름만으로 등록). */

  /* ⚠️⚠️ 보안 경고 ⚠️⚠️ ───────────────────────────────────────
   * 이 파일(lms-data.js)은 누구나 볼 수 있는 '공개' 스크립트입니다.
   * 아래 groqApiKey / claudeApiKey 에 실제 키를 절대 넣지 마세요.
   * 넣는 즉시 전 세계에 키가 공개되어 요금 폭탄·오남용 위험이 있습니다.
   *
   *  • claudeApiKey : 비워 두세요. 클라이언트는 키를 직접 쓰지 않습니다.
   *                   AI 챗봇이 필요하면 chatApiEndpoint(서버 프록시)만 설정하세요.
   *  • groqApiKey   : 비워 두세요. 자막 기능은 각 사용자가 '자기 브라우저에서
   *                   본인 키를 직접 입력'하는 방식(BYOK)으로 동작합니다.
   *                   (이 경우 키는 그 사용자 브라우저에만 머물러 안전)
   *  • chatApiEndpoint : Anthropic 키를 보관하는 서버사이드 프록시 URL.
   *                   예) 'https://your-worker.workers.dev/chat'
   *                   설정하면 챗봇이 이 프록시로만 호출하고, 키는 서버에만 둡니다.
   * ─────────────────────────────────────────────────────── */
  groqApiKey:      '',   // 절대 채우지 말 것(공개됨). 사용자 BYOK 사용.
  claudeApiKey:    '',   // 절대 채우지 말 것(공개됨). 프록시 사용.
  chatApiEndpoint: '',   // 서버 프록시 URL만 입력
};

window.LMS_COURSES = [

  /* ══════════════════════════════════════════════════
     코스 1 — 교수학습법
  ══════════════════════════════════════════════════ */
  {
    id:       'teaching-101',
    title:    '교수학습법 기초 과정',
    title_en: 'Teaching Methods — Foundations',
    subtitle: 'AI 시대에 맞는 혁신적 교수 방법론',
    subtitle_en: 'Innovative Teaching Methodology for the AI Era',
    category: 'teaching',
    level:    'beginner',
    duration: '4주 · 12강',
    duration_en: '4 weeks · 12 lessons',
    color:    '#1b4f8a',
    instructor: { name: '고봉익', name_en: 'Bongik Ko', role: '티움 이사장', role_en: 'TIEUM Chairman' },
    description: 'AI 시대에 교사·교육자·현장 전문가로서 효과적으로 가르치기 위한 혁신적 교수학습법을 배웁니다. 플립러닝, PBL, AI 도구 활용법을 단계별로 습득합니다.',
    description_en: 'Learn innovative teaching methods to effectively educate as a teacher, educator, or field professional in the AI era. Step-by-step mastery of flipped learning, PBL, and AI tool integration.',
    tags: ['플립러닝', 'PBL', 'AI활용'],
    modules: [
      {
        id: 'm1', title: '1주차: AI 교육의 이해', title_en: 'Week 1: Understanding AI in Education',
        lessons: [
          { id: 'l1',  title: 'AI 시대의 교육 패러다임 변화', title_en: 'Educational Paradigm Shift in the AI Era',   type: 'video', duration: '23분', videoId: '10DjwiJT_ShIF6k-Ashi4vujghjArblMD', videoType: 'drive' },
          { id: 'l2',  title: 'ChatGPT를 수업에 활용하기', title_en: 'Using ChatGPT in the Classroom',      type: 'video', duration: '31분', videoId: '', videoType: 'drive' },
          { id: 'l3',  title: '1주차 이해도 점검 퀴즈', title_en: 'Week 1 Knowledge Check Quiz',         type: 'quiz',  duration: '10분', quiz: [
            { q: 'AI 시대에 가장 중요한 교육 역량은 무엇인가요?',
              options: ['단순 암기력', '창의적 사고력과 문제해결력', '빠른 계산 능력', '단순 반복 능력'],
              answer: 1 },
            { q: '플립러닝(Flipped Learning)의 핵심 특징은?',
              options: ['교실에서 강의만 진행', '학생이 집에서 예습 후 교실에서 활동', '암기 중심 학습', '교사의 일방적 전달'],
              answer: 1 },
          ]},
        ],
      },
      {
        id: 'm2', title: '2주차: 플립러닝 설계', title_en: 'Week 2: Designing Flipped Learning',
        lessons: [
          { id: 'l4',  title: '플립러닝 4단계 설계 방법', title_en: '4-Step Flipped Learning Design Method',       type: 'video', duration: '28분', videoId: '', videoType: 'drive' },
          { id: 'l5',  title: '사전 학습 콘텐츠 제작 실습', title_en: 'Pre-Learning Content Production Practice',      type: 'video', duration: '35분', videoId: '', videoType: 'drive' },
          { id: 'l6',  title: '플립러닝 수업 사례 분석', title_en: 'Flipped Learning Lesson Case Analysis',         type: 'video', duration: '20분', videoId: '', videoType: 'drive' },
        ],
      },
      {
        id: 'm3', title: '3주차: PBL 프로젝트 설계', title_en: 'Week 3: PBL Project Design',
        lessons: [
          { id: 'l7',  title: 'PBL 핵심 요소와 설계 원칙', title_en: 'PBL Core Elements & Design Principles',      type: 'video', duration: '25분', videoId: '', videoType: 'drive' },
          { id: 'l8',  title: '사회 기여 맥락의 PBL 적용', title_en: 'PBL Application in Social Impact Contexts',       type: 'video', duration: '32분', videoId: '', videoType: 'drive' },
          { id: 'l9',  title: 'PBL 설계 실습', title_en: 'PBL Design Practice',                  type: 'video', duration: '18분', videoId: '', videoType: 'drive' },
        ],
      },
      {
        id: 'm4', title: '4주차: 현장 적용 및 수료', title_en: 'Week 4: Field Application & Completion',
        lessons: [
          { id: 'l10', title: '마이크로 티칭 실습 가이드', title_en: 'Micro-Teaching Practice Guide',        type: 'microteaching', duration: '실습', videoId: '', videoType: 'drive' },
          { id: 'l11', title: '교수학습법 종합 정리', title_en: 'Teaching Methodology Comprehensive Review',             type: 'video', duration: '40분', videoId: '', videoType: 'drive' },
          { id: 'l12', title: '최종 퀴즈 & 수료', title_en: 'Final Quiz & Completion',                type: 'quiz',  duration: '15분', quiz: [
            { q: 'PBL에서 학습 전체를 이끄는 핵심 요소는?',
              options: ['교과서 진도', '도전적 질문(Driving Question)', '점수 경쟁', '교사의 강의'],
              answer: 1 },
            { q: '마이크로 티칭의 주요 목적은?',
              options: ['시험 준비', '배운 교수법을 즉시 적용하고 피드백 받기', '단순 암기', '강의 반복'],
              answer: 1 },
            { q: '플립러닝과 PBL의 공통점은?',
              options: ['교사 중심 수업', '학습자 능동 참여 강조', '암기 중심', '단순 지식 전달'],
              answer: 1 },
          ]},
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════
     코스 2 — 연구·데이터
  ══════════════════════════════════════════════════ */
  {
    id:       'research-201',
    title:    '연구·데이터 활용 과정',
    title_en: 'Research & Data Skills',
    subtitle: '교육 효과를 증명하는 데이터 역량',
    subtitle_en: 'Data Competency to Prove Educational Effectiveness',
    category: 'research',
    level:    'intermediate',
    duration: '3주 · 9강',
    duration_en: '3 weeks · 9 lessons',
    color:    '#553c9a',
    instructor: { name: '티움 연구팀', name_en: 'TIEUM Research Team', role: '교육 연구팀', role_en: 'Education Research Team' },
    description: '교육 현장의 데이터를 수집·분석하고 의미 있는 인사이트를 도출하는 방법을 학습합니다. 연구 방법론부터 데이터 시각화까지 실습 중심으로 진행됩니다.',
    description_en: 'Learn to collect and analyze educational field data and draw meaningful insights. Hands-on practice from research methodology to data visualization.',
    tags: ['연구방법론', '데이터분석', '리포팅'],
    modules: [
      {
        id: 'm1', title: '1주차: 교육 연구 방법론', title_en: 'Week 1: Educational Research Methodology',
        lessons: [
          { id: 'l1',  title: '양적 연구 vs 질적 연구 이해', title_en: 'Understanding Quantitative vs Qualitative Research',       type: 'video', duration: '27분', videoId: '', videoType: 'drive' },
          { id: 'l2',  title: '설문 설계와 데이터 수집 방법', title_en: 'Survey Design & Data Collection Methods',       type: 'video', duration: '33분', videoId: '', videoType: 'drive' },
          { id: 'l3',  title: '1주차 퀴즈', title_en: 'Week 1 Quiz',                         type: 'quiz',  duration: '8분',  quiz: [
            { q: '교육 효과를 측정할 때 가장 적합한 방법은?',
              options: ['느낌으로 판단', '다양한 측정 도구와 데이터 수집', '소문으로 확인', '추측'],
              answer: 1 },
          ]},
        ],
      },
      {
        id: 'm2', title: '2주차: 데이터 분석 실습', title_en: 'Week 2: Data Analysis Practice',
        lessons: [
          { id: 'l4',  title: 'Google Sheets로 교육 데이터 분석', title_en: 'Analyzing Educational Data with Google Sheets',   type: 'video', duration: '38분', videoId: '', videoType: 'drive' },
          { id: 'l5',  title: 'AI 도구를 활용한 데이터 해석', title_en: 'Data Interpretation Using AI Tools',        type: 'video', duration: '29분', videoId: '', videoType: 'drive' },
          { id: 'l6',  title: '데이터 시각화 실습 (차트·그래프)', title_en: 'Data Visualization Practice (Charts & Graphs)',    type: 'video', duration: '25분', videoId: '', videoType: 'drive' },
        ],
      },
      {
        id: 'm3', title: '3주차: 연구 보고서 작성', title_en: 'Week 3: Research Report Writing',
        lessons: [
          { id: 'l7',  title: '교육 효과성 보고서 구조', title_en: 'Structure of Educational Effectiveness Reports',             type: 'video', duration: '22분', videoId: '', videoType: 'drive' },
          { id: 'l8',  title: '이해관계자를 위한 리포팅 전략', title_en: 'Reporting Strategies for Stakeholders',       type: 'video', duration: '30분', videoId: '', videoType: 'drive' },
          { id: 'l9',  title: '최종 퀴즈 & 수료',                   type: 'quiz',  duration: '10분', quiz: [
            { q: '데이터 시각화의 주요 목적은?',
              options: ['데이터 숨기기', '복잡하게 만들기', '인사이트를 직관적으로 전달', '장식'],
              answer: 2 },
            { q: '좋은 연구 보고서의 핵심 요건은?',
              options: ['긴 분량', '이해관계자가 이해하기 쉬운 명확한 인사이트', '전문 용어 남발', '화려한 디자인'],
              answer: 1 },
          ]},
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════
     코스 3 — TMD 리더십
  ══════════════════════════════════════════════════ */
  {
    id:       'leadership-301',
    title:    'TMD 리더십 과정',
    title_en: 'TMD Leadership Course',
    subtitle: 'Talent · Mina · Denarius — 미래 리더 훈련',
    subtitle_en: 'Talent · Mina · Denarius — Training Future Leaders',
    category: 'leadership',
    level:    'intermediate',
    duration: '3주 · 9강',
    duration_en: '3 weeks · 9 lessons',
    color:    '#2c7a7b',
    instructor: { name: '고봉익', name_en: 'Bongik Ko', role: '티움 이사장', role_en: 'TIEUM Chairman' },
    description: '티움의 핵심 교육 철학인 TMD(Talent·Mina·Denarius)를 기반으로 한 리더십 훈련 과정입니다. 재능 발굴, 공평한 기회의 발견과 실현, 섬김의 성품을 균형 있게 개발합니다.',
    description_en: 'A leadership training program based on TIEUM\'s core educational philosophy of TMD (Talent · Mina · Denarius). Develop talent discovery, realization of fair opportunity, and servant character in balance.',
    tags: ['TMD리더십', '리더십', '비전훈련'],
    modules: [
      {
        id: 'm1', title: '1주차: Talent — 특별한 재능', title_en: 'Week 1: Talent — Exceptional Gifts',
        lessons: [
          { id: 'l1',  title: '나의 재능 발굴하기', title_en: 'Discovering My Unique Talents',                 type: 'video', duration: '25분', videoId: '', videoType: 'drive' },
          { id: 'l2',  title: '재능을 교육 활동에 연결하기', title_en: 'Connecting Talents to Educational Activities',         type: 'video', duration: '28분', videoId: '', videoType: 'drive' },
          { id: 'l3',  title: 'Talent 이해 퀴즈', title_en: 'Understanding Talent Quiz',                   type: 'quiz',  duration: '8분',  quiz: [
            { q: 'TMD에서 T(Talent)가 의미하는 것은?',
              options: ['기술적 스킬만', '나에게 주어진 고유한 역량', '학업 성취도', '경제적 능력'],
              answer: 1 },
          ]},
        ],
      },
      {
        id: 'm2', title: '2주차: Mina — 공평한 기회', title_en: 'Week 2: Mina — Fair Opportunity',
        lessons: [
          { id: 'l4',  title: '책임 리더십의 이해', title_en: 'Understanding Responsible Leadership',                type: 'video', duration: '30분', videoId: '', videoType: 'drive' },
          { id: 'l5',  title: '자원을 관리하고 영향력 키우기', title_en: 'Managing Resources & Growing Influence',        type: 'video', duration: '27분', videoId: '', videoType: 'drive' },
          { id: 'l6',  title: 'Mina 적용 사례 연구', title_en: 'Mina Application Case Study',                 type: 'video', duration: '20분', videoId: '', videoType: 'drive' },
        ],
      },
      {
        id: 'm3', title: '3주차: Denarius — 섬김의 성품', title_en: 'Week 3: Denarius — Servant Character',
        lessons: [
          { id: 'l7',  title: '섬김의 성품이란 무엇인가', title_en: 'What is Servant Character?',            type: 'video', duration: '24분', videoId: '', videoType: 'drive' },
          { id: 'l8',  title: '일상에서 섬김 실천하기', title_en: 'Practicing Service in Daily Life',              type: 'video', duration: '32분', videoId: '', videoType: 'drive' },
          { id: 'l9',  title: 'TMD 종합 퀴즈 & 수료', title_en: 'TMD Comprehensive Quiz & Completion',               type: 'quiz',  duration: '15분', quiz: [
            { q: 'TMD에서 D(Denarius)의 핵심 가치는?',
              options: ['부의 축적', '섬김의 성품으로 이웃과 사회에 기여', '지식의 양', '권력'],
              answer: 1 },
            { q: '티움의 교육 목표인 TMD 인재는?',
              options: ['학업 성취만 높은 인재', 'T·M·D를 균형 있게 갖춘 인재', '경쟁에서 이기는 인재', '부자가 되는 인재'],
              answer: 1 },
            { q: 'TMD에서 M(Mina)이 상징하는 것은?',
              options: ['단순 지식', '누구에게나 공평하게 주어진 기회와 사명', '경쟁', '외모'],
              answer: 1 },
          ]},
        ],
      },
    ],
  },

];
