import React from 'react';
import './OEMHero.css';

const stats = [
  { label: 'Established', value: '1994', caption: '30+ years of OEM experience' },
  { label: 'Monthly Capacity', value: '50K+', caption: 'Components per month' },
  { label: 'Machining Accuracy', value: '±0.05mm', caption: 'Tight tolerance control' },
  { label: 'Export Markets', value: '3+', caption: 'USA - Europe - Middle East' },
];

const OEMHero = () => {
  return (
    <section className="oem-hero">
      <div className="container">
        <div className="oem-hero-content">
          <h1 className="oem-hero-title">
            Your Trusted OEM Manufacturing Partner for Precision Machined
            Components
          </h1>
          <p className="oem-hero-desc">
            At Jupiter Brass Industries, we offer complete OEM manufacturing
            solutions delivering precision-engineered brass and metal
            components manufactured exactly to your drawings, specifications,
            and performance expectations.
          </p>
        </div>

        <div className="oem-hero-stats">
          {stats.map((stat, i) => (
            <div className="oem-hero-stat-card" key={i}>
              <span className="oem-hero-stat-label">{stat.label}</span>
              <span className="oem-hero-stat-value">{stat.value}</span>
              <span className="oem-hero-stat-caption">{stat.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OEMHero;
