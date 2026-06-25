/* ============================================================================
   lms-insights.js — 로그인 전 "샘플 미리보기"
   ----------------------------------------------------------------------------
   lms.html 의 #lmsSampleGrid 안에, 로그인하지 않은 방문자에게
   "어떤 학습 트랙이 있는지"를 4개 카드로 미리 보여줍니다.
   - 호출: initLmsPage() → renderLmsSample()  (lms.html)
   - 의존: lms-data.js(window.LMS_TRACKS, window.LMS_COURSES), lms-core.js
   - 로드 순서: lms-data.js → lms-core.js → lms-insights.js
   ============================================================================ */

/* 트랙별 강좌 수를 세어, 트랙 카드에 "N개 강좌"로 표시 */
function lmsCountCoursesByTrack_(trackId) {
  return lmsGetCourses().filter(function (c) { return c.category === trackId; }).length;
}

function lmsSampleEscape_(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderLmsSample() {
  var grid = document.getElementById('lmsSampleGrid');
  if (!grid) return;

  var tracks = window.LMS_TRACKS || [];
  var en = (typeof getLang === 'function' && getLang() === 'en');

  if (!tracks.length) {
    grid.innerHTML = '<p class="lms-empty">' +
      (en ? 'Learning tracks are being prepared.' : '학습 트랙을 준비 중입니다.') + '</p>';
    return;
  }

  grid.innerHTML = tracks.map(function (t) {
    var count = lmsCountCoursesByTrack_(t.id);
    var countLabel = en ? (count + ' course' + (count === 1 ? '' : 's'))
                        : (count + '개 강좌');
    return [
      '<button class="lms-sample-card" onclick="openLmsLogin()"',
      '        style="border-top:4px solid ' + (t.color || '#1b4f8a') + '">',
      '  <span class="lms-sample-icon">' + (t.icon || '📚') + '</span>',
      '  <span class="lms-sample-name">' + lmsSampleEscape_(t.label) + '</span>',
      '  <span class="lms-sample-count" style="color:' + (t.color || '#1b4f8a') + '">' + countLabel + '</span>',
      '  <span class="lms-sample-lock">' + (en ? '🔓 Free sign-up' : '🔓 무료 가입 후 수강') + '</span>',
      '</button>'
    ].join('\n');
  }).join('');
}
