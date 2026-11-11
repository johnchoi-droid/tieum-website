/**
 * 티움 학술 연구(논문) 상세 요약글 — research.html 게시판 맨 위에 고정
 *
 * research.html 안의 window.BOARD_POSTS 배열은 큐레이션 프로그램(tieum-curation/publisher.py)이
 * 매주 통째로 다시 쓰기 때문에, 논문 글을 거기에 넣으면 다음 갱신 때 사라진다(2026-08-03 실제 유실).
 * 그래서 논문 글은 이 파일에 따로 두고, board.js보다 먼저 불러 BOARD_POSTS 앞에 붙인다.
 *
 * 새 논문 추가: 아래 배열 맨 앞에 글 하나 추가 + research.html #papers 에 .paper-card 하나 추가
 * (버튼은 onclick="bOpenPost('<id>')"). 본문 소제목은 <h4>만 — <h3>을 쓰면 board.js가 글을 쪼갠다.
 */
(function () {
  var PAPER_POSTS = [
    {
      id: 'paper-koedus85', pin: true, category: 'research', categoryLabel: '연구',
      title: `[학술논문] AI 활용 디자인씽킹 프로그램 참여 청년의 미래인식·비판적 사고·문제해결력 변화와 변혁적 리더십·AI 자기효능감 — 에듀테인먼트연구 8권 5호`,
      date: '2026.10.23', author: '티움 사무국', views: 0,
      content: `
<div style="background:#f7f9fc;border-left:4px solid #1B4F8A;border-radius:8px;padding:20px 22px;margin-bottom:28px;">
  <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#1B4F8A;letter-spacing:.02em;">학술지 게재 논문 · 한국에듀테인먼트학회</p>
  <p style="margin:0;line-height:2;font-size:14.5px;color:#4a5568;">
    <strong style="color:#1a1a2e;">게재지</strong> &nbsp;에듀테인먼트연구 제8권 제5호 (2026), 463–482<br/>
    <strong style="color:#1a1a2e;">저자</strong> &nbsp;김수연(성결대학교) · 고봉익(사단법인 티움 이사장) · 서응교(단국대학교, 교신저자)<br/>
    <strong style="color:#1a1a2e;">ISSN</strong> &nbsp;pISSN 2671-9789 / eISSN 2672-0329<br/>
    <strong style="color:#1a1a2e;">DOI</strong> &nbsp;<a href="https://doi.org/10.36237/koedus.8.5.463" target="_blank" rel="noopener">10.36237/koedus.8.5.463 ↗</a><br/>
    <strong style="color:#1a1a2e;">심사</strong> &nbsp;2026.10.10 투고 · 10.17 심사 · 10.22 수정완료 · 10.23 게재확정
  </p>
</div>

<h4>📌 한 줄 핵심</h4>
<p>스스로를 <strong>변화를 이끄는 리더</strong>로 인식하는 청년일수록 생성형 AI를 잘 다룰 수 있다는 <strong>자신감(AI 자기효능감)</strong>이 뚜렷하게 높았습니다. AI 역량은 도구 사용법만으로 설명되지 않았습니다.</p>

<h4>🎯 왜 이 연구를 했나</h4>
<p>생성형 AI가 학습과 일의 방식을 빠르게 바꾸면서, 이제는 AI 도구를 쓸 줄 아는 것을 넘어 <strong>미래를 내다보는 힘</strong>, AI가 내놓은 결과를 <strong>비판적으로 검토하는 태도</strong>, 그리고 <strong>문제를 실제로 풀어내는 힘</strong>이 함께 요구되고 있습니다. 이 연구는 디자인씽킹의 각 단계에 AI를 체계적으로 넣은 프로그램이 이런 역량에 어떤 변화를 가져오는지, 그리고 학습자의 리더십 성향이 AI 활용 자신감과 어떻게 연결되는지를 살펴보았습니다.</p>

<h4>🧩 어떤 프로그램이었나 — 제1기 미래아카데미</h4>
<p>2026년 6월 13일부터 7월 18일까지 6주간 매주 토요일, 재단법인 대한민국역사와미래가 주최하고 사단법인 티움이 주관한 미래 리더 양성 과정인 <strong>미래아카데미 세미나</strong>입니다. 하루 4시간씩 총 24시간 동안, 참가자들은 조를 이루어 우리 사회의 실제 문제를 리더의 관점에서 다뤘습니다.</p>
<ul>
<li><strong>공감</strong> — 문제 상황과 자료를 탐색하고, 손으로 스케치한 페르소나를 AI 이미지로 표현</li>
<li><strong>문제 정의</strong> — 정의한 문제 문장을 이미지·영상으로 시각화</li>
<li><strong>아이디어화</strong> — 브레인스토밍으로 나온 해결 아이디어를 이미지·영상으로 표현</li>
<li><strong>프로토타입</strong> — 아이디어를 영상 콘텐츠, 책자, 웹사이트로 구현</li>
<li><strong>테스트</strong> — 피드백을 바탕으로 결과물을 수정·보완</li>
</ul>
<p style="color:#5e6b7d;font-size:14px;">활용한 AI 도구 — ChatGPT, Gemini, Claude(자료 탐색) · Genspark, NotebookLM, Canva, HeyGen, Filmora(이미지·영상·책자 제작) · Google Antigravity(웹 제작)<br/>
조별로 다룬 문제 예시 — "20~40대 청년·중년층의 결혼 및 출산 기피", "지방도시와 수도권 신도시 간 취업 기회 격차", "산업화·도시화에 따른 지역 간 발전 격차"</p>

<h4>📐 무엇을 어떻게 측정했나</h4>
<p>참여자 23명 중 설문에 성실히 응답한 20~30대 <strong>15명</strong>(학생 6명, 교육직·사무경영직·전문직·디자인·IT 직군, 취업준비생 등)을 대상으로 프로그램 시작 전과 종료 후 같은 문항으로 설문을 실시했습니다. 15명 중 13명은 디자인씽킹 프로그램이 처음이었습니다. SPSS 25로 대응표본 t-검정과 단순회귀분석을 진행했습니다.</p>
<ul>
<li><strong>미래인식</strong> — 미래 인식 척도(Lalot 외) 4문항 · 신뢰도 α = .885</li>
<li><strong>AI 활용 비판적 사고성향</strong> — AI 활용 비판적 사고 척도(Lau 외) 4문항 · α = .904</li>
<li><strong>문제해결력</strong> — 대학생 문제해결 척도(Ventura-León 외) 4문항 · α = .828</li>
<li><strong>변혁적 리더십</strong> — GTL 척도(Carless 외)를 자기평가형으로 수정한 5문항 · α = .911</li>
<li><strong>생성형 AI 자기효능감</strong> — 생성형 AI 역량 자기효능감 척도(Xia 외) 3문항 · α = .931</li>
</ul>

<h4>📊 연구 결과</h4>
<p><strong>① 미래인식, 비판적 사고성향, 문제해결력의 평균이 모두 올랐습니다.</strong><br/>
미래인식 3.91 → 4.21, AI 활용 비판적 사고성향 3.75 → 4.03, 문제해결력 3.66 → 4.01(5점 척도). 세 영역 모두 같은 방향으로 움직였지만, 참여 인원이 적어 통계적으로 유의한 차이로는 확인되지 않았습니다(p = .167, .249, .143).</p>
<p><strong>② 변혁적 리더십은 AI 자기효능감을 강하게 설명했습니다.</strong><br/>
회귀모형이 유의했고(F = 15.32, p = .002), 변혁적 리더십이 AI 자기효능감 차이의 약 <strong>54%</strong>를 설명했습니다(R² = .541). 변혁적 리더십이 1점 높으면 AI 자기효능감은 1.29점 높았습니다(β = .74).</p>

<h4>🧭 이 결과가 현장에 주는 의미</h4>
<ul>
<li><strong>AI 교육은 도구 사용법에서 끝나면 안 됩니다.</strong> 비전을 세우고, 기존 방식에 질문을 던지고, 함께하는 사람을 세우려는 태도를 가진 학습자가 새 기술 앞에서도 더 자신 있게 움직였습니다. 티움이 AI 교육을 리더십·인성 교육과 함께 설계해 온 방향과 맞닿아 있습니다.</li>
<li><strong>학습자가 주도하는 환경이 필요합니다.</strong> 저자들은 학습자가 새 기술을 적극적으로 탐색하고, 자기 아이디어로 문제해결 과정을 이끌 수 있는 학습 환경을 만드는 것이 중요하다고 제안합니다.</li>
<li><strong>AI 교육의 성과는 넓게 재야 합니다.</strong> 도구 활용 능력만이 아니라 미래인식, 비판적 사고, 문제해결력 같은 미래역량을 함께 측정하도록 프로그램을 설계할 필요가 있습니다.</li>
</ul>

<div style="background:#fff8ec;border:1px solid #f0d9a8;border-radius:8px;padding:16px 18px;margin:24px 0;">
  <p style="margin:0;font-size:14px;line-height:1.85;color:#4a5568;"><strong style="color:#1a1a2e;">⚠️ 해석 시 유의점</strong><br/>
  참여자 15명의 소규모 연구이고 비교집단이 없어, 결과를 일반화하거나 프로그램 효과로 단정하기는 어렵습니다. 변혁적 리더십과 AI 자기효능감의 관계는 프로그램 종료 후 같은 시점에 측정한 값의 관계이므로 인과관계로 읽기보다는 연관성으로 보는 것이 적절합니다. 저자들도 후속 연구에서 비교집단 설정과 학습동기 등 다른 변인을 함께 살펴볼 필요가 있다고 밝히고 있습니다.</p>
</div>

<h4>🔑 주요어</h4>
<p>디자인씽킹 · AI 활용 수업 · 미래인식 · AI 활용 비판적 사고성향 · 문제해결력 · 변혁적 리더십 · 인공지능 자기효능감</p>

<h4>📚 인용 정보</h4>
<p style="font-size:14px;color:#4a5568;line-height:1.9;">김수연, 고봉익, 서응교 (2026). AI 활용 디자인씽킹 프로그램 참여자의 미래인식, AI 활용 비판적 사고성향 및 문제해결력의 변화와 변혁적 리더십 및 인공지능 자기효능감 간의 관계 탐색. <em>에듀테인먼트연구, 8</em>(5), 463–482. https://doi.org/10.36237/koedus.8.5.463</p>

<p style="margin-top:22px;">📄 <a href="assets/papers/koedus-2026-8-5-463.pdf" target="_blank" rel="noopener">논문 전문 PDF 보기 ↗</a> &nbsp;·&nbsp; 🔗 <a href="https://doi.org/10.36237/koedus.8.5.463" target="_blank" rel="noopener">DOI로 학술지에서 보기 ↗</a></p>

<hr/>
<p style="color:#5e6b7d;font-size:13.5px;line-height:1.85;">※ 본 연구는 재단법인 대한민국역사와미래가 주최하고 사단법인 티움이 주관한 제1기 미래아카데미 세미나 참여자를 대상으로 수행되었습니다.<br/>
※ 위 내용은 티움 사무국이 작성한 요약이며, 정확한 내용은 반드시 원문을 확인해 주시기 바랍니다.</p>
      `,
    },
    {
      id: 'paper-jcek78', pin: true, category: 'research', categoryLabel: '연구',
      title: `[학술논문] 감사 성향이 청소년의 컴퓨팅 사고력·디지털 효능감에 미치는 영향 — 기독교교육논총 제78집`,
      date: '2024.06.30', author: '티움 사무국', views: 0,
      content: `
<div style="background:#f7f9fc;border-left:4px solid #1B4F8A;border-radius:8px;padding:20px 22px;margin-bottom:28px;">
  <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#1B4F8A;letter-spacing:.02em;">학술지 게재 논문 · KCI 등재</p>
  <p style="margin:0;line-height:2;font-size:14.5px;color:#4a5568;">
    <strong style="color:#1a1a2e;">게재지</strong> &nbsp;기독교교육논총 제78집 (2024.06.30), 231–262<br/>
    <strong style="color:#1a1a2e;">저자</strong> &nbsp;김수연(중앙대학교) · 고봉익(사단법인 티움 이사장) · 서응교(단국대학교, 교신저자)<br/>
    <strong style="color:#1a1a2e;">ISSN</strong> &nbsp;pISSN 1229-781X / eISSN 2671-5759<br/>
    <strong style="color:#1a1a2e;">DOI</strong> &nbsp;<a href="https://doi.org/10.17968/jcek.2024..78.009" target="_blank" rel="noopener">10.17968/jcek.2024..78.009 ↗</a><br/>
    <strong style="color:#1a1a2e;">심사</strong> &nbsp;2024.05.19 접수 · 06.28 심사완료 · 06.29 게재확정
  </p>
</div>

<h4>📌 한 줄 핵심</h4>
<p>감사할 줄 아는 청소년일수록 문제를 논리적으로 풀어내는 <strong>컴퓨팅 사고력</strong>이 높았고, 디지털 기기를 다루는 <strong>자신감</strong>도 높았습니다. 인성과 디지털 역량은 따로 노는 것이 아니었습니다.</p>

<h4>🎯 왜 이 연구를 했나</h4>
<p>AI 디지털 교과서 도입을 앞두고 "학생에게 어떤 디지털 역량을 길러줄 것인가"라는 논의는 활발했지만, 정작 <strong>그 역량을 떠받치는 인성적 태도</strong>에 대한 논의는 부족했습니다. 티움은 디지털 도구를 다루는 기술만으로는 다음 세대를 세울 수 없다고 보았고, <strong>감사(gratitude)</strong>라는 태도가 실제로 학습에 영향을 주는지를 데이터로 확인하고자 했습니다.</p>

<h4>🧩 어떤 프로그램이었나 — 디자인씽킹 4단계</h4>
<p>2024년 1월 20일과 27일, 2주에 걸쳐 진행된 청소년 기독교 프로그램입니다. 참가자들은 <strong>선교지의 실제 문제</strong>를 주제로 6개 조를 이루어 디자인씽킹 단계를 밟았고, 단계마다 다른 디지털 도구를 사용했습니다.</p>
<ul>
<li><strong>1단계 · 공감</strong> — <em>메타버스</em>로 선교지 상황에 몰입하고, 아바타 커스터마이징을 통해 페르소나 캐릭터를 제작</li>
<li><strong>2단계 · 문제 정의</strong> — 생성형 AI 플랫폼 <em>뤼튼(wrtn)</em>으로 조별로 정의한 문제를 이미지로 시각화</li>
<li><strong>3단계 · 아이디어 &amp; 프로토타입</strong> — 팀 회의를 거쳐 <em>스크래치</em> 코딩으로 해결책을 직접 구현</li>
<li><strong>4단계 · 테스트</strong> — 조별 발표와 상호 피드백으로 결과물을 다듬음</li>
</ul>
<p style="color:#5e6b7d;font-size:14px;">조별로 정의한 문제 예시 — "얇은 옷과 천막 집이라 난방을 할 수 없다", "땅이 좁아 쓰레기를 처리할 방법이 없다", "선교지 사람들과 언어·문화적 소통이 어렵다", "아이들 주변 시설이 열악해 제대로 된 교육을 받지 못한다", "빈곤하여 의식주를 제공받지 못한다", "위생이 나쁜 난민촌 환경이라 질병에 취약하다"</p>

<h4>📐 무엇을 어떻게 측정했나</h4>
<p>프로그램을 마친 뒤 참여 중·고등학생 <strong>22명</strong>을 대상으로 사후 설문을 실시하고, SPSS 25.0으로 단순회귀분석을 진행했습니다. 개방형 문항은 별도로 질적 코딩해 학습자 인식을 분석했습니다.</p>
<ul>
<li><strong>감사 성향</strong> — 한국판 감사 질문지(K-GQ-6) 중 3문항 · 5점 척도 · 신뢰도 α = .87</li>
<li><strong>컴퓨팅 사고력</strong> — 문제 이해, 추상화, 알고리즘 절차, 자동화 등 5문항 · α = .70</li>
<li><strong>디지털 효능감</strong> — 자신감 / 친숙도 / 유용성 3개 하위 구인 9문항 · α = .74</li>
</ul>

<h4>📊 연구 결과</h4>
<p><strong>① 감사 성향은 컴퓨팅 사고력을 유의하게 높였습니다.</strong><br/>
회귀모형이 통계적으로 유의했고(F = 4.921, p &lt; .05), 감사 성향이 컴퓨팅 사고력 차이의 약 <strong>19.7%</strong>를 설명했습니다(R² = .197). 감사 성향이 1점 올라가면 컴퓨팅 사고력은 0.394점 올라갔습니다(β = .444, p = .038).</p>
<p><strong>② 감사 성향은 디지털 자신감에 더 크게 작용했습니다.</strong><br/>
모형이 유의했고(F = 11.010, p &lt; .01), 설명력은 약 <strong>35.5%</strong>에 달했습니다(R² = .355). 감사 성향이 1점 올라가면 디지털 자신감은 0.565점 올라갔습니다(β = .596, p = .003).</p>
<p><strong>③ 디지털 친숙도에도 유의한 영향이 있었습니다.</strong></p>
<p><strong>④ 다만 디지털 유용성에는 유의한 영향이 없었습니다.</strong><br/>
"디지털 기기가 삶을 풍요롭게 한다"처럼 <em>도구의 쓸모를 판단하는 인식</em>은 감사 성향으로 설명되지 않았습니다.</p>

<h4>🧭 이 결과가 현장에 주는 의미</h4>
<ul>
<li><strong>인성 교육과 디지털 교육은 두 갈래 길이 아닙니다.</strong> 감사하는 태도를 기르는 일이 곧 문제해결력과 디지털 자신감의 토대를 놓는 일이었습니다. 티움이 신앙·인성과 에듀테크를 한 프로그램에 담아 온 이유가 데이터로 확인된 셈입니다.</li>
<li><strong>"할 수 있다"는 자신감이 가장 크게 움직였습니다.</strong> 디지털 격차는 기기 보유의 문제만이 아니라 <em>두려움</em>의 문제이기도 합니다. 감사 성향이 높은 학생일수록 새로운 도구 앞에서 덜 위축되었습니다.</li>
<li><strong>도구의 유용성 인식은 따로 가르쳐야 합니다.</strong> 감사만으로는 채워지지 않았던 부분으로, 도구가 실제로 무엇을 바꾸는지 경험시키는 별도의 설계가 필요합니다.</li>
</ul>

<div style="background:#fff8ec;border:1px solid #f0d9a8;border-radius:8px;padding:16px 18px;margin:24px 0;">
  <p style="margin:0;font-size:14px;line-height:1.85;color:#4a5568;"><strong style="color:#1a1a2e;">⚠️ 해석 시 유의점</strong><br/>
  이 연구는 참여자 22명의 소규모 사례 연구이며, 사전·사후 비교가 아닌 프로그램 종료 후 단일 시점 측정에 기반합니다. 따라서 결과를 일반화하거나 인과관계로 단정하기보다는, 후속 연구를 위한 기초 자료로 읽는 것이 적절합니다. 논문 저자들도 같은 취지를 밝히고 있습니다.</p>
</div>

<h4>🔑 주요어</h4>
<p>디자인씽킹 · 메타버스 · 생성형 AI · 스크래치 · 기독교 교육 · 기독교 디지털 수업</p>

<h4>📚 인용 정보</h4>
<p style="font-size:14px;color:#4a5568;line-height:1.9;">김수연, 고봉익, 서응교 (2024). 디자인씽킹 기반 단계별 메타버스, 생성형 AI, 스크래치를 활용한 기독교 에듀테크 프로그램에서 학습자의 감사 성향이 컴퓨터 사고력과 디지털 효능감에 미치는 영향. <em>기독교교육논총, 78</em>, 231–262.</p>

<p style="margin-top:22px;">📎 <a href="https://doi.org/10.17968/jcek.2024..78.009" target="_blank" rel="noopener">KCI에서 원문 보기 ↗</a></p>

<hr/>
<p style="color:#5e6b7d;font-size:13.5px;line-height:1.85;">※ 본 연구는 사단법인 티움의 연구비 지원을 통해 수행되었습니다.<br/>
※ 위 내용은 티움 사무국이 작성한 요약이며, 정확한 내용은 반드시 원문을 확인해 주시기 바랍니다. 논문 전문의 저작권은 한국기독교교육학회에 있습니다.</p>
      `,
    },
  ];
  window.BOARD_POSTS = PAPER_POSTS.concat(window.BOARD_POSTS || []);
})();
