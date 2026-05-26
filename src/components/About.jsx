import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">

        {/* Heading */}
        <div className="section-heading">
          <h2 className="section-title">ABOUT US</h2>
        </div>

        {/* Top Row: Text left, Stats right */}
        <div className="about-top-row">
          <div className="about-text">
            <p>
              We are a leading manufacturer of precision brass components, delivering
              high-quality industrial solutions with advanced engineering and reliable
              craftsmanship. Our products are designed to meet global standards across
              electrical, plumbing, automotive, and engineering industries.
            </p>
            <p>
              With years of manufacturing expertise, we focus on precision, durability, and
              innovation to provide trusted brass products for industries worldwide.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">75+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Products Developed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Countries Reached</span>
            </div>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="about-image-container">
          <img
            src="/images/about_us_image.png"
            alt="Jupiter Manufacturing Facility"
            className="about-image"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
