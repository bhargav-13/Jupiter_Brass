import React from 'react';
import './Quality.css';

const Quality = () => {
  return (
    <section id="quality" className="section quality">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">QUALITY COMMITMENT</h2>
        </div>

        <div className="quality-grid">
          <div className="quality-highlight">
            <h4>UNCOMPROMISING STANDARDS</h4>
            <p>
              We adhere to the highest international standards to ensure every brass 
              component leaving our facility meets exacting specifications.
            </p>
            <button className="btn btn-outline mt-20">View Certifications</button>
          </div>
          
          <div className="quality-points">
            <div className="q-point">
              <span className="q-icon">◆</span>
              <div>
                <h5>ISO 9001:2015 Certified</h5>
                <p>Rigorous quality management systems.</p>
              </div>
            </div>
            <div className="q-point">
              <span className="q-icon">◆</span>
              <div>
                <h5>Material Traceability</h5>
                <p>100% material grade verification.</p>
              </div>
            </div>
            <div className="q-point">
              <span className="q-icon">◆</span>
              <div>
                <h5>Dimensional Accuracy</h5>
                <p>Advanced optical sorting & CMM checks.</p>
              </div>
            </div>
            <div className="q-point">
              <span className="q-icon">◆</span>
              <div>
                <h5>Defect-Free Guarantee</h5>
                <p>Stringent final inspection protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
