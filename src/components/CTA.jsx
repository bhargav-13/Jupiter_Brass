import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-content text-center">
          <div className="section-heading">
            <h2 className="section-title">READY FOR HIGH-PRECISION BRASS COMPONENTS?</h2>
          </div>
          <p className="cta-text">
            Partner with us for your next project and experience the Jupiter standard of excellence.
            Contact our engineering team today for a custom quote.
          </p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
