import React from 'react';
import './USP.css';

const USP = () => {
  const usps = [
    { title: "Custom Manufacturing", desc: "Tailor-made components to your exact drawings and specifications." },
    { title: "Rapid Prototyping", desc: "Fast turnaround times for samples and prototypes to accelerate your development." },
    { title: "Global Shipping", desc: "Reliable logistics and export packaging for safe delivery worldwide." },
    { title: "Competitive Pricing", desc: "Optimized manufacturing processes allow us to offer cost-effective solutions." },
    { title: "Advanced Technology", desc: "Utilizing the latest CNC machinery and CAD/CAM software for precision." },
    { title: "Dedicated Support", desc: "A responsive team ready to assist you from inquiry to after-sales service." }
  ];

  return (
    <section className="section usp">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">OUR USP</h2>
          <p className="usp-intro mt-20">
            Why choose Jupiter? We blend traditional craftsmanship with modern technology 
            to deliver unparalleled value to our clients.
          </p>
        </div>

        <div className="usp-grid">
          {usps.map((usp, index) => (
            <div className="usp-card" key={index}>
              <div className="usp-icon-wrapper">
                <span className="usp-number">0{index + 1}</span>
              </div>
              <h5 className="usp-title">{usp.title}</h5>
              <p className="usp-desc">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
