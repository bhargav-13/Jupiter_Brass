import React from 'react';
import './OEMPrototypeToProduction.css';

const columns = [
  {
    title: 'Prototype Development',
    subtitle: 'Validate designs before mass production',
    items: [
      'Feasibility review',
      'Manufacturing consultation',
      'Material recommendations',
      'Sample development',
      'Dimensional verification',
    ],
    note: 'Prototype development is available with nominal development charges, helping customers verify design performance before large-scale production.',
  },
  {
    title: 'Flexible Production Volumes',
    subtitle: '~50,000 components/month capacity',
    items: [
      'Prototype quantities',
      'Small batch production',
      'Medium volume manufacturing',
      'High volume OEM production',
      'Scheduled repeat orders',
    ],
    note: 'Prototype development is available with nominal development charges, helping customers verify design performance before large-scale production.',
  },
];

const OEMPrototypeToProduction = () => {
  return (
    <section id="oem-prototype-to-production" className="section oem-prototype-to-production">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">From Prototype To Production</h2>
        </div>

        <div className="oem-prototype-grid">
          {columns.map((col, i) => (
            <div className="oem-prototype-card" key={i}>
              <h3 className="oem-prototype-title">{col.title}</h3>
              <p className="oem-prototype-subtitle">{col.subtitle}</p>
              <div className="oem-prototype-divider" />
              <ul className="oem-prototype-list">
                {col.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="oem-prototype-checkbox">
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.5 8.5L6.5 11.5L12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="oem-prototype-note">{col.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OEMPrototypeToProduction;
