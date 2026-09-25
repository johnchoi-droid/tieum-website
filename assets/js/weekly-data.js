/**
 * 티움 위클리 데이터 — 한 주간의 AI·교육 뉴스를 사무국장이 정리한 주간 리포트
 * ─────────────────────────────────────────────────
 * 새 호 추가 방법:
 *   1. 아래 배열 맨 앞에 새 객체를 추가하세요 (최신이 맨 위).
 *   2. id는 'wk-YYYY-WW' 형식(ISO 주차)으로 작성하세요.
 *   3. content 안에 HTML로 본문을 작성하세요. 인라인 SVG 도표를 넣어도 됩니다.
 * ─────────────────────────────────────────────────
 */

window.WEEKLY_DATA = [

  {
    id:      'wk-2026-39',
    issue:   2,
    period:  '2026-09-21/2026-09-25',
    label:   '2026년 9월 21일 – 25일',
    title:   '제2호 — AI 없이 생각하는 시간',
    summary: '이번 주 국내외 AI·교육 뉴스 63건. 가드레일과 큰 투자가 이어지는 사이, "AI 없이도 생각하는 힘"을 어떻게 지킬지가 가장 큰 화두였습니다.',
    color:   '#1B4F8A',
    content: `
      <p style="color:#718096;font-size:.9rem;margin-bottom:24px;">2026년 9월 21일 – 25일 · 티움 위클리 제2호</p>

      <p>사랑하는 티움 후원자 여러분, 그리고 티움을 찾아 주신 방문자 여러분, 안녕하세요.</p>
      <p>티움 사무국장 최주안입니다. 이번 주 화요일, 티움은 용인 기흥의 한 북카페에서 첫 AI 수다방을 열었습니다. 이웃들과 마주 앉아 AI를 같이 써 본 그 주에, 세상은 AI 교육을 두고 어떤 이야기를 했는지 한 주치 뉴스를 모아 다시 읽어 보았습니다.</p>

      <h3>📊 이번 주 한눈에</h3>
      <p>닷새 동안 <strong>63건</strong>의 기사를 읽었습니다. 국내 36건, 해외 27건입니다. 화요일 브리핑은 국내 기사 7건으로 짧았습니다.</p>
      <svg viewBox="0 0 640 224" width="100%" role="img" aria-label="이번 주 일별 국내·해외 기사 수" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">
<style>.lb{font-size:13px;fill:#4a5568}.nm{font-size:12px;fill:#fff;font-weight:700}.lg{font-size:12px;fill:#4a5568}</style>
<text class="lb" x="68" y="35" text-anchor="end">9/21(월)</text>
<rect x="78" y="20" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="35" text-anchor="middle">7</text>
<rect x="324.0" y="20" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="35" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="35">14건</text>
<text class="lb" x="68" y="69" text-anchor="end">9/22(화)</text>
<rect x="78" y="54" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="69" text-anchor="middle">7</text>
<rect x="324.0" y="54" width="0.0" height="22" rx="4" fill="#F5A623"/>
<text class="lb" x="334.0" y="69">7건</text>
<text class="lb" x="68" y="103" text-anchor="end">9/23(수)</text>
<rect x="78" y="88" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="103" text-anchor="middle">7</text>
<rect x="324.0" y="88" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="103" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="103">14건</text>
<text class="lb" x="68" y="137" text-anchor="end">9/24(목)</text>
<rect x="78" y="122" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="137" text-anchor="middle">7</text>
<rect x="324.0" y="122" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="137" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="137">14건</text>
<text class="lb" x="68" y="171" text-anchor="end">9/25(금)</text>
<rect x="78" y="156" width="281.1" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="218.6" y="171" text-anchor="middle">8</text>
<rect x="359.1" y="156" width="210.9" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="464.6" y="171" text-anchor="middle">6</text>
<text class="lb" x="580.0" y="171">14건</text>
<rect x="78" y="196" width="12" height="12" rx="2" fill="#1B4F8A"/><text class="lg" x="96" y="206">국내</text>
<rect x="148" y="196" width="12" height="12" rx="2" fill="#F5A623"/><text class="lg" x="166" y="206">해외</text>
</svg>
      <p style="margin-top:18px;">하루에 한 줄씩, 그날의 흐름을 이렇게 적어 두었습니다.</p>
      <ul style="font-size:.95em;">
        <li><strong>월</strong> — 국내외 모두 AI를 학교에 '얼마나 빨리' 들여놓을지보다 '어떻게 안전하고 사려 깊게' 들여놓을지로 논의의 무게중심이 옮겨가고 있다.</li>
        <li><strong>화</strong> — 국내외 모두 AI 교육의 초점이 '도구 활용법'에서 '생각하는 힘·리더십·정서적 안전장치'로 옮겨가고 있으며, 교사·관리자 대상 AI역량 강화가 새로운 격전지로 떠오르고 있다.</li>
        <li><strong>수</strong> — 국내외 모두 'AI 교육을 할 것인가'는 이미 지나간 질문이 됐고, 이제는 '누가 격차 없이, 누가 책임감 있게 가르치는가'가 핵심 경쟁력으로 떠오르고 있습니다.</li>
        <li><strong>목</strong> — AI 리터러시는 더 이상 '기술 활용법'이 아니라 신뢰, 정책, 리더십, 법·제도의 문제로 확장되고 있으며, '인간 중심'이라는 철학이 국내외 교육 현장의 새로운 표준어가 되고 있다.</li>
        <li><strong>금</strong> — 국내외 모두 "AI를 누구에게, 어떻게 가르칠 것인가"가 핵심 화두로 떠올랐다 — 공무원·소상공인·청소년·초등학생까지 대상별 맞춤 교육과 거버넌스 논의가 동시에 진행 중이다.</li>
      </ul>

      <h3>🔍 이번 주 흐름 세 가지</h3>
      <ul>
        <li><strong>AI '없이' 배우는 시간이 다시 설계되고 있습니다</strong> — KAIST 총장이 <a href="https://news.google.com/rss/articles/CBMigwFBVV95cUxPTkxRZ29NQ3JRVzgxVEdZaTFjOUpQc29PazJiM1QteHNIVU51RE9nZ3k2ejN0eVFyZ0ZnLUdabWdxUG80OGlTRnotTGNOWmN2NHFJRjkzRmVQSDBqZFBnZHI3VE14X2F3RXI5QWFtdGpSVGJpbHBaZnVjRzcyd2Q3U1VVQQ?oc=5" target="_blank" rel="noopener">내년부터 AI를 쓰지 않는 수업을 시작</a>하겠다고 밝혔습니다. 월스트리트저널의 한 칼럼은 학생들에게 <a href="https://news.google.com/rss/articles/CBMijwFBVV95cUxOV1V0NVk3R2FQYlVySkRkWDVLQVZ0WEE1UDdiZHpkQmhSa2F0UlhSdmE1RGlibXdDaDdmUTFLbGJPR3FpdXR4Y1podTVzbmFhVFRwdnVwUHA4cHZGMGR5cE5QZUNxYzBacVhKaWJoNU83VTJ6YVB3ZkxVQUM4bzFsZG1IeWp5XzlDYnJfMGQ5dw?oc=5" target="_blank" rel="noopener">AI와 함께, AI 없이, AI에 대해 생각하는 법</a>을 모두 가르치자고 했고, 국내에서도 <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFB1ZEsxNlRUNHd1ZkE2VFhqRmdycGVsOHcxeXQwcVg5ajZJcmZ2eHJIbkVwbTFHM0tuU1ZINTNzQ1BoUDZ6VkRwN0p4Vk1lX21ETWlyVEF6djJxS0Vyd1I0NmphX0JuamhZM3lOam13c2PSAXRBVV95cUxOUm43WGNvRlByX0hiNUR4ZEFJaklCRlVnT25mN2NpYWJ5XzFFRjAzbERCYktCQ3FqblB0MF9TeU5hN3BuYWtNa2ZySUhZT0NXejFpVnctckxlVmRHcGMzSER1UnhZbXZBVTE4Z2J4VGFGaXNQeQ?oc=5" target="_blank" rel="noopener">“정답 주는 AI에서 생각 키우는 AI로”</a> 가야 한다는 목소리가 나왔습니다.<br/><br/>이유는 분명합니다. 일본 고베대 실험에서는 <a href="https://news.google.com/rss/articles/CBMidEFVX3lxTE95aDJUbFR4Z2FMbE44M0F5bVBwUFBJaVg2S3Q3ZTViTVdTbTUtMklGSGl0Ulh3Ykxhd1Z6V0d4aHg1cUJrbXlhUE5FX2NtSmE5V2RTLXJvdnNFdDBOWUxXb05KckREUmFZZmIydUt2U1Y5aWY00gF0QVVfeXFMT3loMlRsVHhnYUxsTjgzQXltUHBQUElpWDZLdDdlNWJNV1NtNS0ySUZIaXRSWHdiTGF3VnpXR3hoeDVxQmtteWFQTkVfY21KYTlXZFMtcm92c0V0ME5ZTFdvTkpyRERSYVlmYjJ1S3ZTVjlpZjQ?oc=5" target="_blank" rel="noopener">AI가 반론을 내놓자 3명 중 1명이 판단을 바꿨고</a>, 영국에서는 <a href="https://news.google.com/rss/articles/CBMifkFVX3lxTFBTV1lKdFZjYzdNY3pPNmQ1SUtUcnpyenE2R0lLVUo0ODR0Q0R2RGdYMFBBcXRZQnVtREhnSVpaWU5pVnVqMnRfMFhWN09lODBkSlN0ZXN4ak9TM0pfYlBEVUhuMjdSeEdZNW5JVVFGNkt1Q0hsNkRxZnlmWWNfdw?oc=5" target="_blank" rel="noopener">청년 절반가량이 AI를 사람보다 더 신뢰한다</a>고 답했습니다. <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE85UGlRc0x4ODUtT3hCX0JuSjMwc0thSURBS1lYU2JXcnAwbExpRnd1d29xYnpLakVoZ2EyTGZ5ZjkxRWpRckpJbENEdXRDNFNuZnJnaVlsdE1zZTlNWFV3Z0hTU181aWVUbGww0gFrQVVfeXFMTzlQaVFzTHg4NS1PeEJfQm5KMzBzS2FJREFLWVhTYldycDBsTGlGd3V3b3FiektqRWhnYTJMZnlmOTFFalFySklsQ0R1dEM0U25mcmdpWWx0TXNlOU1YVXdnSFNTXzVpZVRsbDA?oc=5" target="_blank" rel="noopener">AI에 고민을 털어놓는 청소년의 정서적 의존</a>을 막을 안전장치 논의도 시작됐습니다. 편리함이 커질수록, 스스로 생각하는 시간은 일부러 지켜야 하는 것이 되었습니다.<br/><br/></li>
        <li><strong>가이드라인이 '가드레일'이 되었지만, 짐은 교실에 남았습니다</strong> — 플로리다주는 <a href="https://news.google.com/rss/articles/CBMihwJBVV95cUxNWHJCYmJnWUJtV2JhV0tCaGlsbE40QmlfWmlOZHBrN2N1ZXdzS1N1bkpaQ2F3eXFLWGdRU0V2a21yVHJDckxJNjdaMEZXdm1WVFBjeVBKWEF6dURHNDEwVjhqbkRBOEZZT0VPWjFEN0tNS202ajRBLWd6UWxnVWRfakcwcm5BUEZ0ZHBlZzE5SEljcDY3bnFkVUs5MkRYOWVHMzkzQVRsQ09WY0tSbWRzM0VZX0lHS3V3OGpjX251N0huSTJkdDhLbkZ6Q3FmVFdQYjFYSThOSzl0Z1o5OVYwZi11Tmk0RFkzQ0k0cnNxV3hLemQxYWh6UGw0QV9JN1VSYWttOTJYc9IBhwJBVV95cUxNWHJCYmJnWUJtV2JhV0tCaGlsbE40QmlfWmlOZHBrN2N1ZXdzS1N1bkpaQ2F3eXFLWGdRU0V2a21yVHJDckxJNjdaMEZXdm1WVFBjeVBKWEF6dURHNDEwVjhqbkRBOEZZT0VPWjFEN0tNS202ajRBLWd6UWxnVWRfakcwcm5BUEZ0ZHBlZzE5SEljcDY3bnFkVUs5MkRYOWVHMzkzQVRsQ09WY0tSbWRzM0VZX0lHS3V3OGpjX251N0huSTJkdDhLbkZ6Q3FmVFdQYjFYSThOSzl0Z1o5OVYwZi11Tmk0RFkzQ0k0cnNxV3hLemQxYWh6UGw0QV9JN1VSYWttOTJYcw?oc=5" target="_blank" rel="noopener">내년 7월까지 유치원~12학년 학교에 AI 가드레일 마련을 의무화</a>했고, 미국 하원에서는 <a href="https://news.google.com/rss/articles/CBMiyAFBVV95cUxOTldtWTJpeGtaWTlSOURSQzhDNlFWTk5YandoS1dqM1JGLTBHQUswNFB1VjlvLUNlODB6NENveTJMeDJUZlZPSTlzV0JVZnVGTFN1cWx1OUdGTm15ZDFNRUxnRFFmRFNWaDUyZjQxZUlBYWNMLVE3TVFIV1J1ekVSVkFsSVk4SmNwVjdaTFBKWkNPMFZWQU84QUs0QkNGNUdkSXNmQU5hWG55SjhzdURnblp5aVhPWWliMFVDVElROVRMYlBLSHJ1VQ?oc=5" target="_blank" rel="noopener">교육·노동 현장의 AI 가드레일 법안</a>이 나왔습니다. 유럽평의회는 교육 분야 AI 거버넌스 지침 <a href="https://news.google.com/rss/articles/CBMipgFBVV95cUxPQ29KeE1ERWlqblN6M2ZLTXRrMTByMmhxVVZsMXRyb3ozd1Q2cHhnNDFmOVc2QXEyNFgzSUFwMTBycXBublk4UW0zSnlDOGpNbGxHQUNSSHVHWmUzNW42ekhmV1BOZmZEeTEzeDFKRE01YlBmeDRMQW83Q1VYUmRpcEJPZW1zOG9oY0hpNEFfOVhMM3hxVld0X0IydGFsdzZsS08wN1Fn?oc=5" target="_blank" rel="noopener">‘나침반’</a>을, 미국 CDT는 <a href="https://news.google.com/rss/articles/CBMinwFBVV95cUxNZHFQOTV5ZjFkR1pHcFVTRWY0UldQMXlPRzlKMFFZSnN1RGtLYlZ0TGVXOFdfUlNBRTZQTUZWTmFMQl9KRHl5WEU1Mk8wNk5sd2VnNDBCQWFIWjNPWF9BYWFsT1BBT0thajFUZ3pPZlFYWGg4MUs0TEFYREdDdzlERGVHNUpXV3M5VVdJOFlQUDJGUXdmX0V5enB6N2ZSc1k?oc=5" target="_blank" rel="noopener">학교 리더를 위한 책임 있는 AI 툴킷</a>을 내놓았습니다.<br/><br/>그런데 같은 주의 다른 기사들은 현장의 온도를 보여 줍니다. 여러 주정부가 AI 활용을 권하면서도 <a href="https://news.google.com/rss/articles/CBMifEFVX3lxTFBMaTVQeGNXbEFvU1lZWDdZLVZVTFNKY0tSQjZVb0dUSndZRk9CbzZwZlZFSEJYT3ZjXzYyMnA0Mm1DdGQ0SWxGVW96UnRFUHFWZ1ZIOS0wc0dwREFBbmJ3YUdjbEJIbXBfMkZGaXM2QXd1UTFOZ3dGMmlGMUc?oc=5" target="_blank" rel="noopener">부정행위 대책은 교사 개인에게 맡기고</a> 있고, 국내에서는 AI 디지털교과서를 <a href="https://news.google.com/rss/articles/CBMinAFBVV95cUxQYmJBdW5jRU8wMWZCVjA4UFd6SE96S09tMklYaHZtSGZFNFkwWGF1NnhKRk5Wb1k1UHNOOC15ZEo1aW9Xd2ZmcHZkN1hEWWVGNTQwQ3V0cy1qbGIzTFZsMEptSWxfRVdHRGFTbm1ScVRQTXN0N1pmQVBEMElicWNENG5rSkx1XzZ4OXhwaWlIN0gtcVlMenp5X0JIWnA?oc=5" target="_blank" rel="noopener">실제 수업에 쓰는 학교가 5%</a>에 그쳤습니다. 규칙과 교과서가 준비되는 속도를 교실이 따라가지 못하고 있습니다.<br/><br/></li>
        <li><strong>큰돈이 들어오는 만큼, 격차의 질문도 날카로워졌습니다</strong> — 게이츠재단이 <a href="https://news.google.com/rss/articles/CBMimgFBVV95cUxNRkt5czRKUVZOQ1lieGxaTkwxOGY3c3dMRm5pRUFVR2ZkMkl5bE1ON0NpUW94bVZlUFlnZ3hDN2g5aUo0TUNSWGlKd0wtWjZYeDJsT3RlOUdGU0F4X2RJOTQ5Y2lZU1Z3M1ZDMTBhY0ZBaHV6cElJR2NFS1BDNWxwbEFWSE9nNmNLOHdEWnlPT0ZuaDN0dHlPSGJn?oc=5" target="_blank" rel="noopener">학교 AI에 4억 달러</a>를, 버라이즌이 <a href="https://news.google.com/rss/articles/CBMigwFBVV95cUxNVXZ2YWtBSWkyaUxDRE1vWGdzeFNuVkwwOWVsLXdsQzRCa1RmMjdkVndiYTRwRXhYZnVYYmltOTgxUG9YcGpmeHlHT2JVVXhPU2ZBa1lFUDlCMHhfQVd4UDhyUjJMeXZwSkowc1lrR0g3UmNqTHBvamtCV0wzanFEZ0dmcw?oc=5" target="_blank" rel="noopener">7000만 달러 규모의 무료 AI 교육</a>을 발표했고, 구글은 유엔과 함께 <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9YanJBMUE4R0s2Q1dFbmxsQ21NS19MYjFhakE0WXkyTnBoQTU0Q2FJdUsxOEd0QVNRWjd1UG5wellKcEhWRGQ3TzA5N1BUaGRqSFNSaDZTY1hlTVFQWTJla1BfUjlGb00?oc=5" target="_blank" rel="noopener">80개국에 무료 AI 강좌 10만 개</a>를 풀었습니다. 캐나다는 <a href="https://news.google.com/rss/articles/CBMijAFBVV95cUxNSlBxeDhfa2sySnFvSHlYamJoRkJFOXB1VEpQZ3prQTVIbGp4MFJWb2tpSFUxRjE3Tll0M002SnlBWTZWakRQYk4yYU5xZzA5RThZOEpUV2RNUm5sZzJnMlppa05QTGlGRjBudVczVmY0ZExZcDJYcDI4N1ZuRXc4NDZNbGFpMng0bGpxYg?oc=5" target="_blank" rel="noopener">1300만 달러 규모의 국가 AI 리터러시 사업</a>을 시작했습니다.<br/><br/>그러나 국내 설문에서는 <a href="https://news.google.com/rss/articles/CBMiTkFVX3lxTE9xQ0hGZ1ZrcmpRRTBWSE5jd3Rfdk5WRkwteGFia25Pd1EwM1M5cXVtWUdQZnlZSG5hR1lUYUgzeHZCVHNOanNnRGFySWdIQQ?oc=5" target="_blank" rel="noopener">73%가 개인 간 AI 격차가 커질 것</a>이라고 답했고, 세계경제포럼은 <a href="https://news.google.com/rss/articles/CBMigwFBVV95cUxNTG5RQ3pSQWJMM0l1czh6dXo0NlFmWWtkOE9WZUx3c3dSQng3U28xNGdPY09iWlRfWUp4YU1vcDFKNHlEWHBoc1UyRV8yUXlSNnZCWHpjcFB6UjJNemdJRG9SU1h4N29qcWtVUng4UW9aeGJ2dUlPd0h4Unh5ZmYtQktlcw?oc=5" target="_blank" rel="noopener">다음 격차가 ‘배움’과 ‘소득’ 사이에서 생긴다</a>고 진단했습니다. AI를 ‘생각 파트너’로 잘 쓰는 쪽이 <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE5DbDkyMllmX0VUZ1FpbmlucXJ2TGdnVVZQeFhNM2JJdmJBWVg2N3RLZjlBRGw0a0MtX2F3RUl2LXpleWNDbERRX3N4U2pkcV85b1YzMndvS1E4T0p0U1hsRWJDSEljWDhQeWlBVNIBbEFVX3lxTE5DbDkyMllmX0VUZ1FpbmlucXJ2TGdnVVZQeFhNM2JJdmJBWVg2N3RLZjlBRGw0a0MtX2F3RUl2LXpleWNDbERRX3N4U2pkcV85b1YzMndvS1E4T0p0U1hsRWJDSEljWDhQeWlBVA?oc=5" target="_blank" rel="noopener">오히려 우등생</a>이라는 조사도 있었습니다. 기회를 나누어 주는 일과 기회가 닿는 일은 다른 일입니다.</li>
      </ul>

      <p>한 가지 더, <strong>배움의 자리가 넓어지고 있습니다</strong>. 제주도는 <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTE9RdzdrekpXc3dLT3BmcTY5WWtXWDZ4Y0Z6OE9SZjBpRG1nLVhDM20yVFd2cjFQN1BTR2dzTURLdmdZSThrbHFNWTBCeGJfZVY3VkJ4OXlRWWpSZw?oc=5" target="_blank" rel="noopener">공무원 상시 AI 학습장</a>을, 의성군은 <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE5ZcUJxejVHRVpSdXFqdzhmTnRXc3d3ajB6a0ZSUVVqdjRXbXIxb3RxbngwSjlTUG9qUGZ4dHAtempQbmJEanlmMGh6c0hQTTlJeklIS2NSYU1ZeFhneWhERjhQdHZjV1dY?oc=5" target="_blank" rel="noopener">관리자 대상 AI 리더십 교육</a>을 열었고, 거제에서는 <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTFBTTjdUWDNuTFJVRlFISUNWdHpwUEhYaUhlalhtS0pRSE9scHZEemR0ZEE3eTlPbU1EUGZVNzd0SkRfNUNyWDRFM0hfNWZCMHJBV3pyU1hCaWdVeWhKNFE5dkd6Vzh3aEV6b3BF?oc=5" target="_blank" rel="noopener">중장년 AI 교육 4주 과정</a>이 마무리됐습니다. 미국에서는 <a href="https://news.google.com/rss/articles/CBMiekFVX3lxTFBKMHIzOEJyN1MxVjAtWjFMTUZnSk1tRl9WT0YtQzNGMzJTaW1UVHBmUzNfaDNTNUE3c3lfU21fMkJFaVdyNzVKazBtekpISlJSclRXZ3dYZkZzd0VmcDM4Q0U2TUoxRXp5N3RZcXcyRGdlSHFCZEhCRk9n?oc=5" target="_blank" rel="noopener">공공도서관이 비판적 AI 리터러시의 거점</a>으로 주목받고 있습니다.</p>

      <h3>📊 주제별로 나누어 보면</h3>
      <p>사무국이 63건을 여덟 가지 주제로 나누어 보았습니다.</p>
      <svg viewBox="0 0 640 260" width="100%" role="img" aria-label="이번 주 기사 주제별 분포" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">
<style>.lb{font-size:13px;fill:#4a5568}.ct{font-size:13px;fill:#1a1a2e;font-weight:700}</style>
<text class="lb" x="140" y="29" text-anchor="end">사고력·정서·의존 경고</text>
<rect x="150" y="15" width="430.0" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="588.0" y="29">12</text>
<text class="lb" x="140" y="59" text-anchor="end">정책·가이드라인</text>
<rect x="150" y="45" width="394.2" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="552.2" y="59">11</text>
<text class="lb" x="140" y="89" text-anchor="end">현장·체험·진로</text>
<rect x="150" y="75" width="358.3" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="516.3" y="89">10</text>
<text class="lb" x="140" y="119" text-anchor="end">리터러시 제도화</text>
<rect x="150" y="105" width="286.7" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="444.7" y="119">8</text>
<text class="lb" x="140" y="149" text-anchor="end">기업·직장 AI교육</text>
<rect x="150" y="135" width="286.7" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="444.7" y="149">8</text>
<text class="lb" x="140" y="179" text-anchor="end">교사·리더의 역할</text>
<rect x="150" y="165" width="215.0" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="373.0" y="179">6</text>
<text class="lb" x="140" y="209" text-anchor="end">격차·형평</text>
<rect x="150" y="195" width="179.2" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="337.2" y="209">5</text>
<text class="lb" x="140" y="239" text-anchor="end">안전·개인정보</text>
<rect x="150" y="225" width="107.5" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="265.5" y="239">3</text>
</svg>
      <p style="margin-top:14px;">가장 많은 것은 <strong>사고력·정서·의존 경고</strong>였습니다. 지난주에는 리터러시 제도화가 가장 많았는데, 이번 주에는 그 자리를 “무엇을 지킬 것인가”라는 질문이 차지했습니다. <strong>정책·가이드라인</strong>과 <strong>현장·체험·진로</strong>가 뒤를 이었고, 지난주 2건이던 <strong>격차·형평</strong>은 5건으로 늘었습니다.</p>

      <h3>💬 사무국장의 생각</h3>
      <p>세 흐름을 한 줄로 잇는다면 이렇습니다. <strong>AI를 들이는 속도보다, AI 없이도 설 수 있는 사람을 기르는 일이 더 급해졌습니다.</strong></p>
      <p>이번 주 경향신문의 기획 기사 제목이 오래 남았습니다. <a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTE5BYWRrbmZwVTVRMXdyR0N3djl5TXZCbUh5T241eG5WcGtNTUVFTVlJX21CR3dBV1Zrdk5XMmRIWG5NYTc2TlFGc1AwZGZBQXByUU96ZHJZWFNXQVhlTmRz0gFfQVVfeXFMTkFhZGtuZnBVNVExd3JHQ3d2OXlNdkJtSHlPbjV4blZwa01NRUVNWUlfbUJHd0FXVmt2TlcyZEhYbk1hNzZOUUZzUDBkZkFBcHJRT3pkcllYU1dBWGVOZHM?oc=5" target="_blank" rel="noopener">“학생은 데이터가 아니고 교사는 관리자가 아니다”</a>. 가드레일도, 큰 투자도 필요합니다. 그러나 아이가 AI의 반론 앞에서 제 생각을 지킬 수 있는지는, 결국 곁에 있는 어른이 함께 묻고 기다려 주는 데서 갈립니다.</p>
      <p>이번 주 화요일, 티움은 용인 기흥의 북카페에서 첫 <a href="news.html#news-aischool-1-review">AI 수다방</a>을 열었습니다. 강의를 듣기만 하는 자리가 아니라, 옆에 앉아 같이 만들어 보는 자리였습니다. 이번 주 뉴스를 다시 읽으며, 그 두 시간이 작지만 맞는 방향이었다고 생각했습니다. 격차는 큰 예산만으로 좁혀지지 않습니다. 한 사람 옆에 앉는 일로도 좁혀집니다.</p>
      <p>추석 연휴를 맞아 한 칼럼은 <a href="https://news.google.com/rss/articles/CBMiTkFVX3lxTE1uZ2w3cHdlMVIxYlBhTHI4VE5DOWFnMWZaQV9IY3lxS0FseE1UUmtWWXVSU1ViMkplRE1OOVgxOFlZYUN4eDRPdFFpbk42QQ?oc=5" target="_blank" rel="noopener">‘AI 약자’를 위한 새로운 결의</a>가 필요하다고 썼습니다. 가족이 모이는 이번 연휴에, 부모님과 아이 곁에 앉아 AI를 한 번 같이 써 보시기를 권합니다. 무엇을 물었고 무엇을 믿었는지 이야기를 나누는 것만으로도 좋은 공부가 됩니다.</p>
      <p>다음 주에도 이 자리에서 뵙겠습니다.</p>

      <h3>📎 이번 주 출처</h3>
      <ul style="font-size:.92em;line-height:1.75;">
        <li><a href="https://news.google.com/rss/articles/CBMigwFBVV95cUxPTkxRZ29NQ3JRVzgxVEdZaTFjOUpQc29PazJiM1QteHNIVU51RE9nZ3k2ejN0eVFyZ0ZnLUdabWdxUG80OGlTRnotTGNOWmN2NHFJRjkzRmVQSDBqZFBnZHI3VE14X2F3RXI5QWFtdGpSVGJpbHBaZnVjRzcyd2Q3U1VVQQ?oc=5" target="_blank" rel="noopener">배충식 KAIST 총장 "AI 못 쓰는 수업 내년 시작…논문 없이 박사 받는 제도도 추진"</a> <span style="color:#718096;font-size:.86em;">· 조선일보 · 9/21</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMijwFBVV95cUxOV1V0NVk3R2FQYlVySkRkWDVLQVZ0WEE1UDdiZHpkQmhSa2F0UlhSdmE1RGlibXdDaDdmUTFLbGJPR3FpdXR4Y1podTVzbmFhVFRwdnVwUHA4cHZGMGR5cE5QZUNxYzBacVhKaWJoNU83VTJ6YVB3ZkxVQUM4bzFsZG1IeWp5XzlDYnJfMGQ5dw?oc=5" target="_blank" rel="noopener">[WSJ 오피니언] 학생들에게 AI와 '함께', AI '없이', AI에 '대해' 생각하는 법을 가르쳐라</a> <span style="color:#718096;font-size:.86em;">· WSJ · 9/21</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMidEFVX3lxTE95aDJUbFR4Z2FMbE44M0F5bVBwUFBJaVg2S3Q3ZTViTVdTbTUtMklGSGl0Ulh3Ykxhd1Z6V0d4aHg1cUJrbXlhUE5FX2NtSmE5V2RTLXJvdnNFdDBOWUxXb05KckREUmFZZmIydUt2U1Y5aWY00gF0QVVfeXFMT3loMlRsVHhnYUxsTjgzQXltUHBQUElpWDZLdDdlNWJNV1NtNS0ySUZIaXRSWHdiTGF3VnpXR3hoeDVxQmtteWFQTkVfY21KYTlXZFMtcm92c0V0ME5ZTFdvTkpyRERSYVlmYjJ1S3ZTVjlpZjQ?oc=5" target="_blank" rel="noopener">AI 반론에 3명 중 1명 판단 바꿨다… 日고베대 실험</a> <span style="color:#718096;font-size:.86em;">· IT조선 · 9/25</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMifkFVX3lxTFBTV1lKdFZjYzdNY3pPNmQ1SUtUcnpyenE2R0lLVUo0ODR0Q0R2RGdYMFBBcXRZQnVtREhnSVpaWU5pVnVqMnRfMFhWN09lODBkSlN0ZXN4ak9TM0pfYlBEVUhuMjdSeEdZNW5JVVFGNkt1Q0hsNkRxZnlmWWNfdw?oc=5" target="_blank" rel="noopener">영국 청년 절반, AI를 인간보다 더 신뢰한다는 조사 결과</a> <span style="color:#718096;font-size:.86em;">· Yahoo News New Zealand · 9/23</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMihwJBVV95cUxNWHJCYmJnWUJtV2JhV0tCaGlsbE40QmlfWmlOZHBrN2N1ZXdzS1N1bkpaQ2F3eXFLWGdRU0V2a21yVHJDckxJNjdaMEZXdm1WVFBjeVBKWEF6dURHNDEwVjhqbkRBOEZZT0VPWjFEN0tNS202ajRBLWd6UWxnVWRfakcwcm5BUEZ0ZHBlZzE5SEljcDY3bnFkVUs5MkRYOWVHMzkzQVRsQ09WY0tSbWRzM0VZX0lHS3V3OGpjX251N0huSTJkdDhLbkZ6Q3FmVFdQYjFYSThOSzl0Z1o5OVYwZi11Tmk0RFkzQ0k0cnNxV3hLemQxYWh6UGw0QV9JN1VSYWttOTJYc9IBhwJBVV95cUxNWHJCYmJnWUJtV2JhV0tCaGlsbE40QmlfWmlOZHBrN2N1ZXdzS1N1bkpaQ2F3eXFLWGdRU0V2a21yVHJDckxJNjdaMEZXdm1WVFBjeVBKWEF6dURHNDEwVjhqbkRBOEZZT0VPWjFEN0tNS202ajRBLWd6UWxnVWRfakcwcm5BUEZ0ZHBlZzE5SEljcDY3bnFkVUs5MkRYOWVHMzkzQVRsQ09WY0tSbWRzM0VZX0lHS3V3OGpjX251N0huSTJkdDhLbkZ6Q3FmVFdQYjFYSThOSzl0Z1o5OVYwZi11Tmk0RFkzQ0k0cnNxV3hLemQxYWh6UGw0QV9JN1VSYWttOTJYcw?oc=5" target="_blank" rel="noopener">플로리다, 내년 7월까지 유치원~12학년 학교에 AI 가드레일 의무화</a> <span style="color:#718096;font-size:.86em;">· The Miami Times · 9/24</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMipgFBVV95cUxPQ29KeE1ERWlqblN6M2ZLTXRrMTByMmhxVVZsMXRyb3ozd1Q2cHhnNDFmOVc2QXEyNFgzSUFwMTBycXBublk4UW0zSnlDOGpNbGxHQUNSSHVHWmUzNW42ekhmV1BOZmZEeTEzeDFKRE01YlBmeDRMQW83Q1VYUmRpcEJPZW1zOG9oY0hpNEFfOVhMM3hxVld0X0IydGFsdzZsS08wN1Fn?oc=5" target="_blank" rel="noopener">교육 분야 AI·디지털 전환 거버넌스를 위한 '나침반(Compass)' 발표</a> <span style="color:#718096;font-size:.86em;">· coe.int · 9/25</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMifEFVX3lxTFBMaTVQeGNXbEFvU1lZWDdZLVZVTFNKY0tSQjZVb0dUSndZRk9CbzZwZlZFSEJYT3ZjXzYyMnA0Mm1DdGQ0SWxGVW96UnRFUHFWZ1ZIOS0wc0dwREFBbmJ3YUdjbEJIbXBfMkZGaXM2QXd1UTFOZ3dGMmlGMUc?oc=5" target="_blank" rel="noopener">주정부는 학교에 AI 사용을 권장하지만, 부정행위 대책은 교사 몫</a> <span style="color:#718096;font-size:.86em;">· AOL.com · 9/23</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMinAFBVV95cUxQYmJBdW5jRU8wMWZCVjA4UFd6SE96S09tMklYaHZtSGZFNFkwWGF1NnhKRk5Wb1k1UHNOOC15ZEo1aW9Xd2ZmcHZkN1hEWWVGNTQwQ3V0cy1qbGIzTFZsMEptSWxfRVdHRGFTbm1ScVRQTXN0N1pmQVBEMElicWNENG5rSkx1XzZ4OXhwaWlIN0gtcVlMenp5X0JIWnA?oc=5" target="_blank" rel="noopener">교육자료 된 AI 교과서, 활용 학교는 5%뿐</a> <span style="color:#718096;font-size:.86em;">· EBS · 9/23</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMimgFBVV95cUxNRkt5czRKUVZOQ1lieGxaTkwxOGY3c3dMRm5pRUFVR2ZkMkl5bE1ON0NpUW94bVZlUFlnZ3hDN2g5aUo0TUNSWGlKd0wtWjZYeDJsT3RlOUdGU0F4X2RJOTQ5Y2lZU1Z3M1ZDMTBhY0ZBaHV6cElJR2NFS1BDNWxwbEFWSE9nNmNLOHdEWnlPT0ZuaDN0dHlPSGJn?oc=5" target="_blank" rel="noopener">게이츠재단, 학교 AI에 4억 달러 투자…교사들은 경고</a> <span style="color:#718096;font-size:.86em;">· Fortune · 9/21</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9YanJBMUE4R0s2Q1dFbmxsQ21NS19MYjFhakE0WXkyTnBoQTU0Q2FJdUsxOEd0QVNRWjd1UG5wellKcEhWRGQ3TzA5N1BUaGRqSFNSaDZTY1hlTVFQWTJla1BfUjlGb00?oc=5" target="_blank" rel="noopener">구글, 전 세계 80개국에 AI 무료 교육 10만 개 푼다…유엔과 글로벌 인재 양성</a> <span style="color:#718096;font-size:.86em;">· 인공지능신문 · 9/24</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiTkFVX3lxTE9xQ0hGZ1ZrcmpRRTBWSE5jd3Rfdk5WRkwteGFia25Pd1EwM1M5cXVtWUdQZnlZSG5hR1lUYUgzeHZCVHNOanNnRGFySWdIQQ?oc=5" target="_blank" rel="noopener">[창간기획]미래세대 AI 생존법은 '교육'…73% “개인 간 격차 커질 것”</a> <span style="color:#718096;font-size:.86em;">· 전자신문 · 9/23</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMigwFBVV95cUxNTG5RQ3pSQWJMM0l1czh6dXo0NlFmWWtkOE9WZUx3c3dSQng3U28xNGdPY09iWlRfWUp4YU1vcDFKNHlEWHBoc1UyRV8yUXlSNnZCWHpjcFB6UjJNemdJRG9SU1h4N29qcWtVUng4UW9aeGJ2dUlPd0h4Unh5ZmYtQktlcw?oc=5" target="_blank" rel="noopener">다음 AI격차는 '배움'과 '소득' 사이의 거리에서 발생</a> <span style="color:#718096;font-size:.86em;">· World Economic Forum · 9/24</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTE5BYWRrbmZwVTVRMXdyR0N3djl5TXZCbUh5T241eG5WcGtNTUVFTVlJX21CR3dBV1Zrdk5XMmRIWG5NYTc2TlFGc1AwZGZBQXByUU96ZHJZWFNXQVhlTmRz0gFfQVVfeXFMTkFhZGtuZnBVNVExd3JHQ3d2OXlNdkJtSHlPbjV4blZwa01NRUVNWUlfbUJHd0FXVmt2TlcyZEhYbk1hNzZOUUZzUDBkZkFBcHJRT3pkcllYU1dBWGVOZHM?oc=5" target="_blank" rel="noopener">[AI 시대 한국 사회를 다시 설계하자] '혁신'이란 이름의 수업…학생은 데이터가 아니고 교사는 관리자가 아니다</a> <span style="color:#718096;font-size:.86em;">· 경향신문 · 9/24</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiTkFVX3lxTE1uZ2w3cHdlMVIxYlBhTHI4VE5DOWFnMWZaQV9IY3lxS0FseE1UUmtWWXVSU1ViMkplRE1OOVgxOFlZYUN4eDRPdFFpbk42QQ?oc=5" target="_blank" rel="noopener">[김장현의 테크와 사람] 추석명절, AI 약자를 위한 새로운 결의가 필요하다</a> <span style="color:#718096;font-size:.86em;">· 전자신문 · 9/25</span></li>
      </ul>

      <p style="margin-top:22px;padding:14px 16px;background:#f7f9fc;border-radius:8px;font-size:.86em;color:#5e6b7d;line-height:1.75;">티움 위클리는 매일 아침 AI가 국내외 뉴스를 추려 정리한 브리핑을, 사무국이 한 주 단위로 다시 읽고 흐름과 생각을 더해 씁니다. 기사 내용은 각 원문을 기준으로 하며, 주제 분류와 판단은 사무국의 것입니다.</p>

      <p style="margin-top:24px;">감사합니다.<br><strong>사단법인 티움 사무국장 최주안 드림</strong></p>
`,
  },

  {
    id:      'wk-2026-38',
    issue:   1,
    period:  '2026-09-14/2026-09-18',
    label:   '2026년 9월 14일 – 18일',
    title:   '제1호 — 규칙은 정부가, 배움은 동네에서',
    summary: '이번 주 국내외 AI·교육 뉴스 70건. 규칙이 만들어지고 리터러시가 자격이 되는 사이, "생각하는 힘은 누가 지키나"라는 질문이 커졌습니다.',
    color:   '#1B4F8A',
    content: `
      <p style="color:#718096;font-size:.9rem;margin-bottom:24px;">2026년 9월 14일 – 18일 · 티움 위클리 제1호</p>

      <p>사랑하는 티움 후원자 여러분, 그리고 티움을 찾아 주신 방문자 여러분, 안녕하세요.</p>
      <p>티움 사무국장 최주안입니다. 저는 매일 아침 국내외 AI·교육 뉴스를 추려 받아 봅니다. 그동안은 사무국 안에서만 나누던 것인데, 한 주치를 모아 놓고 보니 혼자 보기 아까운 흐름이 보였습니다. 그래서 오늘부터 매주, 한 주의 뉴스를 한 자리에 모으고 제 생각을 한 줄 보태어 이 자리에서 나누려 합니다. 첫 호입니다.</p>

      <h3>📊 이번 주 한눈에</h3>
      <p>닷새 동안 <strong>70건</strong>의 기사를 읽었습니다. 국내 36건, 해외 34건입니다.</p>
      <svg viewBox="0 0 640 224" width="100%" role="img" aria-label="이번 주 일별 국내·해외 기사 수" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">
<style>.lb{font-size:13px;fill:#4a5568}.nm{font-size:12px;fill:#fff;font-weight:700}.lg{font-size:12px;fill:#4a5568}</style>
<text class="lb" x="68" y="35" text-anchor="end">9/14(월)</text>
<rect x="78" y="20" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="35" text-anchor="middle">7</text>
<rect x="324.0" y="20" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="35" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="35">14건</text>
<text class="lb" x="68" y="69" text-anchor="end">9/15(화)</text>
<rect x="78" y="54" width="281.1" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="218.6" y="69" text-anchor="middle">8</text>
<rect x="359.1" y="54" width="210.9" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="464.6" y="69" text-anchor="middle">6</text>
<text class="lb" x="580.0" y="69">14건</text>
<text class="lb" x="68" y="103" text-anchor="end">9/16(수)</text>
<rect x="78" y="88" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="103" text-anchor="middle">7</text>
<rect x="324.0" y="88" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="103" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="103">14건</text>
<text class="lb" x="68" y="137" text-anchor="end">9/17(목)</text>
<rect x="78" y="122" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="137" text-anchor="middle">7</text>
<rect x="324.0" y="122" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="137" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="137">14건</text>
<text class="lb" x="68" y="171" text-anchor="end">9/18(금)</text>
<rect x="78" y="156" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="171" text-anchor="middle">7</text>
<rect x="324.0" y="156" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="171" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="171">14건</text>
<rect x="78" y="196" width="12" height="12" rx="2" fill="#1B4F8A"/><text class="lg" x="96" y="206">국내</text>
<rect x="148" y="196" width="12" height="12" rx="2" fill="#F5A623"/><text class="lg" x="166" y="206">해외</text>
</svg>
      <p style="margin-top:18px;">하루에 한 줄씩, 그날의 흐름을 이렇게 적어 두었습니다.</p>
      <ul style="font-size:.95em;">
        <li><strong>월</strong> — AI 리터러시가 채용·교육과정·정책 전반의 표준 항목이 되는 가운데, 해외에서는 "무분별한 도입"에서 "신중한 재설계"로 흐름이 바뀌고 있다.</li>
        <li><strong>화</strong> — 국내는 AI 리터러시·디지털 교육 인프라 확산에 속도를 내는 반면, 해외 선진국은 "AI를 가르칠 준비가 되었는가"라는 근본 질문—정책 부재, 교수 저항, 격차 심화—에 부딪히고 있다.</li>
        <li><strong>수</strong> — AI가 학교와 일터 깊숙이 들어오면서, 국내외 모두 "AI를 어떻게 쓸 것인가"보다 "AI 의존으로 잃는 사고력을 어떻게 지킬 것인가"가 더 큰 화두로 떠오르고 있다.</li>
        <li><strong>목</strong> — 국내는 에듀테크 페어·리더십 포럼·평생학습관 강좌 등 "AI 리터러시 확산"의 현장이 이어지는 가운데, 해외는 플로리다발 AI 가이드라인 제정을 계기로 "규제 이후 어떻게 가르칠 것인가"라는 다음 단계 질문으로 넘어가고 있다.</li>
        <li><strong>금</strong> — 국내외 모두 "AI를 쓸까 말까"의 논쟁을 넘어, 학부모·성인·직군별 맞춤형 AI 리터러시 커리큘럼을 어떻게 설계하고 제도화할 것인가로 무게중심이 옮겨가고 있다.</li>
      </ul>

      <h3>🔍 이번 주 흐름 세 가지</h3>
      <ul>
        <li><strong>논쟁은 끝나고, 규칙이 만들어지고 있습니다</strong> — 미국 플로리다주가 <a href="https://news.google.com/rss/articles/CBMi4AFBVV95cUxPXzV2cmxkekcwdWhINmlJRG5MYjlFSG4xTENSOEstNUR0ckpnS2xhQ3R1VTlienFWTmtCSEtIdmgzSkVJUHNEVHZiMGdzdnBXRVBUM1F1Rnk5aU5JV1dwRkJxTWluWjk1eVpPOFowc2hDdmZGdFF3YXRQVHpBaEcxalJaQzZiUEdWQU9hVldtYzY4VjFlU3A4YjJDY0YtZk5GdzZqT0RoOXBoSHVSdDJVcW14ZWk5eDJPWjZ2YndMbEtRcVR2Y01Hcm9TYW1hTlZrUkRaR2psUEstS05aOHNRaQ?oc=5" target="_blank" rel="noopener">유치원부터 대학까지 AI 사용 가이드라인을 확정</a>했고, 뉴욕시는 <a href="https://news.google.com/rss/articles/CBMinAFBVV95cUxPQVFUVERKNGMyTDlwWUQ2Z29SYldYc1pyRHZvZHNFXzhsRFVROWE2T05vZ3lfLUE3Nm5tYWtxbU9fZVhIMUNXWFZ0aktrTHBUNHlFQll2QW94ZGdBbWFUT0tUcElMT1NMb2VkNDM3NkN4ZGYtb3E0eThhVHhsbkZkZEJLM2RSM2d1M3piNThHQWp4QzRDZjJfdl9qM0nSAaIBQVVfeXFMTl9KZ3YzOW9vdV9PcWhjTmV6bDZxTjZZYmRtZmNKdXRaenlXbEhETXZrRXVPdFJFZFNlcUM3WTZwRl9KS3VMWndXZS04NW53Vy1rUlFiWlkyRThhamNiVEg5bEdrOFBGYXFpelNnRUtLN2hLUWxxZjZoekhueHRjLUJ4aVJrNEFqSWtDUnNTVDlJSkxXM043R1lDbFdBME13ZHJ3?oc=5" target="_blank" rel="noopener">중학교까지 AI 사용을 금지</a>했습니다. 캘리포니아는 <a href="https://news.google.com/rss/articles/CBMivgFBVV95cUxOTnhTSng3aWl5Y2dwUWVCRFl3MFFCel9UQWFlNmFObHBNeklrYmdKbHgxaXpwX2VxckJvVHZTNjVaUXp4S1FEb0RxNGxXT1VQcElYSWE4ZXdkVTFyUzA4SFB2MEFtbzFQcFhtRXI4aVFxNEVuQ1FGZ0tnaHdxdEIyb1hSOWtTUnlldmhacWFGbWFlUXlXXzdNQXF2ZE9YTnB5a1NzWUJScXliU1VUcE5fanFpa3puaF9PSDN1VTd3?oc=5" target="_blank" rel="noopener">아동을 AI 챗봇 위험에서 보호하는 법</a>을 통과시켰고, 마이크로소프트는 <a href="https://news.google.com/rss/articles/CBMisgFBVV95cUxOSGwxMUEzTUpkZ2l6MzFBd1BCdldEMXhUVTM1cXpEQW55VE43bmVGNDhtT3llSVY5RkdXQ3JoNXpjMl9JalhlWmR6R1k0c21zdzh4eUJqWUg3LVc1QWpGM3p0RWpVd2poemdSek15NE15dm1BYjUtSFNuN1JTdjltYjZ1S2x5NVpLaUVxM2JhTTBqOWZfREM2b0t5U1VuVmpTajRLSndFWWV0Q0hSTXk1YTRR?oc=5" target="_blank" rel="noopener">학교용 AI 안전 규정</a>에 합의했습니다. 국내에서도 <a href="https://news.google.com/rss/articles/CBMiSkFVX3lxTFBkRzRrOHdfQUFsSEd4aFRaRVY3VzIyQ3F0OVFSSVhFUFlQaUpLS0EwWGpWZnVURnBZeGo0ZEJuVXJKaEpJTWVKY2ZB?oc=5" target="_blank" rel="noopener">에듀테크 거버넌스</a>가 정책 세미나의 화두였습니다.<br/><br/>그런데 같은 주에 나온 두 조사가 마음에 걸립니다. <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE01cElOY1NWc1l2VkR3anlONkxHajQzRVYwR1ZZbU9Ra0ZPZGdXSTduR2xvQlYta0pWMmo4WkcxbVNLOVk2TVVUOXo3SG56SkJSaWR3UFdhSTJnU3BEeG8xcUxOUU80MzgzTE9tSw?oc=5" target="_blank" rel="noopener">교사 100명 중 6명만이 "우리 학교의 AI 정책이 명확하다"고 답했고</a>, 학부모 단체들은 <a href="https://news.google.com/rss/articles/CBMiqwFBVV95cUxOZ3phZHJLaS11WnpaTHFvWnBLUWw0UXBBU2FCN2I1R3JoZ0tZWmNuS3FLSzJTcF80YkN2MzZ5ZWRKbjFFSXI0THF1b043LVNHaTRZRmI2c3pGVGh0a0s5eHRXM3VZZldnTWU2QlpfOVl6MFdmb3BVa3BxU2o2RWMwM1FadGptMmtOSzRwVzVkZktVTFlNZ29YRWNYQ2RtdUF6b0I0R2hHcnp3eWc?oc=5" target="_blank" rel="noopener">"금지만으로는 아무것도 해결되지 않는다"</a>고 경고했습니다. 규칙을 만드는 일과 가르치는 일은 다른 일입니다.<br/><br/></li>
        <li><strong>AI 리터러시가 '자격'이 되고 있습니다</strong> — 공기업이 <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9BcEpBRmhBSm5NWW8xMlhkWENlZDJCT0lxcDk3VG5qbjBVbFNaNklMU1lYTXZYVzY2alhzbGoxMEFXekltTzI3NjQ1R05INFp6dmFtOWt4SUhCWlhyVTZsTmxKbWpEekVrNlc5ajhEdW4?oc=5" target="_blank" rel="noopener">신입 채용에 AI 리터러시 평가를 도입</a>했고, 뉴욕주립대와 데이턴대는 <a href="https://news.google.com/rss/articles/CBMitwFBVV95cUxQc0V6cFBKRWVXTkRYS2hsRFZzSEEzejVOTGtmb1NPZkZJRW9sMTVNT1IyVy1kQ2ZoanN0Vl81X2NubncxOUJ0SkpXVlNrS29uZkpBTDJsSWYxbmR1eEFueXRZZGZLOFQ2SDRTdFh2Tno3LXhLdUJsV2NvZDdzR1hPYXVKbHRVREhOQ1JyUEFrNkZyVXdOdUFCSUtHLWxvV3RvTXlmZFVSNFZ6WkxKNF9SUzJSdnFERHPSAcsBQVVfeXFMTmdOTGlqQ3B6Um5xWWdvakF6ZDBEZEt5dDFBenFDNGFQcVJXeFo5U3VPWUE4cklBNU5NT3VQbk9DbmE3X2dKbllfaFVuOFFxVkdKUmN3UVVvaEFNeldoT3lOSm1xQjdwd2RzNzk4aU5MZXlvYTJjeHpPZmVPN1lMYl9MeFI2VkVGU0wza3BLSWx1SElROVBJYXhTd3VPam9oMFEtQXUzMWxUYUF5XzhRYzc0eDJxTng5WEpoT2N5X2d1X29aU1pwcjhfUTA?oc=5" target="_blank" rel="noopener">신입생 전원에게 AI 과목을 필수</a>로 정했습니다. 강릉시 평생학습관은 <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE11bTNNeldEQlgzZThLUV93ckoxU2RESE00RTZPaWNsNWNkTUFqUDV1SzNXRXExaFhiUDU4R2hyTmtQbFFSOUk4VVNSeDJRTDNiWUpveVdELVQwTXZBVllOeTQ2V082eVhSRGtOc1NB?oc=5" target="_blank" rel="noopener">AI 리터러시 강좌를 신설</a>했고, 경주시는 <a href="https://news.google.com/rss/articles/CBMib0FVX3lxTFB1UEo3UktyS1ZpYVZiS2tJYmxIZ3Y4bVR4bUE5ejRvOFFNOHEwOHdhanlzMEYyRnN5TmZiYW1vNU5RcEVTYmtuT2x0QmlaMndqQXE4OV9ELTRoTjNNMW84UnpKdnp4cXlUb2tDMVg2WQ?oc=5" target="_blank" rel="noopener">단기 강좌를 상설 시민 AI 학교로</a> 바꿨습니다. 기업 쪽은 더 빠릅니다. 한 교육 기업은 <a href="https://news.google.com/rss/articles/CBMiakFVX3lxTE1Icmx2NU9lRHJ0MGZSazFBQUxjYnhxeTFIZWRIU05xVWZMaEZZUkFZb1EyVk5naVdQeUk2R05NRDVqSk92dzcyWHdBSUMwbEViWjhiV1VZclhnNkRMRXJUbGVqOHg2V0N4UEE?oc=5" target="_blank" rel="noopener">국내 10대 그룹 중 9곳에 AI 교육을 제공</a>하며 계약이 220% 늘었고, 요양보호사 100명이 <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFBFeG1zQkxXVXZwUTNBRHJIUXZRY3kwbG5aOUpLdGlqM2ZEVzJ1Z1pldERCcHdMX3dMczB5TnBEZkxiZ0JSMjRCUDY1cFB2SkczbWpPU2xjMkl5QQ?oc=5" target="_blank" rel="noopener">AI 활용법 교육</a>을 받았습니다.<br/><br/>학생과 직장인, 신중년과 요양 현장까지. 이제 AI를 배우는 일은 특정 세대의 일이 아닙니다.<br/><br/></li>
        <li><strong>그래서 더 커진 질문, "생각하는 힘은 누가 지키나"</strong> — MIT는 AI에 과제를 맡기며 스스로 사고하기를 포기하는 대학생들의 <a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTFBpaE1zb3RWLXZLb2hpSXVxWEVySXAzSEdSTGZGOEFTanV2c0NkaWpxZEtBOXBYX2ZoaW42cmVobk5kcUhyV3RqVWloclhZNGd4cVVUTE85OWJDSGtPQ2dmRNIBYEFVX3lxTFBpaE1zb3RWLXZLb2hpSXVxWEVySXAzSEdSTGZGOEFTanV2c0NkaWpxZEtBOXBYX2ZoaW42cmVobk5kcUhyV3RqVWloclhZNGd4cVVUTE85OWJDSGtPQ2dmRA?oc=5" target="_blank" rel="noopener">'인지적 항복'</a>을 경고했습니다. OECD 조사에서는 <a href="https://news.google.com/rss/articles/CBMilAFBVV95cUxOci1Rb2czVENhNS1hb3UtWlRSVGFMbkNjbm00R3N1UU5LdVlMLTNHN3dCR1ZBaWdDOEFLa0hXYVlNTFhsOFkwRUNoUzJzQjF4ZmZFRXR1VWZuWmJncFcyS2J5SjhBTXNVc012T0VLTUtNOHZHWWZEMW0wYzB4S0JRa3FrVDlsYTNTeFg0ZERpODd0VWZv?oc=5" target="_blank" rel="noopener">AI를 과하게 쓴 학생의 성적은 떨어졌지만, 적정하게 쓴 학생은 안 쓴 학생과 비슷</a>했습니다. 보스턴대는 영문학 전공자에게 <a href="https://news.google.com/rss/articles/CBMioAFBVV95cUxPRTdyU2NmdFg2TEE4dTBlVnFoMWczT1JDbXNoOTFZTWpxWTgwbjk5SnMyaHVFSWVUbC1qQzdrRXFiUS11Sy1mQzZ4S0VzcDc4U2dRU1N6YkczOFdoeWpsQXd1R0g3WnVKQjBjNlViZTJmYklRVHh0TjNEcjg0M1hHdFlUMlZ1Yl9fQlBOLUR6SFpyZ1JLQzZnUnNNUnM5NENS?oc=5" target="_blank" rel="noopener">'AI 없이 글쓰기' 요건</a>을 새로 두었고, 국내 전문가들은 <a href="https://news.google.com/rss/articles/CBMiVkFVX3lxTE1hYVdWZ0dPWm9aVjFZWGVzWk10UkhZZTQzZVNYdVNkdUZ2RzFrdXF0ZHE4TnplN1ZKMGtINjFiaEZ5TWpYRk1xVHJ4NWFzSTVnY0hRaXhB?oc=5" target="_blank" rel="noopener">청소년에게 AI도 하나의 미디어이므로 비판적으로 읽는 법을 가르쳐야 한다</a>고 했습니다.<br/><br/><a href="https://news.google.com/rss/articles/CBMickFVX3lxTE9xRzFvdnJ0N215NUZRR2o3Q2JkUDIzTTlPZlNsTlVWRjZubnE0NWRvUU5Gd2EtcnJ4YUJqdU1aUkRXTHRWdU8wYU5aa0Y0SDFwaTN6R3BRQ0h0dFQzcFh2YjBOaFpmVE1pZGZ4TFg3RkFfQQ?oc=5" target="_blank" rel="noopener">하버드 교수 60%가 "AI가 수업에 해롭다"</a>고 답했고, <a href="https://news.google.com/rss/articles/CBMioAFBVV95cUxQdzRsdjhuamhTTmJVU3JmZWVfYjZfWWR1Y09fZ0NfT0kzd09KajhZWlo5QnVoSkRiTGZDbUhKdlU0TWZMZ3JIX25obDZ6MWUwNlRCVEpfUmVZVDZwZWtYNmVXT0NCNG83QWxlTC1VT3h6RmNqYktyellUN1dJREtyRlF2OFp0LXJsdlZoc2I4Zmhya3Zud0NvOEhXTWNZSHU5?oc=5" target="_blank" rel="noopener">미국인 대다수는 학교의 AI가 득보다 실이 크다</a>고 봅니다. 기술이 빨라질수록, 불안도 같이 자랍니다.</li>
      </ul>

      <p>한 가지 더 눈에 띈 것은 <strong>교사와 리더의 자리</strong>입니다. <a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTE9Tc1pFMUZTbER6WmVMV09CcHRUZzJaeUQwRjB1cGhSMXJHR3dOWmI0WjExQ3FjLW5aS0htZmpIVWlTME5selNJTndZemw5N2tCeE42V25mWFBPbnR0dnNv?oc=5" target="_blank" rel="noopener">서·논술형 AI 채점은 교사의 판단을 보조해야</a> 한다는 지적, <a href="https://news.google.com/rss/articles/CBMiSkFVX3lxTFBSUFpZclp3NFNqOVI0N1ozVFhKUkFsSXYwZEFWeGdOUnloR21UYjc4cHVQa2Z0VUF1SUNPZ0s1Q0JDZkVzcFI2VjZB?oc=5" target="_blank" rel="noopener">교사는 지식 전달자에서 판단·설계자로</a> 바뀌고 있다는 중국의 방향, 그리고 <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE0wSkFuQmxQcDl5Z0RSUzl4NmZxV25oa3N3eDFPUGFZbk9RNWt5bmpTaU03d0pPd3AzYVZvQ0JKcjRhZUVJOWs5a1ViM0dmWDF2UjF5b25EQWc1YW5EUTd4aDFubVBSbHBfb0dN0gFuQVVfeXFMT05UOUwzZWFJWlNFY2NRWmw2aHJ2OGlheDBEbmtsME5fUHJqLVNMVEJqX0xwSW9KNEx1X0RUXzlzZzJ1MWtpWmhrS2hSRmlvNUNtc0ljLW95N0dEWDRUMkZ2U1pPVkR0U1BPNVRTLUE?oc=5" target="_blank" rel="noopener">"AI가 일하는 시대, 리더의 경쟁력은 신뢰"</a>라는 포럼의 결론이 한 주 안에 함께 나왔습니다.</p>

      <h3>📊 주제별로 나누어 보면</h3>
      <p>사무국이 70건을 여덟 가지 주제로 나누어 보았습니다.</p>
      <svg viewBox="0 0 640 260" width="100%" role="img" aria-label="이번 주 기사 주제별 분포" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">
<style>.lb{font-size:13px;fill:#4a5568}.ct{font-size:13px;fill:#1a1a2e;font-weight:700}</style>
<text class="lb" x="140" y="29" text-anchor="end">리터러시 제도화</text>
<rect x="150" y="15" width="430.0" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="588.0" y="29">17</text>
<text class="lb" x="140" y="59" text-anchor="end">사고력·정서·의존 경고</text>
<rect x="150" y="45" width="303.5" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="461.5" y="59">12</text>
<text class="lb" x="140" y="89" text-anchor="end">정책·가이드라인</text>
<rect x="150" y="75" width="303.5" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="461.5" y="89">12</text>
<text class="lb" x="140" y="119" text-anchor="end">교사·리더의 역할</text>
<rect x="150" y="105" width="227.6" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="385.6" y="119">9</text>
<text class="lb" x="140" y="149" text-anchor="end">기업·직장 AI교육</text>
<rect x="150" y="135" width="202.4" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="360.4" y="149">8</text>
<text class="lb" x="140" y="179" text-anchor="end">현장·체험·진로</text>
<rect x="150" y="165" width="151.8" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="309.8" y="179">6</text>
<text class="lb" x="140" y="209" text-anchor="end">안전·개인정보</text>
<rect x="150" y="195" width="101.2" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="259.2" y="209">4</text>
<text class="lb" x="140" y="239" text-anchor="end">격차·형평</text>
<rect x="150" y="225" width="50.6" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="208.6" y="239">2</text>
</svg>
      <p style="margin-top:14px;">가장 많은 것은 <strong>리터러시 제도화</strong>였고, 그 바로 뒤에 <strong>사고력·정서에 대한 경고</strong>와 <strong>정책·가이드라인</strong>이 나란히 섰습니다. 넓히는 힘과 지키는 힘이 같은 속도로 커진 한 주였습니다.</p>

      <h3>💬 사무국장의 생각</h3>
      <p>세 흐름을 한 줄로 잇는다면 이렇습니다. <strong>"AI를 쓸 것인가"는 이미 지나간 질문이고, 이제 남은 질문은 "누가, 무엇을 지키면서, 배우게 할 것인가"입니다.</strong></p>
      <p>플로리다 교육위원회는 가이드라인을 통과시키며 <a href="https://news.google.com/rss/articles/CBMi3AFBVV95cUxPMXZiNE9hakQ3YnMzb01LYjJnQXZnUWp2U05nOV9LWkVIWDlvTVp1QWM1LTdvbmNrMXg4a3V0cUF0S09hZ2pDTWFwbkdNXzB5cEVWeXVCUFI0b3drTDROVzZOTHFsZXhuZUVMOHc2QlhkaEwwSVVnRDcwNXhVVXU3b2VUWEh3S0N0b2pfNWo4SzdlQ2dXM1I1X0RIMW8wWHJCMXdOOW9jck05ZlU3MWhpVklJOXFJQlk3dWMwUmhsUmlsMmNzbnBZMmpDSnY5V2xaZVp3UlV5ZFBMZzRn?oc=5" target="_blank" rel="noopener">"아이들의 유년기를 챗봇에 아웃소싱하지 않겠다"</a>고 했습니다. 저는 이 말이 이번 주에 읽은 문장 가운데 가장 오래 남았습니다. 규칙은 정부가 만듭니다. 그러나 아이 곁에 앉아 같이 써 보고 같이 생각하는 일은 결국 동네에서, 가정에서 일어납니다.</p>
      <p>제주교육청이 <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE1nWkpiTnFJaFE0UDl2ZEt4VFN4bmc2NENCN3BFc0xPbkZ1T216NGt5R2FFYWhKOHVxME1zWkVaRGlQa29JZFpjemZFY09iMGN3eEwwcDd3QnhScWpKU3hBSWFiemJULXRrTVZJb9IBcEFVX3lxTE4xNUJTdnVJbFlNeXBDSzI0bjI2c2x6bXFUeWNQR3FVaVE4bHhtOHNSeUV4dVBVVmhsaDdPVm84R09OQmc3SjF5Q0VKcHZNX1J1Q2pNanFHd0FncU5lWVRZTDZSSE5uU2ZTNDNpYnNXNzc?oc=5" target="_blank" rel="noopener">고등학생 학부모를 대상으로 생성형 AI 실습 중심의 진로교육</a>을 연 것도 그래서 반가웠습니다. 다음 주 화요일 티움이 용인 기흥구에서 여는 <a href="news.html#news-aischool-1">AI 수다방</a>이 붙잡고 있는 문제의식과 같습니다. 자녀를 돕고 싶다면, 부모가 먼저 알아야 합니다.</p>
      <p>이번 주의 어느 칼럼은 <a href="https://news.google.com/rss/articles/CBMiigFBVV95cUxPZWIzdE4zdndtOXdjazRTcWtaZFRPcGxkN0YwYzRKcldkSFcwVDgyUWVQMlNTZk9WTlh1NTBDU3lMVlp1T2FPQXpvV0ZqMmt0ZDZKdk5BT0RkRDN1MXE4Wmx6SXdCc09ObVlFWWl6ay14bkdQMUx5Y1g1Q2FUakwzRjVFc2J1cnlramc?oc=5" target="_blank" rel="noopener">"AI는 정답을 잘 가르쳐도 아이 마음은 읽지 못한다"</a>고 썼습니다. 티움이 AI 교육에 세계관과 인성을 함께 담아 온 이유가 바로 여기에 있습니다. 감사할 줄 아는 태도가 컴퓨팅 사고력과 디지털 자신감을 높였다는 <a href="research.html#papers">티움의 연구</a>도 같은 이야기를 합니다. 기술 앞에서 사람이 먼저입니다.</p>
      <p>다음 주에도 이 자리에서 뵙겠습니다.</p>

      <h3>📎 이번 주 출처</h3>
      <ul style="font-size:.92em;line-height:1.75;">
        <li><a href="https://news.google.com/rss/articles/CBMi4AFBVV95cUxPXzV2cmxkekcwdWhINmlJRG5MYjlFSG4xTENSOEstNUR0ckpnS2xhQ3R1VTlienFWTmtCSEtIdmgzSkVJUHNEVHZiMGdzdnBXRVBUM1F1Rnk5aU5JV1dwRkJxTWluWjk1eVpPOFowc2hDdmZGdFF3YXRQVHpBaEcxalJaQzZiUEdWQU9hVldtYzY4VjFlU3A4YjJDY0YtZk5GdzZqT0RoOXBoSHVSdDJVcW14ZWk5eDJPWjZ2YndMbEtRcVR2Y01Hcm9TYW1hTlZrUkRaR2psUEstS05aOHNRaQ?oc=5" target="_blank" rel="noopener">플로리다, 유치원부터 대학까지 AI 가이드라인 확정</a> <span style="color:#718096;font-size:.86em;">· IslanderNews.com · 9/18</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMinAFBVV95cUxPQVFUVERKNGMyTDlwWUQ2Z29SYldYc1pyRHZvZHNFXzhsRFVROWE2T05vZ3lfLUE3Nm5tYWtxbU9fZVhIMUNXWFZ0aktrTHBUNHlFQll2QW94ZGdBbWFUT0tUcElMT1NMb2VkNDM3NkN4ZGYtb3E0eThhVHhsbkZkZEJLM2RSM2d1M3piNThHQWp4QzRDZjJfdl9qM0nSAaIBQVVfeXFMTl9KZ3YzOW9vdV9PcWhjTmV6bDZxTjZZYmRtZmNKdXRaenlXbEhETXZrRXVPdFJFZFNlcUM3WTZwRl9KS3VMWndXZS04NW53Vy1rUlFiWlkyRThhamNiVEg5bEdrOFBGYXFpelNnRUtLN2hLUWxxZjZoekhueHRjLUJ4aVJrNEFqSWtDUnNTVDlJSkxXM043R1lDbFdBME13ZHJ3?oc=5" target="_blank" rel="noopener">뉴욕시 공립학교, 올해부터 중학교까지 AI 사용 전면 금지</a> <span style="color:#718096;font-size:.86em;">· ABC News · 9/16</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE01cElOY1NWc1l2VkR3anlONkxHajQzRVYwR1ZZbU9Ra0ZPZGdXSTduR2xvQlYta0pWMmo4WkcxbVNLOVk2TVVUOXo3SG56SkJSaWR3UFdhSTJnU3BEeG8xcUxOUU80MzgzTE9tSw?oc=5" target="_blank" rel="noopener">교사 6%만이 "학교의 AI 정책이 명확하다"고 응답</a> <span style="color:#718096;font-size:.86em;">· The Next Web · 9/15</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiqwFBVV95cUxOZ3phZHJLaS11WnpaTHFvWnBLUWw0UXBBU2FCN2I1R3JoZ0tZWmNuS3FLSzJTcF80YkN2MzZ5ZWRKbjFFSXI0THF1b043LVNHaTRZRmI2c3pGVGh0a0s5eHRXM3VZZldnTWU2QlpfOVl6MFdmb3BVa3BxU2o2RWMwM1FadGptMmtOSzRwVzVkZktVTFlNZ29YRWNYQ2RtdUF6b0I0R2hHcnp3eWc?oc=5" target="_blank" rel="noopener">AI 금지만으로는 '테크래시'를 잠재울 수 없다, 학부모 단체들의 경고</a> <span style="color:#718096;font-size:.86em;">· Education Week · 9/17</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9BcEpBRmhBSm5NWW8xMlhkWENlZDJCT0lxcDk3VG5qbjBVbFNaNklMU1lYTXZYVzY2alhzbGoxMEFXekltTzI3NjQ1R05INFp6dmFtOWt4SUhCWlhyVTZsTmxKbWpEekVrNlc5ajhEdW4?oc=5" target="_blank" rel="noopener">한국남부발전, 2026년 하반기 신입사원·별정직 76명 공개 채용… ‘AI 리터러시’ 평가 도입</a> <span style="color:#718096;font-size:.86em;">· 에너지코리아뉴스 · 9/14</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMitwFBVV95cUxQc0V6cFBKRWVXTkRYS2hsRFZzSEEzejVOTGtmb1NPZkZJRW9sMTVNT1IyVy1kQ2ZoanN0Vl81X2NubncxOUJ0SkpXVlNrS29uZkpBTDJsSWYxbmR1eEFueXRZZGZLOFQ2SDRTdFh2Tno3LXhLdUJsV2NvZDdzR1hPYXVKbHRVREhOQ1JyUEFrNkZyVXdOdUFCSUtHLWxvV3RvTXlmZFVSNFZ6WkxKNF9SUzJSdnFERHPSAcsBQVVfeXFMTmdOTGlqQ3B6Um5xWWdvakF6ZDBEZEt5dDFBenFDNGFQcVJXeFo5U3VPWUE4cklBNU5NT3VQbk9DbmE3X2dKbllfaFVuOFFxVkdKUmN3UVVvaEFNeldoT3lOSm1xQjdwd2RzNzk4aU5MZXlvYTJjeHpPZmVPN1lMYl9MeFI2VkVGU0wza3BLSWx1SElROVBJYXhTd3VPam9oMFEtQXUzMWxUYUF5XzhRYzc0eDJxTng5WEpoT2N5X2d1X29aU1pwcjhfUTA?oc=5" target="_blank" rel="noopener">데이턴대학교, 신입생 전원 AI 과목 이수 의무화</a> <span style="color:#718096;font-size:.86em;">· WHIO TV · 9/18</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMib0FVX3lxTFB1UEo3UktyS1ZpYVZiS2tJYmxIZ3Y4bVR4bUE5ejRvOFFNOHEwOHdhanlzMEYyRnN5TmZiYW1vNU5RcEVTYmtuT2x0QmlaMndqQXE4OV9ELTRoTjNNMW84UnpKdnp4cXlUb2tDMVg2WQ?oc=5" target="_blank" rel="noopener">'경주시민 AI 학교' 출범…단기 강좌서 상설 교육으로</a> <span style="color:#718096;font-size:.86em;">· kyongbuk.co.kr · 9/18</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiakFVX3lxTE1Icmx2NU9lRHJ0MGZSazFBQUxjYnhxeTFIZWRIU05xVWZMaEZZUkFZb1EyVk5naVdQeUk2R05NRDVqSk92dzcyWHdBSUMwbEViWjhiV1VZclhnNkRMRXJUbGVqOHg2V0N4UEE?oc=5" target="_blank" rel="noopener">팀스파르타, 국내 10대 그룹 9곳에 AI 교육 제공…계약 규모 220% 증가</a> <span style="color:#718096;font-size:.86em;">· AI타임스 · 9/18</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTFBpaE1zb3RWLXZLb2hpSXVxWEVySXAzSEdSTGZGOEFTanV2c0NkaWpxZEtBOXBYX2ZoaW42cmVobk5kcUhyV3RqVWloclhZNGd4cVVUTE85OWJDSGtPQ2dmRNIBYEFVX3lxTFBpaE1zb3RWLXZLb2hpSXVxWEVySXAzSEdSTGZGOEFTanV2c0NkaWpxZEtBOXBYX2ZoaW42cmVobk5kcUhyV3RqVWloclhZNGd4cVVUTE85OWJDSGtPQ2dmRA?oc=5" target="_blank" rel="noopener">美대학생들, AI 의존해 사고 포기…MIT "인지적 항복" 경고</a> <span style="color:#718096;font-size:.86em;">· 연합뉴스 · 9/16</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMilAFBVV95cUxOci1Rb2czVENhNS1hb3UtWlRSVGFMbkNjbm00R3N1UU5LdVlMLTNHN3dCR1ZBaWdDOEFLa0hXYVlNTFhsOFkwRUNoUzJzQjF4ZmZFRXR1VWZuWmJncFcyS2J5SjhBTXNVc012T0VLTUtNOHZHWWZEMW0wYzB4S0JRa3FrVDlsYTNTeFg0ZERpODd0VWZv?oc=5" target="_blank" rel="noopener">OECD "AI가 학업성취 낮추지만, 적정 사용자는 비사용자와 비슷"</a> <span style="color:#718096;font-size:.86em;">· fortune.com · 9/14</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMioAFBVV95cUxPRTdyU2NmdFg2TEE4dTBlVnFoMWczT1JDbXNoOTFZTWpxWTgwbjk5SnMyaHVFSWVUbC1qQzdrRXFiUS11Sy1mQzZ4S0VzcDc4U2dRU1N6YkczOFdoeWpsQXd1R0g3WnVKQjBjNlViZTJmYklRVHh0TjNEcjg0M1hHdFlUMlZ1Yl9fQlBOLUR6SFpyZ1JLQzZnUnNNUnM5NENS?oc=5" target="_blank" rel="noopener">보스턴대, 영문학 전공자에 'AI 없이 글쓰기' 요건 신설</a> <span style="color:#718096;font-size:.86em;">· Law Commentary · 9/18</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMi3AFBVV95cUxPMXZiNE9hakQ3YnMzb01LYjJnQXZnUWp2U05nOV9LWkVIWDlvTVp1QWM1LTdvbmNrMXg4a3V0cUF0S09hZ2pDTWFwbkdNXzB5cEVWeXVCUFI0b3drTDROVzZOTHFsZXhuZUVMOHc2QlhkaEwwSVVnRDcwNXhVVXU3b2VUWEh3S0N0b2pfNWo4SzdlQ2dXM1I1X0RIMW8wWHJCMXdOOW9jck05ZlU3MWhpVklJOXFJQlk3dWMwUmhsUmlsMmNzbnBZMmpDSnY5V2xaZVp3UlV5ZFBMZzRn?oc=5" target="_blank" rel="noopener">"플로리다는 아이들의 유년기를 챗봇에 아웃소싱하지 않겠다"…AI 교실 규정 도입</a> <span style="color:#718096;font-size:.86em;">· News4JAX · 9/17</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE1nWkpiTnFJaFE0UDl2ZEt4VFN4bmc2NENCN3BFc0xPbkZ1T216NGt5R2FFYWhKOHVxME1zWkVaRGlQa29JZFpjemZFY09iMGN3eEwwcDd3QnhScWpKU3hBSWFiemJULXRrTVZJb9IBcEFVX3lxTE4xNUJTdnVJbFlNeXBDSzI0bjI2c2x6bXFUeWNQR3FVaVE4bHhtOHNSeUV4dVBVVmhsaDdPVm84R09OQmc3SjF5Q0VKcHZNX1J1Q2pNanFHd0FncU5lWVRZTDZSSE5uU2ZTNDNpYnNXNzc?oc=5" target="_blank" rel="noopener">제주교육청, 고교 학부모 대상 AI 진로교육…생성형 AI 활용 실습</a> <span style="color:#718096;font-size:.86em;">· 미디어제주 · 9/18</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiigFBVV95cUxPZWIzdE4zdndtOXdjazRTcWtaZFRPcGxkN0YwYzRKcldkSFcwVDgyUWVQMlNTZk9WTlh1NTBDU3lMVlp1T2FPQXpvV0ZqMmt0ZDZKdk5BT0RkRDN1MXE4Wmx6SXdCc09ObVlFWWl6ay14bkdQMUx5Y1g1Q2FUakwzRjVFc2J1cnlramc?oc=5" target="_blank" rel="noopener">[최홍규의 AI 리터러시] AI 조기교육, 정답은 잘 가르쳐도 아이 마음은 못 읽는다</a> <span style="color:#718096;font-size:.86em;">· 글로벌이코노믹 · 9/14</span></li>
      </ul>

      <p style="margin-top:22px;padding:14px 16px;background:#f7f9fc;border-radius:8px;font-size:.86em;color:#5e6b7d;line-height:1.75;">티움 위클리는 매일 아침 AI가 국내외 뉴스를 추려 정리한 브리핑을, 사무국이 한 주 단위로 다시 읽고 흐름과 생각을 더해 씁니다. 기사 내용은 각 원문을 기준으로 하며, 주제 분류와 판단은 사무국의 것입니다.</p>

      <p style="margin-top:24px;">감사합니다.<br><strong>사단법인 티움 사무국장 최주안 드림</strong></p>
`,
  },

];

/* ─────────────────────────────────────────────────
   비공개 초안 — 웹사이트에 표시되지 않습니다.
   금요일 예약 작업이 여기에 다음 호 초안을 넣습니다.
   검토 후 게시하려면 객체를 위 WEEKLY_DATA 배열 맨 앞으로 옮기세요.
   ───────────────────────────────────────────────── */
window.WEEKLY_DRAFTS = [

];
