import { gsap, ScrollTrigger } from './gsap';

let configured = false;

export function isMobileMotion() {
  return window.matchMedia('(max-width: 768px)').matches;
}

export function revealBlur(amount) {
  return isMobileMotion() ? 'blur(0px)' : amount;
}

/** One-time GSAP / ScrollTrigger tuning for Lenis + premium scrub */
export function configureMotion() {
  if (configured) return;
  configured = true;

  gsap.config({ nullTargetWarn: false });

  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
}
