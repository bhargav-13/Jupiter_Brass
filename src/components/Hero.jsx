import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="nav-shell hero-container">
        
        <div className="hero-top-section">
          <div className="hero-description">
            Delivering high-quality brass fittings, precision turned parts, and custom-engineered solutions with unmatched durability and performance.
          </div>
          <h1 className="hero-title">
            PRECISION ENGINEERED BRASS COMPONENTS FOR INDUSTRIAL EXCELLENCE
          </h1>
        </div>

        <div className="hero-bottom-section">
          <div className="hero-premium-area">
            <div className="hero-premium">
              <span className="premium-text">PREMIUM</span>
              <span className="premium-text">QUALITY</span>
            </div>

            <p className="hero-tagline">
              Crafted for reliability, built for industries worldwide.
            </p>
          </div>

          <div className="hero-image-area">
            <img
              src="/images/bg_hero.png"
              alt=""
              className="hero-bg-logo"
            />
            <img
              src="/images/home_hero_banner.png"
              alt="Precision Brass Fittings"
              className="hero-product"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
