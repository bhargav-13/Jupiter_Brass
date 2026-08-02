import React from "react";
import "./Commitment.css";

const commitmentItems = [
  { label: "Precision" },
  { label: "Quality" },
  { label: "Reliability" },
  { label: "Innovation" },
];

const Commitment = () => {
  return (
    <section id="commitment" className="section commitment">
      <div className="container">
        <div className="commitment-wrapper">
          {/* Left Content */}
          <div className="commitment-content">
            {/* <h2 className="commitment-title">Our Commitment</h2> */}

            <div className="commitment-desc-group">
              <p className="commitment-desc">
                Established in 1994 in Jamnagar, Gujarat, India, we are a trusted
                manufacturer of precision-engineered brass and metal components
                with over three decades of manufacturing excellence. From Brass
                Cable Glands to precision turned parts, CNC machined components,
                inserts, fasteners, fittings, and custom-engineered solutions, we
                serve diverse industrial applications worldwide. Equipped with
                advanced CNC technology and a modern 8,500 sq. ft. manufacturing
                facility, we deliver products in Brass, Copper, Stainless Steel,
                Mild Steel, Aluminium, and other specialized materials.
              </p>

              <p className="commitment-desc">
                Our products are exported across the USA, Europe, the Middle
                East, and other global markets, meeting the highest international
                quality standards. As an ISO 9001:2015 Certified and MSME
                Registered manufacturer, we ensure certified raw materials,
                complete traceability, stringent quality inspections, and
                reliable on-time delivery. Driven by precision engineering,
                uncompromising quality, competitive pricing, and long-term
                customer relationships, we continue to be a trusted OEM
                manufacturing partner worldwide.
              </p>
            </div>

            <div className="commitment-bottom-layout">
              {/* Cards / Items list */}
              <div className="commitment-items">
                ~Mr. JayShukh Vasoya (Founder)
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
              src="/images/jaysukh.png"
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
