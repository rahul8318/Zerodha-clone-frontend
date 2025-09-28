import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Univers() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const partnerPlatforms = [
    {
      logo: "media/images/smallcaseLogo.png",
      alt: "Smallcase",
      description: "Thematic Investment platform"
    },
    {
      logo: "media/images/streakLogo.png",
      alt: "Streak",
      description: "Algo & strategy platform"
    },
    {
      logo: "media/images/sensibullLogo.svg",
      alt: "Sensibull",
      description: "Option trading platform"
    },
    {
      logo: "media/images/zerodhaFundhouse.png",
      alt: "Zerodha Fundhouse",
      description: "Asset management platform"
    },
    {
      logo: "media/images/goldenpiLogo.png",
      alt: "GoldenPi",
      description: "Bonds trading platform"
    },
    {
      logo: "media/images/dittoLogo.png",
      alt: "Ditto",
      description: "Insurance"
    }
  ];

  // Check if user is logged in
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

  const handleExplorePlatforms = () => {
    if (user) {
      // User is logged in - navigate to products page or dashboard
      navigate("/products");
    } else {
      // User is not logged in - navigate to signup
      navigate("/signup");
    }
  };

  if (loading) {
    return (
      <section className="univers-section">
        <div className="univers-container">
          <div className="loading-spinner">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="univers-section">
      <div className="univers-container">
        {/* Header */}
        <div className="univers-header">
          <h2 className="univers-title">The Zerodha Universe</h2>
          <p className="univers-subtitle">
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="partner-grid">
          {partnerPlatforms.map((platform, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo">
                <img
                  src={platform.logo}
                  alt={platform.alt}
                  className="logo-image"
                />
              </div>
              <p className="partner-description">{platform.description}</p>
            </div>
          ))}
        </div>

        {/* Conditional CTA */}
        <div className="cta-section">
          {user ? (
            // User is logged in - show explore platforms button
            <div className="user-welcome-cta">
              <p className="welcome-message">Welcome back, {user.username}!</p>
              <button onClick={handleExplorePlatforms} className="explore-button">
                Explore Partner Platforms →
              </button>
            </div>
          ) : (
            // User is not logged in - show signup button
            <div className="signup-cta">
              <p className="cta-text">Ready to explore our ecosystem?</p>
              <Link to="/signup" className="signup-button">
                Sign up for free
              </Link>
              <p className="login-prompt">
                Already have an account? <Link to="/login" className="login-link">Log in</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Univers;