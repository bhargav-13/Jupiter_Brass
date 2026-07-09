import React from 'react';
import './QualityMachinery.css';

const machines = [
  { name: 'Digital Vernier Calipers', image: '/images/Digital Vernier Calipers.png' },
  { name: 'Dial Guages', image: '/images/Dial Guages.png' },
  { name: 'Height Gauges', image: '/images/Height Gauges.png' },
  { name: 'Outside Micrometers', image: '/images/Outside Micrometers.png' },
  { name: 'Visual Measuring Machine (VMM)', image: '/images/Visual Measuring Machine (VMM).png' },
  { name: 'Air Gauges', image: '/images/Air Gauges.png' },
  { name: 'Thread Gauges', image: '/images/Thread Gauges.png' },
  { name: 'Ring Gauges', image: '/images/Ring Gauges.png' },
  { name: 'Slip Gauges', image: '/images/Slip Gauges.png' },
  { name: 'Profile Projector', image: '/images/Profile Projector_2.png' },
];

const QualityMachinery = () => {
  return (
    <section id="quality-machinery" className="section quality-machinery">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Quality &amp; Advanced Machinery</h2>
          <p className="quality-machinery-desc">
            We are equipped with modern infrastructure and advanced machinery
            to manufacture precision brass components with superior accuracy
            and consistency.
          </p>
        </div>

        <div className="quality-machinery-grid">
          {machines.map((m, i) => (
            <div className="quality-machinery-card" key={i}>
              <div className="quality-machinery-image-box">
                <img
                  src={m.image}
                  alt={m.name}
                  className="quality-machinery-image"
                  loading="lazy"
                />
              </div>
              <span className="quality-machinery-name">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityMachinery;
