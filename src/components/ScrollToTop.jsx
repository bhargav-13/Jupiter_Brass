import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../lib/gsap';
import { scrollToTop } from '../lib/lenisScroll';
import { scrollToSectionById } from '../lib/scrollToSection';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const run = () => {
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        scrollToSectionById(id, { immediate: false });
      } else {
        scrollToTop({ immediate: true });
      }
      ScrollTrigger.refresh();
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
