/* effects.js — load AFTER main.js (use defer). */
(() => {
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hover = matchMedia('(hover: hover)').matches;
  const $ = (s) => [...document.querySelectorAll(s)];

  // 1. Hero title: word-by-word entrance
  const title = document.querySelector('.hero-title');
  if (title && !rm) {
    let i = 0;
    const out = [];
    title.childNodes.forEach((n) => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w.trim()) return out.push(document.createTextNode(w));
          const s = document.createElement('span');
          s.className = 'w';
          s.textContent = w;
          s.style.setProperty('--i', i++);
          out.push(s);
        });
      } else {
        n.classList.add('w');
        n.style.setProperty('--i', i++);
        out.push(n);
      }
    });
    title.replaceChildren(...out);
  }

  // 2. Scroll progress, header hide, active nav link, footer fill
  const bar = Object.assign(document.createElement('div'), { className: 'scroll-progress' });
  document.body.prepend(bar);
  const header = document.getElementById('header');
  const drawer = document.getElementById('mobileDrawer');
  const links = $('.nav-links a');
  const secs = links.map((a) => document.querySelector(a.getAttribute('href')));
  const fill = document.querySelector('.footer-huge-name');
  let lastY = 0, ticking = false;

  function onScroll() {
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    header.classList.toggle('hide', y > lastY && y > 200 && !drawer.classList.contains('active'));
    lastY = y;
    let cur = -1;
    secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = i; });
    links.forEach((a, i) => a.classList.toggle('active', i === cur));
    if (fill) {
      const r = fill.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (r.height + innerHeight * 0.3)));
      fill.style.setProperty('--fill', p * 100 + '%');
    }
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // 3. Scroll reveal with stagger
  const revealSel = ['.section-tag', '.section-heading', '.about-card', '.project-card', '.skill-category',
    '.channel-card', '.contact-form-container', '.metric-item'];
  const io = 'IntersectionObserver' in window && !rm
    ? new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    : null;
  revealSel.forEach((sel) => $(sel).forEach((el, i) => {
    if (!io) return;
    el.classList.add('rv');
    el.style.setProperty('--d', (i % 4) * 0.09 + 's');
    io.observe(el);
  }));

  // 4. Count-up metrics (skips the year)
  $('.metric-number').forEach((el) => {
    const m = el.textContent.trim().match(/^(\d{1,3})(\+?)$/);
    if (!m || rm) return;
    const target = +m[1], suffix = m[2];
    el.textContent = '0' + suffix;
    new IntersectionObserver((es, o) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      const t0 = performance.now();
      (function step(t) {
        const p = Math.min(1, (t - t0) / 1500);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    }), { threshold: 0.6 }).observe(el);
  });

  // 5. Pointer spotlight + glowing border on cards
  $('.project-card,.about-card,.skill-category,.channel-card,.contact-form-container').forEach((el) => {
    el.classList.add('fx-card');
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', e.clientX - r.left + 'px');
      el.style.setProperty('--my', e.clientY - r.top + 'px');
    });
  });

  if (rm || !hover) return;

  // 6. Magnetic buttons
  $('.btn-primary,.hero-social-strip a,.brand-monogram').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.25}px ${(e.clientY - r.top - r.height / 2) * 0.35}px`;
    });
    el.addEventListener('pointerleave', () => { el.style.translate = ''; });
  });

  // 7. Ember glow trailing the cursor
  const orb = Object.assign(document.createElement('div'), { className: 'cursor-glow' });
  document.body.prepend(orb);
  let ox = innerWidth / 2, oy = innerHeight / 2, tx = ox, ty = oy;
  addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; });
  (function loop() {
    ox += (tx - ox) * 0.08;
    oy += (ty - oy) * 0.08;
    orb.style.transform = `translate(${ox - 300}px,${oy - 300}px)`;
    requestAnimationFrame(loop);
  })();
})();