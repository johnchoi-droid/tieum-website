/* ============================================================================
   lms-data.js — 티움 무료 러닝센터 데이터 (FREE 트랙 전용)
   ----------------------------------------------------------------------------
   ★ 원칙: 이 파일에는 '무료 공익 교육(사단법인 티움 운영)' 강좌만 둡니다.
     유료 과정은 한국인재연구소가 운영하므로 이 파일/이 사이트에 넣지 않습니다.
     → price · paid · 결제 필드는 의도적으로 두지 않습니다(팔 길이 원칙).

   로드 순서: lms-data.js → lms-core.js → lms-insights.js → lms-dashboard.js
   ============================================================================ */

window.LMS_CONFIG = {
  /* ── [1단계] 멤버십(회원) 수집 백엔드 ──────────────────────────────────
     가입 정보를 보낼 서버 주소.
     · 비워두면(''): 백엔드 미사용 → 로컬에만 저장(기존 동작 그대로).
     · 권장: Google Apps Script 웹앱 URL 붙여넣기
       예) 'https://script.google.com/macros/s/AKfyc..../exec'
     회원 정보는 { name, email, category, source, ts } JSON으로 전송됩니다. */
  signupEndpoint: '',

  /* ── [2단계] 학습 데이터 동기화 (지금은 끄세요) ──────────────────────────
     true 로 켜면 진도·일지를 서버와 동기화하려 시도합니다.
     인증(로그인) 기반 백엔드(Supabase 등)를 갖춘 뒤 켜세요. 기본 false. */
  syncLearningData: false,

  /* ── AI 기능(기존) ── ※ API 키는 여기 넣지 말 것(공개 노출) ── */
  chatApiEndpoint: '',
  groqApiKey: ''
};

/* 4개 학습 트랙(레인) — 대시보드가 이 목록으로 레인을 구성합니다.
   각 강좌 category 가 아래 id 중 하나와 일치해야 합니다. */
window.LMS_TRACKS = [
  { id: 'track1', label: '[트랙1 이름]', icon: '📘', color: '#1b4f8a' },
  { id: 'track2', label: '[트랙2 이름]', icon: '🔬', color: '#2c7a7b' },
  { id: 'track3', label: '[트랙3 이름]', icon: '🧭', color: '#553c9a' },
  { id: 'track4', label: '[트랙4 이름]', icon: '🌱', color: '#c05621' }
];

/* ────────────────────────── 강좌 목록 ──────────────────────────
   아래는 구조 예시 1개. [대괄호]를 실제 내용으로 바꾸고 강좌를 추가하세요.
   - id          : 강좌 고유 ID(진도·URL 키). 한번 정하면 바꾸지 마세요.
   - category    : LMS_TRACKS의 id 중 하나
   - level       : 'beginner' | 'intermediate' | 'advanced'
   - lesson.id   : 한 강좌 안에서 고유해야 함
   - lesson.type : 'video'(videoType+videoId) | 'quiz'(quiz[]) | 'microteaching'
   - *_en        : 영어 모드용(선택) */
window.LMS_COURSES = [
  {
    id: 'course-sample',
    category: 'track1',
    title: '[강좌 제목]',
    title_en: '[Course Title]',
    subtitle: '[한 줄 부제]',
    subtitle_en: '[Subtitle]',
    description: '[강좌 소개 한 문단]',
    description_en: '[Course description]',
    color: '#1b4f8a',
    duration: '[예: 총 4시간 · 8강]',
    level: 'beginner',
    instructor: { name: '[강사명]', role: '[직함/소속]' },
    tags: ['[태그1]', '[태그2]'],
    modules: [
      {
        title: '[1주차 / 모듈 제목]',
        title_en: '[Module 1 Title]',
        lessons: [
          {
            id: 'l-1', type: 'video',
            title: '[강의 제목]', title_en: '[Lesson Title]',
            duration: '[예: 12분]',
            videoType: 'youtube',          // 'youtube' 또는 'drive'
            videoId: '[YouTube 영상 ID 또는 Google Drive 파일 ID]'
          },
          {
            id: 'l-2', type: 'quiz',
            title: '[퀴즈 제목]', duration: '',
            quiz: [
              { q: '[문항 내용]',
                options: ['[보기 1]', '[보기 2]', '[보기 3]', '[보기 4]'],
                answer: 0 }                 // 정답 보기 index(0부터)
            ]
          },
          {
            id: 'l-3', type: 'microteaching',
            title: '[마이크로티칭 실습]', duration: ''
          }
        ]
      }
    ]
  }
  /* , { …두 번째 강좌… } */
];
