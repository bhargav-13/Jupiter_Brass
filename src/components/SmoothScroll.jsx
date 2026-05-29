import { useEffect } from 'react';
import { destroyLenis, initLenis } from '../lib/lenisScroll';
import { prefersReducedMotion } from '../lib/gsap';
import 'lenis/dist/lenis.css';

const SmoothScroll = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    initLenis();

    return () => {
      destroyLenis();
    };
  }, []);

  return null;
};

export default SmoothScroll;
