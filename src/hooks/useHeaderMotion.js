import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import { EASE_PREMIUM } from '../animations/constants';

const HIDE_DURATION = 0.52;
const SHOW_DURATION = 0.68;

/**
 * Premium slide + fade for header hide/show (GSAP, synced with Lenis feel).
 */
export function useHeaderMotion(navHidden, menuOpen) {
  const headerRef = useRef(null);
  const isFirstPaint = useRef(true);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;

    const hidden = navHidden && !menuOpen;

    gsap.killTweensOf(el);

    if (prefersReducedMotion()) {
      gsap.set(el, {
        yPercent: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
        filter: 'none',
      });
      return undefined;
    }

    if (isFirstPaint.current) {
      isFirstPaint.current = false;
      gsap.set(el, { yPercent: 0, opacity: 1, filter: 'none' });
      if (!hidden) return undefined;
    }

    const useBlur = !window.matchMedia('(max-width: 768px)').matches;

    gsap.to(el, {
      yPercent: hidden ? -100 : 0,
      opacity: hidden ? 0.76 : 1,
      filter: hidden && useBlur ? 'blur(4px)' : 'blur(0px)',
      duration: hidden ? HIDE_DURATION : SHOW_DURATION,
      ease: hidden ? 'power3.inOut' : EASE_PREMIUM,
      force3D: true,
      overwrite: 'auto',
    });

    return undefined;
  }, [navHidden, menuOpen]);

  return headerRef;
}
