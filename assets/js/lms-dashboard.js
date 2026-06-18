/**
 * 티움 러닝센터 — 4레인 대시보드 (무료 멤버십 포털)
 * ────────────────────────────────────────────────────────────
 * ESQ(Easy·Simple·Quick): 로그인 후 3클릭 이내 콘텐츠 도달.
 * 정식 강좌(lms-data.js) + 큐레이션(lms-insights.js)을 레인별 카드로 시각화.
 *
 * ★ 결제(Pay) 스캐폴딩:
 *   현재 1단계 — 결제/정산 기능 없음(무료 멤버십). 향후 PG 연동 시
 *   PAYMENTS_ENABLED=true 로 바꾸고 enrollControl()의 결제 분기만 활성화하면 됩니다.
 *   (카드 컴포넌트·버튼 자리·정산 API 훅 위치를 미리 확보)
 */
(function () {
  'use strict';

  // ── 결제 모듈 스캐폴딩 (2단계에서 활성화) ──────────────────
  const PAYMENTS_ENABLED = false;
  // 향후 정산 API 훅 자리:
  // window.TIEUM_PG = { checkout(item){/* PG 호출 */}, settleApiUrl: 'https://.../settle' };

  // ── 언어 헬퍼 ───────────────────────────────────────────────
  function LANG(){ return (typeof getLang==='function') ? getLang() : 'ko'; }
  function LL(ko, en){ return LANG()==='en' ? en : ko; }

  // 큐레이션 리포트(카테고리) 영문 매핑
  const REPORT_EN = {
    '이번 주 AI 교수학습 리포트': 'This Week in AI Teaching & Learning',
    '이번 주 기독교교육 인사이트': 'This Week in Christian Education',
    '이번 주 교회교육 인사이트':  'This Week in Church Education',
    'AI 시대 직업 변화 브리핑':   'AI-Era Career Shift Briefing',
    '교수학습법 연구 리포트':     'Teaching Methodology Research Report',
  };
  function reportLabel(r){ return LANG()==='en' ? (REPORT_EN[r] || r) : (r || '큐레이션'); }
  // 큐레이션 카드/모달 제목 — 영어 모드에서는 영문 원제 우선
  function curTitle(it){ return LANG()==='en' ? (it.origTitle || it.koTitle || '') : (it.koTitle || it.origTitle || ''); }
  // 출처(source) — 영어 모드에서는 한글 주석/검색어 정리
  function srcLabel(s){
    if(LANG()!=='en') return s || '';
    var x = String(s || '');
    if(/Google News/.test(x)) return 'Google News';
    return x.replace(/\s*\([^)]*[가-힣][^)]*\)/g, '').trim();  // (학술지·OpenAlex) 등 한글 괄호 제거
  }

  // ── 4개 레인 정의 ───────────────────────────────────────────
  const LANES = [
    { id:'teacher', icon:'🏫', name:'대안학교 교사', name_en:'Alternative School Teachers',
      desc:'공동체 지향 연수 · 현장 중심 교수학습 자료실', desc_en:'Community-oriented training · a field-focused teaching & learning library',
      courseCats:['teaching'], curation:['교수학습법'] },
    { id:'ai', icon:'🤖', name:'AI 활용', name_en:'Using AI',
      desc:'교실·업무에 바로 쓰는 AI 도구 활용법', desc_en:'AI tools you can use right away in class and at work',
      courseCats:['research'], curation:['교사·AI교육'] },
    { id:'career', icon:'🧭', name:'진로 · 코칭', name_en:'Career · Coaching',
      desc:'연길 조선족·청년을 위한 진로/코칭 멘토링 트랙', desc_en:'A career & coaching mentoring track for Korean-Chinese youth and young adults',
      courseCats:[], curation:['성인·AI직업'] },
    { id:'pastor', icon:'⛪', name:'교회 목회자', name_en:'Church Pastors',
      desc:'학계 최신 교육 담론을 목회 현장 실무로 번역·연결', desc_en:'Translating the latest academic education discourse into practical ministry',
      courseCats:['leadership'], curation:['기독교교육','교회·다음세대'] },
  ];
  function laneName(l){ return LANG()==='en' ? (l.name_en || l.name) : l.name; }
  function laneDesc(l){ return LANG()==='en' ? (l.desc_en || l.desc) : l.desc; }

  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }

  function coursesFor(lane){
    var all = (typeof lmsGetCourses==='function') ? lmsGetCourses() : (window.LMS_COURSES||[]);
    return all.filter(function(c){ return lane.courseCats.indexOf(c.category)>=0; });
  }
  function curationFor(lane){
    return (window.LMS_INSIGHTS||[]).filter(function(it){ return lane.curation.indexOf(it.lane)>=0; });
  }

  // ── 결제 스캐폴딩: 수강 버튼(현재 무료) ─────────────────────
  function enrollControl(label, onClickAttr){
    if (PAYMENTS_ENABLED) {
      // TODO(2단계): 유료 항목이면 결제 버튼 → window.TIEUM_PG.checkout(item)
      // return '<button class="dash-btn dash-btn-pay" '+onClickAttr+'>수강 신청 (결제)</button>';
    }
    return '<span class="dash-free">'+LL('무료','Free')+'</span>'+
           '<button class="dash-btn" '+onClickAttr+'>'+label+'</button>';
  }

  // ── 카드 렌더 ───────────────────────────────────────────────
  function courseCard(c){
    var lang = (typeof getLang==='function')?getLang():'ko';
    var first = (typeof lmsGetFlatLessons==='function') ? (lmsGetFlatLessons(c.id)[0]) : null;
    var href = first ? ('lms-player.html?course='+c.id+'&lesson='+first.id) : '#';
    var prog = (typeof lmsGetCourseProgress==='function') ? lmsGetCourseProgress(c.id) : {done:0,total:0,pct:0};
    var title = (lang==='en'&&c.title_en)?c.title_en:c.title;
    var desc  = (lang==='en'&&c.description_en)?c.description_en:c.description;
    var dur   = (lang==='en'&&c.duration_en)?c.duration_en:(c.duration||'');
    var instr = c.instructor ? ((lang==='en'&&c.instructor.name_en)?c.instructor.name_en:c.instructor.name) : '';
    var btn   = enrollControl(LL('학습 시작','Start Learning'), "onclick=\"location.href='"+href+"'\"");
    return ''+
      '<article class="dash-card">'+
        '<div class="dash-card-top"><span class="dash-tag dash-tag-course">'+LL('정식 강좌','Course')+'</span>'+
          '<span class="dash-dur">'+esc(dur)+'</span></div>'+
        '<h3 class="dash-card-title">'+esc(title)+'</h3>'+
        '<p class="dash-card-desc">'+esc((desc||'').slice(0,90))+'</p>'+
        '<div class="dash-meta">👤 '+esc(instr)+
          ' · '+prog.done+'/'+prog.total+LL('강',' lessons')+'</div>'+
        '<div class="dash-card-foot">'+btn+'</div>'+
      '</article>';
  }

  function curationCard(it, idx){
    var btn = enrollControl(LL('바로 읽기','Read Now'), 'onclick="window.lmsOpenCard('+idx+')"');
    return ''+
      '<article class="dash-card">'+
        '<div class="dash-card-top"><span class="dash-tag dash-tag-cur">'+esc(reportLabel(it.report))+'</span>'+
          '<span class="dash-dur">'+esc(it.date||'')+'</span></div>'+
        '<h3 class="dash-card-title">'+esc(curTitle(it))+'</h3>'+
        '<p class="dash-card-desc">'+LL('출처: ','Source: ')+esc(srcLabel(it.source).slice(0,40))+'</p>'+
        '<div class="dash-card-foot">'+btn+'</div>'+
      '</article>';
  }

  // ── 상세 모달 (큐레이션 전체 한글 내용) ─────────────────────
  window.lmsOpenCard = function(idx){
    var it = (window.LMS_INSIGHTS||[])[idx];
    if(!it) return;
    document.getElementById('lmsCardReport').textContent = reportLabel(it.report)+' · '+(it.date||'');
    document.getElementById('lmsCardTitle').textContent  = curTitle(it);
    document.getElementById('lmsCardOrig').textContent   = LL('원제: ','Original: ')+(it.origTitle||'')+LL(' · 출처: ',' · Source: ')+srcLabel(it.source);
    document.getElementById('lmsCardBody').innerHTML     = it.bodyHtml||'';
    var aw = document.getElementById('lmsCardAnnoWrap');
    if(it.annotation){ document.getElementById('lmsCardAnno').textContent = it.annotation; aw.style.display='block'; }
    else aw.style.display='none';
    document.getElementById('lmsCardSrc').innerHTML = LL('본 콘텐츠는 원문 요점을 한국어로 재구성한 것입니다','This content is a Korean-language summary of the original article')+' · <a href="'+esc(it.url)+'" target="_blank" rel="noopener">'+LL('영문 원문 ↗','Original (EN) ↗')+'</a>';
    document.getElementById('lmsCardModal').classList.add('open');
    document.body.style.overflow='hidden';
  };
  window.lmsCloseCard = function(){ document.getElementById('lmsCardModal').classList.remove('open'); document.body.style.overflow=''; };

  // ── 레인 렌더 ───────────────────────────────────────────────
  var ACTIVE = 'teacher';
  function renderLane(id){
    ACTIVE = id;
    var lane = LANES.filter(function(l){return l.id===id;})[0] || LANES[0];
    // 사이드바 active 표시
    document.querySelectorAll('#lmsDashNav .dash-navbtn').forEach(function(b){
      b.classList.toggle('active', b.dataset.lane===id);
    });
    document.getElementById('lmsDashHeader').innerHTML =
      '<h2>'+lane.icon+' '+esc(laneName(lane))+'</h2><p>'+esc(laneDesc(lane))+'</p>';

    var courses = coursesFor(lane);
    var curs = curationFor(lane);
    var all = window.LMS_INSIGHTS||[];
    var html = '';
    courses.forEach(function(c){ html += courseCard(c); });
    curs.forEach(function(it){ html += curationCard(it, all.indexOf(it)); });
    if(!html) html = '<p class="dash-empty">'+LL('이 트랙의 콘텐츠가 곧 추가됩니다.','Content for this track is coming soon.')+'</p>';
    document.getElementById('lmsDashCards').innerHTML = html;
  }

  // ── 대시보드 초기 렌더 (로그인 후) ──────────────────────────
  window.renderLmsDashboard = function(){
    var nav = document.getElementById('lmsDashNav');
    if(nav){
      nav.innerHTML = LANES.map(function(l){
        return '<button class="dash-navbtn'+(l.id===ACTIVE?' active':'')+'" data-lane="'+l.id+'" '+
               'onclick="window.lmsSwitchLane(\''+l.id+'\')">'+
               '<span class="dash-navicon">'+l.icon+'</span><span>'+esc(laneName(l))+'</span></button>';
      }).join('');
    }
    var u = (typeof lmsGetUser==='function')?lmsGetUser():null;
    var userBox = document.querySelector('.lms-dash-user');
    if(userBox){
      var nm = u ? esc(u.name||'') : '';
      userBox.innerHTML = (LANG()==='en')
        ? (nm ? ('Welcome, <span class="lms-welcome-name" id="lmsWelcomeName">'+nm+'</span>') : 'Welcome')
        : ('<span class="lms-welcome-name" id="lmsWelcomeName">'+nm+'</span>님');
    }
    renderLane(ACTIVE);
  };
  window.lmsSwitchLane = function(id){ renderLane(id); };

  // ── 로그인 전 샘플 미리보기 ─────────────────────────────────
  window.renderLmsSample = function(){
    var box = document.getElementById('lmsSampleGrid');
    if(!box) return;
    box.innerHTML = LANES.map(function(l){
      var n = coursesFor(l).length + curationFor(l).length;
      // 각 레인의 대표 1건 제목
      var courses = coursesFor(l); var curs = curationFor(l);
      var en = LANG()==='en';
      var sample = courses[0] ? (en&&courses[0].title_en?courses[0].title_en:courses[0].title)
                              : (curs[0] ? curTitle(curs[0]) : '');
      return ''+
        '<div class="sample-card">'+
          '<div class="sample-icon">'+l.icon+'</div>'+
          '<h3>'+esc(laneName(l))+'</h3>'+
          '<p class="sample-desc">'+esc(laneDesc(l))+'</p>'+
          (sample?'<p class="sample-ex">'+LL('예: ','e.g., ')+esc(sample.slice(0,42))+'…</p>':'')+
          '<div class="sample-foot"><span class="dash-free">'+LL('무료','Free')+'</span><span class="sample-count">'+n+LL('개 콘텐츠',' items')+'</span></div>'+
        '</div>';
    }).join('');
  };
})();
