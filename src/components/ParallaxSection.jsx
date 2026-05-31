import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_FORM_PATH } from '../lib/scrollToSection';
import './ParallaxSection.css';

const ParallaxSection = () => {
  return (
    <section className="parallax-section">
      <div className="parallax-content">
        <h2>
          BUILD PRECISION BRASS<br />
          COMPONENTS FOR YOUR INDUSTRY
        </h2>
        <Link to={CONTACT_FORM_PATH} className="parallax-btn">
          START YOUR PROJECT TODAY
        </Link>
      </div>
    </section>
  );
};

export default ParallaxSection;
