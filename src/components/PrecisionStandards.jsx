import React from 'react';
import './PrecisionStandards.css';

const stats = [
  { value: 'Ø5–165', unit: 'MM', label: 'Component Size Range' },
  { value: '200', unit: 'MM', label: 'Maximum Component Length' },
  { value: '±0.05', unit: 'MM', label: 'Machining Accuracy' },
  { value: '50,000', unit: 'PCS/MO', label: 'Monthly Production Cap' },
];

const PrecisionStandards = () => {
  return (
    <section id="precision-standards" className="section precision-standards">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Precision Manufacturing Standards</h2>
          <p className="precision-standards-desc">
            Advanced CNC machines and precision manufacturing equipment enable
            us to produce components with tight dimensional control across
            every production run.
          </p>
        </div>

        <div className="precision-standards-grid">
          {stats.map((stat, index) => (
            <div className="precision-stat-card" key={index}>
              <div className="precision-stat-card-inner">
                <img
                  src="/images/coin.png"
                  alt=""
                  className="precision-stat-icon"
                  loading="lazy"
                />
                <div className="precision-stat-value">
                  {stat.value}
                  <span className="precision-stat-unit">{stat.unit}</span>
                </div>
                <span className="precision-stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="precision-standards-note">
          <div className="precision-standards-note-inner">
            Each production process is continuously monitored to ensure
            dimensional consistency and repeatability. All production lots are
            tracked through our full traceability system.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionStandards;
