import React from 'react';
import './Quality.css';

const Quality = () => {
  const qualityPoints = [
    {
      title: 'PREMIUM BRASS MATERIAL',
      desc: 'We use high-grade raw materials to ensure strength, corrosion resistance, and long service life in every component.',
    },
    {
      title: 'PREMIUM BRASS MATERIAL',
      desc: 'We use high-grade raw materials to ensure strength, corrosion resistance, and long service life in every component.',
    },
    {
      title: 'PREMIUM BRASS MATERIAL',
      desc: 'We use high-grade raw materials to ensure strength, corrosion resistance, and long service life in every component.',
    },
    {
      title: 'PREMIUM BRASS MATERIAL',
      desc: 'We use high-grade raw materials to ensure strength, corrosion resistance, and long service life in every component.',
    },
    {
      title: 'PREMIUM BRASS MATERIAL',
      desc: 'We use high-grade raw materials to ensure strength, corrosion resistance, and long service life in every component.',
    },
    {
      title: 'PREMIUM BRASS MATERIAL',
      desc: 'We use high-grade raw materials to ensure strength, corrosion resistance, and long service life in every component.',
    },
  ];

  return (
    <section id="quality" className="section quality">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title quality-title">QUALITY COMMITMENT</h2>
        </div>

        <div className="quality-grid">
          <div className="quality-highlight">
            <h4>PRECISION QUALITY,<br />TRUSTED PERFORMANCE</h4>
            <p>
              We are committed to delivering premium-quality brass components manufactured
              with precision, consistency, and strict quality standards. Every product
              undergoes rigorous inspection and testing to ensure superior durability,
              dimensional accuracy, and flawless performance for industrial applications
              worldwide.
            </p>
            <button className="btn btn-quality-contact mt-20">CONTACT NOW</button>
          </div>

          <div className="quality-circle"></div>

          <div className="quality-points">
            {qualityPoints.map((point, index) => (
              <div className="q-point" key={index}>
                <div className="q-icon-circle">
                  <img src="/images/quality_icon.svg" alt="Quality Icon" />
                </div>
                <h5>{point.title}</h5>
                <p>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
