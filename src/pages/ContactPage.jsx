import React from 'react';
import './ProductPage.css';
import './ContactPage.css';

const MAP_LOCATION = {
  label: 'Jupiter Brass Industries, D.C, Shanker Tekri, RAW 84/1, G.I, Udyog Nagar, Jamnagar, Gujarat 361004',
  lat: 22.4721,
  lng: 70.0583,
};

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_LOCATION.label)}&ll=${MAP_LOCATION.lat},${MAP_LOCATION.lng}&z=17&hl=en&output=embed`;

const contactDetails = [
  {
    id: 'address',
    badge: 'CONTACT',
    label: 'ADDRESS',
    lines: [
      'RAW TYPE 84/1, G.I.D.C.,',
      'SHANKER TEKRI, UDYOGNAGAR,',
      'JAMNAGAR – 361004, GUJARAT,',
      'INDIA',
    ],
  },
  {
    id: 'email',
    badge: 'DIRECT E-MAIL',
    label: 'SEND US AN EMAIL',
    lines: ['INFO@JUPITERBRASS.COM', 'SALES@JUPITERBRASS.COM'],
  },
  {
    id: 'phone',
    badge: 'DIRECT CONTACT',
    label: 'CALL ME ON',
    lines: ['+91 94292 69395', '+91 81414 18990'],
  },
];

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-page">
      <section className="section contact-hero-section">
        <div className="container">
          <div className="section-heading quality-header contact-hero-header">
            <h1 className="section-title">GET IN TOUCH WITH OUR TEAM</h1>
            <p className="quality-subtitle contact-intro-text">
              WE ARE ALWAYS READY TO ASSIST YOU WITH PRODUCT INQUIRIES, CUSTOM BRASS
              COMPONENT MANUFACTURING, BULK ORDERS, AND INDUSTRIAL SOLUTIONS. WHETHER
              YOU NEED PRECISION BRASS PARTS OR CUSTOMIZED MANUFACTURING SUPPORT, OUR
              TEAM IS HERE TO HELP YOU WITH RELIABLE AND PROFESSIONAL SERVICE.
            </p>
          </div>

          <div className="contact-info-box">
            {contactDetails.map((item) => (
              <div className="contact-info-col" key={item.id}>
                <span className="contact-info-badge">{item.badge}</span>
                <h3 className="contact-info-label">{item.label}</h3>
                <div className="contact-info-content">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-form-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">START THE CONVERSATION</h2>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row contact-form-row-2">
              <div className="contact-field">
                <label htmlFor="firstName">FIRST NAME</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="contact-field">
                <label htmlFor="lastName">LAST NAME</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>

            <div className="contact-form-row contact-form-row-2">
              <div className="contact-field">
                <label htmlFor="contact">CONTACT</label>
                <input type="tel" id="contact" name="contact" />
              </div>
              <div className="contact-field">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="subject">SUBJECT</label>
                <input type="text" id="subject" name="subject" />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" rows="6" />
              </div>
            </div>

            <div className="contact-form-submit">
              <button type="submit" className="contact-submit-btn">
                SEND YOUR REQUIRMENT
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="section contact-map-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">FIND OUR LOCATION</h2>
          </div>

          <div className="contact-map-wrap">
            <iframe
              title={MAP_LOCATION.label}
              src={mapEmbedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map-pin" aria-hidden="true">
              <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 0C8.059 0 0 8.059 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.059 27.941 0 18 0z"
                  fill="#F31B1B"
                />
                <circle cx="18" cy="18" r="7" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
