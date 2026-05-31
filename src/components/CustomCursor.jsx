import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../lib/gsap';
import './CustomCursor.css';

const HOVER_SELECTOR = [
  'a',
  'button',
  'input',
  'textarea',
  'select',
  'label[for]',
  '[role="button"]',
  '.product-card',
  '.article-card',
  '.nav-link',
  '.color-swatch',
  '.finish-swatch',
  '.parallax-btn',
].join(', ');

const canUseCustomCursor = () =>
  window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion();

const CustomCursor = () => {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled] = useState(
    () => typeof window !== 'undefined' && canUseCustomCursor()
  );

  useEffect(() => {
    if (!enabled) return undefined;

    document.body.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    const root = rootRef.current;
    if (!dot || !ring || !root) return undefined;

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.42, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.42, ease: 'power3.out' });

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, force3D: true });

    const move = (event) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const setHover = (active) => {
      root.classList.toggle('custom-cursor--hover', active);
    };

    const onOver = (event) => {
      setHover(Boolean(event.target.closest(HOVER_SELECTOR)));
    };

    const onDown = () => root.classList.add('custom-cursor--press');
    const onUp = () => root.classList.remove('custom-cursor--press');

    const onBlur = () => root.classList.remove('custom-cursor--visible');
    const onFocus = () => root.classList.add('custom-cursor--visible');

    const onFirstMove = (event) => {
      root.classList.add('custom-cursor--visible');
      move(event);
      window.removeEventListener('mousemove', onFirstMove);
      window.addEventListener('mousemove', move, { passive: true });
    };

    window.addEventListener('mousemove', onFirstMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onFirstMove);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div ref={rootRef} className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor__ring" />
      <div ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
};

export default CustomCursor;
