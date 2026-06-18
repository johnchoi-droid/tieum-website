/**
 * 티움 게시판 Google Drive 연동 설정
 * ─────────────────────────────────────────────
 * ★ 아래 CLIENT_ID를 Google Cloud Console에서 발급받은 값으로 교체하세요.
 *
 * 발급 방법 (1회 설정):
 *   1. https://console.cloud.google.com 접속
 *   2. 프로젝트 선택(또는 새 프로젝트 생성)
 *   3. API 및 서비스 → 라이브러리 → "Google Drive API" → 사용 설정
 *   4. API 및 서비스 → 사용자 인증 정보 → + 만들기 → OAuth 2.0 클라이언트 ID
 *   5. 애플리케이션 유형: "웹 애플리케이션"
 *   6. 승인된 JavaScript 원본에 사이트 주소 추가
 *      예) https://tieum.org  /  http://localhost (테스트용)
 *   7. 생성된 클라이언트 ID(*.apps.googleusercontent.com)를 아래에 붙여넣기
 * ─────────────────────────────────────────────
 */

window.BOARD_DRIVE_CLIENT_ID = '697312304736-m7ijgsfaohou645kmeo9t5tjnb9a23jt.apps.googleusercontent.com';

/**
 * 게시판 저장 서버(Cloudflare Worker) 주소.
 * tieum-board-worker 배포 후 출력된 주소를 아래에 넣으세요.
 * 예) 'https://tieum-board.your-subdomain.workers.dev'
 * 비워두면 기존처럼 브라우저에만 임시 저장됩니다(사이트는 정상 작동).
 */
window.BOARD_API_URL = 'https://tieum-board.johnchoi7179.workers.dev';
