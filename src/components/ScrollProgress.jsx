import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import { getLenis } from '../lib/lenisScroll';
import './ScrollProgress.css';

/** Lower = smoother, more “weighted” follow */
const LERP_FILL = 0.082;
const LERP_GLOW = 0.055;
const LERP_CAP = 0.1;

const ScrollProgress = () => {
  const rootRef = useRef(null);
  const fillRef = useRef(null);
  const glowRef = useRef(null);
  const shineRef = useRef(null);
  const capRef = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const root = rootRef.current;
    const fill = fillRef.current;
    const glow = glowRef.current;
    const shine = shineRef.current;
    const cap = capRef.current;
    if (!fill || !root) return undefined;

    const reduced = prefersReducedMotion();
    let target = 0;
    let display = 0;
    let glowDisplay = 0;
    let capDisplay = 0;

    const setFill = gsap.quickSetter(fill, 'scaleX');
    const setGlow = glow ? gsap.quickSetter(glow, 'scaleX') : null;
    const setShine = shine ? gsap.quickSetter(shine, 'scaleX') : null;
    const setCapLeft = cap ? gsap.quickSetter(cap, 'left', { suffix: '%' }) : null;

    const applyFrame = () => {
      const p = Math.min(1, Math.max(0, display));
      const g = Math.min(1, Math.max(0, glowDisplay));
      setFill(p);
      setGlow?.(g * 0.92);
      setShine?.(p);
      setCapLeft?.(capDisplay * 100);
    };

    const setTarget = (value, immediate = false) => {
      target = Math.min(1, Math.max(0, value));
      if (immediate || reduced) {
        display = target;
        glowDisplay = target;
        capDisplay = target;
        applyFrame();
      }
    };

    const tick = () => {
      display += (target - display) * LERP_FILL;
      glowDisplay += (target - glowDisplay) * LERP_GLOW;
      capDisplay += (target - capDisplay) * LERP_CAP;
      applyFrame();
    };

    gsap.set([fill, glow, shine].filter(Boolean), {
      scaleX: 0,
      transformOrigin: 'left center',
      force3D: true,
    });
    if (cap) {
      gsap.set(cap, { left: '0%', xPercent: -50, force3D: true });
    }

    if (!reduced) {
      gsap.ticker.add(tick);
    }

    const updateFromNative = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setTarget(progress);
    };

    const onLenisScroll = (lenis) => {
      setTarget(lenis.progress);
      root.classList.toggle('scroll-progress--active', Math.abs(lenis.velocity) > 0.35);
    };

    let lenisInstance = getLenis();
    let usingNative = false;
    let attachTimer;

    const bindLenis = (instance) => {
      if (!instance) return;
      lenisInstance = instance;
      instance.on('scroll', onLenisScroll);
      setTarget(instance.progress);
      if (usingNative) {
        window.removeEventListener('scroll', updateFromNative);
        usingNative = false;
      }
    };

    if (lenisInstance) {
      bindLenis(lenisInstance);
    } else {
      usingNative = true;
      window.addEventListener('scroll', updateFromNative, { passive: true });
      updateFromNative();
      let attempts = 0;
      attachTimer = window.setInterval(() => {
        attempts += 1;
        const instance = getLenis();
        if (instance) {
          bindLenis(instance);
          window.clearInterval(attachTimer);
        } else if (attempts > 80) {
          window.clearInterval(attachTimer);
        }
      }, 50);
    }

    setTarget(0);

    return () => {
      window.clearInterval(attachTimer);
      if (!reduced) {
        gsap.ticker.remove(tick);
      }
      if (usingNative) {
        window.removeEventListener('scroll', updateFromNative);
      }
      lenisInstance?.off('scroll', onLenisScroll);
      root.classList.remove('scroll-progress--active');
    };
  }, [pathname, hash]);

  return (
    <div ref={rootRef} className="scroll-progress">
      <div className="scroll-progress__track" />
      <div ref={glowRef} className="scroll-progress__glow" />
      <div ref={fillRef} className="scroll-progress__fill" />
      <div ref={shineRef} className="scroll-progress__shine" />
      <div ref={capRef} className="scroll-progress__cap" />
    </div>
  );
};

export default ScrollProgress;
