import React from 'react';
import './Industry.css';

const Industry = () => {
  const industries = [
    { name: 'ELECTRICAL INDUSTRY', image: '/images/Electrical industry.png' },
    { name: 'PLUMBING INDUSTRY', image: '/images/Plumbing industry.png' },
    { name: 'AUTOMOTIVE INDUSTRY', image: '/images/automotive industry.png' },
    { name: 'CUNSTRUCTION INDUSTRY', image: '/images/cunstruction industry.png' },
    { name: 'ENGINEERING INDUSTRY', image: '/images/engineering industry.png' },
    { name: 'HARDWARE INDUSTRY', image: '/images/hardware industry.png' },
    { name: 'Electronics', image: '/images/telecommunications.png' },
    { name: 'RENEWABLE ENERGY INDUSTRY', image: '/images/renewable energy industry.png' },
    { name: 'OIL & GAS', image: '/images/Oil & Gas.png' },
    { name: 'HVAC', image: '/images/HVAC.png' },
    { name: 'MEDICAL EQUIPMENT', image: '/images/Medical Equipment.png' },
    { name: 'INDUSTRIAL MACHINERY', image: '/images/INDUSTRIALMACHINERY.png' },
  ];

  return (
    <section id="industry" className="section industry">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">INDUSTRY WE SERVE</h2>
        </div>

        <p className="industry-subtitle">
          TRUSTED ACROSS MULTIPLE INDUSTRIES OUR BRASS COMPONENTS ARE WIDELY USED ACROSS VARIOUS INDUSTRIES DUE TO THEIR PRECISION, DURABILITY, AND LONG-LASTING PERFORMANCE.
        </p>

        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-image-wrapper">
                <img src={industry.image} alt={industry.name} className="industry-image" />
              </div>
              <span className="industry-name">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industry;
