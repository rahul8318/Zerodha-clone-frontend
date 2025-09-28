import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function OpenAccount() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleCTAClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  const features = [
    { icon: "📱", text: "Modern platforms and apps" },
    { icon: "💰", text: "₹0 equity delivery investments" },
    { icon: "⚡", text: "Flat ₹20 intraday and F&O trades" }
  ];

  if (loading) {
    return (
      <section className="open-account-section">
        <div className="open-account-container">
          <div className="loading-spinner">Loading...</div>
        </div>
      </section>
    );
  }

  return ( 
    <section className="open-account-section">
      <div className="open-account-container">
        <div className="open-account-content">
          <h1 className="account-title">
            {user ? `Welcome back, ${user.username}!` : "Open a Zerodha account"}
          </h1>
          
          <p className="account-subtitle">
            {user 
              ? "Ready to continue your investment journey with India's largest broker?"
              : "Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
            }
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-text">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Conditional CTA */}
          <div className="account-cta">
            {user ? (
              <div className="user-cta">
                <button onClick={handleCTAClick} className="cta-button primary">
                  Go to Dashboard →
                </button>
                <div className="secondary-links">
                  <Link to="/products" className="cta-link">
                    Explore Products
                  </Link>
                  <Link to="/support" className="cta-link">
                    Get Help
                  </Link>
                </div>
              </div>
            ) : (
              <div className="guest-cta">
                <button onClick={handleCTAClick} className="cta-button primary">
                  Sign up for free
                </button>
                <div className="secondary-links">
                  <Link to="/login" className="cta-link">
                    Already have an account? Log in
                  </Link>
                  <Link to="/pricing" className="cta-link">
                    View pricing →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-item">
              <span className="trust-number">2M+</span>
              <span className="trust-label">Happy clients</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">15%</span>
              <span className="trust-label">Market volume</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">₹0</span>
              <span className="trust-label">Account fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}

export default OpenAccount;