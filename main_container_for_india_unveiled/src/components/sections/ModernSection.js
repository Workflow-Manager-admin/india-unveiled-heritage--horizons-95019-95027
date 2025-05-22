import React from 'react';

// PUBLIC_INTERFACE
const ModernSection = () => {
  /**
   * Modern Section component for India Unveiled blog
   * Showcases contemporary India's achievements and developments
   */
  return (
    <section id="modern" className="section modern-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Modern Developments</h2>
          <p className="section-subtitle">Exploring contemporary India's innovations and progress</p>
        </div>
        
        <div className="cards-container">
          <div className="card">
            <div className="card-img placeholder-img"></div>
            <div className="card-content">
              <h3>India's Tech Revolution</h3>
              <p>From IT services powerhouse to startup hub, India's technology sector continues to transform...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-img placeholder-img"></div>
            <div className="card-content">
              <h3>Space Exploration Achievements</h3>
              <p>ISRO's remarkable journey and achievements in space research and satellite technology...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-img placeholder-img"></div>
            <div className="card-content">
              <h3>Sustainable Development Initiatives</h3>
              <p>Innovative approaches to balancing growth with environmental protection and social equity...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-img placeholder-img"></div>
            <div className="card-content">
              <h3>Arts & Entertainment Renaissance</h3>
              <p>The global rise of Indian cinema, music, and contemporary art forms...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        </div>
        
        <div className="section-footer">
          <button className="btn">Discover Modern India</button>
        </div>
      </div>
    </section>
  );
};

export default ModernSection;
