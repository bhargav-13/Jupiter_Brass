import React from 'react';
import './OEMEngineeringSupport.css';

const supports = [
  {
    icon: '/images/Timely Global Delivery (2).svg',
    title: 'Timely Global Delivery',
    desc: 'Thorough review of engineering drawings before production begins.',
  },
  {
    icon: '/images/FeasibilityAnalysis.svg',
    title: 'Feasibility Analysis',
    desc: 'Manufacturing feasibility assessment to identify potential challenges early.',
  },
  {
    icon: '/images/MaterialSelection.svg',
    title: 'Material Selection',
    desc: 'Expert guidance on material selection for optimal performance and cost.',
  },
  {
    icon: '/images/Process Optimization.svg',
    title: 'Process Optimization',
    desc: 'Streamlined manufacturing processes for efficiency and consistency.',
  },
  {
    icon: '/images/CostReduction.svg',
    title: 'Cost Reduction',
    desc: 'Practical suggestions to reduce manufacturing costs without compromising quality.',
  },
  {
    icon: '/images/ToleranceReview.svg',
    title: 'Tolerance Review',
    desc: 'Tolerance analysis to ensure achievable and cost-effective specifications.',
  },
  {
    icon: '/images/SurfaceFinish.svg',
    title: 'Surface Finish',
    desc: 'Recommendations for surface finish requirements and achievable standards.',
  },
  {
    icon: '/images/ThreadGuidance.svg',
    title: 'Thread Guidance',
    desc: 'Thread selection guidance for optimal fit, function, and manufacturability.',
  },
];

const OEMEngineeringSupport = () => {
  return (
    <section className="section oem-engineering-support">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Engineering Support</h2>
          <p className="oem-engineering-support-desc">
            Manufacturing begins long before machining starts. Our engineering
            team works closely with customers to optimize designs for
            manufacturability, cost efficiency, and production consistency.
          </p>
        </div>

        <div className="oem-engineering-support-grid">
          {supports.map((item, i) => (
            <div className="oem-engineering-support-card" key={i}>
              <div className="oem-engineering-support-icon">
                <img src={item.icon} alt="" className="oem-engineering-support-svg-icon" />
              </div>
              <h5 className="oem-engineering-support-title">
                {(() => {
                  const lastSpace = item.title.lastIndexOf(' ');
                  return (
                    <>
                      {item.title.slice(0, lastSpace)}
                      <br />
                      {item.title.slice(lastSpace + 1)}
                    </>
                  );
                })()}
              </h5>
              <p className="oem-engineering-support-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OEMEngineeringSupport;
