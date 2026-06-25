/* ============================================================================
   lms-core.js — 티움 러닝센터 공통 로직
   ----------------------------------------------------------------------------
   lms.html · lms-player.html · lms-workspace.html 이 호출하는 모든 lms* 함수의
   단일 구현체. 함수 이름·인자·반환값을 바꾸면 해당 페이지가 깨집니다.

   [백엔드]
   - 회원(멤버십)은 LMS_CONFIG.signupEndpoint(있을 때) 로 전송 → 중앙 명단 적재.
   - 진도·일지는 1단계에선 로컬(localStorage). 2단계(인증 백엔드)에서 이전.
   - signupEndpoint 가 비어 있으면 모든 기능이 기존처럼 로컬로만 동작합니다.

   로드 순서: lms-data.js → lms-core.js
   ============================================================================ */

/* ───────────────────────── 저장소 (교체 지점) ─────────────────────────
   지금은 localStorage(동기 캐시). 2단계에서 백엔드로 옮길 때도 읽기 API는
   동기로 유지하기 위해, 로컬을 '캐시'로 두고 서버와 비동기 동기화합니다. */
var LMS_STORE = (function () {
  function read(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return (v === null || v === undefined) ? fallback : v; }
    catch (e) { return fallback; }
  }
  function write(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); return true; }
    catch (e) { console.warn('[LMS] 저장 실패:', e); return false; }
  }
  function remove(key) { try { localStorage.removeItem(key); } catch (e) {} }
  return { read: read, write: write, remove: remove };
})();

var LMS_K_USER     = 'tieum_lms_user';
var LMS_K_PROGRESS = 'tieum_lms_progress';
var LMS_K_JOURNAL  = 'tieum_lms_journal';
var LMS_K_MT       = 'tieum_lms_mt';

/* ═══════════════════════ 백엔드 어댑터 (회원 명단) ═══════════════════════
   signupEndpoint(예: Google Apps Script 웹앱)로 회원 정보를 JSON POST.
   · 헤더를 지정하지 않아 Content-Type 이 text/plain → CORS 프리플라이트 없이 전송
     (Apps Script 친화적). 응답 본문은 읽지 못해도 서버에는 정상 적재됩니다.
   · 전송 실패해도 화면 흐름은 막지 않습니다(로컬 세션은 이미 설정됨). */
