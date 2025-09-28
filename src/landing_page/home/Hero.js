import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleCTAClick = () => {
    if (user) {
      navigate("/products");
    } else {
      navigate("/signup");
    }
  };

  if (loading) {
    return (
      <section className="hero-container">
        <div className="hero-content">
          <div className="loading-spinner">Loading...</div>
        </div>
      </section>
    );
  }

  return ( 
    <section className="hero-container">
      <div className="hero-content">
        <img 
          src="media/images/homeHero.png" 
          alt="Investment Platform Dashboard" 
          className="hero-image" 
        />
        
        <h1 className="hero-title">Invest in everything</h1>
        <p className="hero-subtitle">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        
        <div className="hero-cta">
          {user ? (
            <div className="user-hero-cta">
              <p className="welcome-back">Welcome back, {user.username}!</p>
              <button onClick={handleCTAClick} className="cta-button primary">
                Continue to Dashboard →
              </button>
              <Link to="/products" className="hero-link">
                Explore our products
              </Link>
            </div>
          ) : (
            <div className="guest-hero-cta">
              <button onClick={handleCTAClick} className="cta-button primary">
                Sign up for free
              </button>
              <div className="cta-links">
                <Link to="/login" className="hero-link">
                  Already have an account? Log in
                </Link>
                <Link to="/pricing" className="hero-link secondary">
                  View pricing →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-number">2M+</span>
            <span className="trust-label">Clients</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">15%</span>
            <span className="trust-label">Market share</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">₹0</span>
            <span className="trust-label">Equity delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;