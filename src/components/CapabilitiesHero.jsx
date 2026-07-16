import React from 'react';
import './CapabilitiesHero.css';

const stats = [
  { value: '32+', label: 'Experience', caption: 'Years of manufacturing' },
  { value: '50K+', label: 'Monthly Capacity', caption: 'Components per month' },
  { value: '±0.05mm', label: 'Machining Accuracy', caption: 'Tight tolerance control' },
  { value: '8,500', label: 'Facility Area', caption: 'Sq. Ft. modern facility' },
];

const CapabilitiesHero = () => {
  return (
    <section className="capabilities-hero">
      <div className="container">
        <div className="cap-hero-content">
          <h1 className="cap-hero-title">
            Advanced Manufacturing Infrastructure for{' '}
            <span className="cap-hero-title-accent">Precision Engineering</span>
          </h1>
          <p className="cap-hero-desc">
            Combining 32+ years of manufacturing experience with modern CNC
            technology and skilled workmanship, we produce high-quality brass
            and metal components for OEMs, industrial manufacturers, and global
            distributors.
          </p>
        </div>

        <div className="cap-hero-stats">
          {stats.map((stat) => (
            <div className="cap-hero-stat-card" key={stat.label}>
              <span className="cap-hero-stat-value">{stat.value}</span>
              <span className="cap-hero-stat-label">{stat.label}</span>
              <span className="cap-hero-stat-caption">{stat.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesHero;
