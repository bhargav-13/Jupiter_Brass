import React from 'react';
import './Process.css';

const Process = () => {
  const processSteps = [
    {
      id: '01',
      title: 'PRODUCT UNDERSTANDING',
      desc: 'WE CAREFULLY ANALYZE CUSTOMER REQUIREMENTS AND TECHNICAL SPECIFICATIONS TO DELIVER ACCURATE SOLUTIONS.',
    },
    {
      id: '02',
      title: 'PRECISION MANUFACTURING',
      desc: 'OUR SKILLED TEAM MANUFACTURES EVERY COMPONENT USING ADVANCED MACHINING AND QUALITY-CONTROLLED PRODUCTION METHODS.',
    },
    {
      id: '03',
      title: 'QUALITY INSPECTION',
      desc: 'EACH PRODUCT UNDERGOES DETAILED INSPECTION AND TESTING TO MAINTAIN HIGH STANDARDS OF QUALITY AND DURABILITY.',
    },
    {
      id: '04',
      title: 'PACKAGING & DELIVERY',
      desc: 'PRODUCTS ARE SECURELY PACKED AND DELIVERED ON TIME TO ENSURE COMPLETE CUSTOMER SATISFACTION.',
    },
  ];

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">OUR PROCESS</h2>
        </div>

        <div className="process-grid">
          <div className="process-image-container">
            <img src="/images/process.png" alt="Our Process" className="process-image" />
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="process-number">{step.id}</div>
                <div className="process-info">
                  <h5 className="process-step-title">{step.title}</h5>
                </div>
                <div className="process-desc-container">
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
