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
    id:      'wk-2026-41',
    issue:   4,
    period:  '2026-10-05/2026-10-09',
    label:   '2026년 10월 5일 – 9일',
    title:   '제4호 — 허용과 금지 사이, 먼저 배우는 어른들',
    summary: '이번 주 국내외 AI·교육 뉴스 70건. 교육청들이 AI를 두고 정반대의 결정을 내리는 사이 관리자와 교사가 먼저 배우기 시작했고, 세대·대학·성별에 따른 격차를 묻는 기사는 지난주의 두 배로 늘었습니다.',
    color:   '#1B4F8A',
    content: `
      <p style="color:#718096;font-size:.9rem;margin-bottom:24px;">2026년 10월 5일 – 9일 · 티움 위클리 제4호</p>

      <p>사랑하는 티움 후원자 여러분, 그리고 티움을 찾아 주신 방문자 여러분, 안녕하세요.</p>
      <p>티움 사무국장 최주안입니다. 10월 둘째 주였습니다. 미국에서는 AI를 받아들이는 도시와 막는 도시가 같은 주에 나란히 기사에 올랐고, 국내에서는 교육청과 기업이 조직과 리더십을 다시 짜고 있었습니다. 한 주치 뉴스를 모아 다시 읽어 보았습니다.</p>

      <p style="margin:22px 0 6px;"><img src="assets/images/weekly/wk-2026-41.jpg" alt="일러스트 — 동네 도서관 탁자에서 중년의 남성과 어르신이 나란히 앉아 노트북을 보고, 옆의 젊은 여성이 화면을 짚어 주며, 창밖 길가에는 서로 반대쪽을 가리키는 이정표가 서 있는 모습" width="1600" height="900" style="width:100%;height:auto;border-radius:8px;" loading="lazy" decoding="async"></p>
      <p style="margin:0 0 24px;font-size:13px;color:#718096;">창밖 이정표는 서로 반대쪽을 가리킵니다. 창 안에서는 어른들이 나란히 앉아 먼저 배우고 있습니다.</p>
      <h3>📊 이번 주 한눈에</h3>
      <p>닷새 동안 <strong>70건</strong>의 기사를 읽었습니다. 국내 37건, 해외 33건입니다.</p>
      <svg viewBox="0 0 640 224" width="100%" role="img" aria-label="이번 주 일별 국내·해외 기사 수" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">
<style>.lb{font-size:13px;fill:#4a5568}.nm{font-size:12px;fill:#fff;font-weight:700}.lg{font-size:12px;fill:#4a5568}</style>
<text class="lb" x="68" y="35" text-anchor="end">10/5(월)</text>
<rect x="78" y="20" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="35" text-anchor="middle">7</text>
<rect x="324.0" y="20" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="35" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="35">14건</text>
<text class="lb" x="68" y="69" text-anchor="end">10/6(화)</text>
<rect x="78" y="54" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="69" text-anchor="middle">7</text>
<rect x="324.0" y="54" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="69" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="69">14건</text>
<text class="lb" x="68" y="103" text-anchor="end">10/7(수)</text>
<rect x="78" y="88" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="103" text-anchor="middle">7</text>
<rect x="324.0" y="88" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="103" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="103">14건</text>
<text class="lb" x="68" y="137" text-anchor="end">10/8(목)</text>
<rect x="78" y="122" width="281.1" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="218.6" y="137" text-anchor="middle">8</text>
<rect x="359.1" y="122" width="210.9" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="464.6" y="137" text-anchor="middle">6</text>
<text class="lb" x="580.0" y="137">14건</text>
<text class="lb" x="68" y="171" text-anchor="end">10/9(금)</text>
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
        <li><strong>월</strong> — 국내외 AI교육 담론이 "어떻게 활용하나"에서 "누가, 왜, 어떤 기준으로 가르치나"로 무게중심을 옮기고 있다 — 격차 해소·정책 수립·리더십 교육이 다음 단계의 핵심 키워드다.</li>
        <li><strong>화</strong> — 국내외 모두 AI 교육이 "도입" 단계를 지나 "전담조직·제도화"로 넘어가는 동시에, 세대·기관·대학 간 AI 격차와 신뢰 약화라는 새로운 과제가 함께 떠오르고 있습니다.</li>
        <li><strong>수</strong> — AI 교육이 학부모 특강·학교 정책·글로벌 기업 협업으로 동시에 확산되는 가운데, 정작 핵심 과제는 "AI를 얼마나 쓰느냐"가 아니라 "얼마나 책임있게, 제대로 가르치느냐"로 옮겨가고 있다.</li>
        <li><strong>목</strong> — 국내는 교육청·공공기관 중심의 AI교육 인프라 확충과 수능 부정행위 규제가 속도를 내는 반면, 해외는 청소년 맞춤 AI도구와 K-12 가이드라인 정립을 통해 '사람 중심 AI 교육'의 틀을 다지고 있다.</li>
        <li><strong>금</strong> — 국내는 교육청·도서관·기업이 '누가 AI교육을 주도할 것인가'를 두고 조직개편과 리더십 강화에 나섰고, 해외는 AI 리터러시가 실제 급여·평가방식·정책결정까지 바꾸는 단계로 진입했다—티움에게는 '막연한 두려움'을 '구체적 역량'으로 바꿔주는 콘텐츠의 시장성이 동시에 확인되는 하루다.</li>
      </ul>

      <h3>🔍 이번 주 흐름 세 가지</h3>
      <ul>
        <li><strong>같은 질문에 정반대의 답이 나왔습니다</strong> — 이번 주 미국 교육청들의 결정은 서로 반대 방향이었습니다. 보스턴은 <a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFBlUzFmRy1vRGtEczA1b2gycUNOTGFKTkpydWNIcEhzcU02WlpKd2FzVWpzOUl5cjNfN3JRQWVrWkdpTzFMdjZ6cVNaLVBEa2JIN1FiYWNRRXVicmVXX3hLSVJXaUt1STA0M2RIRHQ4WTR4S0FCWldPbHlYcm9aS3M?oc=5" target="_blank" rel="noopener">뉴욕·LA와 달리 공립학교에 AI를 전면 수용</a>했고, 뉴욕과 LA는 <a href="https://news.google.com/rss/articles/CBMidEFVX3lxTE5iRkV4QWpaRFYyMUpjNWdZVGRyVjJxSWQzZlJycjh3aTZOVDFMemtoeXVtcVdoLWRFYUZybFRNYTZyY2hSLUFhbl9vakNpMklaVmFyTjRBcDNiYndJWW1oWFhOX1lnZU1hUW0tbWZpb2xRLW9P?oc=5" target="_blank" rel="noopener">학생의 AI 사용을 제한</a>했습니다. 프레더릭 카운티 교육위원회는 <a href="https://news.google.com/rss/articles/CBMirAFBVV95cUxPazFuQ25US1RSR2E3THNtVWFNM3lzYWlIekx4VS1fZlE4bEZSUUZzYVhCXzVLdmZBZE9Za3dUc2xpYzl1ZW9pUkNZWXJNVlRJUWRjWVF2aXNtWFNJYXFydUpGODhMQ3otb1h5WDlfN2hETDVZcWpLUWJDYUJBbVhCRml0MFlYX0g1VEIzcmR0a29RY2xLdk1jWWFBZktKSWxuU2QyOS1tZlprMFF4?oc=5" target="_blank" rel="noopener">유치원부터 12학년까지 학생의 AI 사용을 금지</a>하기로 의결했습니다. 플로리다에서는 새 AI 규정이 <a href="https://news.google.com/rss/articles/CBMiowFBVV95cUxQTHFVVjhQNnFCcU5NcWw5YnlySzhXdmFleW5uSlMwNmpGNUZWb1c5bTcyWm9PMGw5Qk90ak8taWZ2OEtIa09UMmplNzVSTm52blhrbjRHUzk0ZnZVeWR6OUFDUFNnWW4xUkR3RENyX1hlZUZjTHZzMkZNLWc2bGU5Y2g4VzdIZHJBa1BLYWZrNGFXVGtvdnpOSWlWTlhlWGZ0emdV?oc=5" target="_blank" rel="noopener">교육청에 업무와 비용 부담</a>을 더했다는 보도가 나왔고, 뉴욕시는 <a href="https://news.google.com/rss/articles/CBMi2wFBVV95cUxNZWZPMVVTeE90MHYtRU1VZElvNmRGM3RCbklrLTdkb0I4LVRZR3Z3VnZiOWxSSVRhdWNqaVM1OWJlLTZNV2lYMnNlVjBwRXdKMWp6TVpXNVZiMnYtQl9lRURmMTNKY1k3T2tTZGctdXE5VWw2elpheldOQThpNHlSMzh2eVZrNENjNkM2c085TGU3bF9KaWNacTcxM2VPTm1wVEMta1hGeE41ckt1YkFReDZUeVZoRWVaTUNkbHAwbVBGWlNHY0Fwbi1jbThZUFpDU3htNkxNX1ZOWDQ?oc=5" target="_blank" rel="noopener">1년 안에 K-12 AI 가이드라인을 마련해야</a> 하는 과제를 안았습니다.<br/><br/>국내도 규칙을 세우는 한 주였습니다. 경북교육청은 <a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE94NmxIUFVoY1BFaVpGa082WU5BeE9BdmM2V3hZYXdqZ1d3ZXBPWGRvZnoxRlVhRjgydHdkelpwU3BWMWRVSWV0Z1VKVDlzX3NfT0tYQQ?oc=5" target="_blank" rel="noopener">AI디지털교육과 신설</a>을 추진하고, 경북교육감은 <a href="https://news.google.com/rss/articles/CBMiY0FVX3lxTFAtR3hkUlN0Q2JvX3dWUTZZQjBSWHExTlRfQ1IzNlp1d2hNR3d2MFVmZHRDOE5xbHJ3QlhaUjJDWkdxb1NhVzBJekhJZGtKekFSb01BSWFqSVA0VHhwQmtFTzRDSQ?oc=5" target="_blank" rel="noopener">정책사업을 절반으로 줄이고 AI교육을 앞에 세웠습니다</a>. 교육부 장관은 수능에서 <a href="https://news.google.com/rss/articles/CBMieEFVX3lxTE9PY3pqUlR0NHAtUERmTGJZUnBVdm1zLVplY1VKdy1YWHR2V0psVEpETVpnY0o1RTZrSGhXMmRZRzRlNG1rSlZvUUtlZmZWR0ZMWXAyeXZrUF9EODQwTFhLM0toa1psTE5EQ1RzMkNQN1dnMG4yYUExTtIBeEFVX3lxTE9PY3pqUlR0NHAtUERmTGJZUnBVdm1zLVplY1VKdy1YWHR2V0psVEpETVpnY0o1RTZrSGhXMmRZRzRlNG1rSlZvUUtlZmZWR0ZMWXAyeXZrUF9EODQwTFhLM0toa1psTE5EQ1RzMkNQN1dnMG4yYUExTg?oc=5" target="_blank" rel="noopener">AI 안경 부정행위가 적발되면 이듬해 응시자격까지 박탈</a>하겠다고 밝혔고, 2026학년도 수행평가에서 <a href="https://news.google.com/rss/articles/CBMiU0FVX3lxTE5UcW9RT0s0NVBIaURDRzlneEVuNEtPdHY3MEdCU2lBdWtxd3NCSEN5bG5NX2MxTlZodmQ2Tm5CbmpydjVmZUJKNl9YX0d4eEt1S3lZ?oc=5" target="_blank" rel="noopener">챗GPT를 어디까지 써도 되는지</a>를 다룬 해설도 나왔습니다. 그 사이 <a href="https://news.google.com/rss/articles/CBMirAFBVV95cUxQaEo2SkVQNGc5ZVp1MEtOX2tXTWppZUtFT1VVSmhkWGxMT0lGRU5RYmJRbm9mbjhzTkxGcVg4RFExVXJmUmlMLVk1RlZkLUl3Z3JxYmhTOTNXRG1teDZnOG9mSlNES1FOMGdjWmV4UllqX243TWlxdlUyNXRvalJiMm1kbElFRmZiem8xRWZvOHFVa1phVUZmOHplNF9KNjBBQkxBa09ydVpGTHpa?oc=5" target="_blank" rel="noopener">중국은 전 학생 AI 교육을 의무화</a>했다는 소식이 전해졌습니다. 아직 정답 정책은 없습니다. 저마다 다른 답을 시험하고 있습니다.<br/><br/></li>
        <li><strong>이끄는 사람이 먼저 배우고 있습니다</strong> — 한 칼럼은 AI 시대 기업 경쟁력이 <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE1sZlZJbWdUNFBZSnJpZ1BWUmhhRUhQR0Q4QTJTTk1RZlJ3SnIydmhneFlDbGd1WVJjWFlqZVQzUFdJdVc0ZXBHZnJfb19fTEtmbHdZMGdGTUtCVXRiR1hIRUtsUkE2a1Z0bk1v?oc=5" target="_blank" rel="noopener">관리자의 AI 리터러시</a>에 달려 있다고 썼습니다. 더존비즈온의 한 사장은 <a href="https://news.google.com/rss/articles/CBMic0FVX3lxTFB3QjFLM084SWhNZmtpNmR5UmNIcFh3c1lYYndtdnN1ZDF6aGRZQy1sZ3hkTVhQY1NmbDF3QWtMNFllZThhWV81RklTY2NtNndTR1Brd0Q2UDJLQzc1QjJYREJhRng3SjcyV2p4M0FIUjRnMWfSAXNBVV95cUxQd0IxSzNPOEloTWZraTZkeVJjSHBYd3NZWGJ3bXZzdWQxemhkWUMtbGd4ZE1YUGNTZmwxd0FrTDRZZWU4YVlfNUZJU2NjbTZ3U0dQa3dENlAyS0M3NUIyWERCYUZ4N0o3MldqeDNBSFI0ZzFn?oc=5" target="_blank" rel="noopener">AI 전환의 성패는 리더십에 있고, 잘 쓰는 기업은 6~8%뿐</a>이라고 진단했습니다. 한국전력기술은 <a href="https://news.google.com/rss/articles/CBMiZEFVX3lxTE1MYVppV296XzJfZTlKcFlQNzN2TWk2eF9ienY3RDZpMENVQ1JLVVN5ajdQZEZQd2VuSGt2cXdwcVlua2JndFhrSmNITmdXanI3NTVlNmg3SFAtR244MnJsbWNWd0k?oc=5" target="_blank" rel="noopener">AI 리더십을 강화하고 협력사와 노하우를 나누겠다</a>고 밝혔습니다.<br/><br/>학교도 같습니다. 전남 장성에서는 <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE5vclJrWUlTQld0dm9PLUhfazVJeGdIdVp4TmNWSURtcW5hczBYR18tODcyV0ZUSURsUUREaHA4X29YeFdvQzBLQU0wT1Y3a3NLSTB4RlhoREFNS0ZwWGtJYV9ON1BHOUtqa1M1cw?oc=5" target="_blank" rel="noopener">학교 관리자 39명이 AI를 활용한 학교경영 실습</a>을 했고, 강원에서는 <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE15aVhtb2JVdWlqTFlIZ2tXNEJoLVRNSmlMVEhmd1BYbDJwVl9qeVlMLUxYbUhHUDI4bVc5VlUtVzZOWGxFRDhvMVVLOTJHRG9INlF2MFl2a1hFc3AwaFRuSDRCdHpRMGtY?oc=5" target="_blank" rel="noopener">청소년지도자 대상 생성형 AI 직무교육</a>이 열렸습니다. 미국 플로리다애틀랜틱대는 <a href="https://news.google.com/rss/articles/CBMiYkFVX3lxTE9DamhlQnRSaUNsalpjQllMLTk0bk9SUzdhVUlTamVqNUY2d19HX2w0V21yWm9nNDlpd0hwc0ZxSmpfRndGZldlUG1mWTJDVS1ubThwQkhpOE5NMkxHblhTT2Fn?oc=5" target="_blank" rel="noopener">570만 달러 규모로 교사들의 AI 리터러시</a>를 키운다고 합니다. 한 조사에서 교사들은 <a href="https://news.google.com/rss/articles/CBMikAFBVV95cUxORVE4OWlBVWRGS0FqT1FJYlpRYXBhWUlMaXRNOXBaX2FOaHA2eUR5TXg5allSNktKZ3U0bnFIZUJVX1J5dEM2Nms3YkI0S0gtZWJ4MlNiakJ1Q2swOVZLd1phZHBDQWtSeG9CRExvdXhfZUg3bzhLM1NQMnJtQm5WZ0t0SG9KRVRHVzdHYzVFT28?oc=5" target="_blank" rel="noopener">기술 금지보다 실질적인 활용 가이드와 지원</a>을 원한다고 답했습니다. 하버드 교육대학원은 AI가 바꾸는 것은 <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9PMGI1clFVTVl4dXJtREpmdVI2bXNxWUdMb0ZUYWxkUXBrZ3pEUUZjRXNHcWgwX1V3aG5YbjhLelAtcVZXMjdpaC1PTlR3M2dpNkRqWjhxRkJ1bU1Ua3ZyRXFCWjVzR1FJYWxObTFnRnA?oc=5" target="_blank" rel="noopener">기술 자체가 아니라 가르치고 배우는 방식</a>이라고 짚었습니다.<br/><br/></li>
        <li><strong>격차는 세대와 대학과 성별을 따라 갈라지고 있습니다</strong> — 한 연속 보도는 <a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE5NTUNyVGpRd19ZZDlrWTdsR2l5NjVaWmxsSXNGMmc2UElMWXUyVW8tSVpxaHhrVmhYeFpXY1FhbzNrdzRjYUFMYnhfaEdqWEZZR21SSw?oc=5" target="_blank" rel="noopener">키오스크도 버거운 고령층이 '디지털 미로'에서 길을 잃고 있다</a>고 전했고, 같은 기획에서 <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE5xWDcxaHpxNDFtZ250aS15eVRrOGN5RFR4SXloMW9JZWZMdDJ0c3BHT3VCYUt6WXNEM0NIaHNjcmYwcERoNHRFTDJOX0E2VnRwa0F0UUtmRE1JaTM3RGF0WEZhV3hLdzU5R2RIMQ?oc=5" target="_blank" rel="noopener">대학마다 AI 접근권이 전면 지원부터 미지원까지 갈린다</a>는 사실도 드러났습니다. 여성의 AI 사용이 남성보다 적은 이유로는 <a href="https://news.google.com/rss/articles/CBMiY0FVX3lxTE5meGg5QkVOZXRLMXgxdlB0YlZyaF9yYzlyRDVNMU9QU3dsR25CWEhtR3NwaTI5ZTBpczh2a2RLb2lEU2kzY0lCVk83YUYtR2dvOUhieXBDWkE4LTRtWEZzZ09TQQ?oc=5" target="_blank" rel="noopener">도구 접근과 학습시간의 격차</a>가 꼽혔습니다.<br/><br/>메우려는 손길도 있었습니다. 구미보건소는 <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5sR3RSLW0zcU1CRm5uZzBMOEJoN1dqdm5xbXJaejNqaHBvVjFCV2RhS1JKQWNJcDZtMmRqMWJGR3V5WHRDMTM1RmtfeXBXYUtWcDB4WklaeXgtb29qYTFxa0NKU2tIdms?oc=5" target="_blank" rel="noopener">어르신 맞춤형 AI·ICT 교육</a>을 마쳤고, 서울 도곡정보문화도서관은 이번 주에만 세 번 기사가 날 만큼 <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTFB6OGRTYW1BMGg2OUVScHM2R29vY1ZzVFlPRnNCQTVYM2R4QUtRNXZKSDNGZ2RqOUxkTWh0ZzlVTVpHalk5YWFoY1NRNGMyYlY4NHVlWWRrbXdrRXZOdnJ3S1lPNGcxbnRuLTcwNW5R?oc=5" target="_blank" rel="noopener">시니어 대상 AI 리터러시 교육</a>을 이어 가고 있습니다. KERIS와 초록우산은 <a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTE1PaTUtaEgtTnpBMEg1Z2VtdFVsME54ODJ2LTBZUDd4bGxGNEpITUdOTmxERnFOa1RKSmFmSXprUUdJbE5KZlBTR3ppTnBMTjdhcTVTVG5YZGduZWt1NHZJ?oc=5" target="_blank" rel="noopener">AI·디지털 교육격차 해소</a>를 위해 손을 잡았습니다. 다만 한 보도는 AI·디지털 교육비 사용처 <a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTFBOOGNFQVRaQWt3Rk91eEJCWmc3d2NvNEN3S1pQNlhKSmZHNC1oam5Gbk1YQ0hVUXBZTThQU3FfajU2bzlmYWw3WnplRXNrMmJxcEZLWFVoQms2dHRfVWhn0gFfQVVfeXFMUE44Y0VBVFpBa3dGT3V4QkJaZzd3Y280Q3dLWlA2WEpKZkc0LWhqbkZuTVhDSFVRcFlNOFBTcV9qNTZvOWZhbDdaemVFc2syYnFwRktYVWhCazZ0dF9VaGc?oc=5" target="_blank" rel="noopener">상위 60곳 중 전문기관이 4곳뿐</a>이라고 짚었습니다. 예산이 있어도, 제대로 가르칠 자리가 함께 있어야 합니다.</li>
      </ul>

      <p>한 가지 더, <strong>잘 쓰는 법보다 생각하는 힘</strong>을 묻는 목소리도 이어졌습니다. 한국 AI교육이 <a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE5aYndFOGZoTFQ4MmdlS0FBZGg3dnZUYk1pRDVVZHB1Y0V2SzFxV2NfUjlLaC1oOGZRZnUwc181TVRhMFNKZldJdUVxS0MwY2hUN0c5dA?oc=5" target="_blank" rel="noopener">'활용 역량'에 치중돼 있다</a>는 지적이 나왔고, 교육에 절실한 것은 <a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTFBWSVZyb0FwQ0I5SzJzOHVhWkRXTmhUYlVERWMxNktOVE94bUlUSlcySWN4WjA3VlAtVnBsREk4enhuTUdNa09aU1JCVzc5U1BwbzRXZDhEbW4yYktWNFZz0gFfQVVfeXFMUFZJVnJvQXBDQjlLMnM4dWFaRFdOaFRiVURFYzE2S05UT3htSVRKVzJJY3haMDdWUC1WcGxESTh6eG5NR01rT1pTUkJXNzlTUHBvNFdkOERtbjJiS1Y0VnM?oc=5" target="_blank" rel="noopener">AI가 아니라 계몽</a>이라는 칼럼도 실렸습니다. MIT 보고서는 AI가 <a href="https://news.google.com/rss/articles/CBMiwgFBVV95cUxOMTZKYWlodXNXb3pCMkgtcWNLQXBKOXlOdHdHbV9IUlNSXzIxcGVzVDh3UTNaZV9KTWdweTdBV1piamJudXlUV3RSak5UNzgwaVRoVmhQUjZvZzRZVUFveE1LaE52OENNeC1PZWxjbUR5ZVVZTkdhdWhCN0FILWJ4azhOUkVwdXNjNnBXVlVIOHRyR3BPQ0Z0ZHc2X19zVHdFNUFuWjEwOWs1a090MlE3QnV1dmhYZGp2X1pNNEVlNXk5dw?oc=5" target="_blank" rel="noopener">교수와 학생 사이의 신뢰를 약화</a>시키고 있다고 분석했고, 미국 대학가에서는 <a href="https://news.google.com/rss/articles/CBMiiwFBVV95cUxPMWlTT0R3ellSdW1yc0NHWjFkNzFlZS1iX282eWJDdE05eHZRLUtUX1Q2RnJjRGNabmt0MUxTeS1GRVJnTzVKUTFYRG1SZi01Q1pKTUNaWEM2blJlUkJMTjk2b0xHUUY3M1V2dzItY3N5WWh1cXJ5Sk9kVGxUOWwzU0NYSG8ySDhNdVhB?oc=5" target="_blank" rel="noopener">손글씨 과제와 구술시험이 다시 늘고</a> 있습니다. 청소년들이 AI를 두려워하면서도 <a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE42S0phQkpWQnp2NHZFWmtUMy1hTm5CX0t5M1ItdUtLMDM4dUk3ZlZMU0NXVFdvdnlidkpQNDg1NE42TGphRDhjY2hyeDF0RmtmbGxkb04zS0JzS25hR1NwZA?oc=5" target="_blank" rel="noopener">그 두려움을 준비로 잇지 못한다</a>는 분석도 있었습니다.</p>

      <h3>📊 주제별로 나누어 보면</h3>
      <p>사무국이 70건을 여덟 가지 주제로 나누어 보았습니다.</p>
      <svg viewBox="0 0 640 260" width="100%" role="img" aria-label="이번 주 기사 주제별 분포" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">
<style>.lb{font-size:13px;fill:#4a5568}.ct{font-size:13px;fill:#1a1a2e;font-weight:700}</style>
<text class="lb" x="140" y="29" text-anchor="end">정책·가이드라인</text>
<rect x="150" y="15" width="430.0" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="588.0" y="29">22</text>
<text class="lb" x="140" y="59" text-anchor="end">교사·리더의 역할</text>
<rect x="150" y="45" width="175.9" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="333.9" y="59">9</text>
<text class="lb" x="140" y="89" text-anchor="end">사고력·정서·의존 경고</text>
<rect x="150" y="75" width="175.9" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="333.9" y="89">9</text>
<text class="lb" x="140" y="119" text-anchor="end">기업·직장 AI교육</text>
<rect x="150" y="105" width="175.9" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="333.9" y="119">9</text>
<text class="lb" x="140" y="149" text-anchor="end">격차·형평</text>
<rect x="150" y="135" width="156.4" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="314.4" y="149">8</text>
<text class="lb" x="140" y="179" text-anchor="end">현장·체험·진로</text>
<rect x="150" y="165" width="136.8" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="294.8" y="179">7</text>
<text class="lb" x="140" y="209" text-anchor="end">리터러시 제도화</text>
<rect x="150" y="195" width="78.2" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="236.2" y="209">4</text>
<text class="lb" x="140" y="239" text-anchor="end">안전·개인정보</text>
<rect x="150" y="225" width="39.1" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="197.1" y="239">2</text>
</svg>
      <p style="margin-top:14px;">가장 많은 것은 <strong>정책·가이드라인</strong>으로 22건이었습니다. 지난주 18건보다 더 늘었습니다. <strong>교사·리더의 역할</strong>, <strong>사고력·정서·의존 경고</strong>, <strong>기업·직장 AI교육</strong>이 9건씩으로 뒤를 이었습니다. 눈에 띄는 것은 <strong>격차·형평</strong>입니다. 지난주 4건에서 8건으로 두 배가 되었습니다. 반면 <strong>리터러시 제도화</strong>는 11건에서 4건으로 줄었습니다. "모두에게 가르치자"는 선언보다, 아직 누가 닿지 못했는지를 묻는 기사가 많아진 한 주였습니다.</p>

      <h3>💬 사무국장의 생각</h3>
      <p>세 흐름을 한 줄로 잇는다면 이렇습니다. <strong>허용할지 금지할지는 아직 아무도 정답을 모릅니다. 그래서 먼저 배운 어른이 곁에 있어야 합니다.</strong></p>
      <p>같은 주에 한 도시는 AI를 받아들이고, 다른 도시는 막았습니다. 어느 쪽이 옳은지 지금 말하기는 어렵습니다. 다만 어느 쪽을 택하든 남는 일이 있습니다. 교실에서, 회사에서, 동네 도서관에서 그 결정을 사람에게 풀어 주는 일입니다. 이번 주 기사들이 관리자와 교사, 지도자의 배움을 유난히 많이 다룬 것도 그 때문이라고 읽었습니다.</p>
      <p>격차 기사가 두 배로 늘어난 것도 마음에 남습니다. 키오스크 앞에서 머뭇거리는 어르신, 학교에 따라 달라지는 대학생의 접근권. 티움이 지난달 용인 기흥의 북카페에서 연 <a href="news.html#news-aischool-1-review">AI 수다방</a>도 그런 분들 옆에 앉는 자리였습니다. 이번 주 수요일에는 같은 북카페에서 두 번째 수다방을 열었습니다. 이번에는 AI를 어디까지 쓸지, 얼마나 믿어도 되는지를 두고 의견을 나누었습니다. 정책이 정해지기를 기다리지 않고, 지금 옆에 있는 사람들과 같이 묻고 같이 해 보는 일입니다.</p>
      <p>스코틀랜드의 첫 AI 교사는 학생들에게 <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTFBydy04SDFQSUFmbVJucXkxMVN0QVZWdTNWb1FxWFEtSWc0cGRNcENjVW9rQ1dPUWtoUlQtZ2VBWVlrYUJ4X3k1alJySExlZHNtOFRWeW1rTDVqemc?oc=5" target="_blank" rel="noopener">"AI 말을 다 믿지 말라"</a>고 경고했다고 합니다. 도구를 가르치는 사람이 도구를 의심하는 법도 함께 가르치고 있습니다. 규칙보다 사람이 먼저 서는 한 주가 되시기를 바랍니다.</p>
      <p>다음 주에도 이 자리에서 뵙겠습니다.</p>

      <h3>📎 이번 주 출처</h3>
      <ul style="font-size:.92em;line-height:1.75;">
        <li><a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFBlUzFmRy1vRGtEczA1b2gycUNOTGFKTkpydWNIcEhzcU02WlpKd2FzVWpzOUl5cjNfN3JRQWVrWkdpTzFMdjZ6cVNaLVBEa2JIN1FiYWNRRXVicmVXX3hLSVJXaUt1STA0M2RIRHQ4WTR4S0FCWldPbHlYcm9aS3M?oc=5" target="_blank" rel="noopener">보스턴, 뉴욕·LA와 달리 공립학교에 AI 전면 수용</a> <span style="color:#718096;font-size:.86em;">· The Boston Globe · 10/6</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMidEFVX3lxTE5iRkV4QWpaRFYyMUpjNWdZVGRyVjJxSWQzZlJycjh3aTZOVDFMemtoeXVtcVdoLWRFYUZybFRNYTZyY2hSLUFhbl9vakNpMklaVmFyTjRBcDNiYndJWW1oWFhOX1lnZU1hUW0tbWZpb2xRLW9P?oc=5" target="_blank" rel="noopener">뉴욕·LA, 확산되는 AI 속에서 학생 AI 사용 제한</a> <span style="color:#718096;font-size:.86em;">· The Herald Insight · 10/7</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMirAFBVV95cUxPazFuQ25US1RSR2E3THNtVWFNM3lzYWlIekx4VS1fZlE4bEZSUUZzYVhCXzVLdmZBZE9Za3dUc2xpYzl1ZW9pUkNZWXJNVlRJUWRjWVF2aXNtWFNJYXFydUpGODhMQ3otb1h5WDlfN2hETDVZcWpLUWJDYUJBbVhCRml0MFlYX0g1VEIzcmR0a29RY2xLdk1jWWFBZktKSWxuU2QyOS1tZlprMFF4?oc=5" target="_blank" rel="noopener">Frederick County School Board votes to ban AI use for pre-K through 12th grade students</a> <span style="color:#718096;font-size:.86em;">· FOX 5 DC · 10/9</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMi2wFBVV95cUxNZWZPMVVTeE90MHYtRU1VZElvNmRGM3RCbklrLTdkb0I4LVRZR3Z3VnZiOWxSSVRhdWNqaVM1OWJlLTZNV2lYMnNlVjBwRXdKMWp6TVpXNVZiMnYtQl9lRURmMTNKY1k3T2tTZGctdXE5VWw2elpheldOQThpNHlSMzh2eVZrNENjNkM2c085TGU3bF9KaWNacTcxM2VPTm1wVEMta1hGeE41ckt1YkFReDZUeVZoRWVaTUNkbHAwbVBGWlNHY0Fwbi1jbThZUFpDU3htNkxNX1ZOWDQ?oc=5" target="_blank" rel="noopener">뉴욕시, K-12 AI 가이드라인을 1년 안에 마련해야 할 과제</a> <span style="color:#718096;font-size:.86em;">· Education Week · 10/8</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE94NmxIUFVoY1BFaVpGa082WU5BeE9BdmM2V3hZYXdqZ1d3ZXBPWGRvZnoxRlVhRjgydHdkelpwU3BWMWRVSWV0Z1VKVDlzX3NfT0tYQQ?oc=5" target="_blank" rel="noopener">경북교육청, AI디지털교육과 신설…2027년 조직개편 추진</a> <span style="color:#718096;font-size:.86em;">· v.daum.net 외 · 10/6</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMieEFVX3lxTE9PY3pqUlR0NHAtUERmTGJZUnBVdm1zLVplY1VKdy1YWHR2V0psVEpETVpnY0o1RTZrSGhXMmRZRzRlNG1rSlZvUUtlZmZWR0ZMWXAyeXZrUF9EODQwTFhLM0toa1psTE5EQ1RzMkNQN1dnMG4yYUExTtIBeEFVX3lxTE9PY3pqUlR0NHAtUERmTGJZUnBVdm1zLVplY1VKdy1YWHR2V0psVEpETVpnY0o1RTZrSGhXMmRZRzRlNG1rSlZvUUtlZmZWR0ZMWXAyeXZrUF9EODQwTFhLM0toa1psTE5EQ1RzMkNQN1dnMG4yYUExTg?oc=5" target="_blank" rel="noopener">최교진 "수능서 AI 안경 적발 시 이듬해 응시자격도 박탈"</a> <span style="color:#718096;font-size:.86em;">· 뉴시스 · 10/8</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE1sZlZJbWdUNFBZSnJpZ1BWUmhhRUhQR0Q4QTJTTk1RZlJ3SnIydmhneFlDbGd1WVJjWFlqZVQzUFdJdVc0ZXBHZnJfb19fTEtmbHdZMGdGTUtCVXRiR1hIRUtsUkE2a1Z0bk1v?oc=5" target="_blank" rel="noopener">[시시각각] AI 시대의 기업 경쟁력, 관리자의 AI 리터러시가 좌우한다</a> <span style="color:#718096;font-size:.86em;">· 영남일보 · 10/6</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMic0FVX3lxTFB3QjFLM084SWhNZmtpNmR5UmNIcFh3c1lYYndtdnN1ZDF6aGRZQy1sZ3hkTVhQY1NmbDF3QWtMNFllZThhWV81RklTY2NtNndTR1Brd0Q2UDJLQzc1QjJYREJhRng3SjcyV2p4M0FIUjRnMWfSAXNBVV95cUxQd0IxSzNPOEloTWZraTZkeVJjSHBYd3NZWGJ3bXZzdWQxemhkWUMtbGd4ZE1YUGNTZmwxd0FrTDRZZWU4YVlfNUZJU2NjbTZ3U0dQa3dENlAyS0M3NUIyWERCYUZ4N0o3MldqeDNBSFI0ZzFn?oc=5" target="_blank" rel="noopener">[현장] 지용구 더존 사장 'AI 전환 성패는 리더십…잘 쓰는 기업 6~8%뿐'</a> <span style="color:#718096;font-size:.86em;">· 데일리한국 · 10/9</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE5vclJrWUlTQld0dm9PLUhfazVJeGdIdVp4TmNWSURtcW5hczBYR18tODcyV0ZUSURsUUREaHA4X29YeFdvQzBLQU0wT1Y3a3NLSTB4RlhoREFNS0ZwWGtJYV9ON1BHOUtqa1M1cw?oc=5" target="_blank" rel="noopener">장성 학교 관리자 39명, AI 활용 학교경영·업무경감 실습</a> <span style="color:#718096;font-size:.86em;">· 호남교육신문 · 10/9</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiYkFVX3lxTE9DamhlQnRSaUNsalpjQllMLTk0bk9SUzdhVUlTamVqNUY2d19HX2w0V21yWm9nNDlpd0hwc0ZxSmpfRndGZldlUG1mWTJDVS1ubThwQkhpOE5NMkxHblhTT2Fn?oc=5" target="_blank" rel="noopener">FAU Leads $5.7M Initiative to Boost Literacy, Prepare Educators for AI</a> <span style="color:#718096;font-size:.86em;">· Florida Atlantic University · 10/9</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE5NTUNyVGpRd19ZZDlrWTdsR2l5NjVaWmxsSXNGMmc2UElMWXUyVW8tSVpxaHhrVmhYeFpXY1FhbzNrdzRjYUFMYnhfaEdqWEZZR21SSw?oc=5" target="_blank" rel="noopener">키오스크도 버거운데…'디지털 미로'에 길 잃은 고령층</a> <span style="color:#718096;font-size:.86em;">· 이투데이 · 10/6</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE5xWDcxaHpxNDFtZ250aS15eVRrOGN5RFR4SXloMW9JZWZMdDJ0c3BHT3VCYUt6WXNEM0NIaHNjcmYwcERoNHRFTDJOX0E2VnRwa0F0UUtmRE1JaTM3RGF0WEZhV3hLdzU5R2RIMQ?oc=5" target="_blank" rel="noopener">[단독] 대학 따라 'AI 접근권' 갈렸다…전면 지원부터 미지원까지 천차만별</a> <span style="color:#718096;font-size:.86em;">· 이투데이 · 10/6</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiY0FVX3lxTE5meGg5QkVOZXRLMXgxdlB0YlZyaF9yYzlyRDVNMU9QU3dsR25CWEhtR3NwaTI5ZTBpczh2a2RLb2lEU2kzY0lCVk83YUYtR2dvOUhieXBDWkE4LTRtWEZzZ09TQQ?oc=5" target="_blank" rel="noopener">[더테크 픽] 여성의 AI 사용이 남성보다 적은 이유는…"도구 접근·학습시간 격차"</a> <span style="color:#718096;font-size:.86em;">· 더테크 · 10/5</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTFBOOGNFQVRaQWt3Rk91eEJCWmc3d2NvNEN3S1pQNlhKSmZHNC1oam5Gbk1YQ0hVUXBZTThQU3FfajU2bzlmYWw3WnplRXNrMmJxcEZLWFVoQms2dHRfVWhn0gFfQVVfeXFMUE44Y0VBVFpBa3dGT3V4QkJaZzd3Y280Q3dLWlA2WEpKZkc0LWhqbkZuTVhDSFVRcFlNOFBTcV9qNTZvOWZhbDdaemVFc2syYnFwRktYVWhCazZ0dF9VaGc?oc=5" target="_blank" rel="noopener">[단독] AI·디지털 교육비인데 비AI 강좌도 ‘OK’…“사용처 상위 60곳 중 전문기관 4곳”</a> <span style="color:#718096;font-size:.86em;">· 경향신문 · 10/7</span></li>
      </ul>

      <p style="margin-top:22px;padding:14px 16px;background:#f7f9fc;border-radius:8px;font-size:.86em;color:#5e6b7d;line-height:1.75;">티움 위클리는 매일 아침 AI가 국내외 뉴스를 추려 정리한 브리핑을, 사무국이 한 주 단위로 다시 읽고 흐름과 생각을 더해 씁니다. 기사 내용은 각 원문을 기준으로 하며, 주제 분류와 판단은 사무국의 것입니다.</p>

      <p style="margin-top:24px;">감사합니다.<br><strong>사단법인 티움 사무국장 최주안 드림</strong></p>
`,
  },

  {
    id:      'wk-2026-40',
    issue:   3,
    period:  '2026-09-28/2026-10-02',
    label:   '2026년 9월 28일 – 10월 2일',
    title:   '제3호 — 선언은 많고, 가르칠 사람은 적다',
    summary: '이번 주 국내외 AI·교육 뉴스 70건. 국내는 대학·정부의 발표가 이어졌고 해외는 도입 뒤의 부작용을 이야기했습니다. 그 사이에서 "누가 곁에서 가르칠 것인가"가 가장 큰 물음이었습니다.',
    color:   '#1B4F8A',
    content: `
      <p style="color:#718096;font-size:.9rem;margin-bottom:24px;">2026년 9월 28일 – 10월 2일 · 티움 위클리 제3호</p>

      <p>사랑하는 티움 후원자 여러분, 그리고 티움을 찾아 주신 방문자 여러분, 안녕하세요.</p>
      <p>티움 사무국장 최주안입니다. 9월이 10월로 넘어간 한 주였습니다. 대학과 정부, 교육청의 발표가 유난히 많았고, 그 옆에는 "그런데 누가 가르칩니까"라는 물음이 나란히 놓여 있었습니다. 한 주치 뉴스를 모아 다시 읽어 보았습니다.</p>

      <p style="margin:22px 0 6px;"><img src="assets/images/weekly/wk-2026-40.jpg" alt="일러스트 — 북카페 탁자에서 청년이 어르신 옆에 앉아 노트북을 함께 보고, 옆 사람 곁에는 빈 의자가 있으며, 창밖 멀리 연단에서는 발표문이 흩날리는 모습" width="1600" height="900" style="width:100%;height:auto;border-radius:8px;" loading="lazy" decoding="async"></p>
      <p style="margin:0 0 24px;font-size:13px;color:#718096;">멀리서는 발표가 쏟아지고, 가까이에서는 누군가 옆에 앉습니다. 그리고 아직 비어 있는 의자가 있습니다.</p>

      <h3>📊 이번 주 한눈에</h3>
      <p>닷새 동안 <strong>70건</strong>의 기사를 읽었습니다. 국내 36건, 해외 34건입니다.</p>
      <svg viewBox="0 0 640 224" width="100%" role="img" aria-label="이번 주 일별 국내·해외 기사 수" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">
<style>.lb{font-size:13px;fill:#4a5568}.nm{font-size:12px;fill:#fff;font-weight:700}.lg{font-size:12px;fill:#4a5568}</style>
<text class="lb" x="68" y="35" text-anchor="end">9/28(월)</text>
<rect x="78" y="20" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="35" text-anchor="middle">7</text>
<rect x="324.0" y="20" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="35" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="35">14건</text>
<text class="lb" x="68" y="69" text-anchor="end">9/29(화)</text>
<rect x="78" y="54" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="69" text-anchor="middle">7</text>
<rect x="324.0" y="54" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="69" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="69">14건</text>
<text class="lb" x="68" y="103" text-anchor="end">9/30(수)</text>
<rect x="78" y="88" width="281.1" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="218.6" y="103" text-anchor="middle">8</text>
<rect x="359.1" y="88" width="210.9" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="464.6" y="103" text-anchor="middle">6</text>
<text class="lb" x="580.0" y="103">14건</text>
<text class="lb" x="68" y="137" text-anchor="end">10/1(목)</text>
<rect x="78" y="122" width="246.0" height="22" rx="4" fill="#1B4F8A"/>
<text class="nm" x="201.0" y="137" text-anchor="middle">7</text>
<rect x="324.0" y="122" width="246.0" height="22" rx="4" fill="#F5A623"/>
<text class="nm" x="447.0" y="137" text-anchor="middle">7</text>
<text class="lb" x="580.0" y="137">14건</text>
<text class="lb" x="68" y="171" text-anchor="end">10/2(금)</text>
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
        <li><strong>월</strong> — 국내외 모두 AI 교육 논의가 "허용이냐 금지냐"를 넘어 "누구에게 어떻게 가르칠 것인가"로 이동하고 있으며, 특히 성인·중장년층과 청소년 각각에 맞춘 AI 리터러시 프로그램 수요가 빠르게 커지고 있다.</li>
        <li><strong>화</strong> — 해외에서는 "AI를 금지할 것인가, 제대로 가르칠 것인가"를 둘러싼 실험과 논쟁이 이어지는 반면, 국내는 지자체·대학의 AI 전환 실행력과 세대·직군별 리터러시 격차 해소가 새로운 사업 기회로 부상하고 있다.</li>
        <li><strong>수</strong> — 대학·기업·정부가 일제히 "AI 중심 전환"을 선언하는 동시에, 학부모·학생은 과몰입과 검증 부족을 우려하는 이중적 흐름이 뚜렷하다—티움이 강조해온 '균형 잡힌 AI 리터러시'가 그 어느 때보다 설득력을 갖는 시점이다.</li>
        <li><strong>목</strong> — 국내는 대학·교육청·정부가 앞다퉈 AI 교육 협력·인프라를 발표하는 '선언의 계절'인 반면, 해외는 이미 도입된 AI가 교실 신뢰·교사 역할·정책 공백 같은 '실전 부작용'을 드러내는 단계로 넘어가고 있다.</li>
        <li><strong>금</strong> — 국내외 모두 AI교육을 빠르게 확산시키는 동시에, 교사 부족·학습효과 논란·조직 구조조정 같은 '속도 대 신중함'의 갈등이 동시에 드러나고 있다.</li>
      </ul>

      <h3>🔍 이번 주 흐름 세 가지</h3>
      <ul>
        <li><strong>국내는 '선언', 해외는 '부작용'을 이야기했습니다</strong> — 과기정통부가 <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5oVV9odkI5c1FjMFpoLVpyR2ZmOXN3SGtVWW5ydWxtT0h1YzhEa0llM3ZFZ1AyMjUzYS10R3pIMWJrbmJFSDFPUk9LUzJRUFphVVJUSkQ3c0NNcEpob3FvaWNJbm5ZaTg?oc=5" target="_blank" rel="noopener">AI중심대학 18개교와 AX대학원 15개교</a>를 출범시켰고, EBS와 가천대는 <a href="https://news.google.com/rss/articles/CBMiVkFVX3lxTFA2aVc4b04wcGl3Q3JyNHFXOXVMX2FtUnE2MlFsdnNNVUx3TFFvR0diVzd6R1RwSnJSXzRTcWNXczQ5RS15SUttcHM4VmZjZE93QWEtVUxR?oc=5" target="_blank" rel="noopener">전 국민 AI 리터러시 확산</a>을 위해 손을 잡았습니다. 교육부 장관은 <a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTE1ocW45SXFaYUVMa29OMHE4bnFxMUFmdF9WWTJYTFNiOWpjbDNYLWRtMFZ1cFdqdjA0SHA2T1FCM3VKVGNKNUp4cHBTOWlVTzJJd2dkcGxFSUNaX1I4LUM40gFfQVVfeXFMTWhxbjlJcVphRUxrb04wcThucXExQWZ0X1ZZMlhMU2I5amNsM1gtZG0wVnVwV2p2MDRIcDZPUUIzdUpUY0o1SnhwcFM5aVVPMkl3Z2RwbEVJQ1pfUjgtQzg?oc=5" target="_blank" rel="noopener">에스토니아·UAE와 AI·평생교육 협력</a>을 논의했고, 충남도는 <a href="https://news.google.com/rss/articles/CBMieEFVX3lxTE9QY2MxcEVqSGRoYk9NSG8tcENVNzNSNE5nMnBrUmdVVW1UZGxvVGxFZVlZc3lqalJpVWtBak9aN0dBcG85R2VaUm0ydldJWmx5NmkzZzhrbEFNajg1TjFldENzVk0wSFREWnNaY0FVTnd5emxZWXkxMtIBeEFVX3lxTE9QY2MxcEVqSGRoYk9NSG8tcENVNzNSNE5nMnBrUmdVVW1UZGxvVGxFZVlZc3lqalJpVWtBak9aN0dBcG85R2VaUm0ydldJWmx5NmkzZzhrbEFNajg1TjFldENzVk0wSFREWnNaY0FVTnd5emxZWXkxMg?oc=5" target="_blank" rel="noopener">'AI 대전환' 과제 219건</a>을 발굴했습니다.<br/><br/>같은 주 해외 기사들은 이미 들여놓은 뒤의 이야기였습니다. 구글이 학교에 AI 도구를 적극 보급한 뒤 <a href="https://news.google.com/rss/articles/CBMie0FVX3lxTE1GQ1g3MkhsR1VXWmJvLXU2UDYyMVR5ekl6aFJPc21nZW9GZUN6S2JwQkJNdHFFbHMtS2E3MlFTNnEtWFpsZHhRX2lhWVBsTEpZbm5ENGZha0hqb3hoT21aT0hLQ1FrSHdXVWJMUXB6R0pFeXphTnZqQ05VRQ?oc=5" target="_blank" rel="noopener">학생들조차 "너무 지나쳤다"고 말한다</a>는 보도가 나왔고, 에듀테크 업계가 <a href="https://news.google.com/rss/articles/CBMilgFBVV95cUxQb0lCZWg4dU9uSnFCa0pzRkVJbHlvVGwxcE5EeFJfOFBnV3FfaTdOeG5jd3lrNE1WSkN2OE5CUERTQ05Wd3luVVJmQmpxR3ZtRTRvNnM4MWhXblphUkYwYUd0bUpBTTRaSDZiYnhlSmN3ZkxDcnlsaUd1eUIzWVpQN2NKWXcxWnRNMmc2SVk4LXI3VUpzdVE?oc=5" target="_blank" rel="noopener">효과를 충분히 검증하지 않은 채 AI 통합을 서두른다</a>는 연구도 있었습니다. 미국 학교들이 <a href="https://news.google.com/rss/articles/CBMigAFBVV95cUxOOWNZbE4tY1FmOHFscFk2Yy1aU3JORnJrbDZRckc2amkzajd6UTF5eFJ6ZWs5UmtTMDVvdTVzWTFPZ2k4UDZVdmlLenNxMUpUZlBQV3RnSU5aQkFpaUFPa0Vual85aHJ1bk9YOWl2XzVFQVN6RWdqamx4MXJiLWhHRw?oc=5" target="_blank" rel="noopener">뚜렷한 근거도 정책도 없이 AI를 실험하고 있다</a>는 지적, 텍사스에서 <a href="https://news.google.com/rss/articles/CBMiiwFBVV95cUxQR09zMlZ5UnhuWGJuNkZUUUszMW1NZHNGTUJUdWZBWkZ0NEVYZ0RmOHpWS21HZ1JNalU1RDBqRG9Vbnl6OU84Mlg1WHpZNVNiaTdMNnlSWkJiQTdIV0RTaEo4N0trcHFKOW1YNnJ4djNBS0xXWFdHdWVEZ3o4T182N0tlVENqNXEzTE9z?oc=5" target="_blank" rel="noopener">주교육위가 의문을 제기한 AI 학습도구가 공립학교에 시범 도입됐다</a>는 보도도 이어졌습니다. 발표하는 일과 교실에서 겪는 일 사이에는 시차가 있습니다.<br/><br/></li>
        <li><strong>가르칠 사람의 자리가 비어 있습니다</strong> — 국내에서는 <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBfRURMeVlqYTVHZmk4SUR0QUNSU2xzb2JKX3VkQzVwTXhUMzQwU0NySjRTRWVPT04xVDA2eXYxbU5sNGpoNF9CSWpXc1gxQ1ZlTlJXX0RkUmk1VUM5dnVUUHhIYTJnZmc?oc=5" target="_blank" rel="noopener">AI를 가르칠 교사가 턱없이 부족하다</a>는 문제 제기가 나왔고, <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTFBKaUJJQ3BUV01RMnFoeHlNVmF6ZHluZm5ZMkpPZEY2LWdCZTZyMEVOTlNoRkU4MUJ2MmZrVjdIX3U3akZBRG5xREZkc3FTUGhya2VhYVRQNVB6Mk0?oc=5" target="_blank" rel="noopener">정보교사가 없는 학교의 학생은 무엇을 잃는가</a>라는 물음도 교육 쟁점으로 올라왔습니다. 해외의 한 주장은 더 직접적입니다. <a href="https://news.google.com/rss/articles/CBMiswFBVV95cUxQMzJVNmhhbE52Snl6aTQ2dHhOSGplWmFseGN1NnhSeVB1S2lXWW9uN1RYSWItWnM2Z2RoM2duUGlrcEpyei03RjRveHQ1R01aM1MwS01FSUkwMHFtRi16TU5rMUJJM2Ytd0FIZ0hBcFBNZUN3ZHhDZ21lNWJuMTdvbEVTekh6WWhRVTNlLUQyRFp0emlJQjFKRFBYZ2M1czB2OGFkMmdDSmRaNDAyVElVYUhORQ?oc=5" target="_blank" rel="noopener">AI가 교육을 망치는 것이 아니라 준비되지 않은 교사가 문제</a>라는 것입니다.<br/><br/>빈자리를 다르게 메우려는 시도도 있었습니다. 시카고에는 <a href="https://news.google.com/rss/articles/CBMiggFBVV95cUxONTRzeXVPYnZjcWNHajZoaXFBeGU2UnlTWm1nUUhfd3Vkc1d1NzU3bkRPY0JXYzhoTFFrUTNEdVhoLXFpeDNqaTU0MTlBcjg0NTRCc1A3OEVtTGJUX25pZk13RmZPVk8zX05KX0tzSjhZMlBBa19ZOTRrYVVaU18wS1Rn?oc=5" target="_blank" rel="noopener">교사 없이 AI가 수업을 이끄는 학교</a>가 실제로 문을 열었습니다. 그러나 같은 날 다른 기사는 <a href="https://news.google.com/rss/articles/CBMiqAFBVV95cUxQRk9iNU5IeHcxRVZEbUZnZnJUZWpGTk9hN2hHSGd5MFZkaE1pQ2VSV0VNMXV1M0lkSjdPZU5Bc1BpeGhJQ2ZldVFqNUFDUjRobEtDdUt0MzJFQnRFeDRmd0dDMjBtQ3NGM3A4WUhnMEplc3V2dEFDZ29DM3ZnbXlZUmEzZHNJWUctOEk3UjY3ZUNyV3ZwX0Y2Z1F2azFFem5fNEk5Sk13ZXA?oc=5" target="_blank" rel="noopener">AI 부정행위에 대한 의심이 학생과 교사 사이의 신뢰를 흔들고 있다</a>고 전했고, 국내에서는 <a href="https://news.google.com/rss/articles/CBMiXEFVX3lxTE1lOUREZHp2aFo3U1JnbTAtWThJOV9tUUFpQUFVdzNqT1g2blNzQldIWGo2UGJwcExVSnhYR2NadmVxZWlrdkl4ZGZacjktLTBjZXFRd1BwM1BwUWJi?oc=5" target="_blank" rel="noopener">"AI가 틀리면 누구 책임인가"</a>를 묻는 기획이 실렸습니다. 미국 마린카운티 학군이 <a href="https://news.google.com/rss/articles/CBMilAFBVV95cUxPaEt0Y3lqMEdaLVJUdDdPcXdxUUV6ZWF0NnV5ck5TWkhfZWRBNzNWQUFrczR6MEFyWDlPa2NtOHlDNlNxRmhGWGVETGE3WmdNMEhHMnhpaWZlV1VWNGtqT0RacUQtWUxNbS1PS3NZUHJ6dlhGOEppdE94bHNKM28wMFRFSFl3U2ZYMUtiUWVqMlZLdFRT?oc=5" target="_blank" rel="noopener">교직원 대상 AI 교육</a>부터 시작한 것은 그래서 눈에 띕니다.<br/><br/></li>
        <li><strong>배움의 자리가 학교 밖 어른에게로 넓어지고 있습니다</strong> — 국내 조사에서 <a href="https://news.google.com/rss/articles/CBMiT0FVX3lxTE1LQVhGNXhvVmhfajBJSTh2b3hxLTNYOGp0SnI5VzBjODlGa1F0WEhnNWdxSFZkNUpLUnFVV0xMZzJCTFp2bUROWVRJSHUxMkU?oc=5" target="_blank" rel="noopener">노년층의 85%가 AI를 배우면 새 기회가 생긴다</a>고 답했습니다. 천안시 공무원 AI 교육에는 <a href="https://news.google.com/rss/articles/CBMiakFVX3lxTE4xeGkwcVpQRkV3dW1wVlVDRzhHc2hkVW9qckdDZkRlM3l4ZmFDeE9LY0V3UjRzRE1TZnUyYkY2eGQ0aTlsWmVpM0VtRnF0TUdDelIzUWxCUERta2Q2VG5zUGxZSTFZckJYX0E?oc=5" target="_blank" rel="noopener">정원 500명에 650명이 몰렸고</a>, 중장년 재취업 지원에는 <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTE50Z0VKdnNFdWhRQlJrcUlJa3ZJU2xhVzNLYlFqUzJLWWxWMk5jN01UaGZUZzJRMXZfZFVfeFh4bk16Q3Q1Rm1WeGhIbVI4enlJcGJ4ZzNxTGtKdw?oc=5" target="_blank" rel="noopener">AI 활용 취업 준비</a>가 들어갔습니다. 미국에서는 AI를 두려워한 직장인들이 <a href="https://news.google.com/rss/articles/CBMixgFBVV95cUxQeDZYM0oyNmRIeXRRNnhIT3kxRHlxT1ZsTEJLeEdKenk2ZHhEMlYzdFJXQ2Zsd3JkYWFKdV80cE5HR21pNXBzUFFqajM2a3pvZzYtU2dGRTdoMHh2dmRqdXh1RDJlX29RZ3p5NDlDWVhtWGNYWU9kYlgxUUtaVUFkanMyNHVTWk5ONDkwUGhEbWlxQjRpQUtfaHM4eEdjVVhnOGlpX2xuMHA3WmgtTnVkM1kzT3JSMWxMekJ4QTRMY1hENGp5OFE?oc=5" target="_blank" rel="noopener">'사람만이 할 수 있는 일'을 찾아 다시 학교로</a> 돌아가고 있습니다.<br/><br/>한 칼럼은 AI 시대의 학교는 <a href="https://news.google.com/rss/articles/CBMimAFBVV95cUxQTVM4bHRKMGcxbTcxWXQ1X0tjRGpPZXZKUWxlbE92dkVidTBvY1V0QzZMaDgwSE45R2FFTkd2dUhoM0dGU1h1TGVoazhObHdWakdKVjZTOXJnSXNTSFoyQm5NUUgxU2VlRHNhdFZENkNzb0RDZnFNeUU2OUlQdHNidE1adVBIRnhOd0pRME5udGdmaDVia19xZA?oc=5" target="_blank" rel="noopener">졸업으로 끝나지 않는다</a>고 썼습니다. 다만 한 기고는 AI·디지털 격차가 <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFBvbGs4NVZqd21kX0liUFlYeERLOEtiaTBHUW93Y2ZTVW8wZzl5X0YzSzdmNDYtcmdxakNiUllhd1VVZ1ItQ2lBUUc2VkdkMEhDQWVuaW1XTG12dw?oc=5" target="_blank" rel="noopener">'연결'이 아니라 '참여'의 문제</a>라고 짚었고, 경기도의회에서는 <a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE9xNkJvcnhtbjFLcUp5RmZZU0xTRHhpX2VvNld0ai1OZkpGU0E3N1VDRDV5NlFpVjJ2MUpqZ2dMMHZwTndRNkFVd1VTaU85M0pzdmhtZ1dqWV9HUjRCM2hKcQ?oc=5" target="_blank" rel="noopener">"AI 격차가 삶의 격차가 되지 않도록"</a> 하자는 논의가 있었습니다. 배우고 싶은 마음은 이미 있습니다. 남은 것은 그 마음이 닿을 자리입니다.</li>
      </ul>

      <p>한 가지 더, <strong>생각과 마음을 지키자는 목소리</strong>는 이번 주에도 이어졌습니다. 학생들이 직접 선언하는 <a href="https://news.google.com/rss/articles/CBMiRkFVX3lxTE5qSlN3SVUzN3FySUpFeWJUUHVXWXY4bThSRDJiME5FSUVjOWxpREwtWXlCY0JoLVdZNjNDUnpSRXlndjEwVlE?oc=5" target="_blank" rel="noopener">'폰프리' 실험이 1,246개교로 번졌고</a>, 의성의 학부모들은 AI 시대 자녀교육의 핵심으로 <a href="https://news.google.com/rss/articles/CBMib0FVX3lxTE5nV3BVMEpjMklpazFyVmZxUk51d0pNS1RoR181RWlaeXlwV0ZQNjZYdDQzODNpWmNqdUNjTmc4cS1PR0NWaGJzT2JKeGlVSi1jS1piYmM2S2xaWmxZUks1bTZzb2xSUE9WWjRQcmg5Zw?oc=5" target="_blank" rel="noopener">스스로 생각하는 힘과 마음 건강</a>을 꼽았습니다. 해외 조사에서는 <a href="https://news.google.com/rss/articles/CBMiqgFBVV95cUxPVzQyUjJVbUtTaE9oc1NJb0RsS2lNMk8tOERKTnJMT1UxeEtuWjdtaS1VQzhiRnE0TWZRVkszaUZjTlhhYjM3WGs1bzFJOGdlNDVUWjJpSmVlX2dxRWxvcEExWU1YUkxxMTQ1S05RcnZlVnVPM0R6LVk2TG9vcXlKU3lxVF85Rll0TG9lR2FmbHpFNEViWWktdV80aGhDbzNvQThaN1RGVFV4Zw?oc=5" target="_blank" rel="noopener">학부모 4명 중 3명이 자녀가 숙제에 AI를 쓴다</a>고 답했습니다.</p>

      <h3>📊 주제별로 나누어 보면</h3>
      <p>사무국이 70건을 여덟 가지 주제로 나누어 보았습니다.</p>
      <svg viewBox="0 0 640 260" width="100%" role="img" aria-label="이번 주 기사 주제별 분포" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">
<style>.lb{font-size:13px;fill:#4a5568}.ct{font-size:13px;fill:#1a1a2e;font-weight:700}</style>
<text class="lb" x="140" y="29" text-anchor="end">정책·가이드라인</text>
<rect x="150" y="15" width="430.0" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="588.0" y="29">18</text>
<text class="lb" x="140" y="59" text-anchor="end">기업·직장 AI교육</text>
<rect x="150" y="45" width="262.8" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="420.8" y="59">11</text>
<text class="lb" x="140" y="89" text-anchor="end">리터러시 제도화</text>
<rect x="150" y="75" width="262.8" height="20" rx="4" fill="#1B4F8A"/>
<text class="ct" x="420.8" y="89">11</text>
<text class="lb" x="140" y="119" text-anchor="end">교사·리더의 역할</text>
<rect x="150" y="105" width="238.9" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="396.9" y="119">10</text>
<text class="lb" x="140" y="149" text-anchor="end">현장·체험·진로</text>
<rect x="150" y="135" width="143.3" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="301.3" y="149">6</text>
<text class="lb" x="140" y="179" text-anchor="end">사고력·정서·의존 경고</text>
<rect x="150" y="165" width="143.3" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="301.3" y="179">6</text>
<text class="lb" x="140" y="209" text-anchor="end">격차·형평</text>
<rect x="150" y="195" width="95.6" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="253.6" y="209">4</text>
<text class="lb" x="140" y="239" text-anchor="end">안전·개인정보</text>
<rect x="150" y="225" width="95.6" height="20" rx="4" fill="#7a9cc6"/>
<text class="ct" x="253.6" y="239">4</text>
</svg>
      <p style="margin-top:14px;">가장 많은 것은 <strong>정책·가이드라인</strong>으로 18건이었습니다. 지난주 11건에서 크게 늘었습니다. <strong>기업·직장 AI교육</strong>과 <strong>리터러시 제도화</strong>가 11건씩으로 뒤를 이었고, <strong>교사·리더의 역할</strong>은 지난주 6건에서 10건으로 늘었습니다. 지난주 가장 많았던 <strong>사고력·정서·의존 경고</strong>는 12건에서 6건으로 줄었습니다. 제도와 발표가 앞에 서고, 그것을 맡을 사람에 대한 질문이 뒤따른 한 주였습니다.</p>

      <h3>💬 사무국장의 생각</h3>
      <p>세 흐름을 한 줄로 잇는다면 이렇습니다. <strong>선언은 충분히 나왔습니다. 이제 비어 있는 것은 곁에서 가르칠 사람의 자리입니다.</strong></p>
      <p>대학을 지정하고 협약을 맺는 일은 필요합니다. 그러나 이번 주 해외 기사들은 그다음에 무슨 일이 생기는지를 먼저 보여 주었습니다. 도구는 빨리 들어오고, 검증과 신뢰는 천천히 따라옵니다. 그 사이를 메우는 것은 결국 사람입니다. 교사 없는 학교가 문을 연 날, 교사와 학생 사이의 신뢰가 흔들린다는 기사가 함께 실린 것이 저는 우연으로 읽히지 않았습니다.</p>
      <p>어른들의 배움도 같습니다. 500명 자리에 650명이 몰리고, 노년층의 85%가 기회라고 답합니다. 배우고 싶은 사람은 많습니다. 티움이 지난달 용인 기흥의 북카페에서 연 <a href="news.html#news-aischool-1-review">AI 수다방</a>도 그 마음을 만나는 자리였습니다. 강의를 듣는 자리가 아니라 옆에 앉아 같이 해 보는 자리였습니다. 이번 주 뉴스를 읽으며, 큰 선언과 작은 자리가 서로를 필요로 한다는 생각을 했습니다.</p>
      <p style="margin:22px 0 6px;"><img src="assets/images/news/sudabang1-05.jpg" alt="TIEUM AI 수다방 — 휴대폰 화면을 함께 보며 일대일로 도와주는 모습" style="width:100%;height:auto;border-radius:8px;border:1px solid #e2e8f0;" loading="lazy" decoding="async"></p>
      <p style="margin:0 0 24px;font-size:13px;color:#718096;">9월 22일, 용인 기흥 북카페에서 연 첫 AI 수다방. 옆에 앉아 같이 해 보는 자리였습니다.</p>
      <p>김포대의 한 프로그램은 <a href="https://news.google.com/rss/articles/CBMidEFVX3lxTE1PRE9uSG0wTjlxUkt2cWl5TTRpTW9CWjdJODduUXhSYVB1STcyRFZma01sbkMzRGh1QzduNHdNbEhMZUtNQUw2MVdvWXE2c3JNeFZuR2x6UERYNnhkZEh2UlRqRnNoWk85MERDRkxjMDZDQVh20gF0QVVfeXFMTU9ET25IbTBOOXFSS3ZxaXlNNGlNb0JaN0k4N25ReFJhUHVJNzJEVmZrTWxuQzNEaHVDN240d01sSExlS01BTDYxV29ZcTZzck14Vm5HbHpQRFg2eGRkSHZSVGpGc2haTzkwRENGTGMwNkNBWHY?oc=5" target="_blank" rel="noopener">'배우는 AI'를 넘어 '내 진로를 찾는 AI'로</a> 방향을 바꾸었다고 합니다. 무엇을 가르칠지보다 누구 곁에서, 무엇을 위해 가르칠지를 먼저 묻는 한 주가 되시기를 바랍니다.</p>
      <p>다음 주에도 이 자리에서 뵙겠습니다.</p>

      <h3>📎 이번 주 출처</h3>
      <ul style="font-size:.92em;line-height:1.75;">
        <li><a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5oVV9odkI5c1FjMFpoLVpyR2ZmOXN3SGtVWW5ydWxtT0h1YzhEa0llM3ZFZ1AyMjUzYS10R3pIMWJrbmJFSDFPUk9LUzJRUFphVVJUSkQ3c0NNcEpob3FvaWNJbm5ZaTg?oc=5" target="_blank" rel="noopener">과기정통부, 대학 교육 AI 중심 전환 본격화...AI중심대학 18개교·AX대학원 15개교 출범</a> <span style="color:#718096;font-size:.86em;">· 인공지능신문 · 9/30</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiVkFVX3lxTFA2aVc4b04wcGl3Q3JyNHFXOXVMX2FtUnE2MlFsdnNNVUx3TFFvR0diVzd6R1RwSnJSXzRTcWNXczQ5RS15SUttcHM4VmZjZE93QWEtVUxR?oc=5" target="_blank" rel="noopener">EBS, 가천대와 전 국민 AI 교육 확산 맞손</a> <span style="color:#718096;font-size:.86em;">· 지디넷코리아 · 10/1</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMie0FVX3lxTE1GQ1g3MkhsR1VXWmJvLXU2UDYyMVR5ekl6aFJPc21nZW9GZUN6S2JwQkJNdHFFbHMtS2E3MlFTNnEtWFpsZHhRX2lhWVBsTEpZbm5ENGZha0hqb3hoT21aT0hLQ1FrSHdXVWJMUXB6R0pFeXphTnZqQ05VRQ?oc=5" target="_blank" rel="noopener">구글의 학교 AI 확산, 학생들조차 "너무 지나쳤다"고 말하다</a> <span style="color:#718096;font-size:.86em;">· wsj.com · 10/2</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMilgFBVV95cUxQb0lCZWg4dU9uSnFCa0pzRkVJbHlvVGwxcE5EeFJfOFBnV3FfaTdOeG5jd3lrNE1WSkN2OE5CUERTQ05Wd3luVVJmQmpxR3ZtRTRvNnM4MWhXblphUkYwYUd0bUpBTTRaSDZiYnhlSmN3ZkxDcnlsaUd1eUIzWVpQN2NKWXcxWnRNMmc2SVk4LXI3VUpzdVE?oc=5" target="_blank" rel="noopener">연구: 에듀테크, 효과 검증 없이 AI 통합을 서두르고 있다</a> <span style="color:#718096;font-size:.86em;">· EdSurge · 9/30</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMigAFBVV95cUxOOWNZbE4tY1FmOHFscFk2Yy1aU3JORnJrbDZRckc2amkzajd6UTF5eFJ6ZWs5UmtTMDVvdTVzWTFPZ2k4UDZVdmlLenNxMUpUZlBQV3RnSU5aQkFpaUFPa0Vual85aHJ1bk9YOWl2XzVFQVN6RWdqamx4MXJiLWhHRw?oc=5" target="_blank" rel="noopener">학교들, 근거도 정책도 없이 AI 실험 중</a> <span style="color:#718096;font-size:.86em;">· NPR · 9/29</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBfRURMeVlqYTVHZmk4SUR0QUNSU2xzb2JKX3VkQzVwTXhUMzQwU0NySjRTRWVPT04xVDA2eXYxbU5sNGpoNF9CSWpXc1gxQ1ZlTlJXX0RkUmk1VUM5dnVUUHhIYTJnZmc?oc=5" target="_blank" rel="noopener">[이슈 제안] AI 가르칠 교사 턱없이 부족, 어떻게 해결할 것인가?</a> <span style="color:#718096;font-size:.86em;">· 교육플러스 · 10/2</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTFBKaUJJQ3BUV01RMnFoeHlNVmF6ZHluZm5ZMkpPZEY2LWdCZTZyMEVOTlNoRkU4MUJ2MmZrVjdIX3U3akZBRG5xREZkc3FTUGhya2VhYVRQNVB6Mk0?oc=5" target="_blank" rel="noopener">[오늘의 교육쟁점] '정보교사' 없는 학교 학생은 뭘 잃을까…AI 시대 '교육격차' 괜찮나</a> <span style="color:#718096;font-size:.86em;">· 더에듀 · 9/29</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiswFBVV95cUxQMzJVNmhhbE52Snl6aTQ2dHhOSGplWmFseGN1NnhSeVB1S2lXWW9uN1RYSWItWnM2Z2RoM2duUGlrcEpyei03RjRveHQ1R01aM1MwS01FSUkwMHFtRi16TU5rMUJJM2Ytd0FIZ0hBcFBNZUN3ZHhDZ21lNWJuMTdvbEVTekh6WWhRVTNlLUQyRFp0emlJQjFKRFBYZ2M1czB2OGFkMmdDSmRaNDAyVElVYUhORQ?oc=5" target="_blank" rel="noopener">AI가 교육을 망치는 게 아니라, 준비되지 않은 교사가 문제다</a> <span style="color:#718096;font-size:.86em;">· PR Newswire · 9/29</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiggFBVV95cUxONTRzeXVPYnZjcWNHajZoaXFBeGU2UnlTWm1nUUhfd3Vkc1d1NzU3bkRPY0JXYzhoTFFrUTNEdVhoLXFpeDNqaTU0MTlBcjg0NTRCc1A3OEVtTGJUX25pZk13RmZPVk8zX05KX0tzSjhZMlBBa19ZOTRrYVVaU18wS1Rn?oc=5" target="_blank" rel="noopener">시카고에 교사 없는 AI 주도 학교 개교</a> <span style="color:#718096;font-size:.86em;">· CBS News · 10/1</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiqAFBVV95cUxQRk9iNU5IeHcxRVZEbUZnZnJUZWpGTk9hN2hHSGd5MFZkaE1pQ2VSV0VNMXV1M0lkSjdPZU5Bc1BpeGhJQ2ZldVFqNUFDUjRobEtDdUt0MzJFQnRFeDRmd0dDMjBtQ3NGM3A4WUhnMEplc3V2dEFDZ29DM3ZnbXlZUmEzZHNJWUctOEk3UjY3ZUNyV3ZwX0Y2Z1F2azFFem5fNEk5Sk13ZXA?oc=5" target="_blank" rel="noopener">AI 부정행위 의심이 학생-교사 관계를 해친다</a> <span style="color:#718096;font-size:.86em;">· Education Week · 10/1</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiT0FVX3lxTE1LQVhGNXhvVmhfajBJSTh2b3hxLTNYOGp0SnI5VzBjODlGa1F0WEhnNWdxSFZkNUpLUnFVV0xMZzJCTFp2bUROWVRJSHUxMkU?oc=5" target="_blank" rel="noopener">노년층 85% "AI 배우면 새 기회"…기대가 우려의 4배</a> <span style="color:#718096;font-size:.86em;">· v.daum.net · 9/28</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiakFVX3lxTE4xeGkwcVpQRkV3dW1wVlVDRzhHc2hkVW9qckdDZkRlM3l4ZmFDeE9LY0V3UjRzRE1TZnUyYkY2eGQ0aTlsWmVpM0VtRnF0TUdDelIzUWxCUERta2Q2VG5zUGxZSTFZckJYX0E?oc=5" target="_blank" rel="noopener">천안시 공무원 'AI 열공' 뜨겁다…500명 교육에 650명 몰려</a> <span style="color:#718096;font-size:.86em;">· 충청매일 · 10/1</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMixgFBVV95cUxQeDZYM0oyNmRIeXRRNnhIT3kxRHlxT1ZsTEJLeEdKenk2ZHhEMlYzdFJXQ2Zsd3JkYWFKdV80cE5HR21pNXBzUFFqajM2a3pvZzYtU2dGRTdoMHh2dmRqdXh1RDJlX29RZ3p5NDlDWVhtWGNYWU9kYlgxUUtaVUFkanMyNHVTWk5ONDkwUGhEbWlxQjRpQUtfaHM4eEdjVVhnOGlpX2xuMHA3WmgtTnVkM1kzT3JSMWxMekJ4QTRMY1hENGp5OFE?oc=5" target="_blank" rel="noopener">AI를 두려워한 직장인들, '사람만이 할 수 있는 일' 찾아 다시 학교로</a> <span style="color:#718096;font-size:.86em;">· The Washington Post · 10/1</span></li>
        <li><a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFBvbGs4NVZqd21kX0liUFlYeERLOEtiaTBHUW93Y2ZTVW8wZzl5X0YzSzdmNDYtcmdxakNiUllhd1VVZ1ItQ2lBUUc2VkdkMEhDQWVuaW1XTG12dw?oc=5" target="_blank" rel="noopener">[기고] AI·디지털 생활격차, 연결 아닌 참여 문제</a> <span style="color:#718096;font-size:.86em;">· 파이낸셜뉴스 · 9/29</span></li>
      </ul>

      <p style="margin-top:22px;padding:14px 16px;background:#f7f9fc;border-radius:8px;font-size:.86em;color:#5e6b7d;line-height:1.75;">티움 위클리는 매일 아침 AI가 국내외 뉴스를 추려 정리한 브리핑을, 사무국이 한 주 단위로 다시 읽고 흐름과 생각을 더해 씁니다. 기사 내용은 각 원문을 기준으로 하며, 주제 분류와 판단은 사무국의 것입니다.</p>

      <p style="margin-top:24px;">감사합니다.<br><strong>사단법인 티움 사무국장 최주안 드림</strong></p>
`,
  },

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
