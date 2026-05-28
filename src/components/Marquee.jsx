import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const text = "Precision Brass Components • Trusted Manufacturing • Premium Quality • Custom Engineering Solutions • Global Exporter • High Performance Brass Parts • CNC Machined Components • Durable & Reliable Products • ";
  
  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
