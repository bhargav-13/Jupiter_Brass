import React, { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
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

const contactDetails = [
  {
    id: 'address',
    badge: 'CONTACT',
    label: 'ADDRESS',
    href: mapDirectionsUrl,
    external: true,
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
    lines: [
      { text: 'INFO@JUPITERMETAMECH.COM', href: gmailComposeUrl('info@jupitermetamech.com'), external: true },
      { text: 'SALES@JUPITERMETAMECH.COM', href: gmailComposeUrl('sales@jupitermetamech.com'), external: true },
    ],
  },
  {
    id: 'phone',
    badge: 'DIRECT CONTACT',
    label: 'CALL ME ON',
    lines: [
      { text: '+91 81414 18990', href: phoneDialUrl('+91 81414 18990') },
      { text: '+91 81414 18981', href: phoneDialUrl('+91 81414 18981') }
    ],
  },
];

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_LOCATION.label)}&ll=${MAP_LOCATION.lat},${MAP_LOCATION.lng}&z=17&hl=en&output=embed`;

const ContactPage = () => {
  const [fileName, setFileName] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    if (!executeRecaptcha) return;

    const token = await executeRecaptcha('contact_form');
    if (!token) {
      alert('reCAPTCHA verification failed. Please try again.');
      return;
    }
    // token is ready — include it in your form submission to the backend
  }, [executeRecaptcha]);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jupiter Brass Industries',
    image: `${SITE_URL}/hero.png`,
    telephone: '+91-94292-69395',
    email: 'info@jupiterbrass.com',
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

          <div className="contact-info-box">
            {contactDetails.map((item) => (
              <div className="contact-info-col" key={item.id}>
                <span className="contact-info-badge">{item.badge}</span>
                <h3 className="contact-info-label">{item.label}</h3>
                <div className="contact-info-content">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-info-link contact-info-link-block"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </a>
                  ) : (
                    item.lines.map((line) => (
                      <p key={line.text}>
                        <a
                          href={line.href}
                          className="contact-info-link"
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
