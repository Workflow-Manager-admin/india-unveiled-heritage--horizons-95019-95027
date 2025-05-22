import React from 'react';

// PUBLIC_INTERFACE
const Footer = () => {
  /**
   * Footer component for India Unveiled blog
   * Contains links and copyright information
   */
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>India Unveiled: Heritage & Horizons</h3>
            <p>A comprehensive blog exploring the rich culture, history, diversity, and modern developments of India.</p>
          </div>
          
          <div className="footer-section">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li><a href="#culture">Cultural Heritage</a></li>
              <li><a href="#history">Historical Landmarks</a></li>
              <li><a href="#modern">Modern Developments</a></li>
              <li><a href="#traditions">Traditions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contribute">Contribute</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} India Unveiled: Heritage & Horizons. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
