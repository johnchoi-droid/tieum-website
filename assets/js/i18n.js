/* =====================================================
   TIEUM — i18n Language Switcher
   ===================================================== */

(function () {
  /* ── Translation dictionary ─────────────────────── */
  const T = {
    ko: {
      /* ── Nav ── */
      'nav.about':       '소개',
      'nav.academy':     '아카데미',
      'nav.outreach':    '아웃리치',
      'nav.news':        '소식',
      'nav.newsletter':  '뉴스레터',
      'nav.support':     '후원',
      'nav.membership':  '멤버십 가입',
      'nav.donate':      '후원하기',
      'nav.lms': '러닝센터',

      /* ── Mega menu cols ── */
      'mega.col1.title': '소개',
      'mega.col1.l1': '티움이란',
      'mega.col1.l2': '비전 &amp; 미션',
      'mega.col1.l3': '이사장 인사말',
      'mega.col1.l4': '함께하는 사람들',
      'mega.col1.l5': '연혁',
      'mega.col1.l6': '함께하는 곳',
      'mega.col1.l7': '찾아오시는 길',

      'mega.col2.title': '아카데미',
      'mega.col2.l1': '공지사항',
      'mega.col2.l2': 'TFM Academy',
      'mega.col2.l3': '제1기 미래아카데미',
      'mega.col2.l4': '교수학습법',
      'mega.col2.l5': '연구 Data',
      'mega.col2.l6': '🎓 러닝센터',

      'mega.col3.title': '아웃리치',
      'mega.col3.l1': '티움 글로벌',
      'mega.col3.l2': '비전캠프',
      'mega.col3.l3': '글로벌 아웃리치',
      'mega.col3.l4': '견미단 × 프로라이프',
      'mega.col3.l5': '청소년 프로라이프',

      'mega.col4.title': '소식',
      'mega.col4.l1': '전체 소식',
      'mega.col4.l2': '교수학습 소식',
      'mega.col4.l3': '연구·데이터',
      'mega.col4.l4': '러닝센터',

      'mega.col5.title1': '뉴스레터',
      'mega.col5.l1': '뉴스레터 전체 보기',
      'mega.col5.title2': '후원',
      'mega.col5.l2': '정기 후원',
      'mega.col5.l3': '일시 후원',
      'mega.col5.l4': '파트너 문의',

      'mega.lms.title': '러닝센터',
      'mega.lms.l1': '러닝센터 홈',
      'mega.lms.l2': 'PBL 프로그램',
      'mega.lms.l3': '워크스페이스',

      /* ── index.html — Hero ── */
      'hero.label':   '사단법인 티움 | TIEUM',
      'hero.title':   '인공지능 시대,<br /><em>교육으로 세상을</em><br />변화시킵니다',
      'hero.sub':     'AI 기술과 인류의 보편적 가치를 연결하여<br />다음 세대가 세상의 빛이 되도록 돕습니다',
      'hero.btn1':    '티움 알아보기',
      'hero.btn2':    '후원 참여하기',

      /* ── Stats band ── */
      'stat.students': '교육 수혜 학생',
      'stat.schools':  '협력 학교',
      'stat.years':    '교육 전문 경험',
      'stat.countries':'글로벌 아웃리치',

      /* ── About ── */
      'about.tag':   '소개',
      'about.title': '우리가 직면한 위기와<br/>티움의 응답',
      'about.desc':  '현재 우리 사회와 교육 현장은 전에 없는 위기에 직면해 있습니다.<br/>티움은 이 시대적 과제에 대한 실질적인 대안을 제시합니다.',
      'crisis.01.h': '한국 사회와 공동체',
      'crisis.01.p': '빠른 사회 변화와 공동체 기반의 급격한 해체 속에서, 삶의 가치와 일상이 통합된 교육 모델을 모색합니다.',
      'crisis.02.h': '교육 현장의 변화',
      'crisis.02.p': '디지털 원주민 세대 앞에 기존 방식으로는 전달하기 어려운 다음 세대를 위한 교육 전략을 수립합니다.',
      'crisis.03.h': '인재와 시민의 균형',
      'crisis.03.p': '올바른 가치관에 기반해 세상 속에서 책임 있는 시민으로서 세상의 빛이 되는 삶을 지향합니다.',
      'about.link':  '티움의 교육 철학 보기 →',

      /* ── Vision ── */
      'vision.tag':   '교육 철학',
      'vision.title': '티움의 교육 철학<br/>: TMD &amp; 3T &amp; 실행 전략',
      'vision.desc':  '우리는 단순한 지식 전달을 넘어 전인적이며 변혁을 추구합니다.',
      'tmd.t.label': '특별한 재능',
      'tmd.t.p':     '뛰어난 재능을 발굴하고 개발하여 유능감을 갖춘 인재',
      'tmd.m.label': '성장 마인드셋',
      'tmd.m.p':     '주어진 자원을 잘 관리하여 세상을 이끄는 영향력 있는 인재',
      'tmd.d.label': '헌신과 실천',
      'tmd.d.p':     '올바른 가치관과 성품으로 인류 사회에 기여하는 위대한 인재',
      '3t.touch.h':  'Touching <span class="philos-kr">동기부여</span>',
      '3t.touch.p':  '감동과 경험을 통해 교육에 적극적으로 참여하도록 동기를 부여합니다.',
      '3t.teach.h':  'Teaching <span class="philos-kr">교육</span>',
      '3t.teach.p':  '혁신적인 콘텐츠로 원칙과 진리를 담아 신뢰있는 지식을 전달합니다.',
      '3t.trans.h':  'Transforming <span class="philos-kr">변혁</span>',
      '3t.trans.p':  '변인과 사회가 긍정적인 방향으로 변화되도록 돕습니다.',
      'ieum.i.h':    'Innovative <span class="philos-kr">혁신적인</span>',
      'ieum.i.p':    '새로운 기술을 활용한 교육 콘텐츠를 혁신적으로 도입하여 시대가 요구하는 교육 혜택을 제공합니다.',
      'ieum.e.h':    'Education <span class="philos-kr">교육</span>',
      'ieum.e.p':    '모든 활동의 중심에 교육이 있으며, 어떤 활동에도 교육이 담겨 있습니다.',
      'ieum.u.h':    'Uneducated <span class="philos-kr">교육받지 못한</span>',
      'ieum.u.p':    '정식 교육의 기회를 받지 못한 소외된 이들에게 교육의 기회를 제공하고 조력합니다.',
      'ieum.m.h':    'Majority <span class="philos-kr">다수</span>',
      'ieum.m.p':    '소수를 위한 특권이 아닌 다양한 배경을 가진 모든 아이들에게 적용됩니다.',

      /* ── Greeting ── */
      'greeting.tag':       '이사장 인사말',
      'greeting.pretitle':  '티움의 문제의식과 존재 이유',
      'greeting.title':     '\'선한 영향력으로 세상을 움직이는 다음세대\'를<br />위해 존재합니다.',
      'greeting.name':      '고봉익',
      'greeting.role':      '사단법인 티움 이사장',
      'greeting.q1':        '이 아이들에게 꿈 꿀 수 있는 기회를 줄 수 있을까요?',
      'greeting.q2':        '이 아이들이 자기 자신과 세상에 대해 진심으로 탐색할 수 있을까요?',
      'greeting.q3':        '이 아이들이 세상에 선한 영향력을 끼치는 사람으로 성장할 수 있을까요?',
      'greeting.lead':      '우리는 세상의 모든 아이들이 고유의 가능성과 잠재력을 가지고 태어난다는 것을 믿습니다.',
      'greeting.sub1':      '디지털 양극화, 아이들의 꿈을 가로막다',
      'greeting.sub2':      '디지털 강국 한국의 청소년들은 괜찮을까요?',
      'greeting.closing':   '사단법인 티움 이사장 <strong>고봉익</strong>',
      'team.chair.name': '고봉익 <span class="team-role-badge">이사장</span>',
      'camp.coach': '🎓 주최: 티움 · 코치: 고봉익 대표 (TMD교육그룹 · 티움 이사장)',

      /* ── Team ── */
      'team.tag':   '함께하는 사람들',
      'team.title': '티움과 함께하는 사람들',
      'team.desc':  '티움의 사업을 함께 이끌어 가는 이사장·이사·사무국장·전문위원을 소개합니다',
      'team.g1':    '이 사 장',
      'team.g2':    '이 사',
      'team.g3':    '사 무 국 장',
      'team.g4':    '전 문 위 원',

      /* ── Programs ── */
      'prog.tag':   '아카데미',
      'prog.title': '프로그램 소개',
      'prog.desc':  'AI 시대에 맞는 교육 프로그램으로 다음 세대를 준비시킵니다',
      'prog.more':  '자세히 보기 →',
      'prog.tfm.h': 'TFM Academy — 창의융합과정<br /><span>TIEUM Future Maker Academy</span>',
      'prog.tfm.p': '균형 잡힌 가치관을 토대로 미래 인재를 세우는 청소년 집중 교육 과정. 질문지능·디자인씽킹·AI 미래역량을 4주간 토요일 오프라인 과정으로 훈련합니다.',
      'prog.tfm.m1':'🎯 예비 중1 ~ 예비 고3',
      'prog.tfm.m2':'📅 매년 1월 · 4주 토요일',
      'prog.tfm.m3':'📍 티움 센터 (서초구)',
      'prog.fa.h':  '제1기 미래아카데미<br /><span>Future Academy</span>',
      'prog.fa.p':  '대한민국역사와미래재단과 티움이 공동 운영하는 청년 리더 양성 프로그램. 보수적 가치를 기반으로 AI 시대를 선도할 각 분야 Top 리더를 키웁니다.',
      'prog.tm.h':  '교수학습법<br /><span>Teaching Methodology</span>',
      'prog.tm.p':  'AI 시대에 효과적인 교육을 위한 혁신적 교수학습법을 교사·교육자·현장 교육가들에게 제공합니다.',
      'prog.re.h':  '연구 &amp; 데이터<br /><span>Research &amp; Data</span>',
      'prog.re.p':  'AI 교육의 효과를 측정하고 개선하기 위한 데이터 기반 연구를 수행하고 공개합니다.',

      /* ── Outreach ── */
      'out.tag':   '아웃리치',
      'out.title': '세상을 향해',
      'out.desc':  '교실을 넘어 세계로 나아가는 티움의 교육 활동',

      /* ── History ── */
      'hist.tag':   '연혁',
      'hist.title': '티움의 발자취',

      /* ── News ── */
      'news.tag':   '소식',
      'news.title': '티움 최신 소식',
      'news.more':  '모든 소식 보기 →',

      /* ── Support ── */
      'sup.tag':    '후원',
      'sup.title':  '함께 만드는 변화',
      'sup.desc':   '여러분의 후원이 한 아이의 미래를 바꿉니다.<br />티움의 교육 활동에 동참해 주세요.',
      'sup.reg.h':  '정기 후원',
      'sup.reg.p':  '매월 정기적인 후원으로 지속 가능한 교육 활동을 지원합니다.',
      'sup.reg.btn':'정기 후원하기',
      'sup.one.h':  '일시 후원',
      'sup.one.p':  '특별한 사업이나 프로젝트에 일회성 후원으로 함께합니다.',
      'sup.one.btn':'일시 후원하기',
      'sup.par.h':  '교육 파트너',
      'sup.par.p':  '기업 및 단체가 교육 사업의 파트너가 되어 더 큰 변화를 만듭니다.',
      'sup.par.btn':'파트너 문의',
      'sup.fin':    '티움은 재정 투명성 보고서를 매년 공개합니다.',
      'sup.fin.btn':'재정 보고 보기 →',

      /* ── Testimonials ── */
      'testi.tag':   '후기',
      'testi.title': '티움과 함께한 이야기',
      'testi.1.p':   '퓨처 메이커스 캠프에 참가하고 나서 아이가 완전히 달라졌어요. 코딩에 자신감이 생기고, 무엇보다 \'내가 세상에 기여할 수 있다\'는 비전을 갖게 됐습니다.',
      'testi.1.name':'김○○ 학부모', 'testi.1.role':'퓨처 메이커스 참가자 학부모',
      'testi.2.p':   '티움의 교수학습법 워크숍은 제 수업을 완전히 바꿔놓았습니다. AI 도구를 교육에 어떻게 접목하는지 구체적으로 배울 수 있었어요.',
      'testi.2.name':'박○○ 교육봉사자', 'testi.2.role':'동남아시아 파견 교육봉사자',
      'testi.3.p':   '글로벌 아웃리치를 통해 단순한 지식 전달이 아니라, 아이들의 삶을 통째로 변화시키는 교육의 힘을 직접 목격했습니다. 티움의 활동에 깊이 감동받았습니다.',
      'testi.3.name':'이○○ 후원자', 'testi.3.role':'티움 정기 후원 3년차',
      'testi.4.p':   '처음엔 코딩이 막연히 어렵다고 생각했는데, 캠프를 통해 직접 만들어보니 너무 재밌었어요. 이제 AI로 뭔가를 만들고 싶다는 꿈이 생겼습니다.',
      'testi.4.name':'최○○ 학생 (중2)', 'testi.4.role':'2024 퓨처 메이커스 캠프 참가자',
      'testi.5.p':   '현직 교사로서 AI를 어떻게 수업에 활용할지 막막했는데, 티움의 워크숍을 통해 실질적인 방법을 배웠습니다. 학생들의 반응이 완전히 달라졌어요.',
      'testi.5.name':'정○○ 교사', 'testi.5.role':'초등학교 교사 · 워크숍 수료',
      'testi.6.p':   '자녀를 티움 캠프에 보냈는데, 돌아온 아이들에게서 놀라운 변화를 보았습니다. 인문적 가치와 AI 기술이 연결되는 새로운 가능성을 발견했습니다.',
      'testi.6.name':'강○○ 교육자', 'testi.6.role':'서울 소재 청소년 교육기관 대표',
      'testi.7.p':   '아이가 미국 비전캠프에 다녀온 후 영어와 코딩 실력이 늘었을 뿐만 아니라, 세계를 품는 큰 꿈을 갖게 됐어요. 티움에 정말 감사합니다.',
      'testi.7.name':'한○○ 학부모', 'testi.7.role':'2025 미국 비전캠프 참가자 학부모',
      'testi.8.p':   '레바논에서 아이들을 가르치는 것이 쉽지 않았는데, 티움의 커리큘럼 덕분에 언어와 문화를 넘어 소통할 수 있었습니다. 아이들 눈이 빛났어요.',
      'testi.8.name':'서○○ 교육봉사자', 'testi.8.role':'레바논 현지 교육봉사자',
      'testi.9.p':   '티움과의 CSR 파트너십을 통해 임직원들도 교육봉사의 의미를 발견했습니다. 단순한 후원을 넘어 함께 성장하는 경험이었습니다.',
      'testi.9.name':'윤○○ 대표', 'testi.9.role':'티움 CSR 파트너 기업 대표',
      'testi.10.p':  '티움 아카데미에서 배운 AI 프롬프트 활용법이 학교 과제에도 큰 도움이 됐어요. 단순히 기술만 배운 게 아니라 올바르게 사용하는 법도 배웠습니다.',
      'testi.10.name':'조○○ 학생 (고1)', 'testi.10.role':'티움 아카데미 수강생',
      'testi.11.p':  '네팔에서 교육받은 아이들이 지금은 마을에서 선생님 역할을 하고 있습니다. 티움이 뿌린 씨앗이 이렇게 열매 맺는 것을 보며 눈물이 났습니다.',
      'testi.11.name':'임○○ 교육봉사자', 'testi.11.role':'네팔 파견 교육봉사자 5년차',
      'testi.12.p':  '방학마다 어디를 보내야 할지 고민이었는데, 퓨처 메이커스 캠프를 발견하고 확신이 생겼습니다. 아이가 다음 캠프를 벌써 기다리고 있어요.',
      'testi.12.name':'오○○ 학부모', 'testi.12.role':'퓨처 메이커스 2년 연속 참가',
      'testi.13.p':  '티움 캠프 졸업 후 지금은 대학에서 컴퓨터공학을 전공하고 있습니다. 당시 받은 영감이 제 진로를 바꿔놓았고, 지금도 그 감사함을 기억합니다.',
      'testi.13.name':'차○○ (대학생)', 'testi.13.role':'2022년 캠프 참가 · 현재 CS 전공',
      'testi.14.p':  '매달 후원금이 어떻게 쓰이는지 투명하게 보고받을 수 있어 신뢰가 갑니다. 작은 금액이지만 멀리 있는 아이들에게 닿는다는 것이 큰 보람입니다.',
      'testi.14.name':'홍○○ 후원자', 'testi.14.role':'티움 정기 후원 5년차',
      'testi.15.p':  '티움의 AI 수업 설계 특강은 지금까지 들어본 교사 연수 중 가장 실용적이었습니다. 이론이 아니라 실제 수업에서 바로 쓸 수 있는 내용이었어요.',
      'testi.15.name':'문○○ 교사', 'testi.15.role':'중학교 교사 · AI 수업 설계 특강 수료',

      /* ── Partners ── */
      'part.tag':   '함께하는 곳',
      'part.title': '파트너 &amp; 제휴 기관',

      /* ── Contact ── */
      'cont.tag':   '문의',
      'cont.title': '연락하기',
      'cont.h':     '티움과 함께하세요',
      'cont.p':     '후원, 협력, 교육 프로그램 등 어떤 문의든 환영합니다.',
      'cont.addr.label': '주소',
      'cont.phone.label':'전화',
      'cont.email.label':'이메일',
      'cont.regno.label':'고유번호',
      'form.name':    '이름 *',
      'form.email':   '이메일 *',
      'form.subject': '문의 유형',
      'form.msg':     '메시지 *',
      'form.submit':  '메시지 보내기',
      'form.success': '메시지가 전송되었습니다. 곧 연락드리겠습니다!',
      'form.sel':     '선택해 주세요',
      'form.opt1':    '아카데미 프로그램',
      'form.opt2':    '후원 문의',
      'form.opt3':    '아웃리치 협력',
      'form.opt4':    '파트너십',
      'form.opt5':    '기타',
      'form.ph.name': '홍길동',
      'form.ph.msg':  '문의 내용을 입력해 주세요...',

      /* ── Location ── */
      'loc.tag':   '찾아오시는 길',
      'loc.title': '오시는 방법',
      'loc.addr.h':'주소',
      'loc.addr.p':'서울특별시 서초구<br />효령로 57길 3<br />대덕빌딩 나동 종덕빌리지 지하 1층',
      'loc.sub':   '지하철',
      'loc.bus':   '버스',
      'loc.car':   '자가용',
      'loc.sub.p': '3호선 <strong>남부터미널역</strong> 1번 혹은 2번 출구에서 도보 1분',
      'loc.bus.p': '마을버스 서초02, 서초11, 서초22<br>지선(초록) 3012, 4319<br>간선(파랑) 461, 641<br>직행/광역 1553, 500-2, 500-5, M4455',
      'loc.car.p': '건물 내 주차 가능<br />(방문 전 사전 연락 요망)',
      'loc.map':   '네이버 지도에서 보기 →',

      /* ── Footer ── */
      'foot.tagline': '인공지능 시대의 교육 혁신',
      'foot.desc':    '사단법인 티움은 AI 기술과 인류의 보편적 가치를 연결하여 다음 세대를 세우는 비영리 교육 기관입니다.',
      'foot.h1':  '소개',
      'foot.h2':  '프로그램',
      'foot.h3':  '소식 &amp; 참여',
      'foot.f1.l1':'티움이란',
      'foot.f1.l2':'비전 &amp; 미션',
      'foot.f1.l3':'이사장 인사말',
      'foot.f1.l4':'함께하는 사람들',
      'foot.f1.l5':'연혁',
      'foot.f1.l6':'함께하는 곳',
      'foot.f2.l1':'TFM Academy',
      'foot.f2.l2':'교수학습법',
      'foot.f2.l3':'연구 &amp; 데이터',
      'foot.f2.l4':'글로벌 아웃리치',
      'foot.f2.l5':'비전캠프',
      'foot.f3.l1':'최신 소식',
      'foot.f3.l2':'정기 후원',
      'foot.f3.l3':'일시 후원',
      'foot.f3.l4':'파트너십',
      'foot.f3.l5':'자원봉사',
      'foot.f3.l6':'문의하기',
      'foot.copy':  '&copy; 2026 사단법인 티움(TIEUM). All rights reserved.',
      'foot.reg':   '고유번호: 454-82-00464 | 서울특별시 서초구 효령로 57길 3',
      'foot.terms': '이용약관',
      'foot.privacy':'개인정보 처리방침',
      'foot.copy2': '저작권 보호 정책',
      'foot.email-ref': '이메일무단수집거부',

      /* ── Vision extras ── */
      'strat.badge': '실행 전략',
      'bible.quote': '"교육은 빛과 같다. 지혜 있는 이는 별처럼 빛나고,<br/>많은 이를 올바른 방향으로 이끄는 교육자는<br/>영원히 그 가치를 남긴다."<cite>— 티움의 교육 철학</cite>',
      'vision.close': '티움은 지혜와 빛으로 시대를 채우고,<br/>참여자의 <em class="kw-em">인지</em>(머리에 티움), <em class="kw-em">정서</em>(가슴에 피움), <em class="kw-em">행동</em>(발 닿는 곳마다 열매 맺음)의 조화로운 성장을 지원합니다.',
      'greeting.p1': '그러나 저개발국가의 열악한 교육환경은 아이들이 꿈 꿀 수 있는 방법조차 알 수 없게 합니다. 선진국과 개도국의 교육 격차는 점점 커지고 있습니다. 전 세계의 55%만이 인터넷에 연결되어 있으며, 약 15억 명의 인구는 고속 모바일 데이터 커버리지가 제공되지 않는 지역에 거주합니다.',
      'greeting.p2': '이 지역에서 자라고 있는 아이들이 잠재력이 없는 것이 아닙니다. 디지털 시대를 열어갈 인프라와 교육을 받지 못해 잠재력을 발휘하지 못하고 갇혀 있을 뿐입니다. 우리는 이 아이들의 잠재력을 피워줄 책임이 있습니다.',
      'greeting.p3': '물질 만능주의와 가치 혼란의 문화는 아이들이 건전하게 자신의 꿈을 찾아가는 것을 방해합니다. 내가 누구인지 고민하면 미디어와 전자기기, 유튜브를 향합니다. 최근에 우리 아이들이 이렇게 행복하지 않다는 것을 보면서, 우리는 이 아이들이 스스로 꿈을 찾아갈 수 있도록 도울 책임이 있습니다.',
      'greeting.mission': '티움은 이 질문에 답하기 위해 존재합니다.<br />티움은 이 질문의 답을 실행하기 위해 존재합니다.<br /><br /><strong>이것이 티움이 꿈꾸는 다음세대를 위한 미션입니다.</strong>',
      'prog.tfm.li1': '<strong>균형 잡힌 세계관</strong> — AI 시대 정체성과 가치관 정립',
      'prog.tfm.li2': '<strong>질문지능 & 문해력</strong> — 지식 큐레이션·학습 민첩성 훈련',
      'prog.tfm.li3': '<strong>디자인씽킹</strong> — PBL 기반 창의 문제해결 프로젝트',
      'prog.tfm.li4': '<strong>Zoom 특강</strong> — 구글·애플 현직 엔지니어 미니특강',
      'prog.fa.li1': '2030 청년 대상 12주 집중 과정', 'prog.fa.li2': '기술·경제 / 교육·문화 / 정치·사회 트랙',
      'prog.fa.li3': '프로젝트 기반 실천형 교육(PBL)', 'prog.fa.li4': '성과 공유회 & 리더십 포럼',
      'prog.tm.li1': 'AI 활용 수업 설계', 'prog.tm.li2': '플립러닝·PBL 방법론', 'prog.tm.li3': '글로벌 교육 훈련',
      'prog.re.li1': '교육 효과 연구', 'prog.re.li2': 'AI 교육 트렌드 분석', 'prog.re.li3': '공개 데이터 제공',
      'country.us': '미국', 'country.pl': '폴란드', 'country.lb': '레바논', 'country.np': '네팔',
      'out.global.badge': '티움 청소년 봉사단', 'out.global.h': '글로벌 아웃리치', 'out.global.sub': '교육 봉사 · 문화 교류',
      'out.global.p': 'AI·문화·예술 교육으로 세계 현장에 직접 나가는 청소년 봉사단. 2024년 폴란드 바르샤바에서 우크라이나 난민들을 위해 생성형 AI, 로봇 코딩, K-POP, 한국 전통 놀이로 마음을 나눴습니다.',
      'out.global.li1': '생성형 AI 창작 교육 & 로봇 코딩', 'out.global.li2': 'K-POP 댄스 · 랩 · 뮤지컬',
      'out.global.li3': '한국 전통 놀이 문화 교환', 'out.global.li4': '사전 교육 → 현장 활동 → 발표·해단식',
      'out.gyeon.badge': '티움 아카데미', 'out.gyeon.h': '견미단 × 프로라이프', 'out.gyeon.sub': '글로벌 프로젝트 아카데미',
      'out.gyeon.p': '보수주의·생명윤리 가치관을 세우고, 글로벌 정치가·법률가·미디어·NGO 4개 팀이 미국 워싱턴 DC에서 March for Life와 함께 실전 프로젝트를 수행하는 청소년 아카데미.',
      'out.gyeon.li1': '공통 교육 — 보수주의·생명윤리·법률·자연과학', 'out.gyeon.li2': '4개 글로벌 프로젝트 팀 (코치 1:1 동행)',
      'out.gyeon.li3': '워싱턴 DC 현장 · March for Life 참여', 'out.gyeon.li4': '산출물 제작 후 발표회 & 수료식',
      'out.country.lb': '🇱🇧 레바논', 'out.country.pl': '🇵🇱 폴란드', 'out.country.np': '🇳🇵 네팔',
      'out.prolife2.badge': '2026 완료 · 24명 수료', 'out.prolife2.h': '청소년 프로라이프 비전 캠프 2기',
      'out.prolife2.sub': '청프 2기 · 소명을 깨우는 비전캠프',
      'out.prolife2.p': '균형 잡힌 세계관으로 생명 가치 담론을 이끌 청소년 리더를 세우는 미국 비전캠프. 4회 국내 사전 교육 + 11박 12일 미국 현지(캘리포니아·워싱턴DC)로 구성, 24명이 수료했습니다.',
      'out.prolife2.li1': '자연과학 탐방 캠프 — 캘리포니아 (그랜드캐니언·데스밸리)',
      'out.prolife2.li2': '가치관 교육 캠프 — 워싱턴 DC · March for Life',
      'out.prolife2.li3': '오피니언리더·펀드레이징·스토리텔러·체인지메이커 4팀 PBL',
      'out.prolife2.li4': '귀국 후 발표회 & 수료식 (2026. 2. 22)',
      'hist.2020.h': '레바논 아웃리치', 'hist.2020.p': '글로벌 네트워크 구축을 위한 레바논 현장 아웃리치 활동 시작.',
      'hist.2021.h': '사단법인 티움(TIEUM) 설립', 'hist.2021.p': '4월 21일, 교육 사업을 위한 비영리 법인으로 정식 설립. 서울 서초구에 본부를 두고 활동 시작.',
      'hist.2023.h': '레바논 아웃리치', 'hist.2023.p': '지역 영향력 강화를 위한 레바논 현장 활동 재개 및 확대.',
      'hist.2024a.h': 'TFM(TIEUM Future Makers) 아카데미 출범', 'hist.2024a.p': '1월, AI·코딩·창의 교육 대표 프로그램 퓨처 메이커스 아카데미 공식 출범.',
      'hist.2024b.h': '1기 전문위원 위촉식', 'hist.2024b.p': '2월, 티움 1기 전문위원 공식 위촉식 개최.',
      'hist.2024c.h': '폴란드·네팔 아웃리치', 'hist.2024c.p': '2~3월 폴란드 아웃리치 및 6월 네팔 학교 방문 활동.',
      'hist.2025a.h': '청소년 프로라이프 1기 — 미국 비전 캠프', 'hist.2025a.p': '미국 현지 비전 캠프를 통한 청소년 프로라이프 1기 훈련 과정 운영.',
      'hist.2025b.h': 'PAS(태평양아시아협회) 협력 활동', 'hist.2025b.p': '태평양아시아협회와 교육 분야 협력 활동 진행.',
      'hist.2026a.h': '청소년 프로라이프 2기 — 미국 비전 캠프', 'hist.2026a.p': '미국 현지 비전 캠프 청소년 프로라이프 2기 훈련 과정 운영.',
      'hist.2026b.h': '미래아카데미 1기', 'hist.2026b.p': '(재)대한민국역사와미래 협력 사업 추진.',
      'news.badge.nl': '📮 뉴스레터', 'news.nl.h': '티움 정기 뉴스레터 — 매월 발행',
      'news.nl.p': '사단법인 티움이 한 달 동안 걸어온 발걸음을 후원자 여러분과 나눕니다. 교육 활동 현장 소식, 캠프 준비 이야기, 감사 보고를 매달 전합니다.',
      'news.nl.time': '매월 발행', 'news.nl.link': '전체 보기 →',
      'news.badge.out': '아웃리치', 'news.out.h': '동남아시아 교육 활동 보고',
      'news.out.p': '티움 글로벌 팀이 동남아시아 3개국에서 AI 교육 활동을 성황리에 마쳤습니다.',
      'news.badge.ac': '아카데미', 'news.ac.h': '교수학습법 워크숍 — AI 수업 설계 특강',
      'news.ac.p': '현직 교사·교육자 대상 AI 활용 수업 설계 특강이 6월 21일 개최됩니다. 사전 등록을 받습니다.',
      'sup.par.li1': '기업 사회공헌(CSR) 연계', 'sup.par.li2': 'AI 교육 콘텐츠 공동 개발', 'sup.par.li3': '임직원 봉사 프로그램',
      'sup.reg.btn': '정기 후원하기', 'sup.one.btn': '일시 후원하기',
      'amt.custom': '직접입력', 'amt.placeholder': '금액 입력 (원)',
      'news.badge.camp': '청소년 캠프',
      'news.camp.h': '双核觉醒 쌍핵각성 — 연길 조선족 청소년 제주 캠프',
      'news.camp.p': '중국 연길 거주 조선족 청소년(초4~중3)을 위한 3박 4일 몰입형 정체성·AI 진로 캠프. 두 개의 정체성을 강점으로 전환하는 여섯 가지 연결 프로그램으로 구성됩니다.',
      'news.camp.li1': '📅 2026년 7월 13일(월) ~ 16일(목) · 3박 4일',
      'news.camp.li2': '📍 제주도 (펄 호텔 + SW미래채움 AI교육캠퍼스)',
      'news.camp.li3': '👦 초등 4학년 ~ 중학 3학년 · 선착순 25명',
      'news.camp.li4': '🎓 총괄 코치: 고봉익 대표 (TMD교육그룹 · 티움 이사장)',
      /* ── LMS ── */
      'lms.nav.home': '홈', 'lms.nav.teaching': '교수학습', 'lms.nav.research': '연구·데이터',
      'lms.nav.lms': '러닝센터', 'lms.nav.pbl': 'PBL 워크스페이스', 'lms.nav.nl': '뉴스레터',
      'lms.hero.badge': '티움 러닝센터', 'lms.hero.title': 'AI 시대의 교육<br>전문가 과정',
      'lms.hero.sub': '교사·교육자·현장 전문가를 위한 온라인 심화 학습 플랫폼',
      'lms.stat.courses': '개 과정', 'lms.stat.lessons': '개 강의', 'lms.stat.weeks': '주 과정',
      'lms.lock.title': '수강 등록이 필요합니다',
      'lms.lock.desc': '티움 러닝센터 과정은 수강 등록 후 이용하실 수 있습니다.<br>아래 버튼을 눌러 등록하거나, 이미 등록하신 분은 로그인해 주세요.',
      'lms.lock.btn': '수강 등록 / 로그인',
      'lms.filter.all': '전체', 'lms.filter.teaching': '교수학습법',
      'lms.filter.research': '연구·데이터', 'lms.filter.leadership': 'TMD 리더십',
      'lms.login.title': '티움 러닝센터', 'lms.login.desc': '수강 등록 코드와 함께 이름·이메일을 입력하세요.',
      'lms.login.name': '이름 <span class="req">*</span>', 'lms.login.email': '이메일',
      'lms.login.code': '수강 등록 코드 <span class="req">*</span>', 'lms.login.code.ph': '등록 코드 입력',
      'lms.login.hint': '수강 등록 코드는 티움 담당자에게 문의하세요.<br><a href="mailto:johnchoi&#64;tieum&#46;org">johnchoi&#64;tieum&#46;org</a>',
      'lms.login.err': '등록 코드가 올바르지 않습니다.',
      'lms.footer.copy': '© 2026 사단법인 티움(TIEUM). All rights reserved. · <a href="terms.html" style="color:inherit;opacity:.7;text-decoration:underline;">이용약관</a> · <a href="privacy.html" style="color:inherit;opacity:.7;text-decoration:underline;">개인정보 처리방침</a> · <a href="copyright.html" style="color:inherit;text-decoration:underline;">저작권 보호 정책</a>',
      /* ── Player ── */
      'pl.back': '<span class="player-back-arrow">‹</span> 코스 목록',
      'pl.logout': '로그아웃',
      'pl.prog.label': '전체 진도',
      'pl.sidebar.toggle': '☰ 강의 목록',
      'pl.prev': '‹ 이전 강의', 'pl.complete': '완료 &amp; 다음 강의', 'pl.next': '다음 강의 ›',
      'pl.journal.title': '성찰 일지',
      'pl.journal.write.label': '이 강의의 성찰을 기록하세요',
      'pl.journal.unsaved': '저장 안 됨',
      'pl.journal.all': '📓 전체 일지 보기',
      'pl.journal.new': '+ 새 항목 추가',
      'pl.journal.save': '💾 저장하기',
      'pl.journal.ph': '배운 것, 느낀 것, 질문, 현장 적용 아이디어를 자유롭게 기록해보세요...',
      'pl.journal.modal.title': '📓 나의 성찰 일지',
      'pl.journal.modal.sub': '메지로(Mezirow)의 변혁적 학습 이론에 따르면, 기록된 성찰은 새로운 관점의 씨앗이 됩니다.',
      'pl.cert.title': '수료를 축하합니다!',
      'pl.cert.note': '모든 강의를 완료하셨습니다. 수고하셨습니다! 🎉',
      'pl.cert.back': '코스 목록으로 돌아가기',
      'pl.ai.fab': 'AI 도우미',
      'pl.ai.name': '티봇 · 스캐폴딩 AI',
      'pl.ai.ctx': '강의를 선택해주세요',
      'pl.ai.footer': '비고츠키 ZPD · 메지로 변혁적 학습 이론 기반 스캐폴딩',
      'pl.ai.ph': '궁금한 것을 자유롭게 물어보세요...',

      /* ── Subpage: news.html ── */
      'news.page.title': '티움 소식',
      'news.page.sub':   '교수학습, 연구·데이터, 러닝센터, 뉴스레터 등 티움의 모든 소식을 한 곳에서 확인하세요.',
      'news.home': '홈',

      /* ── Subpage: teaching.html ── */
      'teach.page.title': '교수학습법',
      'teach.page.sub':   'AI 시대에 효과적인 교육을 위한 혁신적 교수학습법 훈련 프로그램',

      /* ── Subpage: research.html ── */
      'res.page.title': '연구 &amp; 데이터',
      'res.page.sub':   'AI 교육의 효과를 측정하고 개선하기 위한 티움의 데이터 기반 연구',

      /* ── Subpage: newsletter.html ── */
      'nl.page.title': '뉴스레터',
      'nl.page.sub':   '티움의 교육 활동 소식을 매월 전합니다.',

      /* ── Subpage: lms.html ── */
      'lms.page.title': '러닝센터',
      'lms.page.sub':   '티움의 온라인 학습 플랫폼',

      /* ── Subpage: outreach ── */
      'out.page.global.title': '글로벌 아웃리치',
      'out.page.gyeon.title':  '견미단 × 프로라이프',
      'out.page.prolife.title':'청소년 프로라이프 비전 캠프',
      'out.page.global2.title':'티움 글로벌',
      'out.page.vision.title': '비전캠프',

      /* ── about.html ── */
      'nav.home_about':       '홈',
      'about.page.h1':        '사단법인 티움',
      'about.page.sub':       'AI 기술과 교육의 가치를 연결하여 다음 세대를 세우는 비영리 교육 기관입니다.',
      'about.tab1':           '사무국장 인사말',
      'about.greeting.title': '다음 세대를 위한 교육의 새로운 가능성',
      'about.sg.name':        '최주안',
      'team.sg.badge':        '박사',
      'about.sg.title':       '사단법인 티움 사무국장',
      'about.bullet1':        'AI 시대에 걸맞은 미래 역량을 갖춘 청소년 인재를 키웁니다.',
      'about.bullet2':        '세계 현장에 직접 나가 나눔을 실천하는 글로벌 봉사단을 운영합니다.',
      'about.bullet3':        '교육자들의 역량 강화를 위한 연구와 워크숍을 이어갑니다.',
      'about.greeting.p0':    '사단법인 티움을 찾아주신 여러분께 감사드립니다.',
      'about.greeting.sub1':  '교육이 바꾸는 세상',
      'about.greeting.sub2':  '함께 만드는 변화',
      'about.greeting.closing':'사단법인 티움 사무국장 최주안 드림',
      'about.vision.title':   '비전 &amp; 사명',
      'about.vision.sub':     '사단법인 티움이 추구하는 방향과 가치입니다.',
      'about.vision.h1':      '비전 (Vision)',
      'about.vision.h2':      '사명 (Mission)',
      'about.vision.h3':      '핵심 가치',
      'about.hist.title':     '연혁',
      'about.hist.sub':       '티움이 걸어온 발자취입니다.',
      'about.team.title':     '구성원',
      'about.loc.title':      '오시는 길',
      'about.foot.name':      '사단법인 티움',
      'about.foot.desc':      'AI 기술과 교육의 가치를 연결하여 다음 세대를 세우는 비영리 교육 기관.',

      /* ── teaching.html extras ── */
      'teach.prog.tag':       '프로그램 소개',
      'teach.prog.title':     'Teaching<br/>Methodology',
      'teach.board.tag':      '자료 &amp; 공지',
      'teach.board.title':    '교수학습법 게시판',
      'teach.tab.notice':     '공지',
      'teach.tab.resource':   '자료',
      'teach.tab.review':     '후기',
      /* ── standalone page headings ── */
      'prog.fa.h_plain':      '제1기 미래아카데미',
    },

    en: {
      /* ── Nav ── */
      'nav.about':       'About',
      'nav.academy':     'Academy',
      'nav.outreach':    'Outreach',
      'nav.news':        'News',
      'nav.newsletter':  'Newsletter',
      'nav.support':     'Support',
      'nav.membership':  'Join Membership',
      'nav.donate':      'Donate',
      'nav.lms': 'Learning Center',

      /* ── Mega menu cols ── */
      'mega.col1.title': 'About',
      'mega.col1.l1': 'About TIEUM',
      'mega.col1.l2': 'Vision &amp; Mission',
      'mega.col1.l3': "Chairman's Message",
      'mega.col1.l4': 'Our Team',
      'mega.col1.l5': 'History',
      'mega.col1.l6': 'Partners',
      'mega.col1.l7': 'Location',

      'mega.col2.title': 'Academy',
      'mega.col2.l1': 'Announcements',
      'mega.col2.l2': 'TFM Academy',
      'mega.col2.l3': '1st Future Academy',
      'mega.col2.l4': 'Teaching Methods',
      'mega.col2.l5': 'Research Data',
      'mega.col2.l6': '🎓 Learning Center',

      'mega.col3.title': 'Outreach',
      'mega.col3.l1': 'TIEUM Global',
      'mega.col3.l2': 'Vision Camp',
      'mega.col3.l3': 'Global Outreach',
      'mega.col3.l4': 'Gyeonmidan × Pro-Life',
      'mega.col3.l5': 'Youth Pro-Life',

      'mega.col4.title': 'News',
      'mega.col4.l1': 'All News',
      'mega.col4.l2': 'Teaching News',
      'mega.col4.l3': 'Research · Data',
      'mega.col4.l4': 'Learning Center',

      'mega.col5.title1': 'Newsletter',
      'mega.col5.l1': 'View All Newsletters',
      'mega.col5.title2': 'Support',
      'mega.col5.l2': 'Regular Donation',
      'mega.col5.l3': 'One-time Donation',
      'mega.col5.l4': 'Partner Inquiry',

      'mega.lms.title': 'Learning Center',
      'mega.lms.l1': 'Learning Center Home',
      'mega.lms.l2': 'PBL Programs',
      'mega.lms.l3': 'Workspace',

      /* ── Hero ── */
      'hero.label':   'TIEUM Nonprofit Foundation',
      'hero.title':   'In the Age of AI,<br /><em>We Transform the World</em><br />through Education',
      'hero.sub':     'We connect AI technology with universal human values<br />to help the next generation become a light to the world.',
      'hero.btn1':    'Learn About TIEUM',
      'hero.btn2':    'Support Us',

      /* ── Stats ── */
      'stat.students': 'Students Benefited',
      'stat.schools':  'Partner Schools',
      'stat.years':    'Years of Expertise',
      'stat.countries':'Countries Reached',

      /* ── About ── */
      'about.tag':   'About',
      'about.title': 'The Crisis We Face<br/>and TIEUM\'s Response',
      'about.desc':  'Our society and educational field face unprecedented challenges.<br/>TIEUM proposes practical alternatives to these pressing issues.',
      'crisis.01.h': 'Korean Society & Community',
      'crisis.01.p': 'Amid rapid social change and the breakdown of community foundations, we seek an educational model that integrates life values with everyday living.',
      'crisis.02.h': 'Transformation of Education',
      'crisis.02.p': 'We develop educational strategies for the next generation — digital natives whom traditional methods can no longer effectively reach.',
      'crisis.03.h': 'Balance of Talent & Citizenship',
      'crisis.03.p': 'We cultivate people who, grounded in sound values, live as responsible citizens and a light to the world.',
      'about.link':  'View TIEUM\'s Educational Philosophy →',

      /* ── Vision ── */
      'vision.tag':   'Philosophy',
      'vision.title': 'TIEUM\'s Educational Philosophy<br/>: TMD &amp; 3T &amp; Strategy',
      'vision.desc':  'We pursue holistic transformation, going beyond mere knowledge transfer.',
      'tmd.t.label': 'Talent',
      'tmd.t.p':     'Discovering and developing outstanding talents to cultivate capable and competent individuals.',
      'tmd.m.label': 'Mina',
      'tmd.m.p':     'Exercising trusted stewardship of given resources to become an influential leader who guides the world.',
      'tmd.d.label': 'Denarius',
      'tmd.d.p':     'Nurturing great individuals with sound values and character who contribute to human society.',
      '3t.touch.h':  'Touching <span class="philos-kr">Motivation</span>',
      '3t.touch.p':  'Motivating active participation in education through inspiration and experience.',
      '3t.teach.h':  'Teaching <span class="philos-kr">Education</span>',
      '3t.teach.p':  'Delivering trustworthy knowledge rooted in principles and truth through innovative content.',
      '3t.trans.h':  'Transforming <span class="philos-kr">Transformation</span>',
      '3t.trans.p':  'Helping individuals and society change in a positive direction.',
      'ieum.i.h':    'Innovative <span class="philos-kr">Innovation</span>',
      'ieum.i.p':    'Innovatively introducing educational content utilizing new technologies to provide the educational benefits the era demands.',
      'ieum.e.h':    'Education <span class="philos-kr">Education</span>',
      'ieum.e.p':    'Education is at the center of all activities, and education is embedded in every endeavor.',
      'ieum.u.h':    'Uneducated <span class="philos-kr">Underserved</span>',
      'ieum.u.p':    'Providing and supporting educational opportunities to the marginalized who lack access to formal education.',
      'ieum.m.h':    'Majority <span class="philos-kr">For All</span>',
      'ieum.m.p':    'Applied not as a privilege for the few, but to all children from diverse backgrounds.',

      /* ── Greeting ── */
      'greeting.tag':       "Chairman's Message",
      'greeting.pretitle':  'The Problem and Reason for TIEUM\'s Existence',
      'greeting.title':     'We exist for the next generation<br />that moves the world with positive influence.',
      'greeting.name':      'Bongik Ko',
      'greeting.role':      'Chairman, TIEUM Nonprofit Foundation',
      'greeting.q1':        'Can we give these children the opportunity to dream?',
      'greeting.q2':        'Can these children genuinely explore who they are and what the world holds for them?',
      'greeting.q3':        'Can these children grow into people who positively influence the world?',
      'greeting.lead':      'We believe every child in the world is born with unique possibilities and potential.',
      'greeting.sub1':      'Digital Polarization — Blocking Children\'s Dreams',
      'greeting.sub2':      'Are Korean Youth in a Digital Powerhouse Nation Doing Well?',
      'greeting.closing':   'Chairman, TIEUM Nonprofit Foundation — <strong>Bongik Ko</strong>',
      'team.chair.name': 'Bongik Ko <span class="team-role-badge">Chairman</span>',
      'camp.coach': '🎓 Host: TIEUM · Head Coach: Bongik Ko (TMD Education Group · TIEUM Chairman)',

      /* ── Team ── */
      'team.tag':   'Our Team',
      'team.title': 'People Who Are Part of TIEUM',
      'team.desc':  'Meet the Chairman, Directors, Executive Director and Advisory Committee members leading TIEUM\'s work',
      'team.g1':    'Chairman',
      'team.g2':    'Directors',
      'team.g3':    'Executive Director',
      'team.g4':    'Advisory Committee',

      /* ── Programs ── */
      'prog.tag':   'Academy',
      'prog.title': 'Our Programs',
      'prog.desc':  'We prepare the next generation with educational programs tailored for the AI era.',
      'prog.more':  'Learn More →',
      'prog.tfm.h': 'TFM Academy — Creative Convergence<br /><span>TIEUM Future Maker Academy</span>',
      'prog.tfm.p': 'An intensive youth education program that raises future leaders grounded in balanced values. Trains Question Intelligence, Design Thinking, and AI future competencies over 4 Saturday sessions.',
      'prog.tfm.m1':'🎯 Pre-Grade 7 ~ Pre-Grade 12',
      'prog.tfm.m2':'📅 Every January · 4 Saturdays',
      'prog.tfm.m3':'📍 TIEUM Center (Seocho-gu)',
      'prog.fa.h':  '1st Future Academy<br /><span>Future Academy</span>',
      'prog.fa.p':  'A young leader development program jointly operated by the Korea History and Future Foundation and TIEUM. Raises top leaders in each field to lead the AI era based on conservative values.',
      'prog.tm.h':  'Teaching Methodology<br /><span>Teaching Methodology</span>',
      'prog.tm.p':  'We provide innovative teaching methodologies for effective education in the AI era to teachers, educators, and field practitioners.',
      'prog.re.h':  'Research &amp; Data<br /><span>Research &amp; Data</span>',
      'prog.re.p':  'We conduct and publish data-driven research to measure and improve the effectiveness of AI education.',

      /* ── Outreach ── */
      'out.tag':   'Outreach',
      'out.title': 'Reaching the World',
      'out.desc':  'TIEUM\'s educational activities going beyond the classroom to the world.',

      /* ── History ── */
      'hist.tag':   'History',
      'hist.title': 'TIEUM\'s Journey',

      /* ── News ── */
      'news.tag':   'News',
      'news.title': 'Latest from TIEUM',
      'news.more':  'View All News →',

      /* ── Support ── */
      'sup.tag':    'Support',
      'sup.title':  'Change We Create Together',
      'sup.desc':   'Your support changes a child\'s future.<br />Join TIEUM\'s educational mission.',
      'sup.reg.h':  'Regular Donation',
      'sup.reg.p':  'Support sustainable educational activities with a monthly regular donation.',
      'sup.reg.btn':'Donate Monthly',
      'sup.one.h':  'One-time Donation',
      'sup.one.p':  'Join with a one-time donation for a special project or program.',
      'sup.one.btn':'Donate Now',
      'sup.par.h':  'Education Partner',
      'sup.par.p':  'Companies and organizations become partners in our educational mission to create greater change.',
      'sup.par.btn':'Partner Inquiry',
      'sup.fin':    'TIEUM publishes an annual financial transparency report.',
      'sup.fin.btn':'View Financial Report →',

      /* ── Testimonials ── */
      'testi.tag':   'Stories',
      'testi.title': 'Stories of Impact with TIEUM',
      'testi.1.p':   'After attending the Future Makers Camp, my child changed completely. They gained confidence in coding, and above all, developed a vision that they can contribute to the world.',
      'testi.1.name':'Parent Kim', 'testi.1.role':'Parent of Future Makers participant',
      'testi.2.p':   'The TIEUM teaching methodology workshop completely transformed my classes. I was able to learn specifically how to integrate AI tools into education.',
      'testi.2.name':'Volunteer Park', 'testi.2.role':'Educational volunteer, Southeast Asia',
      'testi.3.p':   'Through Global Outreach, I witnessed firsthand the power of education to transform children\'s lives—not just knowledge transfer, but whole-life change. I was deeply moved by TIEUM\'s work.',
      'testi.3.name':'Supporter Lee', 'testi.3.role':'TIEUM regular supporter, 3 years',
      'testi.4.p':   'I used to think coding was vaguely difficult, but after actually building things at camp, it was so fun. Now I have a dream of creating something with AI.',
      'testi.4.name':'Student Choi (8th grade)', 'testi.4.role':'2024 Future Makers Camp participant',
      'testi.5.p':   'As a practicing teacher, I was lost on how to use AI in class, but through TIEUM\'s workshop I learned practical methods. My students\' responses changed completely.',
      'testi.5.name':'Teacher Jung', 'testi.5.role':'Elementary school teacher · Workshop graduate',
      'testi.6.p':   'I sent my children to TIEUM camp and saw remarkable changes when they returned. We discovered new possibilities where humanistic values and AI technology connect.',
      'testi.6.name':'Educator Kang', 'testi.6.role':'Director, Seoul youth education institute',
      'testi.7.p':   'After my child attended the US Vision Camp, not only did their English and coding improve, but they developed a big dream to embrace the world. I\'m truly grateful to TIEUM.',
      'testi.7.name':'Parent Han', 'testi.7.role':'Parent of 2025 US Vision Camp participant',
      'testi.8.p':   'Teaching children in Lebanon was not easy, but thanks to TIEUM\'s curriculum, we were able to communicate across language and culture. The children\'s eyes lit up.',
      'testi.8.name':'Volunteer Seo', 'testi.8.role':'On-site educational volunteer, Lebanon',
      'testi.9.p':   'Through our CSR partnership with TIEUM, even our employees discovered the meaning of educational volunteering. It was an experience of growing together, beyond simple sponsorship.',
      'testi.9.name':'CEO Yoon', 'testi.9.role':'CEO, TIEUM CSR partner company',
      'testi.10.p':  'The AI prompt techniques I learned at TIEUM Academy were a great help with school assignments too. I didn\'t just learn technology—I learned how to use it responsibly.',
      'testi.10.name':'Student Jo (10th grade)', 'testi.10.role':'TIEUM Academy student',
      'testi.11.p':  'The children educated in Nepal are now taking on teacher roles in their villages. I was moved to tears seeing the seeds TIEUM planted bearing fruit like this.',
      'testi.11.name':'Volunteer Im', 'testi.11.role':'Nepal educational volunteer, 5 years',
      'testi.12.p':  'Every school break I wondered where to send my child—then I discovered Future Makers Camp and felt certain. My child is already looking forward to the next camp.',
      'testi.12.name':'Parent Oh', 'testi.12.role':'Future Makers 2-time consecutive participant',
      'testi.13.p':  'After graduating from TIEUM Camp, I\'m now majoring in computer science at university. The inspiration I received back then changed my career path, and I still remember that gratitude.',
      'testi.13.name':'Cha (university student)', 'testi.13.role':'2022 camp participant · currently studying CS',
      'testi.14.p':  'I find it trustworthy that I can receive transparent reports on how monthly donations are used. Even a small amount reaching children far away brings great fulfillment.',
      'testi.14.name':'Supporter Hong', 'testi.14.role':'TIEUM regular supporter, 5 years',
      'testi.15.p':  'The TIEUM AI lesson design workshop was the most practical teacher training I\'ve ever attended. It wasn\'t theory—it was content I could use in actual classes right away.',
      'testi.15.name':'Teacher Moon', 'testi.15.role':'Middle school teacher · AI lesson design workshop graduate',

      /* ── Partners ── */
      'part.tag':   'Partners',
      'part.title': 'Partners &amp; Affiliated Organizations',

      /* ── Contact ── */
      'cont.tag':   'Contact',
      'cont.title': 'Get in Touch',
      'cont.h':     'Join Us at TIEUM',
      'cont.p':     'We welcome any inquiry — donations, partnerships, educational programs and more.',
      'cont.addr.label': 'Address',
      'cont.phone.label':'Phone',
      'cont.email.label':'Email',
      'cont.regno.label':'Registration No.',
      'form.name':    'Name *',
      'form.email':   'Email *',
      'form.subject': 'Inquiry Type',
      'form.msg':     'Message *',
      'form.submit':  'Send Message',
      'form.success': 'Your message has been sent. We\'ll get back to you soon!',
      'form.sel':     'Please select',
      'form.opt1':    'Academy Program',
      'form.opt2':    'Donation Inquiry',
      'form.opt3':    'Outreach Partnership',
      'form.opt4':    'Partnership',
      'form.opt5':    'Other',
      'form.ph.name': 'John Doe',
      'form.ph.msg':  'Enter your message here...',

      /* ── Location ── */
      'loc.tag':   'Location',
      'loc.title': 'How to Get Here',
      'loc.addr.h':'Address',
      'loc.addr.p':'57-gil 3, Hyoryeong-ro, Seocho-gu,<br />Seoul, South Korea<br />(B1, Jongdeok Village, Daeduk Bldg. B)',
      'loc.sub':   'Subway',
      'loc.bus':   'Bus',
      'loc.car':   'By Car',
      'loc.sub.p': 'Line 3 — <strong>Nambu Bus Terminal Station</strong>, Exit 1 or 2 (1-min walk)',
      'loc.bus.p': 'Village bus: Seocho02, 11, 22<br>Local (green): 3012, 4319<br>Trunk (blue): 461, 641<br>Express: 1553, 500-2, 500-5, M4455',
      'loc.car.p': 'Parking available in the building<br />(Please contact us before visiting)',
      'loc.map':   'View on Naver Map →',

      /* ── Footer ── */
      'foot.tagline': 'Educational Innovation in the Age of AI',
      'foot.desc':    'TIEUM is a nonprofit educational organization that connects AI technology with universal human values to empower the next generation.',
      'foot.h1':  'About',
      'foot.h2':  'Programs',
      'foot.h3':  'News &amp; Get Involved',
      'foot.f1.l1':'About TIEUM',
      'foot.f1.l2':'Vision &amp; Mission',
      'foot.f1.l3':"Chairman's Message",
      'foot.f1.l4':'Our Team',
      'foot.f1.l5':'History',
      'foot.f1.l6':'Partners',
      'foot.f2.l1':'TFM Academy',
      'foot.f2.l2':'Teaching Methods',
      'foot.f2.l3':'Research &amp; Data',
      'foot.f2.l4':'Global Outreach',
      'foot.f2.l5':'Vision Camp',
      'foot.f3.l1':'Latest News',
      'foot.f3.l2':'Regular Donation',
      'foot.f3.l3':'One-time Donation',
      'foot.f3.l4':'Partnership',
      'foot.f3.l5':'Volunteer',
      'foot.f3.l6':'Contact Us',
      'foot.copy':  '&copy; 2026 TIEUM Nonprofit Foundation. All rights reserved.',
      'foot.reg':   'Registration No.: 454-82-00464 | 57-3 Hyoryeong-ro, Seocho-gu, Seoul',
      'foot.terms': 'Terms of Use',
      'foot.privacy':'Privacy Policy',
      'foot.copy2': 'Copyright Policy',
      'foot.email-ref': 'Email Collection Refusal',

      /* ── Vision extras ── */
      'strat.badge': 'Strategy',
      'bible.quote': '"Education is like light. The wise shine like stars,<br/>and educators who guide many in the right direction<br/>leave their value forever."<cite>— TIEUM\'s Educational Philosophy</cite>',
      'vision.close': 'TIEUM fills the era with wisdom and light,<br/>supporting the harmonious growth of participants in<br/><em class="kw-em">cognition</em> (planting in the mind) · <em class="kw-em">emotion</em> (blooming in the heart) · <em class="kw-em">action</em> (bearing fruit wherever you go).',
      'greeting.p1': 'However, the poor educational environments in developing countries make it impossible for children to even know how to dream. The education gap between developed and developing countries is widening. Only 55% of the world is connected to the internet, and approximately 1.5 billion people live in areas without high-speed mobile data coverage.',
      'greeting.p2': 'It is not that the children growing up in these areas lack potential. They are simply trapped, unable to realize their potential due to a lack of infrastructure and education needed to enter the digital age. We have a responsibility to help these children\'s potential flourish.',
      'greeting.p3': 'A culture of materialism and value confusion hinders children from healthily finding their dreams. When they wonder who they are, they turn to media, electronic devices, and YouTube. Seeing how unhappy our children are today, we have a responsibility to help them find their own dreams.',
      'greeting.mission': 'TIEUM exists to answer these questions.<br />TIEUM exists to act on the answers to these questions.<br /><br /><strong>This is the mission TIEUM dreams of for the next generation.</strong>',

      /* ── Programs detail ── */
      'prog.tfm.li1': '<strong>Balanced Worldview</strong> — Building identity and values for the AI era',
      'prog.tfm.li2': '<strong>Question Intelligence & Literacy</strong> — Knowledge curation & learning agility training',
      'prog.tfm.li3': '<strong>Design Thinking</strong> — PBL-based creative problem-solving projects',
      'prog.tfm.li4': '<strong>Zoom Special Lectures</strong> — Mini talks by current Google & Apple engineers',
      'prog.fa.li1': '12-week intensive program for youth in their 20s–30s',
      'prog.fa.li2': 'Technology & Economy / Education & Culture / Politics & Society tracks',
      'prog.fa.li3': 'Project-based hands-on education (PBL)',
      'prog.fa.li4': 'Achievement showcase & leadership forum',
      'prog.tm.li1': 'AI-integrated lesson design',
      'prog.tm.li2': 'Flipped learning & PBL methodology',
      'prog.tm.li3': 'Global education training',
      'prog.re.li1': 'Educational effectiveness research',
      'prog.re.li2': 'AI education trend analysis',
      'prog.re.li3': 'Open data provision',

      /* ── Countries ── */
      'country.us': 'USA', 'country.pl': 'Poland', 'country.lb': 'Lebanon', 'country.np': 'Nepal',

      /* ── Outreach cards ── */
      'out.global.badge': 'TIEUM Youth Volunteers',
      'out.global.h': 'Global Outreach',
      'out.global.sub': 'Educational Service · Cultural Exchange',
      'out.global.p': 'A youth volunteer corps that goes directly to global sites with AI, culture, and arts education. In 2024, they shared generative AI, robot coding, K-POP, and Korean traditional games with Ukrainian refugees in Warsaw, Poland.',
      'out.global.li1': 'Generative AI creative education & robot coding',
      'out.global.li2': 'K-POP dance · rap · musical',
      'out.global.li3': 'Korean traditional play cultural exchange',
      'out.global.li4': 'Pre-training → Field activities → Presentation & closing ceremony',
      'out.gyeon.badge': 'TIEUM Academy',
      'out.gyeon.h': 'Gyeonmidan × Pro-Life',
      'out.gyeon.sub': 'Global Project Academy',
      'out.gyeon.p': 'A youth academy that builds conservative and bioethical values, with 4 global teams (politicians, lawyers, media, NGO) carrying out real-world projects alongside March for Life in Washington, DC.',
      'out.gyeon.li1': 'Core education — conservatism, bioethics, law, natural science',
      'out.gyeon.li2': '4 global project teams (1:1 coach accompaniment)',
      'out.gyeon.li3': 'Washington DC field experience · March for Life participation',
      'out.gyeon.li4': 'Presentation & graduation ceremony after deliverable production',
      'out.country.lb': '🇱🇧 Lebanon', 'out.country.pl': '🇵🇱 Poland', 'out.country.np': '🇳🇵 Nepal',
      'out.prolife2.badge': '2026 Completed · 24 Graduates',
      'out.prolife2.h': 'Youth Pro-Life Vision Camp — 2nd Cohort',
      'out.prolife2.sub': '2nd Cohort · Vision Camp Awakening Calling',
      'out.prolife2.p': 'A US Vision Camp that raises youth leaders to lead discourse on the value of life with a balanced worldview. Comprised of 4 domestic pre-training sessions + 11 nights/12 days in the US (California · Washington DC), with 24 graduates.',
      'out.prolife2.li1': 'Natural science exploration camp — California (Grand Canyon · Death Valley)',
      'out.prolife2.li2': 'Values education camp — Washington DC · March for Life',
      'out.prolife2.li3': 'Opinion Leader · Fundraising · Storyteller · Changemaker 4-team PBL',
      'out.prolife2.li4': 'Presentation & graduation ceremony after returning (Feb 22, 2026)',

      /* ── History ── */
      'hist.2020.h': 'Lebanon Outreach', 'hist.2020.p': 'Launched outreach activities in Lebanon to build a global network.',
      'hist.2021.h': 'TIEUM Nonprofit Foundation Established', 'hist.2021.p': 'Officially established April 21 as a nonprofit corporation for educational programs. Headquarters opened in Seocho-gu, Seoul.',
      'hist.2023.h': 'Lebanon Outreach', 'hist.2023.p': 'Resumed and expanded field activities in Lebanon to strengthen regional impact.',
      'hist.2024a.h': 'TFM Academy Launch', 'hist.2024a.p': 'January — Official launch of the Future Makers Academy, the flagship program for AI, coding, and creative education.',
      'hist.2024b.h': '1st Advisory Committee Appointment Ceremony', 'hist.2024b.p': 'February — Official appointment ceremony for TIEUM\'s 1st Advisory Committee members.',
      'hist.2024c.h': 'Poland & Nepal Outreach', 'hist.2024c.p': 'Poland outreach (Feb–Mar) and Nepal school visits (June).',
      'hist.2025a.h': 'Youth Pro-Life 1st Cohort — US Vision Camp', 'hist.2025a.p': 'Operated the 1st cohort Youth Pro-Life training program through a US Vision Camp.',
      'hist.2025b.h': 'PAS (Pacific Asia Society) Collaboration', 'hist.2025b.p': 'Educational cooperation activities with the Pacific Asia Society.',
      'hist.2026a.h': 'Youth Pro-Life 2nd Cohort — US Vision Camp', 'hist.2026a.p': 'Operated the 2nd cohort Youth Pro-Life training program through a US Vision Camp.',
      'hist.2026b.h': '1st Future Academy', 'hist.2026b.p': 'Collaborative project with the Korea History and Future Foundation.',

      /* ── News cards ── */
      'news.badge.nl': '📮 Newsletter', 'news.nl.h': 'TIEUM Monthly Newsletter',
      'news.nl.p': 'We share TIEUM\'s journey over the past month with our supporters — field news from educational activities, camp preparation stories, and gratitude reports every month.',
      'news.nl.time': 'Monthly', 'news.nl.link': 'View All →',
      'news.badge.out': 'Outreach', 'news.out.h': 'Southeast Asia Educational Activity Report',
      'news.out.p': 'The TIEUM Global team successfully completed AI education activities in 3 Southeast Asian countries.',
      'news.badge.ac': 'Academy', 'news.ac.h': 'Teaching Methodology Workshop — AI Lesson Design Special Lecture',
      'news.ac.p': 'A special lecture on AI-integrated lesson design for active teachers and educators will be held on June 21. Pre-registration is open.',

      /* ── Support ── */
      'sup.par.li1': 'Corporate social responsibility (CSR) linkage',
      'sup.par.li2': 'Joint development of AI education content',
      'sup.par.li3': 'Employee volunteer programs',
      'sup.reg.btn': 'Give Monthly', 'sup.one.btn': 'Give Now',
      'amt.custom': 'Custom', 'amt.placeholder': 'Enter amount (KRW)',
      'news.badge.camp': 'Youth Camp',
      'news.camp.h': '双核觉醒 — Jeju Camp for Korean-Chinese Youth',
      'news.camp.p': 'A 3-night/4-day immersive identity & AI career camp for Korean-Chinese youth (grades 4–9) from Yanji, China. Six connecting programs designed to transform dual identity into strength.',
      'news.camp.li1': '📅 July 13–16, 2026 (Mon–Thu) · 3 nights / 4 days',
      'news.camp.li2': '📍 Jeju Island (Pearl Hotel + SW Future Filling AI Education Campus)',
      'news.camp.li3': '👦 Grades 4–9 · First 25 applicants',
      'news.camp.li4': '🎓 Head Coach: Bongik Ko (TMD Education Group · TIEUM Chairman)',
      /* ── LMS ── */
      'lms.nav.home': 'Home', 'lms.nav.teaching': 'Teaching', 'lms.nav.research': 'Research · Data',
      'lms.nav.lms': 'Learning Center', 'lms.nav.pbl': 'PBL Workspace', 'lms.nav.nl': 'Newsletter',
      'lms.hero.badge': 'TIEUM Learning Center', 'lms.hero.title': 'Professional Development<br>for the AI Era',
      'lms.hero.sub': 'An online advanced learning platform for teachers, educators, and field professionals',
      'lms.stat.courses': 'Courses', 'lms.stat.lessons': 'Lessons', 'lms.stat.weeks': 'Weeks',
      'lms.lock.title': 'Enrollment Required',
      'lms.lock.desc': 'TIEUM Learning Center courses are available after enrollment.<br>Click the button below to enroll, or log in if you\'re already enrolled.',
      'lms.lock.btn': 'Enroll / Log In',
      'lms.filter.all': 'All', 'lms.filter.teaching': 'Teaching Methods',
      'lms.filter.research': 'Research · Data', 'lms.filter.leadership': 'TMD Leadership',
      'lms.login.title': 'TIEUM Learning Center', 'lms.login.desc': 'Enter your name and email along with your enrollment code.',
      'lms.login.name': 'Name <span class="req">*</span>', 'lms.login.email': 'Email',
      'lms.login.code': 'Enrollment Code <span class="req">*</span>', 'lms.login.code.ph': 'Enter enrollment code',
      'lms.login.hint': 'Contact a TIEUM staff member for your enrollment code.<br><a href="mailto:johnchoi&#64;tieum&#46;org">johnchoi&#64;tieum&#46;org</a>',
      'lms.login.err': 'The enrollment code is incorrect.',
      'lms.footer.copy': '© 2026 TIEUM Nonprofit Foundation. All rights reserved. · <a href="terms.html" style="color:inherit;opacity:.7;text-decoration:underline;">Terms of Use</a> · <a href="privacy.html" style="color:inherit;opacity:.7;text-decoration:underline;">Privacy Policy</a> · <a href="copyright.html" style="color:inherit;text-decoration:underline;">Copyright Policy</a>',
      /* ── Player ── */
      'pl.back': '<span class="player-back-arrow">‹</span> Course List',
      'pl.logout': 'Log Out',
      'pl.prog.label': 'Overall Progress',
      'pl.sidebar.toggle': '☰ Lesson List',
      'pl.prev': '‹ Previous', 'pl.complete': 'Complete &amp; Next', 'pl.next': 'Next ›',
      'pl.journal.title': 'Learning Journal',
      'pl.journal.write.label': 'Record your reflection for this lesson',
      'pl.journal.unsaved': 'Not saved',
      'pl.journal.all': '📓 View All Journals',
      'pl.journal.new': '+ Add New Entry',
      'pl.journal.save': '💾 Save',
      'pl.journal.ph': 'Freely record what you learned, felt, questions, and ideas for field application...',
      'pl.journal.modal.title': '📓 My Learning Journal',
      'pl.journal.modal.sub': 'According to Mezirow\'s Transformative Learning Theory, recorded reflections become seeds for new perspectives.',
      'pl.cert.title': 'Congratulations on Completing the Course!',
      'pl.cert.note': 'You have completed all lessons. Great work! 🎉',
      'pl.cert.back': 'Back to Course List',
      'pl.ai.fab': 'AI Assistant',
      'pl.ai.name': 'TiBot · Scaffolding AI',
      'pl.ai.ctx': 'Please select a lesson',
      'pl.ai.footer': 'Scaffolding based on Vygotsky ZPD · Mezirow Transformative Learning Theory',
      'pl.ai.ph': 'Ask anything freely...',

      /* ── Subpage: news.html ── */
      'news.page.title': 'TIEUM News',
      'news.page.sub':   'Find all the latest news from TIEUM — teaching updates, research data, the Learning Center, and newsletters in one place.',
      'news.home': 'Home',

      /* ── Subpage: teaching.html ── */
      'teach.page.title': 'Teaching Methodology',
      'teach.page.sub':   'Innovative teaching methodology training programs for effective education in the AI era.',

      /* ── Subpage: research.html ── */
      'res.page.title': 'Research &amp; Data',
      'res.page.sub':   'TIEUM\'s data-driven research measuring and improving the effectiveness of AI education.',

      /* ── Subpage: newsletter.html ── */
      'nl.page.title': 'Newsletter',
      'nl.page.sub':   'Monthly updates on TIEUM\'s educational activities.',

      /* ── Subpage: lms.html ── */
      'lms.page.title': 'Learning Center',
      'lms.page.sub':   'TIEUM\'s online learning platform.',

      /* ── Subpage: outreach ── */
      'out.page.global.title': 'Global Outreach',
      'out.page.gyeon.title':  'Gyeonmidan × Pro-Life',
      'out.page.prolife.title':'Youth Pro-Life Vision Camp',
      'out.page.global2.title':'TIEUM Global',
      'out.page.vision.title': 'Vision Camp',

      /* ── about.html ── */
      'nav.home_about':       'Home',
      'about.page.h1':        'TIEUM Nonprofit Foundation',
      'about.page.sub':       'A nonprofit educational organization connecting AI technology with educational values to empower the next generation.',
      'about.tab1':           "Director's Message",
      'about.greeting.title': 'New Possibilities for Education for the Next Generation',
      'about.sg.name':        'Dr. Juan Choi',
      'team.sg.badge':        'Ed.D.',
      'about.sg.title':       'Executive Director, TIEUM Nonprofit Foundation',
      'about.bullet1':        'Cultivating youth leaders equipped with future competencies for the AI era.',
      'about.bullet2':        'Operating a global volunteer corps that goes directly to the field to practice sharing.',
      'about.bullet3':        'Continuing research and workshops to strengthen the capabilities of educators.',
      'about.greeting.p0':    'Thank you for visiting TIEUM Nonprofit Foundation.',
      'about.greeting.sub1':  'Education That Changes the World',
      'about.greeting.sub2':  'Change We Create Together',
      'about.greeting.closing':'Sincerely, Dr. Juan Choi — Executive Director, TIEUM Nonprofit Foundation',
      'about.vision.title':   'Vision &amp; Mission',
      'about.vision.sub':     'The direction and values pursued by TIEUM Nonprofit Foundation.',
      'about.vision.h1':      'Vision',
      'about.vision.h2':      'Mission',
      'about.vision.h3':      'Core Values',
      'about.hist.title':     'History',
      'about.hist.sub':       "TIEUM's journey over the years.",
      'about.team.title':     'Our Team',
      'about.loc.title':      'How to Get Here',
      'about.foot.name':      'TIEUM Nonprofit Foundation',
      'about.foot.desc':      'A nonprofit educational organization connecting AI technology with educational values to empower the next generation.',

      /* ── teaching.html extras ── */
      'teach.prog.tag':       'Program Overview',
      'teach.prog.title':     'Teaching<br/>Methodology',
      'teach.board.tag':      'Resources &amp; Notices',
      'teach.board.title':    'Teaching Methodology Board',
      'teach.tab.notice':     'Notices',
      'teach.tab.resource':   'Resources',
      'teach.tab.review':     'Reviews',
      /* ── standalone page headings ── */
      'prog.fa.h_plain':      '1st Future Academy',
    }
  };

  /* ── Helpers ─────────────────────────────────────── */
  function getLang() {
    return localStorage.getItem('tieum-lang') || 'ko';
  }

  function applyText(el, value, isHtml) {
    if (!el) return;
    if (isHtml) el.innerHTML = value;
    else el.textContent = value;
  }

  /* ── Nav & shared selector translations ─────────── */
  /* href 기반 매핑 — 메뉴 순서가 바뀌어도 라벨이 어긋나지 않음 */
  function navKeyForHref(href) {
    if (!href) return null;
    const hashIdx = href.indexOf('#');
    const hash = hashIdx >= 0 ? href.slice(hashIdx) : '';
    if (hash === '#about')    return 'nav.about';
    if (hash === '#academy')  return 'nav.academy';
    if (hash === '#programs') return 'prog.title';
    if (hash === '#outreach') return 'nav.outreach';
    if (hash === '#support')  return 'nav.support';
    if (href.indexOf('about.html')      >= 0) return 'nav.about';
    if (href.indexOf('teaching.html')   >= 0) return 'teach.page.title';
    if (href.indexOf('lms.html')        >= 0) return 'nav.lms';
    if (href.indexOf('newsletter.html') >= 0) return 'nav.newsletter';
    if (href.indexOf('news.html')       >= 0) return 'nav.news';
    if (href === 'index.html')                return 'nav.home_about';
    return null;
  }

  function applyNav(lang) {
    const t = T[lang];

    /* Nav links — matched by href, not position */
    document.querySelectorAll('.nav-links .nav-item > a').forEach(el => {
      const key = navKeyForHref(el.getAttribute('href'));
      if (key && t[key] !== undefined) el.textContent = t[key];
    });

    /* Membership & donate buttons */
    document.querySelectorAll('.btn-membership').forEach(el => el.textContent = t['nav.membership']);
    document.querySelectorAll('.btn-donate').forEach(el => el.textContent = t['nav.donate']);
    document.querySelectorAll('.btn-lms-shortcut').forEach(el => el.textContent = t['nav.lms']);

    /* Mega menu columns — identified by link content, not position,
       so adding/removing/reordering columns never causes label↔link drift. */
    document.querySelectorAll('.mega-col').forEach(col => {
      switch (megaColType(col)) {
        case 'about':
          setText(col, '.mega-col-title', t['mega.col1.title']);
          setLinks(col, [t['mega.col1.l1'],t['mega.col1.l2'],t['mega.col1.l3'],t['mega.col1.l4'],t['mega.col1.l5'],t['mega.col1.l6'],t['mega.col1.l7']]);
          break;
        case 'academy':
          setText(col, '.mega-col-title', t['mega.col2.title']);
          setLinks(col, [t['mega.col2.l1'],t['mega.col2.l2'],t['mega.col2.l3'],t['mega.col2.l4'],t['mega.col2.l5'],t['mega.col2.l6']]);
          break;
        case 'outreach':
          setText(col, '.mega-col-title', t['mega.col3.title']);
          setLinks(col, [t['mega.col3.l1'],t['mega.col3.l2'],t['mega.col3.l3'],t['mega.col3.l4'],t['mega.col3.l5']]);
          break;
        case 'lms':
          setText(col, '.mega-col-title', t['mega.lms.title']);
          setLinks(col, [t['mega.lms.l1'],t['mega.lms.l2'],t['mega.lms.l3']]);
          break;
        case 'news':
          setText(col, '.mega-col-title', t['mega.col4.title']);
          setLinks(col, [t['mega.col4.l1'],t['mega.col4.l2'],t['mega.col4.l3']]);
          break;
        case 'newsletter': {
          const titles = col.querySelectorAll('.mega-col-title');
          if (titles[0]) titles[0].textContent = t['mega.col5.title1'];
          if (titles[1]) titles[1].textContent = t['mega.col5.title2'];
          const uls = col.querySelectorAll('ul');
          if (uls[0]) setUlLinks(uls[0], [t['mega.col5.l1']]);
          if (uls[1]) setUlLinks(uls[1], [t['mega.col5.l2'],t['mega.col5.l3'],t['mega.col5.l4']]);
          break;
        }
      }
    });
  }

  /* Classify a mega-col by the href of its first link. */
  function megaColType(col) {
    const a = col.querySelector('ul li a');
    if (!a) return null;
    const href = a.getAttribute('href') || '';
    if (href.indexOf('lms') >= 0)            return 'lms';
    if (href.indexOf('outreach') >= 0)       return 'outreach';
    if (href.indexOf('newsletter') >= 0)     return 'newsletter';
    if (href.indexOf('news.html') >= 0)      return 'news';
    if (href.indexOf('#academy') >= 0 ||
        href.indexOf('teaching') >= 0)       return 'academy';
    if (href.indexOf('#about') >= 0 ||
        href.indexOf('about.html') >= 0 ||
        href.indexOf('index.html') >= 0)     return 'about';
    return null;
  }

  function setText(container, selector, value) {
    const el = container.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setLinks(container, labels) {
    const links = container.querySelectorAll('ul li a');
    links.forEach((a, i) => { if (labels[i] !== undefined) a.innerHTML = labels[i]; });
  }

  function setUlLinks(ul, labels) {
    const links = ul.querySelectorAll('li a');
    links.forEach((a, i) => { if (labels[i] !== undefined) a.textContent = labels[i]; });
  }

  /* ── data-i18n attribute translations ───────────── */
  function applyDataI18n(lang) {
    const t = T[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });
  }

  /* ── Update lang button active states ───────────── */
  function updateLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('lang-btn-active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang;
  }

  /* ── LMS-specific nav (main-nav class) ──────────── */
  function applyLmsNav(lang) {
    const t = T[lang];
    const navLinks = document.querySelectorAll('.main-nav a');
    const lmsKeys = ['lms.nav.home','lms.nav.teaching','lms.nav.research','lms.nav.lms','lms.nav.pbl','lms.nav.nl'];
    navLinks.forEach((el, i) => { if (lmsKeys[i]) el.textContent = t[lmsKeys[i]]; });
  }

  /* ── Sub-page footer/header translation ─────────── */
  function applySubPageCommon(lang) {
    const t = T[lang];
    const isEn = lang === 'en';

    /* Footer elements on sub-pages (not using data-i18n) */
    document.querySelectorAll('.footer-tagline').forEach(el => {
      if (!el.hasAttribute('data-i18n')) el.textContent = t['foot.tagline'];
    });
    document.querySelectorAll('.footer-desc').forEach(el => {
      if (!el.hasAttribute('data-i18n')) el.textContent = t['foot.desc'];
    });

    /* Footer copyright / registration lines */
    document.querySelectorAll('.footer-copy, .footer-bottom p:first-child').forEach(el => {
      if (!el.hasAttribute('data-i18n')) el.innerHTML = t['foot.copy'];
    });

    /* Breadcrumb home link */
    document.querySelectorAll('.breadcrumb a[href="index.html"]').forEach(el => {
      el.textContent = isEn ? 'Home' : '홈';
    });

    /* Sub-page nav donate / lms buttons */
    document.querySelectorAll('.btn-donate').forEach(el => {
      if (!el.hasAttribute('data-i18n')) el.textContent = t['nav.donate'];
    });
    document.querySelectorAll('.btn-lms-shortcut').forEach(el => {
      if (!el.hasAttribute('data-i18n')) el.textContent = t['nav.lms'];
    });

    /* Sub-page standalone nav links — matched by href, not position */
    document.querySelectorAll('.nav-links .nav-item > a').forEach(el => {
      if (el.hasAttribute('data-i18n')) return;
      const key = navKeyForHref(el.getAttribute('href'));
      if (key && t[key] !== undefined) el.textContent = t[key];
    });

    /* Standalone page: fm-mobile-title gets translated via data-i18n if set */
    /* Lang button active state (standalone pages) */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.style.fontWeight = btn.getAttribute('data-lang') === lang ? '700' : '400';
      btn.style.color = btn.getAttribute('data-lang') === lang ? '#1b4f8a' : '#888';
    });

    /* Update html lang */
    document.documentElement.lang = isEn ? 'en' : 'ko';
  }

  /* ── Re-render LMS course grid on lang switch ────── */
  function rerenderLms() {
    /* lms.html provides a hook */
    if (typeof window.lmsOnLangChange === 'function') {
      window.lmsOnLangChange();
      return;
    }
    /* fallback: direct grid re-render */
    if (typeof renderCourseGrid === 'function' && document.getElementById('lmsCatalog') &&
        document.getElementById('lmsCatalog').style.display !== 'none') {
      var activeBtn = document.querySelector('.lms-filter-btn.active');
      var cat = activeBtn ? activeBtn.getAttribute('data-cat') : 'all';
      renderCourseGrid(cat);
    }
  }

  /* ── Text-map engine: translates any Korean text node via KO2EN map ──
     Covers static HTML and JS-rendered content (LMS, news, etc.)
     without needing data-i18n on every element. */
  var koStore = new WeakMap();
  function applyTextMap(lang) {
    if (typeof window.KO2EN === 'undefined' || !document.body) return;
    var MAP = window.KO2EN;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      var p = node.parentNode;
      if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') continue;
      if (lang === 'en') {
        var key = node.nodeValue.replace(/\s+/g, ' ').trim();
        if (key && Object.prototype.hasOwnProperty.call(MAP, key)) {
          if (!koStore.has(node)) koStore.set(node, node.nodeValue);
          /* preserve leading/trailing whitespace */
          var m = node.nodeValue.match(/^(\s*)[\s\S]*?(\s*)$/);
          node.nodeValue = (m ? m[1] : '') + MAP[key] + (m ? m[2] : '');
        }
      } else if (koStore.has(node)) {
        node.nodeValue = koStore.get(node);
        koStore.delete(node);
      }
    }
    /* placeholders */
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function (el) {
      if (lang === 'en') {
        var k = el.placeholder.replace(/\s+/g, ' ').trim();
        if (k && Object.prototype.hasOwnProperty.call(MAP, k)) {
          if (!el.dataset.koPh) el.dataset.koPh = el.placeholder;
          el.placeholder = MAP[k];
        }
      } else if (el.dataset.koPh) {
        el.placeholder = el.dataset.koPh;
        delete el.dataset.koPh;
      }
    });
    /* document title */
    if (lang === 'en') {
      var tk = document.title.replace(/\s+/g, ' ').trim();
      if (Object.prototype.hasOwnProperty.call(MAP, tk)) {
        if (!window.__koTitle) window.__koTitle = document.title;
        document.title = MAP[tk];
      }
    } else if (window.__koTitle) {
      document.title = window.__koTitle;
      window.__koTitle = null;
    }
  }

  /* Re-apply on dynamically rendered content (LMS player, course grid…) */
  var tmTimer = null;
  var tmObserver = null;
  function watchTextMap() {
    if (tmObserver || !document.body || typeof MutationObserver === 'undefined') return;
    tmObserver = new MutationObserver(function () {
      if (getLang() !== 'en') return;
      clearTimeout(tmTimer);
      tmTimer = setTimeout(function () { applyTextMap('en'); }, 50);
    });
    tmObserver.observe(document.body, { childList: true, subtree: true });
  }

  /* ── Public: getLang (exposed globally) ─────────── */
  window.getLang = getLang;

  /* ── Public: setLang ─────────────────────────────── */
  window.setLang = function (lang) {
    if (!T[lang]) return;
    localStorage.setItem('tieum-lang', lang);
    applyNav(lang);
    applyLmsNav(lang);
    applyDataI18n(lang);
    applySubPageCommon(lang);
    applyTextMap(lang);
    watchTextMap();
    updateLangButtons(lang);
    rerenderLms();
    /* Update html lang attribute for accessibility */
    document.documentElement.lang = lang === 'en' ? 'en' : 'ko';
  };

  /* ── Init on DOM ready ───────────────────────────── */
  function init() {
    const lang = getLang();
    applyNav(lang);
    applyDataI18n(lang);
    applySubPageCommon(lang);
    applyTextMap(lang);
    watchTextMap();
    updateLangButtons(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
