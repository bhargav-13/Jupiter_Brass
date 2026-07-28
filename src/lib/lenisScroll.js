import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';

let lenisInstance = null;
let tickerRaf = null;

export function getLenis() {
  return lenisInstance;
}

export function initLenis() {
  if (lenisInstance || prefersReducedMotion()) return lenisInstance;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  lenisInstance = new Lenis({
    duration: isMobile ? 1.8 : 3.5,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    smoothWheel: true,
    wheelMultiplier: isMobile ? 0.8 : 0.6,
    touchMultiplier: 1.15,
    syncTouch: true,
  });

  lenisInstance.on('scroll', ScrollTrigger.update);

  tickerRaf = (time) => {
    lenisInstance?.raf(time * 1000);
  };
  gsap.ticker.add(tickerRaf);
  gsap.ticker.lagSmoothing(0);

  document.documentElement.classList.add('lenis', 'lenis-smooth');

  return lenisInstance;
}

export function destroyLenis() {
  if (!lenisInstance) return;

  if (tickerRaf) {
    gsap.ticker.remove(tickerRaf);
    tickerRaf = null;
  }

  lenisInstance.destroy();
  lenisInstance = null;
  document.documentElement.classList.remove('lenis', 'lenis-smooth');
}

export function scrollToTop(options = {}) {
  const { immediate = true } = options;

  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate, lock: true });
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'auto' : 'smooth' });
}
