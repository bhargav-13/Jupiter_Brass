import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_FORM_PATH } from '../lib/scrollToSection';
import './Quality.css';

const Quality = () => {
  const qualityPoints = [
    {
      title: 'PREMIUM BRASS MATERIAL',
      desc: 'We use high-grade raw materials to ensure strength, corrosion resistance, and long service life in every component.',
    },
    {
      title: 'ADVANCED QUALITY',
      desc: 'Every component undergoes precise inspection to guarantee dimensional accuracy, flawless finish, and dependable every time.',
    },
    {
      title: 'PRECISION MANUFACTURING',
      desc: 'Advanced CNC technology delivers exceptional precision, consistent quality, faster production, and reliable excellence.',
    },
    {
      title: 'INTERNATIONAL STANDARDS',
      desc: 'Manufacturing follows internationally quality standards manufactured to ISO standards with complete quality.',
    },
    {
      title: 'CONTINUOUS IMPROVEMENT',
      desc: 'We continuously improvement optimize processes for higher efficiency and better quality and customer satisfaction.',
    },
    {
      title: 'CUSTOMER EXCELLENCE',
      desc: 'Delivering precision products with trusted quality, timely delivery, and outstanding customer support always.',
    },
  ];

  return (
    <section id="quality" className="section quality">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title quality-title">QUALITY COMMITMENT</h2>
        </div>

        <div className="quality-grid-wrap">
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
              <Link to={CONTACT_FORM_PATH} className="btn btn-quality-contact mt-20">
                CONTACT NOW
              </Link>
            </div>

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

          <div className="quality-circle" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
