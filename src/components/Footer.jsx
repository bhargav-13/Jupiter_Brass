import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo mb-20">
              <span className="logo-icon bg-primary text-white">J</span>
              <span className="logo-text">JUPITER</span>
            </div>
            <p className="footer-desc">
              Leading the industry in precision engineered brass components. 
              Delivering excellence through quality, innovation, and dedicated service.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#quality">Quality</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li><strong>Email:</strong> info@jupiterbrass.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> 123 Industrial Parkway, Manufacturing District, TX 75001</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jupiter Precision Brass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
