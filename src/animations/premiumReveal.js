import { gsap, ScrollTrigger } from '../lib/gsap';
import { EASE_ENTER, EASE_PREMIUM, EASE_SMOOTH } from './constants';

/* ────────────────────────────────────────────────────────────────────────────
   JUPITER PREMIUM REVEAL ANIMATIONS
   Inspired by Duten's unique animation philosophy — reimagined with Jupiter's
   industrial/precision brass manufacturing identity.
   ──────────────────────────────────────────────────────────────────────────── */

/**
 * ① STEEL CURTAIN WIPE
 * Inspired by Duten's layer-wipe, but upgraded:
 * — Injects a branded red-to-transparent gradient "curtain" overlay
 * — Curtain slides UP while element simultaneously un-clips and scales to 1
 * — Creates a "metal plate being lifted to reveal product" feeling
 *
 * Works on any block element: cards, images, sections.
 */
export function steelCurtainReveal(targets, options = {}) {
  const {
    start = 'top 85%',
    duration = 0.95,
    ease = EASE_PREMIUM,
    stagger = 0,
    delay = 0,
  } = options;

  const elements = gsap.utils.toArray(targets);
  if (!elements.length) return;

  elements.forEach((el, i) => {
    if (!el) return;

    // Ensure relative positioning for the curtain overlay
    const pos = window.getComputedStyle(el).position;
    if (pos === 'static') el.style.position = 'relative';
    el.style.overflow = 'hidden';

    // Inject the gradient curtain
    const curtain = document.createElement('div');
    curtain.className = 'jup-curtain';
    curtain.style.cssText = `
      position: absolute;
      inset: 0;
      z-index: 10;
      pointer-events: none;
      background: linear-gradient(
        180deg,
        rgba(243, 27, 27, 0.18) 0%,
        rgba(243, 27, 27, 0.08) 40%,
        rgba(243, 27, 27, 0.0) 100%
      );
      transform-origin: top center;
    `;
    el.appendChild(curtain);

    // Set initial state — element clips from bottom, slightly scaled down
    gsap.set(el, { clipPath: 'inset(0 0 100% 0)', scale: 0.97, force3D: true });
    gsap.set(curtain, { scaleY: 1 });

    const itemDelay = delay + i * stagger;

    let played = false;
    const play = () => {
      if (played) return;
      played = true;

      const tl = gsap.timeline();

      // 1. Clip opens upward (bottom clips away → full reveal)
      tl.to(
        el,
        {
          clipPath: 'inset(0 0 0% 0)',
          scale: 1,
          duration,
          ease,
          delay: itemDelay,
          force3D: true,
          onComplete: () => gsap.set(el, { clearProps: 'clipPath,scale' }),
        },
        0
      );

      // 2. Curtain slides UP and out simultaneously
      tl.to(
        curtain,
        {
          yPercent: -105,
          duration: duration * 0.85,
          ease: 'power2.inOut',
          delay: itemDelay + duration * 0.1,
          force3D: true,
          onComplete: () => curtain.remove(),
        },
        0
      );
    };


    ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: play,
    });

    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const startMatch = start.match(/top\s+(\d+)%/);
      const threshold = startMatch ? Number(startMatch[1]) / 100 : 0.85;
      if (rect.top < window.innerHeight * threshold) play();
    });
  });
}

/**
 * ② FORGE FOCUS REVEAL
 * Inspired by Duten's blur-to-sharp image reveal, but upgraded:
 * — Images start: blurry + desaturated + warm red-tinted (like heated metal)
 * — Images end: crisp, vibrant, full color (like finished polished brass)
 * — Scrubbed to scroll position for a premium "cooling into focus" feeling
 * — Uses hue-rotate + saturate for the warm-to-natural color shift
 */
export function forgeFocusReveal(targets, options = {}) {
  const {
    start = 'top 92%',
    end = 'top 45%',
    scrub = 1.4,
  } = options;

  gsap.utils.toArray(targets).forEach((el) => {
    if (!el) return;

    // Initial state: blurry, desaturated, warm red tint, slightly dark
    gsap.set(el, {
      filter: 'blur(14px) saturate(0.1) hue-rotate(330deg) brightness(0.75)',
      scale: 1.04,
      force3D: true,
    });

    gsap.to(el, {
      filter: 'blur(0px) saturate(1) hue-rotate(0deg) brightness(1)',
      scale: 1,
      ease: 'none',
      force3D: true,
      onComplete: () => gsap.set(el, { clearProps: 'filter,scale' }),
      scrollTrigger: {
        trigger: el,
        start,
        end,
        scrub,
      },
    });
  });
}

/**
 * ③ PRECISION STAMP
 * Inspired by Duten's MUE rotate-scale reveal, but upgraded:
 * — Elements scale from 0.2 + rotate from -15° (not a full spin — more precise)
 * — Uses an elastic/spring ease for a mechanical "stamping" feel
 * — A subtle red glow flashes at peak scale (using a box-shadow pulse)
 * — Perfect for USP icons, stat numbers, certification badges
 */
export function precisionStamp(targets, options = {}) {
  const {
    start = 'top 86%',
    stagger = 0.08,
    duration = 0.85,
    delay = 0,
  } = options;

  const elements = gsap.utils.toArray(targets);
  if (!elements.length) return;

  // Set initial state
  gsap.set(elements, {
    scale: 0.2,
    rotation: -15,
    opacity: 0,
    force3D: true,
    transformOrigin: 'center center',
  });

  const play = () => {
    // Main stamp-in
    gsap.to(elements, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration,
      ease: 'elastic.out(1, 0.55)',
      stagger,
      delay,
      force3D: true,
      onComplete: () => gsap.set(elements, { clearProps: 'transform,opacity' }),
    });

    // Red glow flash on each element at its moment of "landing"
    elements.forEach((el, i) => {
      if (!el) return;
      gsap
        .timeline({ delay: delay + i * stagger + duration * 0.55 })
        .to(el, {
          filter: 'drop-shadow(0 0 8px rgba(243,27,27,0.65))',
          duration: 0.18,
          ease: 'power2.out',
        })
        .to(el, {
          filter: 'drop-shadow(0 0 0px rgba(243,27,27,0))',
          duration: 0.45,
          ease: 'power2.in',
          onComplete: () => gsap.set(el, { clearProps: 'filter' }),
        });
    });
  };

  ScrollTrigger.create({
    trigger: elements[0],
    start,
    once: true,
    onEnter: play,
  });

  requestAnimationFrame(() => {
    if (!elements[0]) return;
    const rect = elements[0].getBoundingClientRect();
    const startMatch = start.match(/top\s+(\d+)%/);
    const threshold = startMatch ? Number(startMatch[1]) / 100 : 0.86;
    if (rect.top < window.innerHeight * threshold) play();
  });
}
