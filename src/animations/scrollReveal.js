import { gsap, ScrollTrigger } from '../lib/gsap';
import { revealBlur } from '../lib/motion';
import {
  DURATION_REVEAL,
  EASE_PREMIUM,
  REVEAL_BLUR,
  REVEAL_Y,
  SCROLL_START,
  STAGGER_DEFAULT,
} from './constants';

/**
 * Run a reveal when the trigger enters the viewport.
 */
export function onScrollReveal({ trigger, play, start = SCROLL_START }) {
  if (!trigger) return null;

  let played = false;

  const run = () => {
    if (played) return;
    played = true;
    play();
  };

  ScrollTrigger.create({
    trigger,
    start,
    once: true,
    onEnter: run,
  });

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    const rect = trigger.getBoundingClientRect();
    const startMatch = start.match(/top\s+(\d+)%/);
    const threshold = startMatch ? Number(startMatch[1]) / 100 : 0.88;
    if (rect.top < window.innerHeight * threshold) {
      run();
    }
  });

  return run;
}

export function revealElement(element, options = {}) {
  if (!element) return;

  const {
    trigger = element,
    start = options.start ?? SCROLL_START,
    y = options.y ?? REVEAL_Y,
    duration = options.duration ?? DURATION_REVEAL,
    stagger = 0,
    ease = EASE_PREMIUM,
    blur = REVEAL_BLUR,
    scale = options.scale,
  } = options;

  const from = {
    opacity: 0,
    y,
    filter: revealBlur(blur),
    force3D: true,
  };

  if (scale != null) {
    from.scale = scale;
  }

  onScrollReveal({
    trigger,
    start,
    play: () => {
      gsap.fromTo(
        element,
        from,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: revealBlur('blur(0px)'),
          duration,
          ease,
          stagger,
          force3D: true,
          onComplete: () =>
            gsap.set(element, { clearProps: 'transform,opacity,filter' }),
        }
      );
    },
  });
}

export function revealElements(targets, options = {}) {
  gsap.utils.toArray(targets).forEach((el) => revealElement(el, options));
}

export function revealChildren(container, childSelector, options = {}) {
  if (!container) return;
  const children = container.querySelectorAll(childSelector);
  if (!children.length) return;

  revealElement(children, {
    trigger: container,
    start: options.start ?? 'top 82%',
    y: options.y ?? 44,
    duration: options.duration ?? DURATION_REVEAL,
    stagger: options.stagger ?? STAGGER_DEFAULT,
    ease: options.ease ?? EASE_PREMIUM,
    blur: options.blur,
    scale: options.scale ?? 0.98,
  });
}

/**
 * Smooth scroll-scrubbed reveal for large visuals (images, showcases).
 */
export function scrubReveal(element, options = {}) {
  if (!element) return;

  const {
    trigger = element,
    start = 'top 92%',
    end = 'top 45%',
    y = 48,
    scale = 0.96,
    scrub = 1.45,
  } = options;

  gsap.fromTo(
    element,
    { y, opacity: 0.35, scale, force3D: true },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
      },
    }
  );
}
