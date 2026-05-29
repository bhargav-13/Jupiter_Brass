import React from 'react';
import './About.css';

const stats = [
  { value: 2, label: 'Years of Experience' },
  { value: 75, label: 'Happy Clients' },
  { value: 150, label: 'Products Developed' },
  { value: 5, label: 'Countries Reached' },
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
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <span
                  className="stat-number"
                  data-count={stat.value}
                  data-suffix="+"
                  aria-label={`${stat.value}+`}
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
