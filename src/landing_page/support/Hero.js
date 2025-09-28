import React, { useState } from "react";
import { Link } from "react-router-dom";


function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const quickLinks = [
    "Track account opening",
    "Track segment activation", 
    "Intraday margins",
    "Kite user manual"
  ];

  const featuredLinks = [
    "Current Takeovers and Delisting - January 2024",
    "Latest Intraday leverages - MIS & CO"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <section className="support-hero-section">
      <div className="support-hero-container">
        <div className="support-hero-content">
          {/* Left Section */}
          <div className="support-main">
            <div className="support-breadcrumb">
              <span className="breadcrumb-text">Support Portal</span>
            </div>
            
            <h1 className="support-title">
              Search for an answer or browse help topics <br /> to create a ticket
            </h1>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="search-container">
              <div className="search-box">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                />
                <button type="submit" className="search-button">
                  <span className="search-icon">🔍</span>
                  Search
                </button>
              </div>
            </form>

            {/* Quick Links */}
            <div className="quick-links">
              <span className="links-label">Quick links:</span>
              <div className="links-container">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={`/support/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="quick-link"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="support-sidebar">
            <div className="sidebar-section">
              <Link to="/support/tickets" className="track-tickets">
                <span className="track-icon">📋</span>
                Track Tickets
              </Link>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Featured</h3>
              <ul className="featured-list">
                {featuredLinks.map((link, index) => (
                  <li key={index}>
                    <Link to="/support/featured" className="featured-link">
                      <span className="featured-badge">New</span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Stats */}
            <div className="support-stats">
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2min</span>
                <span className="stat-label">Avg. response</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;