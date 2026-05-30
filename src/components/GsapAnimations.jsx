import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';
import { configureMotion } from '../lib/motion';
import { playPageEnterAnimation, setupPageAnimations } from '../animations/pageAnimations';

const GsapAnimations = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    configureMotion();

    const scope = document.body;
    const ctx = gsap.context(() => {
      setupPageAnimations(scope, location.pathname);
      playPageEnterAnimation();
    }, scope);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, [location.pathname]);

  return null;
};

export default GsapAnimations;
