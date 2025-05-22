import React from 'react';

// PUBLIC_INTERFACE
const Header = () => {
  /**
   * Header component for India Unveiled blog
   * Contains the navigation bar and logo
   */
  return (
    <header className="navbar">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className="logo">
            <span className="logo-symbol">🏮</span> India Unveiled
          </div>
          <nav className="nav-links">
            <a href="#culture" className="nav-link">Culture</a>
            <a href="#history" className="nav-link">History</a>
            <a href="#modern" className="nav-link">Modern India</a>
            <a href="#explore" className="nav-link">Explore</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
