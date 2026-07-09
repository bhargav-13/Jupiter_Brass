import React from 'react';
import './QualityHero.css';

const QualityHero = () => {
  return (
    <section className="quality-hero">
      <div className="container">
        <h1 className="quality-hero-title">
          Quality You Can Trust. Precision You<br />Can Measure.
        </h1>

        <div className="quality-hero-banner">
          <img
            src="/images/quality_page_hero_banner.png"
            alt="Precision quality control inspection of brass components"
            className="quality-hero-image"
          />
        </div>

        <div className="quality-hero-content">
          <div className="quality-hero-text">
            At <span className="text-primary">Jupiter Brass Industries</span>, quality is not just a
            process it is the foundation of everything we manufacture. Since our
            establishment in <span className="text-primary">1994</span>, we have built our reputation by
            consistently delivering precision-engineered components that meet
            customer specifications, international standards, and industry
            expectations.
          </div>
          <div className="quality-hero-divider"></div>
          <div className="quality-hero-text">
            Every product manufactured at our facility undergoes strict quality
            control procedures, ensuring that our customers receive components
            with consistent dimensions, excellent finish, and dependable
            performance. Our commitment to quality has enabled us to become a
            trusted manufacturing partner for OEMs, importers, and industrial
            companies across the{' '}
            <span className="text-primary">USA, Europe, and the Middle East</span>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityHero;
