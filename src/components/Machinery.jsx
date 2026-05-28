import React from 'react';
import './Machinery.css';

const machineryItems = [
  { name: 'Vernier Calipers & Micro Meter', image: '/images/Vernier Calipers & Micro Meter.png' },
  { name: 'Vision Measuring Machine',       image: '/images/Vision Measuring Machine.png' },
  { name: 'Hardness Testing',               image: '/images/Hardness Testing.png' },
  { name: 'Hydrostatic Testing',            image: '/images/Hydrostatic Testing.png' },
  { name: 'Pneumatic Testing',              image: '/images/Pneumatic Testing.png' },
  { name: 'Stress Corrosion Testing',       image: '/images/Stress Corrosion Testing.png' },
  { name: 'Dimensional Inspection',         image: '/images/Dimensional Inspection.png' },
  { name: 'Destructive Testing',            image: '/images/Destructive Testing.png' },
];

const Machinery = () => {
  return (
    <section id="machinery" className="section machinery">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Quality & Advanced Machinery</h2>
        </div>

        <p className="machinery-desc">
          We are equipped with modern infrastructure and advanced machinery
          to manufacture precision brass components with superior accuracy
          and consistency.
        </p>

        <div className="machinery-grid">
          {machineryItems.map((item, index) => (
            <div className="machinery-card" key={index}>
              <div className="machinery-card-img-box">
                <img
                  src={item.image}
                  alt={item.name}
                  className="machinery-card-img"
                  loading="lazy"
                />
              </div>
              <span className="machinery-card-label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Machinery;