function lmsBackendRegister_(member) {
  var cfg = window.LMS_CONFIG || {};
  var ep = cfg.signupEndpoint;
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

/* 멤버십 가입 폼(이미지의 "가입 신청하기")이 호출할 공개 함수.
   Promise 를 반환하므로 폼에서 성공/실패 처리를 할 수 있습니다. */
function lmsRegisterMember(name, email, category) {
  var member = {
    name: (name || '').trim(),
    email: (email || '').trim().toLowerCase(),
    category: (category || '').trim(),
    source: 'membership'
  };
  return lmsBackendRegister_(member);
}

/* ─────────────────────────── 회원(무료 멤버십) ─────────────────────────── */
function lmsGetUser()    { return LMS_STORE.read(LMS_K_USER, null); }
function lmsIsLoggedIn() { return !!lmsGetUser(); }

/* 로그인(=무료 멤버십 시작). 로컬 세션을 즉시 설정(동기)하고,
   회원 명단은 백엔드로 비동기 적재합니다. category 는 선택. */
function lmsLogin(name, email, category) {
  var u = {
    name: (name || '').trim(),
    email: (email || '').trim().toLowerCase(),
    category: (category || '').trim(),
    joinedAt: Date.now()
  };
  LMS_STORE.write(LMS_K_USER, u);                          // 동기: 즉시 로그인 상태
  lmsBackendRegister_({                                    // 비동기: 중앙 명단 적재
    name: u.name, email: u.email, category: u.category, source: 'lms-login'
  });
  return u;
}
function lmsLogout() { LMS_STORE.remove(LMS_K_USER); }

/* ─────────────────────────── 강좌 데이터 접근 ───────────────────────────
   window.LMS_COURSES(= lms-data.js)를 읽기만 합니다. */
function lmsGetCourses() { return (window.LMS_COURSES || []); }

function lmsGetCourse(courseId) {
  var list = lmsGetCourses();
  for (var i = 0; i < list.length; i++) { if (list[i].id === courseId) return list[i]; }
  return null;
}

function lmsGetFlatLessons(courseId) {
  var c = lmsGetCourse(courseId);
  if (!c || !c.modules) return [];
  var out = [];
  c.modules.forEach(function (m) { (m.lessons || []).forEach(function (l) { out.push(l); }); });
  return out;
}

function lmsGetLessonMeta(courseId, lessonId) {
  var c = lmsGetCourse(courseId);
  if (!c || !c.modules) return null;
  for (var i = 0; i < c.modules.length; i++) {
    var m = c.modules[i], ls = m.lessons || [];
    for (var j = 0; j < ls.length; j++) {
      if (ls[j].id === lessonId) return { course: c, module: m, lesson: ls[j] };
    }
  }
  return null;
}

function lmsLessonIndex_(flat, lessonId) {
  for (var i = 0; i < flat.length; i++) { if (flat[i].id === lessonId) return i; }
  return -1;
}
function lmsGetPrevLesson(courseId, lessonId) {
  var f = lmsGetFlatLessons(courseId), i = lmsLessonIndex_(f, lessonId);
  return (i > 0) ? f[i - 1] : null;
}
function lmsGetNextLesson(courseId, lessonId) {
  var f = lmsGetFlatLessons(courseId), i = lmsLessonIndex_(f, lessonId);
  return (i >= 0 && i < f.length - 1) ? f[i + 1] : null;
}

/* ─────────────────────────── 진도(완료 여부) ───────────────────────────
   1단계: 로컬 저장. 2단계: lmsMarkComplete 안에서 서버 push 추가 예정
   (LMS_CONFIG.syncLearningData 가 true 이고 인증이 갖춰졌을 때). */
function lmsProgressMap_()           { return LMS_STORE.read(LMS_K_PROGRESS, {}); }
function lmsKey_(courseId, lessonId) { return courseId + '::' + lessonId; }

function lmsMarkComplete(courseId, lessonId) {
  var m = lmsProgressMap_();
  m[lmsKey_(courseId, lessonId)] = Date.now();
  LMS_STORE.write(LMS_K_PROGRESS, m);
  /* [2단계] 여기서 서버 동기화:
     if (window.LMS_CONFIG && LMS_CONFIG.syncLearningData) lmsPushProgress_(courseId, lessonId); */
}
function lmsIsComplete(courseId, lessonId) {
  return !!lmsProgressMap_()[lmsKey_(courseId, lessonId)];
}
function lmsGetCourseProgress(courseId) {
  var flat = lmsGetFlatLessons(courseId), total = flat.length, done = 0;
  flat.forEach(function (l) { if (lmsIsComplete(courseId, l.id)) done++; });
  return { done: done, total: total, pct: total ? Math.round(done / total * 100) : 0 };
}
function lmsIsCourseComplete(courseId) {
  var p = lmsGetCourseProgress(courseId);
  return p.total > 0 && p.done === p.total;
}

/* ─────────────────────────── 성찰 일지 ───────────────────────────
   entry: { id, courseId, lessonId, lessonTitle, moduleTitle, text, savedAt } */
function lmsAllJournals_() { return LMS_STORE.read(LMS_K_JOURNAL, []); }

function lmsGetJournals(courseId, lessonId) {
  return lmsAllJournals_()
    .filter(function (e) { return e.courseId === courseId && e.lessonId === lessonId; })
    .sort(function (a, b) { return a.savedAt - b.savedAt; });
}

function lmsSaveJournal(courseId, lessonId, text, lessonTitle, moduleTitle) {
  var all = lmsAllJournals_(), latestIdx = -1, latestTs = -1;
  for (var i = 0; i < all.length; i++) {
    var e = all[i];
    if (e.courseId === courseId && e.lessonId === lessonId && e.savedAt > latestTs) {
      latestTs = e.savedAt; latestIdx = i;
    }
  }
  if (latestIdx >= 0) {
    all[latestIdx].text        = text;
    all[latestIdx].savedAt     = Date.now();
    all[latestIdx].lessonTitle = lessonTitle || all[latestIdx].lessonTitle;
    all[latestIdx].moduleTitle = moduleTitle || all[latestIdx].moduleTitle;
    LMS_STORE.write(LMS_K_JOURNAL, all);
    return all[latestIdx];
  }
  return lmsAddJournalEntry(courseId, lessonId, text, lessonTitle, moduleTitle);
}

function lmsAddJournalEntry(courseId, lessonId, text, lessonTitle, moduleTitle) {
  var all = lmsAllJournals_();
  var entry = {
    id: 'j_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    courseId: courseId, lessonId: lessonId,
    lessonTitle: lessonTitle || '', moduleTitle: moduleTitle || '',
    text: text, savedAt: Date.now()
  };
  all.push(entry);
  LMS_STORE.write(LMS_K_JOURNAL, all);
  return entry;
}

function lmsGetAllCourseJournals(courseId) {
  return lmsAllJournals_()
    .filter(function (e) { return e.courseId === courseId; })
    .sort(function (a, b) { return a.savedAt - b.savedAt; });
}
function lmsJournalCount(courseId) { return lmsGetAllCourseJournals(courseId).length; }

/* ─────────────────────────── 마이크로티칭 ───────────────────────────
   data: { videoUrl, videoDuration, scores, comments, rubricComment,
           rubricSubmitted, rubricSubmittedAt, rubricAuthor } */
function lmsMtLoad(courseId, lessonId) {
  var all = LMS_STORE.read(LMS_K_MT, {});
  return all[lmsKey_(courseId, lessonId)] || {};
}
function lmsMtSave(courseId, lessonId, data) {
  var all = LMS_STORE.read(LMS_K_MT, {});
  all[lmsKey_(courseId, lessonId)] = data;
  LMS_STORE.write(LMS_K_MT, all);
}
