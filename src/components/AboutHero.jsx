import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">
        <h1 className="about-hero-title">
          Premium Quality Brass Components Built<br />For Industrial Strength And Performance
        </h1>
        
        <div className="about-hero-banner">
          <div className="about-hero-year">
            <span className="about-hero-since">Since</span>
            2020
          </div>
          <div className="about-hero-image-wrapper">
            <img 
              src="/images/jay_vasoya.png" 
              alt="Mr. Jay Vasoya" 
              className="about-hero-image" 
            />
          </div>
        </div>

        <div className="about-hero-content">
          <div className="about-hero-text">
            At Jupiter Meta Mech, we specialize in manufacturing high-quality brass components engineered for precision, durability, and superior performance. With years of industry expertise and advanced manufacturing capabilities, we provide reliable brass solutions for a wide range of industries including electrical, plumbing, automotive, engineering, telecommunications, hardware, and renewable energy sectors.
          </div>
          <div className="about-hero-divider"></div>
          <div className="about-hero-text">
            Our commitment to quality, innovation, and customer satisfaction has helped us build strong relationships with clients across domestic and international markets. From standard brass parts to fully customized components, we deliver products that meet the highest industry standards and exact client requirements.
            <span className="about-hero-signature"><span className="about-hero-tilde">~</span> MR. JAY VASOYA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
