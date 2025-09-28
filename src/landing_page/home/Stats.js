import React from "react";
import { Link } from "react-router-dom";


function Stats() {
  const trustPoints = [
    {
      title: "Customer-first always",
      description: "That’s why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India."
    },
    {
      title: "No spam or gimmicks",
      description: "No gimmicks, spam, “gamification”, or annoying push notifications. High quality apps that you use at your pace, the way you like."
    },
    {
      title: "The Zerodha universe",
      description: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services specific to your needs."
    },
    {
      title: "Do better with money",
      description: "With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions, but actively help you do better with your money."
    }
  ];

  const statsData = [
    { number: "1.6+", label: "Crore customers" },
    { number: "₹6L", label: "Crore investments" },
    { number: "15%", label: "Market volume" },
    { number: "30+", label: "Fintech partners" }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-content">
          {/* Left Column - Text Content */}
          <div className="stats-info">
            <h1 className="stats-main-title">Trust with confidence</h1>
            
            {/* Stats Grid */}
            <div className="stats-grid">
              {statsData.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="trust-points">
              {trustPoints.map((point, index) => (
                <div key={index} className="trust-point">
                  <h3 className="point-title">{point.title}</h3>
                  <p className="point-description">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Links */}
          <div className="stats-visual">
            <div className="ecosystem-image">
              <img
                src="media/images/ecosystem.png"
                alt="Zerodha Ecosystem - Trusted by millions of investors"
                className="eco-img"
              />
            </div>

            <div className="action-links">
              <Link to="/products" className="action-link">
                Explore our products
                <span className="arrow-icon">→</span>
              </Link>
              <Link to="/demo" className="action-link">
                Try Kite demo
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;