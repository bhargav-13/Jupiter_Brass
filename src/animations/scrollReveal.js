import { gsap, ScrollTrigger } from '../lib/gsap';
import { DURATION_REVEAL, EASE_PREMIUM, STAGGER_DEFAULT } from './constants';

/**
 * Run a reveal when the trigger enters the viewport.
 * Content stays visible until play() runs.
 */
export function onScrollReveal({ trigger, play, start = 'top 85%' }) {
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
    const threshold = startMatch ? Number(startMatch[1]) / 100 : 0.85;
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
    start = 'top 85%',
    y = 56,
    duration = DURATION_REVEAL,
    stagger = 0,
    ease = EASE_PREMIUM,
  } = options;

  onScrollReveal({
    trigger,
    start,
    play: () => {
      gsap.fromTo(
        element,
        { opacity: 0, y, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          ease,
          stagger,
          onComplete: () => gsap.set(element, { clearProps: 'transform,opacity,filter' }),
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
  });
}
