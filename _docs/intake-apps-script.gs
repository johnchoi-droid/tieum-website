/**
 * 티움 접수 (문의 + 후원 신청) — Google Apps Script
 * ─────────────────────────────────────────────────────
 * 웹사이트의 '연락하기' 폼과 '정기/일시 후원' 신청을
 * 구글 스프레드시트('티움 접수')에 자동 적재합니다.
 * 기존 '티움 멤버십' 스크립트와는 별개의 새 프로젝트입니다.
 * (멤버십 스크립트는 그대로 두세요 — 건드릴 필요 없습니다)
 *
 * 배포 방법: _docs/후원문의_접수시트_설정방법.txt 참고
 */

// ── 설정값 ──────────────────────────────────────────
var SPREADSHEET_NAME = '티움 접수(문의·후원)';
var FOLDER_ID         = '1SPSvPABWmH4CuHjn2c3GnMBT66Mctwtc'; // 접수 시트 보관 폴더
// ────────────────────────────────────────────────────

function doPost(e) {
  try {
    var data   = JSON.parse(e.postData.contents);
    var source = String(data.source || '');

    if (source === 'contact') {
      appendContact(data);
    } else if (source.indexOf('donation') === 0) {
      appendDonation(data, source);
    } else {
      // 알 수 없는 출처도 유실 없이 '기타' 시트에 기록
      appendMisc(data, source);
    }
    return jsonResponse({ ok: true, v: 1 });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.toString() });
  }
}

// ── 문의 시트 ────────────────────────────────────────
function appendContact(data) {
  var sheet = getSheet('문의',
    ['접수시각', '이름', '이메일', '문의유형', '메시지']);
  sheet.appendRow([
    nowKST(),
    data.name     || '',
    data.email    || '',
    data.category || '',
    data.message  || ''
  ]);
}

// ── 후원 신청 시트 ───────────────────────────────────
function appendDonation(data, source) {
  var sheet = getSheet('후원신청',
    ['접수시각', '구분', '이름', '연락처', '이메일', '금액', '후원목적']);
  var kind = (source === 'donation-regular') ? '정기(월)' : '일시';
  sheet.appendRow([
    nowKST(),
    kind,
    data.name    || '',
    data.phone   || '',
    data.email   || '',
    data.amount  || '',
    data.purpose || ''
  ]);
}

// ── 기타 시트 (예상 밖 출처 대비) ─────────────────────
function appendMisc(data, source) {
  var sheet = getSheet('기타', ['접수시각', '출처', '내용(JSON)']);
  sheet.appendRow([nowKST(), source, JSON.stringify(data)]);
}

// ── 스프레드시트/시트 가져오기 (없으면 생성) ──────────
function getSheet(tabName, headers) {
  var props = PropertiesService.getScriptProperties();
  var ssId  = props.getProperty('SS_ID');
  var ss;
  if (ssId) {
    try { ss = SpreadsheetApp.openById(ssId); } catch (e) { ss = null; }
  }
  if (!ss) {
    // 이름으로 탐색(드라이브 전체 대상 — 폴더 위치 무관), 없으면 지정 폴더에 새로 생성
    var iter = DriveApp.getFilesByName(SPREADSHEET_NAME);
    if (iter.hasNext()) {
      ss = SpreadsheetApp.open(iter.next());
    } else {
      ss = SpreadsheetApp.create(SPREADSHEET_NAME);
      var file   = DriveApp.getFileById(ss.getId());
      var folder = DriveApp.getFolderById(FOLDER_ID);
      folder.addFile(file);
      DriveApp.getRootFolder().removeFile(file); // 루트 중복 노출 제거
    }
    props.setProperty('SS_ID', ss.getId());
  }
  var sheet = ss.getSheetByName(tabName);
  if (!sheet) {
    sheet = ss.insertSheet(tabName);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// ── 한국 시간 문자열 ─────────────────────────────────
function nowKST() {
  return Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
}

// ── GET = 상태 확인용 ────────────────────────────────
function doGet(e) {
  return jsonResponse({ ok: true, service: 'TIEUM Intake', v: 1 });
}

// ── JSON 응답 헬퍼 ───────────────────────────────────
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
