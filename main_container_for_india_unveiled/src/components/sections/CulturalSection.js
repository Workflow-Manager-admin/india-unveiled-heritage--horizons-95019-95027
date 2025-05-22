import React from 'react';

// PUBLIC_INTERFACE
const CulturalSection = () => {
  /**
   * Cultural Section component for India Unveiled blog
   * Showcases various aspects of Indian culture
   */
  return (
    <section id="culture" className="section cultural-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cultural Heritage</h2>
          <p className="section-subtitle">Discover the rich traditions and diverse cultural tapestry of India</p>
        </div>
        
        <div className="blog-posts">
          <div className="blog-post">
            <div className="blog-post-img placeholder-img"></div>
            <div className="blog-post-content">
              <h3>The Colorful Festivals of India</h3>
              <p>From Holi to Diwali, explore how festivals bring together communities across the subcontinent...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
          
          <div className="blog-post">
            <div className="blog-post-img placeholder-img"></div>
            <div className="blog-post-content">
              <h3>Classical Dance Forms</h3>
              <p>India's eight classical dance forms represent centuries of artistic traditions and regional expressions...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
          
          <div className="blog-post">
            <div className="blog-post-img placeholder-img"></div>
            <div className="blog-post-content">
              <h3>Culinary Journey Through India</h3>
              <p>Each region offers unique flavors and cooking techniques that tell stories of history and local resources...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        </div>
        
        <div className="section-footer">
          <button className="btn">Explore All Cultural Articles</button>
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;
