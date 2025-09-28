import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Hero() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/current-user", {
        method: "GET",
        credentials: "include",
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.user || null);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const pricingFeatures = [
    {
      icon: "media/images/pricing0.svg",
      title: "Free equity delivery",
      description: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
    },
    {
      icon: "media/images/other-trades.svg",
      title: "Intraday and F&O trades",
      description: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
    },
    {
      icon: "media/images/pricing0.svg",
      title: "Free direct MF",
      description: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
    }
  ];

  if (loading) {
    return (
      <section className="pricing-hero-section">
        <div className="pricing-container">
          <div className="loading-spinner">Loading pricing information...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="pricing-hero-section">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h1 className="pricing-title">Charges</h1>
          <p className="pricing-subtitle">
            List of all charges and taxes
          </p>
        </div>

        {/* Pricing Features Grid */}
        <div className="pricing-features-grid">
          {pricingFeatures.map((feature, index) => (
            <div key={index} className="pricing-feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Conditional CTA based on authentication */}
        <div className="pricing-cta">
          {user ? (
            <div className="user-pricing-cta">
              <p className="welcome-message">Welcome back, {user.username}! Ready to start trading?</p>
              <div className="cta-buttons">
                <Link to="/products" className="cta-button primary">
                  Explore Trading Platforms →
                </Link>
                <Link to="/support" className="cta-button secondary">
                  Need Help?
                </Link>
              </div>
            </div>
          ) : (
            <div className="guest-pricing-cta">
              <p className="cta-text">Ready to experience zero brokerage?</p>
              <div className="cta-buttons">
                <Link to="/signup" className="cta-button primary">
                  Sign up for free
                </Link>
                <Link to="/login" className="cta-button secondary">
                  Already have an account? Log in
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;