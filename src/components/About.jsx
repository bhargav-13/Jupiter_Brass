import React from 'react';
import './About.css';

const stats = [
  { value: 32, label: 'Years of Experience', sign: '+' },
  { value: 98, label: 'Happy Clients', sign: '%' },
  { value: 150, label: 'Products Developed', sign: '+' },
  { value: 5, label: 'Countries Reached', sign: '+' },
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">

        <div className="section-heading">
          <h2 className="section-title">ABOUT US</h2>
        </div>

        <div className="about-top-row">
          <div className="about-text">
            <p>
              Jupiter Brass Industries is a trusted Indian manufacturer of precision brass turned parts, CNC machined components, cable glands, fittings, fasteners, inserts, and custom-engineered metal components. Since 1994, we have been delivering high-quality, precision-engineered solutions to OEMs and industrial customers worldwide through advanced manufacturing, strict quality standards, competitive pricing, and reliable on-time delivery. From standard products to fully customized components, we provide end-to-end manufacturing support from prototyping to large-scale production.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <span
                  className="stat-number"
                  data-count={stat.value}
                  data-suffix={stat.sign}
                  aria-label={`${stat.value}${stat.sign}`}
                >
                  0+
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

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
