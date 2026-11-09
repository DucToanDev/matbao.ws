/* ==========================================================================
   HERO TRAILER — website showcase played like a movie trailer (GSAP 3)
   ========================================================================== */
(function () {
  const root = document.getElementById('heroTrailer');
  if (!root || !window.gsap) return;
  root.classList.add('is-ready');

  const $ = (s) => root.querySelector(s);
  const $$ = (s) => gsap.utils.toArray(s, root);

  const scenes = $$('.tr-scene');
  const phones = $$('.tp-scene');
  const titles = $$('.tr-title');
  const urls = $$('.tr-url > span');
  const chaps = $$('.tr-chap');
  const fills = chaps.map((c) => c.querySelector('i'));
  const overlay = $('.tr-overlay');
  const cursor = $('.tr-cursor');
  const ripple = $('.tr-ripple');
  const chips = $$('.tr-chip');
  const speedEl = $('.tr-speed');
  const convEl = $('.tr-conv');
  const ringVal = $('.tr-ring-val');
  const rig = $('.trailer-rig');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SPEEDS = [98, 96, 99, 97];
  const CONVS = [180, 240, 150, 210];
  const D = 5.8; // seconds per scene
  const N = scenes.length;
  const TOTAL = D * N;
  const RING = 2 * Math.PI * 15;
  const FULL = 'inset(0% 0% 0% 0%)';

  // ---------- initial state ----------
  gsap.set(overlay, { autoAlpha: 1, clipPath: FULL });
  gsap.set([...titles, ...scenes, ...phones, ...urls], { autoAlpha: 0 });
  gsap.set(cursor, { autoAlpha: 0, left: '86%', top: '92%' });
  gsap.set(ripple, { autoAlpha: 0 });
  ringVal.style.strokeDasharray = RING;

  const nums = { speed: 0, conv: 0 };
  const paintNums = () => {
    speedEl.textContent = Math.round(nums.speed);
    convEl.textContent = '+' + Math.round(nums.conv) + '%';
    ringVal.style.strokeDashoffset = RING * (1 - nums.speed / 100);
  };
  paintNums();

  // ---------- master timeline ----------
  const tl = gsap.timeline({ repeat: -1, paused: true, onUpdate: sync });

  scenes.forEach((scene, i) => {
    const t = i * D;
    const q = gsap.utils.selector(scene);
    const [cx, cy] = (scene.dataset.cursor || '20,70').split(',');
    const title = titles[i];

    tl.addLabel('s' + i, t);

    // cut: wipe overlay back in before switching scene
    if (i > 0) {
      tl.fromTo(overlay, { clipPath: 'inset(0% 100% 0% 0%)' },
        { clipPath: FULL, duration: 0.45, ease: 'power3.in', immediateRender: false }, t - 0.45);
    }

    // switch scene (hidden behind overlay)
    tl.set([...scenes, ...urls, ...phones], { autoAlpha: 0 }, t)
      .set([scene, urls[i]], { autoAlpha: 1 }, t)
      .fromTo(phones[i], { autoAlpha: 0, yPercent: 6 },
        { autoAlpha: 1, yPercent: 0, duration: 0.6, ease: 'power3.out', immediateRender: false }, t + 0.05);

    // title card
    tl.fromTo(title, { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out', immediateRender: false }, t + 0.05)
      .fromTo(title.querySelector('strong'), { letterSpacing: '0.25em' },
        { letterSpacing: '-0.02em', duration: 1, ease: 'expo.out', immediateRender: false }, t + 0.05)
      .to(title, { autoAlpha: 0, y: -10, duration: 0.3, ease: 'power2.in' }, t + 1.05)
      .fromTo(overlay, { clipPath: FULL },
        { clipPath: 'inset(0% 0% 0% 100%)', duration: 0.65, ease: 'power3.inOut', immediateRender: false }, t + 1.1);

    // page content reveal
    tl.fromTo(q('.tr-nav > *'), { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06 }, t + 1.2)
      .fromTo(q('.tr-line > span'), { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out' }, t + 1.35)
      .fromTo(q('.tr-kicker, .tr-copy p, .tr-btn'), { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }, t + 1.45)
      .fromTo(q('[data-rise]'), { scaleY: 0 }, { scaleY: 1, duration: 0.9, stagger: 0.07, ease: 'expo.out' }, t + 1.4)
      .fromTo(q('[data-pop]'), { autoAlpha: 0, scale: 0.6 },
        { autoAlpha: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)' }, t + 1.5);

    // metric chips
    tl.to(nums, { speed: SPEEDS[i], conv: CONVS[i], duration: 1.2, ease: 'power2.out', onUpdate: paintNums }, t + 1.5)
      .fromTo(chips, { scale: 0.88 }, { scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(3)', immediateRender: false }, t + 1.5);

    // cursor flies to the CTA and clicks
    tl.fromTo(cursor, { autoAlpha: 0, left: '86%', top: '92%' },
        { autoAlpha: 1, left: cx + '%', top: cy + '%', duration: 1, ease: 'power3.inOut', immediateRender: false }, t + 2.1)
      .to(cursor, { scale: 0.8, duration: 0.12, yoyo: true, repeat: 1 }, t + 3.12)
      .to(q('.tr-btn'), { scale: 0.92, duration: 0.12, yoyo: true, repeat: 1 }, t + 3.12)
      .fromTo(ripple, { scale: 0, autoAlpha: 0.9 }, { scale: 1, autoAlpha: 0, duration: 0.6, ease: 'power2.out', immediateRender: false }, t + 3.15)
      .to(cursor, { left: '72%', top: '84%', autoAlpha: 0, duration: 0.6, ease: 'power2.in' }, t + 3.55);

    // scroll the page to show the second section
    tl.fromTo(q('.tr-page'), { yPercent: 0 }, { yPercent: -34, duration: 1.4, ease: 'power2.inOut' }, t + 3.8)
      .fromTo(q('.tr-card, .tr-grid h5'), { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' }, t + 4.0);
  });

  // closing wipe so the loop restarts on the title card
  tl.fromTo(overlay, { clipPath: 'inset(0% 100% 0% 0%)' },
    { clipPath: FULL, duration: 0.45, ease: 'power3.in', immediateRender: false }, TOTAL - 0.45);
  tl.set({}, {}, TOTAL);

  // ---------- UI sync ----------
  function sync() {
    const time = tl.time();
    const active = Math.min(N - 1, Math.floor(time / D));
    fills.forEach((f, i) => { f.style.transform = 'scaleX(' + gsap.utils.clamp(0, 1, (time - i * D) / D) + ')'; });
    chaps.forEach((c, i) => c.classList.toggle('is-active', i === active));
  }

  // ambient loops (independent of the master timeline)
  if (!reduceMotion) {
    gsap.to(root.querySelectorAll('.fx-track'), { xPercent: -50, duration: 9, ease: 'none', repeat: -1 });
    gsap.to(root.querySelectorAll('.tr-live i, .tr-rec i'), { opacity: 0.2, duration: 0.6, yoyo: true, repeat: -1 });
  }

  // ---------- controls ----------
  let userPaused = reduceMotion;
  let inView = true;

  function update() {
    const shouldPlay = !userPaused && inView;
    shouldPlay ? tl.play() : tl.pause();
  }

  chaps.forEach((c, i) => c.addEventListener('click', () => {
    // with reduced motion / paused, jump to a "settled" frame of the scene
    tl.seek(i * D + (userPaused ? 3.3 : 0.01), false);
    sync();
    update();
  }));

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      update();
    }, { threshold: 0.15 }).observe(root);
  }

  // ---------- 3D tilt on hover ----------
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    const rx = gsap.quickTo(rig, 'rotationX', { duration: 0.8, ease: 'power3.out' });
    const ry = gsap.quickTo(rig, 'rotationY', { duration: 0.8, ease: 'power3.out' });
    root.addEventListener('pointermove', (e) => {
      const r = root.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 12);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 9);
    });
    root.addEventListener('pointerleave', () => { rx(0); ry(0); });
  }

  // ---------- intro ----------
  if (reduceMotion) {
    tl.seek(3.3, false);
  } else {
    gsap.from(root.querySelectorAll('.trailer-browser, .trailer-phone, .tr-chip, .trailer-ctrl'), {
      autoAlpha: 0, y: 40, rotationX: -12, duration: 1.1, stagger: 0.12, ease: 'expo.out', clearProps: 'transform,opacity,visibility',
    });
  }
  sync();
  update();
})();
