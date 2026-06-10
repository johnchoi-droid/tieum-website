/**
 * 티움 멤버십 등록 — Google Apps Script
 * ────────────────────────────────────────
 * 배포 방법:
 *  1. script.google.com → 새 프로젝트 생성
 *  2. 이 코드 전체를 붙여넣기
 *  3. 상단 메뉴 [배포] → [새 배포] → 유형: 웹 앱
 *  4. 실행 계정: 나(본인), 액세스 권한: 모든 사용자
 *  5. 배포 → 생성된 URL을 index.html의 APPS_SCRIPT_URL에 붙여넣기
 */

// ── 설정값 ──────────────────────────────────────────
var FOLDER_ID        = '1P4bdEZYymDCgpa8x9LLCs1Iu0xR5a97z'; // 01_02_03_회원DB 폴더 ID
var SPREADSHEET_NAME = '티움 멤버십';      // 스프레드시트 이름
var SHEET_NAME       = '멤버십 DB';        // 시트 탭 이름
// ────────────────────────────────────────────────────

function doPost(e) {
  try {
    var data  = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet();

    // 헤더가 없으면 첫 행에 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['순번', '이름', '이메일', '연락처', '가입일시']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }

    // 순번 = 데이터 행 수 (헤더 제외)
    var seq = sheet.getLastRow(); // 헤더 포함이므로 그대로 순번으로 사용

    // 가입일시 (한국 시간)
    var now = new Date();
    var kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    var dateStr = Utilities.formatDate(kst, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      seq,
      data.name  || '',
      data.email || '',
      data.phone || '',
      dateStr
    ]);

    return jsonResponse({ status: 'ok', seq: seq });

  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

// ── 스프레드시트 시트 가져오기 (없으면 생성) ─────────
function getOrCreateSheet() {
  // 폴더 ID로 직접 접근
  var folder = DriveApp.getFolderById(FOLDER_ID);

  // 스프레드시트 탐색
  var fileIter = folder.getFilesByName(SPREADSHEET_NAME);
  var ss;
  if (fileIter.hasNext()) {
    ss = SpreadsheetApp.open(fileIter.next());
  } else {
    // 없으면 해당 폴더에 새로 생성
    ss = SpreadsheetApp.create(SPREADSHEET_NAME);
    var file = DriveApp.getFileById(ss.getId());
    folder.addFile(file);
    DriveApp.getRootFolder().removeFile(file);
  }

  // 시트 탭 탐색
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    var defaultSheet = ss.getSheetByName('Sheet1') || ss.getSheetByName('시트1');
    if (defaultSheet && ss.getSheets().length > 1) ss.deleteSheet(defaultSheet);
  }
  return sheet;
}

// ── GET 요청 처리 (CORS preflight 대응) ──────────────
function doGet(e) {
  return jsonResponse({ status: 'ok', message: 'TIEUM Membership API' });
}

// ── JSON 응답 헬퍼 ────────────────────────────────────
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
