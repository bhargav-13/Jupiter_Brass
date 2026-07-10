import React from 'react';
import './ParallaxSection.css';

const WHATSAPP_NUMBER = '918141418990';
const WHATSAPP_MESSAGE = "Hi Jupiter Brass Industries, I'd like to start a new project. Could you help me with a quote?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const ParallaxSection = () => {
  return (
    <section className="parallax-section">
      <div className="parallax-content">
        <h2>
          BUILD SOMETHING TOGETHER<br />
          LET'S START YOUR NEXT PROJECT
        </h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="parallax-btn"
        >
          START YOUR PROJECT TODAY
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;
