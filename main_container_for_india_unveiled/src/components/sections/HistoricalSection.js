import React from 'react';

// PUBLIC_INTERFACE
const HistoricalSection = () => {
  /**
   * Historical Section component for India Unveiled blog
   * Showcases important historical periods and landmarks
   */
  return (
    <section id="history" className="section historical-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Historical Landmarks</h2>
          <p className="section-subtitle">Journey through time and explore India's rich historical legacy</p>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">3300–1300 BCE</div>
            <div className="timeline-content">
              <h3>Indus Valley Civilization</h3>
              <p>One of the world's earliest urban civilizations with sophisticated city planning and engineering...</p>
              <div className="timeline-img placeholder-img"></div>
              <a href="#" className="read-more">Discover More</a>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">322–185 BCE</div>
            <div className="timeline-content">
              <h3>Mauryan Empire</h3>
              <p>The first empire to unify most of the Indian subcontinent under one administration...</p>
              <div className="timeline-img placeholder-img"></div>
              <a href="#" className="read-more">Discover More</a>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">1526–1857 CE</div>
            <div className="timeline-content">
              <h3>Mughal Era</h3>
              <p>A period of remarkable cultural and artistic achievement that produced monuments like the Taj Mahal...</p>
              <div className="timeline-img placeholder-img"></div>
              <a href="#" className="read-more">Discover More</a>
            </div>
          </div>
        </div>
        
        <div className="section-footer">
          <button className="btn">Explore Full Timeline</button>
        </div>
      </div>
    </section>
  );
};

export default HistoricalSection;
