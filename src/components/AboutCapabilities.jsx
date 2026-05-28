import React from 'react';
import './AboutCapabilities.css';

const AboutCapabilities = () => {
  const capabilities = [
    { id: 1, title: 'Precision Brass Components' },
    { id: 2, title: 'Custom Brass Manufacturing' },
    { id: 3, title: 'CNC Turned Components' },
    { id: 4, title: 'Brass Electrical Parts' },
    { id: 5, title: 'Brass Plumbing Fittings' },
    { id: 6, title: 'Brass Automotive Components' },
    { id: 7, title: 'Brass Hardware Parts' },
    { id: 8, title: 'Industrial Brass Solutions' },
  ];

  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Our Capabilities</h2>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((item) => (
            <div key={item.id} className="capability-card">
              <div className="capability-icon-wrapper">
                <img
                  src="/images/Our Capabilities_icon.png"
                  alt="Capability Icon"
                  className="capability-icon"
                />
              </div>
              <span className="capability-text">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCapabilities;
