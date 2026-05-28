import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const points = [
    {
      id: 1,
      icon: '/images/Advanced Manufacturing.svg',
      title: 'Advanced Manufacturing',
      desc: 'We use modern machinery and advanced production techniques to ensure high precision and consistency in every product.'
    },
    {
      id: 2,
      icon: '/images/Strict Quality Control (2).svg',
      title: 'Strict Quality Control',
      desc: 'Each brass component undergoes detailed inspection and testing to maintain international quality standards.'
    },
    {
      id: 3,
      icon: '/images/Customized Solutions.svg',
      title: 'Customized Solutions',
      desc: 'We manufacture products according to custom drawings, specifications, and industrial requirements.'
    },
    {
      id: 4,
      icon: '/images/Timely Delivery.svg',
      title: 'Timely Delivery',
      desc: 'Our efficient production process and strong logistics support ensure on-time delivery for every order.'
    },
    {
      id: 5,
      icon: '/images/Experienced Team.svg',
      title: 'Experienced Team',
      desc: 'Our skilled engineers and technical experts are committed to delivering excellence in every project.'
    },
    {
      id: 6,
      icon: '/images/Competitive Pricing.svg',
      title: 'Competitive Pricing',
      desc: 'We provide cost-effective brass solutions with superior quality and precision.'
    }
  ];

  return (
    <section id="why-choose-us" className="section why-choose-us">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Why Choose Us</h2>
        </div>
        
        <div className="why-choose-us-banner">
          <img src="/images/why choose us.png" alt="Why Choose Us" className="why-choose-us-img" />
        </div>

        <div className="why-choose-us-grid">
          {points.map((point) => (
            <div key={point.id} className="why-choose-us-item">
              <div className="why-choose-us-icon-box">
                <img src={point.icon} alt={point.title} className="why-choose-us-icon" />
              </div>
              <h3 className="why-choose-us-item-title">{point.title}</h3>
              <p className="why-choose-us-item-desc">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
