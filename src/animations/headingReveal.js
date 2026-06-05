import { gsap, ScrollTrigger } from '../lib/gsap';
import { EASE_ENTER, EASE_PREMIUM, SCROLL_START } from './constants';

/**
 * Duten-style heading clip-reveal.
 *
 * Wraps every word in a tight overflow:hidden "mask" div so each word slides
 * up from below its own clipping boundary — the signature premium editorial
 * reveal seen on duten.com.
 *
 * @param {Element|NodeList|string} targets  - heading element(s) to animate
 * @param {object} options
 *   @param {number}  options.stagger   - seconds between each word (default 0.055)
 *   @param {number}  options.y         - slide distance in px (default 105%)
 *   @param {number}  options.duration  - per-word duration (default 0.9)
 *   @param {string}  options.ease      - GSAP ease (default EASE_ENTER)
 *   @param {string}  options.start     - ScrollTrigger start (default SCROLL_START)
 *   @param {number}  options.delay     - global timeline delay in seconds
 *   @param {boolean} options.once      - fire once (default true)
 */
export function headingSlideReveal(targets, options = {}) {
  const {
    stagger = 0.055,
    y = '105%',
    duration = 0.9,
    ease = EASE_ENTER,
    start = SCROLL_START,
    delay = 0,
    once = true,
  } = options;

  const elements = gsap.utils.toArray(targets);
  if (!elements.length) return;

  elements.forEach((el) => {
    if (!el) return;

    // Split text into word spans, preserving spaces
    const originalHTML = el.innerHTML;
    const words = el.textContent.trim().split(/\s+/);

    // Rebuild inner HTML: wrap each word in a mask+inner pair
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="lg-word-mask"><span class="lg-word-inner">${word}</span></span>`
      )
      .join(' ');

    const inners = el.querySelectorAll('.lg-word-inner');

    // Set initial state
    gsap.set(inners, { yPercent: 110, force3D: true });

    const play = () => {
      gsap.to(inners, {
        yPercent: 0,
        duration,
        ease,
        stagger,
        delay,
        force3D: true,
        onComplete: () => {
          // Restore original HTML to avoid any accessibility/DOM issues
          // but keep it rendered so no flash — only clear transform
          gsap.set(inners, { clearProps: 'transform' });
        },
      });
    };

    let played = false;
    ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        if (played) return;
        played = true;
        play();
      },
    });

    // Fire immediately if already in viewport
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const startMatch = start.match(/top\s+(\d+)%/);
      const threshold = startMatch ? Number(startMatch[1]) / 100 : 0.88;
      if (rect.top < window.innerHeight * threshold) {
        if (!played) {
          played = true;
          play();
        }
      }
    });
  });
}

/**
 * Animate a horizontal decorative line from width 0 → 100% on scroll.
 * Inspired by Duten's thin separator lines that draw in as sections enter.
 */
export function lineDrawReveal(targets, options = {}) {
  const { start = 'top 85%', duration = 1.1, ease = EASE_PREMIUM, delay = 0.15 } = options;

  gsap.utils.toArray(targets).forEach((el) => {
    if (!el) return;
    gsap.set(el, { scaleX: 0, transformOrigin: 'left center' });

    ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        gsap.to(el, {
          scaleX: 1,
          duration,
          ease,
          delay,
          force3D: true,
          onComplete: () => gsap.set(el, { clearProps: 'transform' }),
        });
      },
    });
  });
}

/**
 * Premium image entrance: scale from 0.94 + slight y, opacity 0 → full.
 * Scrubbed so it stays linked to scroll position during entry.
 */
export function imageEnterReveal(targets, options = {}) {
  const {
    start = 'top 90%',
    end = 'top 55%',
    scrub = 1.2,
    y = 40,
    scale = 0.94,
  } = options;

  gsap.utils.toArray(targets).forEach((el) => {
    if (!el) return;
    gsap.fromTo(
      el,
      { y, opacity: 0.2, scale, force3D: true },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'none',
        force3D: true,
        scrollTrigger: { trigger: el, start, end, scrub },
      }
    );
  });
}
