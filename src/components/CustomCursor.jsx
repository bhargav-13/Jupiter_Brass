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

    // Once the cursor has been positioned at least once, keep it visible forever
    // (only hide if the pointer truly leaves the browser window).
    let hasBeenPositioned = false;

    const show = () => root.classList.add('custom-cursor--visible');
    const hide = () => {
      // Only hide if we haven't had a position yet (safety guard)
      if (!hasBeenPositioned) root.classList.remove('custom-cursor--visible');
    };

    const move = (event) => {
      if (!hasBeenPositioned) {
        hasBeenPositioned = true;
        // Position before making visible to avoid a jump from 0,0
        gsap.set(dot,  { x: event.clientX, y: event.clientY });
        gsap.set(ring, { x: event.clientX, y: event.clientY });
      }
      show();
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

    // Only hide when the pointer genuinely exits the browser window.
    const onDocLeave = (event) => {
      if (!event.relatedTarget && !event.toElement) {
        root.classList.remove('custom-cursor--visible');
        // Reset so next entry re-positions before showing
        hasBeenPositioned = false;
      }
    };
    const onDocEnter = () => {
      // Will become visible again on the next mousemove
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onDocLeave);
    document.addEventListener('mouseenter', onDocEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onDocLeave);
      document.removeEventListener('mouseenter', onDocEnter);
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
