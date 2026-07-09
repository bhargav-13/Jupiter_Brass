import React from 'react';
import './QualityCertification.css';

const QualityCertification = () => {
  return (
    <section id="quality-certification" className="section quality-certification">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">
            Certified Quality Management<br />System
          </h2>
        </div>

        <div className="quality-certification-grid">
          <div className="quality-certification-image-box">
            <img
              src="/images/certificate.png"
              alt="ISO 9001:2015 Certificate of Registration — Jupiter Brass Industries"
              className="quality-certification-image"
              loading="lazy"
            />
          </div>
          <div className="quality-certification-image-box">
            <img
              src="/images/certificate.png"
              alt="ISO 9001:2015 Certificate of Registration — Jupiter Brass Industries"
              className="quality-certification-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCertification;
