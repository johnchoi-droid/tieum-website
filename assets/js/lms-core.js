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

  window.lmsLogin = function (name, email, password) {
    if (password !== window.LMS_CONFIG.password) return false;
    var user = { name: name.trim(), email: email.trim(), loginAt: Date.now() };
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return true;
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
