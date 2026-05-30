import { useEffect, useRef } from 'react';
import { getLenis } from '../lib/lenisScroll';

const SCROLL_DELTA = 3;
const TOP_THRESHOLD = 56;

/**
 * Hide header on scroll down, show on scroll up. Works with Lenis and native scroll.
 */
export function useHeaderScroll({ menuOpen, onScrolledChange, onHiddenChange }) {
  const lastScrollY = useRef(0);
  const menuOpenRef = useRef(menuOpen);

  menuOpenRef.current = menuOpen;

  useEffect(() => {
    if (menuOpen) {
      onHiddenChange(false);
    }
  }, [menuOpen, onHiddenChange]);

  useEffect(() => {
    const applyScrollState = (currentY, direction = 0) => {
      const previousY = lastScrollY.current;
      const delta = currentY - previousY;
      const resolvedDirection = direction || Math.sign(delta);

      onScrolledChange(currentY > 24);

      if (menuOpenRef.current) {
        onHiddenChange(false);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY <= TOP_THRESHOLD) {
        onHiddenChange(false);
      } else if (resolvedDirection > 0 || delta > SCROLL_DELTA) {
        onHiddenChange(true);
      } else if (resolvedDirection < 0 || delta < -SCROLL_DELTA) {
        onHiddenChange(false);
      }

      lastScrollY.current = currentY;
    };

    const onLenisScroll = (lenis) => {
      const direction = lenis.direction || Math.sign(lenis.velocity);
      applyScrollState(lenis.scroll, direction);
    };

    const onNativeScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      applyScrollState(currentY, Math.sign(delta));
    };

    let lenisInstance = getLenis();
    let usingNative = false;
    let attachTimer;

    const bindLenis = (instance) => {
      if (!instance) return;
      lenisInstance = instance;
      instance.on('scroll', onLenisScroll);
      applyScrollState(instance.scroll, instance.direction);
      if (usingNative) {
        window.removeEventListener('scroll', onNativeScroll);
        usingNative = false;
      }
    };

    if (lenisInstance) {
      bindLenis(lenisInstance);
    } else {
      usingNative = true;
      window.addEventListener('scroll', onNativeScroll, { passive: true });
      onNativeScroll();
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

    return () => {
      window.clearInterval(attachTimer);
      if (usingNative) {
        window.removeEventListener('scroll', onNativeScroll);
      }
      lenisInstance?.off('scroll', onLenisScroll);
    };
  }, [onScrolledChange, onHiddenChange]);
}
