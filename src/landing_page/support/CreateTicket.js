import React from "react";
import { Link } from "react-router-dom";


function CreateTicket() {
  const ticketCategories = [
    {
      icon: "➕",
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening", 
        "Company/Partnership/HUF",
        "NRI Account",
        "Charges",
        "3-in-1 Account"
      ]
    },
    {
      icon: "👤",
      title: "Your Zerodha Account",
      links: [
        "Login credentials",
        "Update mobile/email",
        "Change password",
        "Close account"
      ]
    },
    {
      icon: "💰",
      title: "Funds",
      links: [
        "Add funds",
        "Withdraw funds",
        "Fund transfer charges",
        "UPI Payments"
      ]
    },
    {
      icon: "📈",
      title: "Trading & Markets",
      links: [
        "Equity trading",
        "F&O",
        "Commodity",
        "Currency"
      ]
    },
    {
      icon: "💻",
      title: "Kite (Platform)",
      links: [
        "Kite web",
        "Kite mobile", 
        "Charting",
        "Orders & Positions"
      ]
    },
    {
      icon: "🛡️",
      title: "Security",
      links: [
        "2FA setup",
        "Suspicious login",
        "Forgot password",
        "Phishing alert"
      ]
    }
  ];

  return (
    <section className="ticket-section">
      <div className="ticket-container">
        {/* Heading */}
        <div className="ticket-header">
          <h1 className="ticket-title">
            To create a ticket, select a relevant topic
          </h1>
          <p className="ticket-subtitle">
            Get help quickly by choosing the category that best matches your issue
          </p>
        </div>

        {/* Ticket Categories Grid */}
        <div className="ticket-grid">
          {ticketCategories.map((category, index) => (
            <div key={index} className="ticket-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="category-links">
                {category.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex}
                    to={`/support/ticket/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="ticket-link"
                  >
                    {link}
                    <span className="link-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help Section */}
        <div className="quick-help">
          <div className="help-card">
            <div className="help-icon">💬</div>
            <div className="help-content">
              <h4 className="help-title">Can't find what you're looking for?</h4>
              <p className="help-description">
                Contact our support team directly for personalized assistance
              </p>
              <Link to="/support/contact" className="help-button">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;