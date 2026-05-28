import React from 'react';
import './USP.css';

const USP = () => {
  const usps = [
    {
      icon: <img src="/images/Precision Manufacturing.svg" alt="Precision Manufacturing" className="usp-svg-icon" />,
      title: 'Precision Manufacturing',
      desc: 'Every brass component is manufactured with advanced machinery and strict dimensional accuracy for flawless performance.',
    },
    {
      icon: <img src="/images/Customized Solutions.svg" alt="Customized Solutions" className="usp-svg-icon" />,
      title: 'Customized Solutions',
      desc: 'From standard parts to fully customized designs, we develop components tailored to your exact specifications.',
    },
    {
      icon: <img src="/images/Strict Quality Control.svg" alt="Strict Quality Control" className="usp-svg-icon" />,
      title: 'Strict Quality Control',
      desc: 'Each product undergoes rigorous inspection and testing at every stage of manufacturing to maintain international quality standards.',
    },
    {
      icon: <img src="/images/Timely Global Delivery.svg" alt="Timely Global Delivery" className="usp-svg-icon" />,
      title: 'Timely Global Delivery',
      desc: 'Our efficient production and logistics network ensures fast, reliable, and on-time delivery worldwide.',
    },
    {
      icon: <img src="/images/Experienced Technical Team.svg" alt="Experienced Technical Team" className="usp-svg-icon" />,
      title: 'Experienced Technical Team',
      desc: 'With years of industry expertise, our skilled professionals provide dependable manufacturing solutions for diverse industrial applications.',
    },
    {
      icon: <img src="/images/Premium Quality Materials.svg" alt="Premium Quality Materials" className="usp-svg-icon" />,
      title: 'Premium Quality Materials',
      desc: 'We use high-grade brass raw materials to ensure superior strength, corrosion resistance, and long product life.',
    },
  ];

  const stats = [
    { value: '2Years+', label: 'Manufacturing Experience' },
    { value: '500+', label: 'Custom Brass Components Developed' },
    { value: '100%', label: 'Quality Checked Products' },
  ];

  return (
    <section className="section usp">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">OUR USP</h2>
        </div>

        <p className="usp-subtitle">
          WE COMBINE PRECISION MANUFACTURING, PREMIUM-QUALITY MATERIALS, AND ADVANCED ENGINEERING EXPERTISE TO DELIVER BRASS COMPONENTS THAT MEET THE HIGHEST INDUSTRIAL STANDARDS. OUR COMMITMENT TO QUALITY, CUSTOMIZATION, AND TIMELY DELIVERY MAKES US A TRUSTED PARTNER ACROSS GLOBAL INDUSTRIES.
        </p>

        <div className="usp-grid">
          {usps.map((usp, index) => (
            <div className="usp-card" key={index}>
              <div className="usp-icon">{usp.icon}</div>
              <h5 className="usp-title">{usp.title}</h5>
              <p className="usp-desc">{usp.desc}</p>
            </div>
          ))}
        </div>
        <div className="usp-stats-bar">
          <div className="usp-stats-overlay"></div>
          <div className="usp-stats-content">
            {stats.map((stat, index) => (
              <div className="usp-stat" key={index}>
                <span className="usp-stat-value">{stat.value}</span>
                <span className="usp-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
