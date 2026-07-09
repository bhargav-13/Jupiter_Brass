import React from 'react';
import './QualityPolicy.css';

const QualityPolicy = () => {
  const policies = [
    { id: 1, title: 'Precision Manufacturing' },
    { id: 2, title: 'Continuous Process Improvement' },
    { id: 3, title: 'Qualified Workforce' },
    { id: 4, title: 'Modern Inspection Methods' },
    { id: 5, title: 'On-Time Delivery' },
    { id: 6, title: 'Competitive Pricing' },
    { id: 7, title: 'Complete Customer Satisfaction' },
    { id: 8, title: 'Industrial Brass Solutions' },
  ];

  return (
    <section id="quality-policy" className="section quality-policy">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Our Quality Policy</h2>
        </div>
        <div className="quality-policy-grid">
          {policies.map((item) => (
            <div key={item.id} className="quality-policy-card">
              <div className="quality-policy-icon-wrapper">
                <img
                  src="/images/Our Capabilities_icon.png"
                  alt="Quality Policy Icon"
                  className="quality-policy-icon"
                />
              </div>
              <span className="quality-policy-text">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
