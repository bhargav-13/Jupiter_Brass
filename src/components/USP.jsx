import React from 'react';
import './USP.css';

const USP = () => {
  const usps = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#F31B1B" strokeWidth="1.5">
          <rect x="4" y="8" width="32" height="24" rx="2" />
          <path d="M12 20h16M12 25h10" />
          <circle cx="20" cy="15" r="3" />
        </svg>
      ),
      title: 'Precision Manufacturing',
      desc: 'Every brass component is manufactured with advanced machinery and strict dimensional accuracy for flawless performance.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#F31B1B" strokeWidth="1.5">
          <path d="M20 4L4 14v16l16 6 16-6V14L20 4z" />
          <path d="M20 26V14M14 17l6-3 6 3" />
        </svg>
      ),
      title: 'Customized Solutions',
      desc: 'From standard parts to fully customized designs, we develop components tailored to your exact specifications.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#F31B1B" strokeWidth="1.5">
          <path d="M8 20l8 8 16-16" />
          <circle cx="20" cy="20" r="16" />
        </svg>
      ),
      title: 'Strict Quality Control',
      desc: 'Each product undergoes rigorous inspection and testing at every stage of manufacturing to maintain international quality standards.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#F31B1B" strokeWidth="1.5">
          <circle cx="20" cy="20" r="16" />
          <path d="M12 20h16M20 12v16" />
          <path d="M10 10l4 4M26 10l-4 4M10 30l4-4M26 30l-4-4" />
        </svg>
      ),
      title: 'Timely Global Delivery',
      desc: 'Our efficient production and logistics network ensures fast, reliable, and on-time delivery worldwide.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#F31B1B" strokeWidth="1.5">
          <circle cx="20" cy="14" r="6" />
          <path d="M10 34c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <path d="M28 14l4-4M28 14l4 2" />
        </svg>
      ),
      title: 'Experienced Technical Team',
      desc: 'With years of industry expertise, our skilled professionals provide dependable manufacturing solutions for diverse industrial applications.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#F31B1B" strokeWidth="1.5">
          <rect x="6" y="6" width="28" height="28" rx="4" />
          <path d="M14 20h12M20 14v12" />
          <circle cx="14" cy="14" r="2" fill="#F31B1B" stroke="none" />
          <circle cx="26" cy="14" r="2" fill="#F31B1B" stroke="none" />
          <circle cx="14" cy="26" r="2" fill="#F31B1B" stroke="none" />
          <circle cx="26" cy="26" r="2" fill="#F31B1B" stroke="none" />
        </svg>
      ),
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
      </div>

      <div className="usp-stats-bar">
        <div className="usp-stats-overlay"></div>
        <div className="container usp-stats-content">
          {stats.map((stat, index) => (
            <div className="usp-stat" key={index}>
              <span className="usp-stat-value">{stat.value}</span>
              <span className="usp-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
