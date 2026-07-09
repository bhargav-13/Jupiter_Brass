import React from 'react';
import './OEMCustomComponents.css';

const components = [
  { name: 'Precision Brass Turned Parts', image: '/images/Precision Brass Turned Parts.png' },
  { name: 'CNC Machined Components', image: '/images/Precision Brass Turned Parts.png' },
  { name: 'Brass Fitting', image: '/images/Brass fitting.png' },
  { name: 'Brass Insert', image: '/images/brass insert.png' },
  { name: 'Brass Fastners', image: '/images/brass fastners.png' },
  { name: 'Brass Adapters', image: '/images/brass adapters.png' },
  { name: 'Brass Connectors', image: '/images/brass connectors.png' },
  { name: 'Brass Reducers', image: '/images/brass reducers.png' },
  { name: 'Brass Nipples', image: '/images/brass nipples.png' },
  { name: 'Brass Cable Glands', image: '/images/brass cable glands.png' },
  { name: 'Complex Components', image: '/images/complex components.png' },
  { name: 'Customers Machined Parts', image: '/images/customers machined parts.png' },
];

const OEMCustomComponents = () => {
  return (
    <section id="oem-custom-components" className="section oem-custom-components">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Custom Precision Components</h2>
        </div>

        <div className="oem-custom-components-grid">
          {components.map((c, i) => (
            <div className="oem-custom-components-card" key={i}>
              <div className="oem-custom-components-image-box">
                <img
                  src={c.image}
                  alt={c.name}
                  className="oem-custom-components-image"
                  loading="lazy"
                />
              </div>
              <span className="oem-custom-components-name">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OEMCustomComponents;
