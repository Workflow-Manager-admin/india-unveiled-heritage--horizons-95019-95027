import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CulturalSection from './components/sections/CulturalSection';
import HistoricalSection from './components/sections/HistoricalSection';
import ModernSection from './components/sections/ModernSection';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main Container component for India Unveiled: Heritage & Horizons
   * Serves as the foundational layout for the blog
   */
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="subtitle">Journey Through the Subcontinent</div>
            
            <h1 className="title">India Unveiled: Heritage & Horizons</h1>
            
            <div className="description">
              Explore India's vibrant cultural heritage, rich historical tapestry, 
              and dynamic modern developments in this comprehensive journey across 
              the world's largest democracy.
            </div>
            
            <button className="btn btn-large">Start Exploring</button>
          </div>
        </div>

        {/* Featured Article */}
        <section className="featured-article">
          <div className="container">
            <div className="featured-content">
              <div className="featured-text">
                <div className="featured-label">Featured</div>
                <h2>Unity in Diversity: The Essence of Indian Identity</h2>
                <p>
                  With 28 states, 8 union territories, and over 19,500 languages and dialects, 
                  India represents one of the most diverse nations on Earth. Yet, amidst this 
                  diversity, a common cultural thread binds the nation together...
                </p>
                <button className="btn">Read Article</button>
              </div>
              <div className="featured-image placeholder-img"></div>
            </div>
          </div>
        </section>
        
        {/* Content Sections */}
        <CulturalSection />
        <HistoricalSection />
        <ModernSection />
        
        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-content">
              <h2>Stay Updated</h2>
              <p>Subscribe to receive the latest articles and updates on India's culture, history and modernity</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" className="newsletter-input" />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;