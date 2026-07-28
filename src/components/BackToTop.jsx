import { useEffect, useState } from 'react';
import { scrollToTop } from '../lib/lenisScroll';
import './BackToTop.css';

const SHOW_AFTER_PX = 400;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={() => scrollToTop({ immediate: false })}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
