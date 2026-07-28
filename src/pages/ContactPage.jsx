import React, { useState, useCallback, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import SEO from '../components/SEO';
import { SITE_URL } from '../lib/seo';
import StructuredData from '../components/StructuredData';
import './ProductPage.css';
import './ContactPage.css';

const MAP_LOCATION = {
  label: 'Jupiter Brass Industries, D.C, Shanker Tekri, RAW 84/1, G.I, Udyog Nagar, Jamnagar, Gujarat 361004',
  lat: 22.4721,
  lng: 70.0583,
};

const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_LOCATION.label)}`;

const gmailComposeUrl = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email.toLowerCase())}`;

const phoneDialUrl = (phone) => `tel:${phone.replace(/\s+/g, '')}`;

const cardIcons = {
  pin: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10.6" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.6 3.8h3l1.5 3.8-2.1 1.4a11 11 0 0 0 4.9 4.9l1.4-2.1 3.8 1.5v3a1.6 1.6 0 0 1-1.7 1.6A14.6 14.6 0 0 1 5 5.5 1.6 1.6 0 0 1 6.6 3.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3.5l6.5 2.4v5.3c0 4-2.7 6.9-6.5 8.3-3.8-1.4-6.5-4.3-6.5-8.3V5.9L12 3.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9.2 12l2 2 3.6-3.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const contactCards = [
  {
    id: 'address',
    icon: 'pin',
    title: 'Address',
    href: mapDirectionsUrl,
    external: true,
    lines: [
      'RAW Type 84/1, G.I.D.C., Shanker Tekri,',
      'Udyognagar, Jamnagar – 361004,',
      'Gujarat, INDIA',
    ],
  },
  {
    id: 'sales',
    icon: 'phone',
    title: 'Sales',
    links: [
      { text: 'sales@jupitermetamech.com', href: gmailComposeUrl('sales@jupitermetamech.com'), external: true },
      { text: '+91 81414 18990', href: phoneDialUrl('+91 81414 18990') },
    ],
  },
  {
    id: 'quality',
    icon: 'badge',
    title: 'Quality',
    links: [
      { text: 'info@jupitermetamech.com', href: gmailComposeUrl('info@jupitermetamech.com'), external: true },
      { text: '+91 81414 18981', href: phoneDialUrl('+91 81414 18981') },
    ],
  },
];

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_LOCATION.label)}&ll=${MAP_LOCATION.lat},${MAP_LOCATION.lng}&z=17&hl=en&output=embed`;

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

const ContactPage = () => {
  const [fileName, setFileName] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    if (RECAPTCHA_SITE_KEY && !captchaToken) {
      alert('Please confirm you are not a robot.');
      return;
    }

    // captchaToken is ready — include it in your form submission to the backend.
    // Reset the widget so a fresh token is required for the next submission.
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  }, [captchaToken]);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jupiter Brass Industries',
    image: `${SITE_URL}/hero.png`,
    telephone: '+91-94292-69395',
    email: 'info@jupitermetamech.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'RAW Type 84/1, G.I.D.C., Shanker Tekri, Udyognagar',
      addressLocality: 'Jamnagar',
      addressRegion: 'Gujarat',
      postalCode: '361004',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: MAP_LOCATION.lat,
      longitude: MAP_LOCATION.lng,
    },
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us"
        description="Get in touch with Jupiter Brass Industries for brass component inquiries, custom manufacturing, bulk orders, and industrial solutions. Reach our team in Jamnagar, Gujarat."
        path="/contact"
      />
      <StructuredData id="local-business" data={localBusinessSchema} />
      <section className="section contact-hero-section">
        <div className="container">
          <div className="section-heading quality-header contact-hero-header">
            <h1 className="section-title">GET IN TOUCH WITH OUR TEAM</h1>
            <p className="quality-subtitle contact-intro-text">
              Our experienced team is available to discuss your project requirements, review technical
              drawings, and provide the most suitable manufacturing solution for your application.
            </p>
          </div>

          <div className="contact-cards">
            {contactCards.map((card) => (
              <div className="contact-card" key={card.id}>
                <span className="contact-card-icon">{cardIcons[card.icon]}</span>
                <h3 className="contact-card-title">{card.title}</h3>
                <div className="contact-card-body">
                  {card.href ? (
                    <a
                      href={card.href}
                      className="contact-card-link contact-card-link-block"
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noopener noreferrer' : undefined}
                    >
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </a>
                  ) : (
                    card.links.map((line) => (
                      <p key={line.text}>
                        <a
                          href={line.href}
                          className="contact-card-link"
                          target={line.external ? '_blank' : undefined}
                          rel={line.external ? 'noopener noreferrer' : undefined}
                        >
                          {line.text}
                        </a>
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="section contact-form-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">START THE CONVERSATION</h2>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row contact-form-row-2">
              <div className="contact-field">
                <label htmlFor="name">NAME*</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="companyName">COMPANY NAME*</label>
                <input type="text" id="companyName" name="companyName" required />
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
                <label htmlFor="attachment">ATTACHMENT SPACE</label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  accept=".pdf,.jpg,.jpeg"
                  className="contact-file-input"
                  onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
                />
                <label htmlFor="attachment" className="contact-file-field">
                  <span className="contact-file-field-text">
                    {fileName || 'UPLOAD PDF / JPG'}
                  </span>
                  <svg
                    className="contact-file-field-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16V4M12 4L7 9M12 4l5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" rows="6" />
              </div>
            </div>

            {RECAPTCHA_SITE_KEY && (
              <div className="contact-captcha-row">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
              </div>
            )}

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
