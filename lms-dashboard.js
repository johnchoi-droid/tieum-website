/* ============================================================================
   lms-dashboard.js — 로그인 후 "4레인 대시보드"
   ----------------------------------------------------------------------------
   lms.html 로그인 후 화면. 왼쪽 사이드바(트랙 네비) + 오른쪽 강좌 카드.
   - 호출: showCatalog() → renderLmsDashboard()  (lms.html)
   - DOM:  #lmsWelcomeName  #lmsDashNav  #lmsDashHeader  #lmsDashCards
   - 의존: lms-data.js(LMS_TRACKS, LMS_COURSES), lms-core.js
   - 로드 순서: lms-data.js → lms-core.js → lms-dashboard.js
   ============================================================================ */

var LMS_DASH = { activeTrack: 'all' };

function lmsDashEscape_(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function lmsDashIsEn_() { return (typeof getLang === 'function' && getLang() === 'en'); }

/* 진입점 — lms.html이 호출 */
function renderLmsDashboard() {
  var user = lmsGetUser();
  var nameEl = document.getElementById('lmsWelcomeName');
  if (nameEl && user) nameEl.textContent = user.name;

  renderLmsDashNav_();
  renderLmsDashBody_();
}

/* ── 왼쪽: 트랙 네비게이션 ── */
function renderLmsDashNav_() {
  var nav = document.getElementById('lmsDashNav');
  if (!nav) return;
  var tracks = window.LMS_TRACKS || [];
  var en = lmsDashIsEn_();

  var items = [{ id: 'all', label: en ? 'All' : '전체', icon: '🏠', color: '#1b4f8a' }].concat(tracks);

  nav.innerHTML = items.map(function (t) {
    var active = (LMS_DASH.activeTrack === t.id) ? ' active' : '';
    return [
      '<button class="lms-dash-nav-item' + active + '"',
      '        style="--lane:' + (t.color || '#1b4f8a') + '"',
      '        onclick="lmsDashSetTrack(\'' + t.id + '\')">',
      '  <span class="lms-dash-nav-icon">' + (t.icon || '📚') + '</span>',
      '  <span class="lms-dash-nav-label">' + lmsDashEscape_(t.label) + '</span>',
      '</button>'
    ].join('\n');
  }).join('');
}

function lmsDashSetTrack(trackId) {
  LMS_DASH.activeTrack = trackId;
  renderLmsDashNav_();
  renderLmsDashBody_();
}

/* ── 오른쪽: 헤더 + 강좌 카드 ── */
function renderLmsDashBody_() {
  var header = document.getElementById('lmsDashHeader');
  var cards  = document.getElementById('lmsDashCards');
  if (!cards) return;
  var en = lmsDashIsEn_();

  var courses = lmsGetCourses();
  if (LMS_DASH.activeTrack !== 'all') {
    courses = courses.filter(function (c) { return c.category === LMS_DASH.activeTrack; });
  }

  /* 헤더: 현재 트랙 이름 + 전체 진행률 요약 */
  if (header) {
    var trackLabel = en ? 'All Courses' : '전체 강좌';
    if (LMS_DASH.activeTrack !== 'all') {
      var t = (window.LMS_TRACKS || []).filter(function (x) { return x.id === LMS_DASH.activeTrack; })[0];
      if (t) trackLabel = lmsDashEscape_(t.label);
    }
    var totalCourses = courses.length;
    var doneCourses = courses.filter(function (c) { return lmsIsCourseComplete(c.id); }).length;
    header.innerHTML =
      '<h2 class="lms-dash-title">' + trackLabel + '</h2>' +
      '<p class="lms-dash-meta">' +
      (en ? (totalCourses + ' courses · ' + doneCourses + ' completed')
          : (totalCourses + '개 강좌 · ' + doneCourses + '개 수료')) +
      '</p>';
  }

  if (!courses.length) {
    cards.innerHTML = '<p class="lms-empty">' +
      (en ? 'No courses in this track yet.' : '이 트랙에는 아직 강좌가 없습니다.') + '</p>';
    return;
  }

  cards.innerHTML = courses.map(renderLmsDashCard_).join('');
}

/* 강좌 카드 1개 (진도바 + 이어보기/시작하기 → player로 이동) */
function renderLmsDashCard_(course) {
  var en     = lmsDashIsEn_();
  var prog   = lmsGetCourseProgress(course.id);
  var isDone = lmsIsCourseComplete(course.id);
  var color  = course.color || '#1b4f8a';

  var levelMap = en
    ? { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' }
    : { beginner: '입문', intermediate: '중급', advanced: '고급' };
  var levelLabel = levelMap[course.level] || course.level || '';

  var title    = (en && course.title_en)    ? course.title_en    : course.title;
  var subtitle = (en && course.subtitle_en) ? course.subtitle_en : (course.subtitle || '');

  var first = lmsGetFlatLessons(course.id)[0];
  var startUrl = first ? ('lms-player.html?course=' + course.id + '&lesson=' + first.id) : '#';

  var btnLabel = en
    ? (isDone ? 'Watch Again' : (prog.done > 0 ? 'Continue' : 'Start Learning'))
    : (isDone ? '다시 보기'   : (prog.done > 0 ? '이어 학습하기' : '학습 시작하기'));

  var progText = prog.done + ' / ' + prog.total + (en ? ' lessons' : '강') + (isDone ? ' ✅' : '');

  return [
    '<article class="lms-dash-card" data-cat="' + lmsDashEscape_(course.category) + '">',
    '  <div class="lms-dash-card-top" style="background:' + color + '">',
    '    <span class="lms-dash-card-level">' + lmsDashEscape_(levelLabel) + '</span>',
    '    <h3 class="lms-dash-card-title">' + lmsDashEscape_(title) + '</h3>',
    subtitle ? '    <p class="lms-dash-card-sub">' + lmsDashEscape_(subtitle) + '</p>' : '',
    '  </div>',
    '  <div class="lms-dash-card-body">',
    '    <div class="lms-dash-card-instr">' +
         lmsDashEscape_(course.instructor ? course.instructor.name : '') +
         (course.instructor && course.instructor.role ? ' · ' + lmsDashEscape_(course.instructor.role) : '') +
    '</div>',
    '    <div class="lms-dash-prog">',
    '      <div class="lms-dash-prog-bar"><div class="lms-dash-prog-fill" style="width:' + prog.pct + '%;background:' + color + '"></div></div>',
    '      <span class="lms-dash-prog-text">' + progText + '</span>',
    '    </div>',
    '    <a href="' + startUrl + '" class="lms-dash-card-btn" style="background:' + color + '">' + btnLabel + '</a>',
    '  </div>',
    '</article>'
  ].join('\n');
}
