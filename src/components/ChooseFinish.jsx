import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from '../lib/gsap';
import './ChooseFinish.css';

const finishes = [
  { id: 'brass',     label: 'Brass',     swatchClass: 'finish-swatch--brass'  },
  { id: 'aluminium', label: 'Aluminium', swatchClass: 'finish-swatch--chrome' },
  { id: 'steel',     label: 'Steel',     swatchClass: 'finish-swatch--satin'  },
  { id: 'matte',     label: 'Matte',     swatchClass: 'finish-swatch--dark'   },
];

/* Splits a string into individual letter <span>s */
function buildLetterSpans(text) {
  return text.split('').map((char, i) => (
    <span
      key={i}
      className="cf-letter"
      style={{ display: char === ' ' ? 'inline-block' : 'inline-block', minWidth: char === ' ' ? '0.35em' : undefined }}
    >
      {char}
    </span>
  ));
}

const ChooseFinish = () => {
  const [activeFinish, setActiveFinish] = useState('brass');
  const [displayLabel, setDisplayLabel] = useState('Brass');
  const bgTextRef = useRef(null);
  const animRef = useRef(null);

  /* Compute font size:
     - Target: text never wider than ~88vw (showcase width incl. container padding)
     - BankGothic uppercase avg char width ≈ 0.65 × font-size
     - Also capped at Figma's reference size (brass = 362.45px @ 1440px = 25.2vw)  */
  const computeFontSize = useCallback((label) => {
    const len = label.length;

    // Max vw so the whole word fits inside ~88vw container
    const FIT_VW  = 88 / (len * 0.65);
    // Figma reference cap (brass at 25.2vw)
    const CAP_VW  = 25.2;

    const vw  = Math.min(CAP_VW, FIT_VW).toFixed(2);
    // rem equivalent at 1440px reference viewport (vw × 14.4 / 16)
    const rem = Math.min(22.65, (parseFloat(vw) * 14.4 / 16)).toFixed(2);
    const minRem = Math.max(3, (rem * 0.45)).toFixed(2);

    return `clamp(${minRem}rem, ${vw}vw, ${rem}rem)`;
  }, []);


  /* Animate letters in: slide from left + fade */
  const animateIn = useCallback((label) => {
    setDisplayLabel(label);
    // letters won't exist yet — wait one frame
    requestAnimationFrame(() => {
      const el = bgTextRef.current;
      if (!el) return;

      // Apply dynamic font size before animating
      el.style.fontSize = computeFontSize(label);

      const letters = el.querySelectorAll('.cf-letter');
      if (!letters.length) return;

      // Kill any running tween
      if (animRef.current) animRef.current.kill();

      // Start state
      gsap.set(letters, { opacity: 0, x: -60 });

      // Staggered reveal left → right
      animRef.current = gsap.to(letters, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.045,
      });
    });
  }, [computeFontSize]);

  /* Run on first mount */
  useEffect(() => {
    animateIn('Brass');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSwatchClick = useCallback(
    (finish) => {
      if (finish.id === activeFinish) return;
      setActiveFinish(finish.id);

      // First fade-out current letters right → left direction (reverse stagger)
      const el = bgTextRef.current;
      if (el) {
        const letters = el.querySelectorAll('.cf-letter');
        if (animRef.current) animRef.current.kill();
        animRef.current = gsap.to(letters, {
          opacity: 0,
          x: 40,
          duration: 0.22,
          ease: 'power2.in',
          stagger: { each: 0.025, from: 'end' },
          onComplete: () => animateIn(finish.label),
        });
      } else {
        animateIn(finish.label);
      }
    },
    [activeFinish, animateIn]
  );

  return (
    <section id="choose-finish" className="section choose-finish">
      <div className="container">
        {/* Header row */}
        <div className="choose-finish-header">
          <h2 className="choose-finish-title">Choose Your Finish</h2>

          <div className="finish-swatches" role="radiogroup" aria-label="Select a metal finish">
            {finishes.map((f) => (
              <button
                key={f.id}
                className={`finish-swatch ${f.swatchClass} ${activeFinish === f.id ? 'active' : ''}`}
                onClick={() => handleSwatchClick(f)}
                aria-label={f.label}
                aria-checked={activeFinish === f.id}
                role="radio"
                title={f.label}
              />
            ))}
          </div>
        </div>

        {/* Showcase */}
        <div className="choose-finish-showcase">
          <span
            ref={bgTextRef}
            className="choose-finish-bg-text"
            aria-hidden="true"
          >
            {buildLetterSpans(displayLabel)}
          </span>

          <img
            src="/images/brass.png"
            alt="Precision brass components"
            className={`choose-finish-image finish-${activeFinish}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseFinish;
