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
              ZED Bronze Certified<br />
              Manufacturing Company
            </h2>

            <p className="certification-description">
              We are proud to be certified under the MSME Sustainable (ZED)
              Certification Scheme by the Ministry of Micro, Small &amp; Medium
              Enterprises, Government of India — recognising our commitment to
              Zero Defect, Zero Effect manufacturing across our premium brass
              components and industrial solutions.
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
              src="/images/certificate2.png"
              alt="ZED Bronze Certificate under MSME Sustainable (ZED) Certification Scheme — Jupiter Brass Industries"
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
