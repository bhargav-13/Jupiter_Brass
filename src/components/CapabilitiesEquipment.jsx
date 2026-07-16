import React from 'react';
import './CapabilitiesEquipment.css';

const equipment = [
  { count: '8', name: 'CNC Turning Machines' },
  { count: '20', name: 'Special Purpose Machines' },
  { count: '2', name: 'Hydraulic Presses (100 MT)' },
  { count: '3', name: 'Buffing & Grinding Machines' },
  { count: '3', name: 'Slotting Machines' },
];

const CapabilitiesEquipment = () => {
  return (
    <section className="cap-equipment">
      <div className="container">
        <div className="cap-equipment-inner">
          <div className="cap-equipment-text">
            <h2 className="cap-equipment-title">Major Manufacturing Equipment</h2>
            <p className="cap-equipment-desc">
              Our manufacturing setup combines advanced machinery with
              experienced operators to ensure reliable and repeatable production
              of both standard and highly customized precision components.
            </p>
          </div>

          <div className="cap-equipment-grid">
            {equipment.map((item) => (
              <div className="cap-equipment-card" key={item.name}>
                <span className="cap-equipment-count">{item.count}</span>
                <span className="cap-equipment-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesEquipment;
