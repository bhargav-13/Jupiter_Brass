import React from 'react';
import './Certification.css';

const scopeTags = [
  'Battery Terminals',
  'Cable Glands',
  'Cable Gland Wiring Accessories',
  'Electrical & Electronic Parts and Fittings',
  'Furniture Fittings',
  'Bath Fittings & Accessories',
  'Hardware Products',
];

const Certification = () => {
  return (
    <section id="certification" className="section certification">
      <div className="container">
        <div className="certification-wrapper">
          {/* Left Content */}
          <div className="certification-content">
            <h2 className="certification-title">
              ISO 9001:2015 Certified<br />
              Manufacturing Company
            </h2>

            <p className="certification-description">
              We are proud to be an ISO 9001:2015 certified company, recognized
              for maintaining international quality management standards in the
              manufacturing and supply of premium brass components and industrial
              solutions.
            </p>

            <h3 className="certification-scope-title">
              Certified Scope of<br />
              Manufacturing
            </h3>

            <div className="certification-tags">
              {scopeTags.map((tag, index) => (
                <span className="certification-tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Certificate Image */}
          <div className="certification-image-box">
            <img
              src="/images/certificate.jpg"
              alt="ISO 9001:2015 Certificate of Registration — Jupiter Brass Industries"
              className="certification-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
