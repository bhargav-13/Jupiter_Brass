import React from 'react';
import './Commitment.css';

const commitmentItems = [
  { label: 'Precision' },
  { label: 'Quality' },
  { label: 'Reliability' },
  { label: 'Innovation' },
];

const Commitment = () => {
  return (
    <section id="commitment" className="section commitment">
      <div className="container">
        <div className="commitment-wrapper">
          {/* Left Content */}
          <div className="commitment-content">
            {/* <h2 className="commitment-title">Our Commitment</h2> */}
            
            <p className="commitment-desc">
              We believe in delivering products that combine quality, reliability, and precision.
              Through continuous innovation and customer-focused manufacturing, we strive
              to provide brass components that exceed expectations and support industrial growth
              worldwide.
            </p>

            <div className="commitment-bottom-layout">
              {/* Cards / Items list */}
              <div className="commitment-items">
                {commitmentItems.map((item, index) => (
                  <div className="commitment-item" key={index}>
                    <img
                      src="/images/Our Capabilities_icon.png"
                      alt=""
                      className="commitment-item-icon"
                      aria-hidden="true"
                    />
                    <span className="commitment-item-text">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Round Logo */}
              <div className="commitment-badge-box">
                <img
                  src="/images/bg_hero.png"
                  alt="Jupiter Brass Badge"
                  className="commitment-badge"
                />
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="commitment-image-box">
            <img
              src="/images/father.png"
              alt="Our Team/Commitment Profile"
              className="commitment-profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
