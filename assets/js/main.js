/* ===================================================
   사단법인 티움 (TIEUM) — Main JavaScript
   =================================================== */

// ===================================================
// HERO PARTICLE CANVAS
// ===================================================
(function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  // 시스템 설정에서 '동작 줄이기'를 켠 사용자에게는 파티클을 그리지 않는다
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -9999, y: -9999 };
  const COUNT = 70;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });
  canvas.parentElement.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  }, { passive: true });
  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = mouse.y = -9999;
  }, { passive: true });

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.r  = Math.random() * 2 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = -(Math.random() * 0.5 + 0.2);
      this.alpha = Math.random() * 0.5 + 0.15;
      this.color = Math.random() > 0.6 ? '#F5A623' : '#ffffff';
    }
    update() {
      // Mouse repulsion
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100 * 0.8;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
      this.vx *= 0.99;
      this.vy *= 0.99;
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10 || this.x < -10 || this.x > W + 10) this.reset(false);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(255,255,255,' + (1 - d / 110) * 0.12 + ')';
          ctx.globalAlpha = 1;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  // 히어로가 화면 밖으로 스크롤되면 애니메이션을 멈춰 CPU·배터리를 아낀다
  let running = true;
  function loop() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    ctx.globalAlpha = 1;
    drawLines();
    requestAnimationFrame(loop);
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      const visible = entries[0].isIntersecting;
      if (visible && !running) { running = true; loop(); }
      else if (!visible) { running = false; }
    }).observe(canvas);
  }
  loop();
})();

// ---------- Hamburger menu (모바일 메가 드로어) ----------
const hamburger = document.getElementById('hamburger');
const header    = document.getElementById('header');
const megaPanel = document.getElementById('megaPanel');

// ---------- Header scroll ----------
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 40);
  const btn = document.getElementById('backToTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

function isMobile() { return window.innerWidth <= 768; }

function openMobileDrawer() {
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  if (megaPanel) megaPanel.classList.add('mob-drawer-open');
  document.body.style.overflow = 'hidden';
}
function closeMobileDrawer() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  if (megaPanel) megaPanel.classList.remove('mob-drawer-open');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', function() {
    if (!isMobile()) return;
    if (megaPanel && megaPanel.classList.contains('mob-drawer-open')) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });
}

if (megaPanel) {
  // 하위 링크 클릭 시 드로어 닫기
  megaPanel.querySelectorAll('ul a').forEach(function(a) {
    a.addEventListener('click', function() {
      if (isMobile()) closeMobileDrawer();
      else a.blur(); // 데스크탑: 클릭 후 focus-within으로 패널이 계속 열려 있지 않게
    });
  });

  // 모바일: 카테고리 타이틀 탭 → 아코디언
  megaPanel.querySelectorAll('.mega-col-title').forEach(function(title) {
    title.addEventListener('click', function() {
      if (!isMobile()) return;
      var col = title.closest('.mega-col');
      var isOpen = col.classList.contains('mob-open');
      // 다른 컬럼 모두 닫기
      megaPanel.querySelectorAll('.mega-col').forEach(function(c) {
        c.classList.remove('mob-open');
      });
      if (!isOpen) col.classList.add('mob-open');
    });
  });
}

// ESC 키로 닫기
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMobileDrawer();
});

// ---------- Smooth scroll for anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---------- Fade-in on scroll ----------
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay based on sibling index within the same parent
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.fade-in'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 120);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => observer.observe(el));

// 비동기로 나중에 추가된 .fade-in 요소(예: 게시판과 동기화되는 소식 카드)를
// 스크롤 페이드인 관찰 대상에 추가한다.
window.tieumObserveFadeIns = function (root) {
  const scope = root || document;
  scope.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
};

// ---------- Animated stat counters ----------
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.floor(current).toLocaleString();
    if (current >= target) clearInterval(timer);
  }, step);
}
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
const statsBand = document.querySelector('.stats-band');
if (statsBand) statsObserver.observe(statsBand);

// ---------- Support amount buttons ----------
document.querySelectorAll('.support-card').forEach(card => {
  card.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      card.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});

// ---------- Contact form ----------
/* 연락처 폼 — index.html의 INTAKE_ENDPOINT(Apps Script 접수 시트)가 설정돼 있으면
   서버로 바로 접수하고, 미설정·전송 실패 시에는 메일 앱(mailto) 방식으로 폴백. */
function handleSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const lang    = (typeof getLang === 'function') ? getLang() : 'ko';
  const en      = lang === 'en';

  const val = (id) => (document.getElementById(id)?.value || '').trim();
  const name    = val('name');
  const email   = val('email');
  const message = val('message');
  const sel     = document.getElementById('subject');
  const subjectLabel = (sel && sel.selectedIndex >= 0) ? sel.options[sel.selectedIndex].text.trim() : '';

  const showDone = (msg) => {
    if (form) form.classList.add('hidden');
    if (success) {
      const p = success.querySelector('p');
      if (p && msg) p.textContent = msg;
      success.classList.remove('hidden');
    }
  };

  const viaMailto = () => {
    const mailSubject = (en ? '[TIEUM Inquiry] ' : '[티움 문의] ')
      + (subjectLabel ? subjectLabel + ' — ' : '') + name;
    const mailBody = en
      ? `Name: ${name}\nEmail: ${email}\nInquiry type: ${subjectLabel}\n\n${message}`
      : `이름: ${name}\n이메일: ${email}\n문의 유형: ${subjectLabel}\n\n${message}`;
    window.location.href = 'mailto:johnchoi@tieum.org'
      + '?subject=' + encodeURIComponent(mailSubject)
      + '&body='    + encodeURIComponent(mailBody);
    showDone(null); // 기본 문구(메일 앱 안내) 그대로 표시
  };

  if (window.INTAKE_ENDPOINT) {
    const btn = document.getElementById('contactSubmitBtn');
    if (btn) btn.disabled = true;
    try {
      fetch(window.INTAKE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({ source: 'contact', name: name, email: email,
                               category: subjectLabel, message: message, ts: Date.now() })
      }).then(
        () => showDone(en
          ? "Your message has been received. We'll get back to you soon!"
          : '문의가 접수되었습니다. 곧 연락드리겠습니다!'),
        () => { if (btn) btn.disabled = false; viaMailto(); }
      );
    } catch (err) { if (btn) btn.disabled = false; viaMailto(); }
  } else {
    viaMailto();
  }
}

// ---------- Back to top ----------
// 일부 페이지(약관·뉴스레터·러닝센터 등)에는 #backToTop 버튼이 없으므로 가드.
// 없을 때 null 참조 예외가 나면 이후 스크립트(활성 메뉴 하이라이트·히어로 패럴랙스)가 전부 멈춘다.
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Active nav highlight on scroll ----------
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');
    const navA   = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (navA) {
      navA.classList.toggle('active', scrollY >= top && scrollY < bottom);
    }
  });
}, { passive: true });

// ---------- Subtle hero parallax ----------
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroBg.style.transform = `translateY(${y * 0.3}px)`;
    }
  }, { passive: true });
}
