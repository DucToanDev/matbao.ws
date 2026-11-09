/* ==========================================================================
   HERO COPY — entrance animation + process step cycling (GSAP 3)
   Markup is styled with Tailwind; elements are targeted via data-hx-* hooks.
   ========================================================================== */
(function () {
  const root = document.getElementById('heroCopy');
  if (!root) return;

  const steps = Array.from(root.querySelectorAll('[data-hx-steps] > li'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // cycle the active process step (Thiết kế → Triển khai → Vận hành → Tối ưu)
  let current = 0;
  const activate = (i) => steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
  activate(0);
  if (!reduceMotion && steps.length) {
    setInterval(() => { current = (current + 1) % steps.length; activate(current); }, 1800);
  }

  if (!window.gsap || reduceMotion) return;

  const path = root.querySelector('[data-hx-underline] path');
  const len = path ? path.getTotalLength() : 0;

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from(root.querySelector('[data-hx-eyebrow]'), { autoAlpha: 0, x: -20, duration: 0.8 })
    .from(root.querySelectorAll('[data-hx-line]'), { yPercent: 115, rotate: 2, duration: 1.1, stagger: 0.12 }, 0.1)
    // Only animate wrappers without Tailwind `transition-*` classes: a CSS
    // transition on the same element fights GSAP and can leave it hidden.
    .from(root.querySelector('[data-hx-steps]'), { autoAlpha: 0, x: -16, duration: 0.7, clearProps: 'all' }, 0.55)
    .from(root.querySelectorAll('[data-hx-fade]'), { autoAlpha: 0, y: 22, duration: 0.9, stagger: 0.1, clearProps: 'all' }, 0.65);

  if (path) {
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    tl.to(path, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 0.7);
  }
})();
