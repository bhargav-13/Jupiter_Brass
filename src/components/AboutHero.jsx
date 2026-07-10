import React, { useRef, useCallback, useState, useEffect } from 'react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../lib/gsap';
import './AboutHero.css';

const AboutHero = () => {
  const bannerRef = useRef(null);
  const gridPosRef = useRef({ x: 0, y: 0, ox: 0, oy: 0 });
  const [gridActive, setGridActive] = useState(false);

  const applyGridPosition = useCallback(() => {
    const banner = bannerRef.current;
    if (!banner) return;
    const { x, y, ox, oy } = gridPosRef.current;
    banner.style.setProperty('--mouse-x', `${x}px`);
    banner.style.setProperty('--mouse-y', `${y}px`);
    banner.style.setProperty('--grid-offset-x', `${ox}px`);
    banner.style.setProperty('--grid-offset-y', `${oy}px`);
  }, []);

  const updateGridPosition = useCallback(
    (clientX, clientY) => {
      const banner = bannerRef.current;
      if (!banner) return;

      const rect = banner.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const ox = (x / rect.width - 0.5) * 28;
      const oy = (y / rect.height - 0.5) * 28;

      if (prefersReducedMotion()) {
        gridPosRef.current = { x, y, ox, oy };
        applyGridPosition();
        return;
      }

      gsap.to(gridPosRef.current, {
        x,
        y,
        ox,
        oy,
        duration: 0.65,
        ease: 'power3.out',
        overwrite: true,
        onUpdate: applyGridPosition,
      });
    },
    [applyGridPosition]
  );

  const handleMouseMove = useCallback(
    (event) => {
      updateGridPosition(event.clientX, event.clientY);
    },
    [updateGridPosition]
  );

  const handleMouseEnter = useCallback(
    (event) => {
      setGridActive(true);
      updateGridPosition(event.clientX, event.clientY);
    },
    [updateGridPosition]
  );

  const handleMouseLeave = useCallback(() => {
    setGridActive(false);
  }, []);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;
    const rect = banner.getBoundingClientRect();
    gridPosRef.current = {
      x: rect.width / 2,
      y: rect.height / 2,
      ox: 0,
      oy: 0,
    };
    applyGridPosition();
  }, [applyGridPosition]);

  return (
    <section className="about-hero">
      <div className="container">
        <h1 className="about-hero-title">
          Building Trust Through Precision<br />Manufacturing Since 1994
        </h1>

        <div
          ref={bannerRef}
          className={`about-hero-banner${gridActive ? ' is-grid-active' : ''}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="about-hero-grid about-hero-grid--base" aria-hidden="true" />
          <div className="about-hero-grid about-hero-grid--spotlight" aria-hidden="true" />
          <div className="about-hero-year">
            <span className="about-hero-since">Since</span>
            <span className="about-hero-year-value">1994</span>
          </div>
          <div className="about-hero-image-wrapper">
            <img
              src="/images/jay.png"
              alt="Mr. Jay Vasoya"
              className="about-hero-image"
            />
          </div>
        </div>

        <div className="about-hero-content">
          <div className="about-hero-text">
            Established in 1994, Jupiter Meta Mech began its journey as a manufacturer of premium brass components with a commitment to precision, quality, and reliability. Over the years, we have continuously expanded our capabilities, embracing modern manufacturing technologies to meet the evolving needs of global industries.
          </div>
          <div className="about-hero-divider"></div>
          <div className="about-hero-text">
            Our commitment to quality, innovation, and customer satisfaction has helped us build strong relationships with clients across domestic and international markets. From standard brass parts to fully customized components, we deliver products that meet the highest industry standards and exact client requirements.
            <span className="about-hero-signature"><span className="about-hero-tilde">~</span> MR. JAY VASOYA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
