/**
 * 티움 LMS — 코어 로직
 * ─────────────────────────────────────────────────────
 * 인증, 수강 진도, 코스 데이터 헬퍼 함수 모음
 * lms-data.js 이후에 로드해야 합니다.
 */

(function () {
  var USER_KEY     = 'tieum_lms_user';
  var PROGRESS_KEY = 'tieum_lms_progress';

  /* ── 인증 ── */
  window.lmsIsLoggedIn = function () {
    return !!localStorage.getItem(USER_KEY);
  };

  window.lmsGetUser = function () {
    try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch (e) { return null; }
  };

  /* ── 회원 명단 백엔드 적재(선택) ──────────────────────────────────
     LMS_CONFIG.signupEndpoint(예: Google Apps Script 웹앱)가 설정돼 있으면
     무료 가입자 정보를 JSON POST 한다. 비어 있으면 아무것도 보내지 않고 로컬 저장만(기존 동작).
     · Content-Type 미지정 → text/plain 전송으로 CORS 프리플라이트 없이 동작(Apps Script 친화).
     · 전송 실패해도 화면 흐름은 막지 않는다(로컬 세션은 이미 설정됨). */
  function lmsBackendRegister(member) {
    var cfg = window.LMS_CONFIG || {};
    var ep  = cfg.signupEndpoint;
    if (!ep) return Promise.resolve({ ok: false, skipped: true });
    try {
      return fetch(ep, {
        method: 'POST',
        body: JSON.stringify({
          name:     member.name || '',
          email:    member.email || '',
          category: member.category || '',
          source:   member.source || 'lms',
          ts:       Date.now()
        })
      }).then(function () { return { ok: true }; })
        .catch(function (e) {
          console.warn('[LMS] 회원 전송 실패(로컬 세션은 유지됨):', e && e.message);
          return { ok: false, error: e };
        });
    } catch (e) {
      return Promise.resolve({ ok: false, error: e });
    }
  }

  /* 무료 멤버십 — 이름(+선택 이메일)만으로 등록.
     기존의 노출된 수강 코드 검증은 제거됨(콘텐츠는 어차피 공개 자료라 코드가 보호하지 못함).
     로컬 세션을 즉시 설정(동기)하고, signupEndpoint 가 있으면 회원 명단을 비동기 적재한다. */
  window.lmsLogin = function (name, email, category) {
    if (!name || !name.trim()) return false;
    var user = { name: name.trim(), email: (email || '').trim(), category: (category || '').trim(), loginAt: Date.now() };
    localStorage.setItem(USER_KEY, JSON.stringify(user));   // 동기: 즉시 로그인 상태
    lmsBackendRegister({ name: user.name, email: user.email, category: user.category, source: 'lms-login' });
    return true;
  };

  /* 별도 멤버십 신청 폼이 쓸 공개 함수 — Promise 반환으로 성공/실패 처리 가능.
     (현재 lms.html 은 lmsLogin 으로 즉시 가입하지만, 향후 신청 폼에서 활용) */
  window.lmsRegisterMember = function (name, email, category) {
    return lmsBackendRegister({
      name: (name || '').trim(),
      email: (email || '').trim().toLowerCase(),
      category: (category || '').trim(),
      source: 'membership'
    });
  };

  window.lmsLogout = function () {
    localStorage.removeItem(USER_KEY);
  };

  /* ── 진도 ── */
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  }

  window.lmsMarkComplete = function (courseId, lessonId) {
    var p = loadProgress();
    if (!p[courseId]) p[courseId] = {};
    p[courseId][lessonId] = true;
    saveProgress(p);
    /* [2단계] 인증 백엔드 준비 후: LMS_CONFIG.syncLearningData 가 true 면 여기서 서버로 진도 동기화. */
  };

  window.lmsIsComplete = function (courseId, lessonId) {
    var p = loadProgress();
    return !!(p[courseId] && p[courseId][lessonId]);
  };

  window.lmsGetCourseProgress = function (courseId) {
    var course = window.lmsGetCourse(courseId);
    if (!course) return { done: 0, total: 0, pct: 0 };
    var flat  = window.lmsGetFlatLessons(courseId);
    var total = flat.length;
    var done  = flat.filter(function (l) { return window.lmsIsComplete(courseId, l.id); }).length;
    return { done: done, total: total, pct: total ? Math.round((done / total) * 100) : 0 };
  };

  /* ── 코스 헬퍼 ── */
  window.lmsGetCourses = function () {
    return window.LMS_COURSES || [];
  };

  window.lmsGetCourse = function (id) {
    return (window.LMS_COURSES || []).find(function (c) { return c.id === id; }) || null;
  };

  window.lmsGetFlatLessons = function (courseId) {
    var course = window.lmsGetCourse(courseId);
    if (!course) return [];
    var lessons = [];
    course.modules.forEach(function (mod) {
      mod.lessons.forEach(function (l) { lessons.push(l); });
    });
    return lessons;
  };

  window.lmsGetNextLesson = function (courseId, currentLessonId) {
    var flat = window.lmsGetFlatLessons(courseId);
    var idx  = flat.findIndex(function (l) { return l.id === currentLessonId; });
    return idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;
  };

  window.lmsGetPrevLesson = function (courseId, currentLessonId) {
    var flat = window.lmsGetFlatLessons(courseId);
    var idx  = flat.findIndex(function (l) { return l.id === currentLessonId; });
    return idx > 0 ? flat[idx - 1] : null;
  };

  /* 모듈 인덱스 조회 (사이드바용) */
  window.lmsGetLessonMeta = function (courseId, lessonId) {
    var course = window.lmsGetCourse(courseId);
    if (!course) return null;
    for (var mi = 0; mi < course.modules.length; mi++) {
      var mod = course.modules[mi];
      for (var li = 0; li < mod.lessons.length; li++) {
        if (mod.lessons[li].id === lessonId) {
          return { module: mod, lesson: mod.lessons[li], modIdx: mi, lesIdx: li };
        }
      }
    }
    return null;
  };

  /* 코스 수료 여부 */
  window.lmsIsCourseComplete = function (courseId) {
    var prog = window.lmsGetCourseProgress(courseId);
    return prog.total > 0 && prog.done === prog.total;
  };


  /* ── 성찰 일지 ── */
  var JOURNAL_KEY = 'tieum_lms_journal';

  window.lmsSaveJournal = function (courseId, lessonId, text, lessonTitle, moduleTitle) {
    var key     = JOURNAL_KEY + '_' + courseId + '_' + lessonId;
    var entries = window.lmsGetJournals(courseId, lessonId);
    var entry   = { text: text.trim(), savedAt: Date.now(), lessonTitle: lessonTitle || '', moduleTitle: moduleTitle || '' };
    if (entries.length > 0) {
      entries[entries.length - 1] = entry;  // 최신 항목 덮어쓰기 (수정 모드)
    } else {
      entries.push(entry);
    }
    localStorage.setItem(key, JSON.stringify(entries));
    return entry;
  };

  window.lmsAddJournalEntry = function (courseId, lessonId, text, lessonTitle, moduleTitle) {
    var key = JOURNAL_KEY + '_' + courseId + '_' + lessonId;
    var entries = window.lmsGetJournals(courseId, lessonId);
    entries.push({ text: text.trim(), savedAt: Date.now(), lessonTitle: lessonTitle || '', moduleTitle: moduleTitle || '' });
    localStorage.setItem(key, JSON.stringify(entries));
  };

  window.lmsGetJournals = function (courseId, lessonId) {
    var key = JOURNAL_KEY + '_' + courseId + '_' + lessonId;
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch (e) { return []; }
  };

  window.lmsGetAllCourseJournals = function (courseId) {
    var course = window.lmsGetCourse(courseId);
    if (!course) return [];
    var all = [];
    course.modules.forEach(function (mod) {
      mod.lessons.forEach(function (les) {
        var entries = window.lmsGetJournals(courseId, les.id);
        entries.forEach(function (e) {
          all.push({ text: e.text, savedAt: e.savedAt, lessonId: les.id, lessonTitle: les.title, moduleTitle: mod.title });
        });
      });
    });
    all.sort(function (a, b) { return b.savedAt - a.savedAt; });
    return all;
  };

  /* ── 마이크로 티칭 ── */
  var MT_KEY = 'tieum_lms_mt';

  window.lmsMtLoad = function (courseId, lessonId) {
    var key = MT_KEY + '_' + courseId + '_' + lessonId;
    try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { return {}; }
  };

  window.lmsMtSave = function (courseId, lessonId, data) {
    var key = MT_KEY + '_' + courseId + '_' + lessonId;
    localStorage.setItem(key, JSON.stringify(data));
  };

  window.lmsJournalCount = function (courseId) {
    var course = window.lmsGetCourse(courseId);
    if (!course) return 0;
    var count = 0;
    course.modules.forEach(function (mod) {
      mod.lessons.forEach(function (les) {
        if (window.lmsGetJournals(courseId, les.id).length > 0) count++;
      });
    });
    return count;
  };

})();
