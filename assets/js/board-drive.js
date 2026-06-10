/**
 * 티움 게시판 — Google Drive 파일 업로드 모듈
 * board-drive-config.js 와 함께 board.js 보다 먼저 로드하세요.
 */
(function () {
  'use strict';

  /* ── 설정 ─────────────────────────────────────────── */
  const SCOPE = 'https://www.googleapis.com/auth/drive';

  let _tokenClient  = null;
  let _accessToken  = null;
  let _tokenExpiry  = 0;       // epoch ms
  let _pendingResolve = null;
  let _pendingReject  = null;

  /* ── GIS 초기화 ────────────────────────────────────── */
  function initGIS() {
    const clientId = window.BOARD_DRIVE_CLIENT_ID || '';
    if (!clientId || clientId.startsWith('YOUR_CLIENT_ID')) return;
    if (!window.google?.accounts?.oauth2) return;

    _tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: SCOPE,
      callback: (resp) => {
        if (resp.error) {
          if (_pendingReject) { _pendingReject(new Error('Google 인증 실패: ' + resp.error)); _pendingReject = null; }
          return;
        }
        _accessToken = resp.access_token;
        _tokenExpiry = Date.now() + (resp.expires_in - 30) * 1000;
        if (_pendingResolve) { _pendingResolve(_accessToken); _pendingResolve = null; }
      }
    });
  }

  /* ── Access Token 확보 ─────────────────────────────── */
  function getToken() {
    return new Promise((resolve, reject) => {
      // 유효한 토큰이 있으면 바로 반환
      if (_accessToken && Date.now() < _tokenExpiry) { resolve(_accessToken); return; }

      if (!window.google?.accounts?.oauth2) {
        reject(new Error('Google Identity Services가 아직 로드되지 않았습니다.\n잠시 후 다시 시도해 주세요.')); return;
      }
      if (!_tokenClient) initGIS();
      if (!_tokenClient) {
        reject(new Error('Google Drive Client ID가 설정되지 않았습니다.\nassets/js/board-drive-config.js 를 확인하세요.')); return;
      }

      _pendingResolve = resolve;
      _pendingReject  = reject;
      // 이미 토큰이 있으면 prompt 없이 재발급 시도, 없으면 동의 화면 표시
      _tokenClient.requestAccessToken({ prompt: _accessToken ? '' : 'select_account' });
    });
  }

  /* ── Drive 파일 업로드 (Multipart) ─────────────────── */
  async function uploadToDrive(file, folderId) {
    const token = await getToken();

    /* 메타데이터 + 파일 데이터를 multipart로 전송 */
    const meta = JSON.stringify({
      name   : file.name,
      parents: [folderId],
      mimeType: file.type || 'application/octet-stream'
    });

    const boundary = 'tieum_boundary_' + Date.now();
    const metaBlob = new Blob(
      ['--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n',
       meta,
       '\r\n--' + boundary + '\r\nContent-Type: ' + (file.type || 'application/octet-stream') + '\r\n\r\n'],
      { type: 'text/plain' }
    );
    const body = new Blob([metaBlob, file, '\r\n--' + boundary + '--']);

    /* supportsAllDrives=true — 공유 드라이브(Shared Drive) 지원 */
    const res = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink&supportsAllDrives=true',
      {
        method : 'POST',
        headers: {
          Authorization : 'Bearer ' + token,
          'Content-Type': 'multipart/related; boundary=' + boundary
        },
        body
      }
    );

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error('Drive 업로드 오류 (' + res.status + '): ' + (errBody.error?.message || '알 수 없는 오류'));
    }

    const driveFile = await res.json();

    /* 링크를 가진 누구나 다운로드 가능하도록 권한 부여 */
    await fetch(`https://www.googleapis.com/drive/v3/files/${driveFile.id}/permissions?supportsAllDrives=true`, {
      method : 'POST',
      headers: {
        Authorization : 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: 'reader', type: 'anyone' })
    }).catch(() => {}); // 권한 설정 실패해도 업로드는 완료된 것으로 처리

    return {
      fileId     : driveFile.id,
      name       : file.name,
      size       : file.size,
      type       : file.type,
      source     : 'drive',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=' + driveFile.id,
      viewUrl    : driveFile.webViewLink || ('https://drive.google.com/file/d/' + driveFile.id + '/view')
    };
  }

  /* ── 공개 API ──────────────────────────────────────── */
  window.DriveUploader = {
    /** Drive 연동이 활성화되어 있는지 확인 */
    isReady: function () {
      const id = window.BOARD_DRIVE_CLIENT_ID || '';
      return !!window.BOARD_DRIVE_FOLDER_ID && id && !id.startsWith('YOUR_CLIENT_ID');
    },
    /** 파일을 현재 페이지의 Drive 폴더에 업로드 */
    upload: function (file) {
      const folderId = window.BOARD_DRIVE_FOLDER_ID;
      if (!folderId) return Promise.reject(new Error('BOARD_DRIVE_FOLDER_ID가 설정되지 않았습니다.'));
      return uploadToDrive(file, folderId);
    },
    /** Drive 파일 다운로드 */
    download: function (meta) {
      window.open(meta.downloadUrl, '_blank', 'noopener');
    }
  };

  /* ── GIS 스크립트 자동 삽입 ────────────────────────── */
  if (!document.querySelector('script[src*="accounts.google.com/gsi/client"]')) {
    const s   = document.createElement('script');
    s.src     = 'https://accounts.google.com/gsi/client';
    s.async   = true;
    s.defer   = true;
    s.onload  = initGIS;
    document.head.appendChild(s);
  } else {
    // 이미 로드된 경우
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initGIS);
    } else {
      initGIS();
    }
  }

})();
