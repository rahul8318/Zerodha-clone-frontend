import React from "react";
import { Link } from "react-router-dom";


function Pricing() {
  const pricingPlans = [
    {
      amount: "₹0",
      title: "Free equity delivery and direct mutual funds",
      description: "All equity delivery investments and direct mutual funds are completely free"
    },
    {
      amount: "₹20",
      title: "Intraday and F&O",
      description: "Flat ₹20 per executed order for intraday, futures, and options trades"
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-content">
          {/* Left Content */}
          <div className="pricing-info">
            <h2 className="pricing-main-title">Unbeatable pricing</h2>
            <p className="pricing-description">
              We pioneered the concept of discount broking and price transparency in India. 
              Flat fees and no hidden charges.
            </p>
            <Link to="/pricing" className="pricing-cta-link">
              See pricing
              <span className="arrow-icon">→</span>
            </Link>
          </div>

          {/* Spacer */}
          <div className="pricing-spacer"></div>

          {/* Right Content - Pricing Cards */}
          <div className="pricing-cards">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <div className="card-content">
                  <h3 className="plan-amount">{plan.amount}</h3>
                  <h4 className="plan-title">{plan.title}</h4>
                  <p className="plan-description">{plan.description}</p>
                </div>
                <div className="card-highlight"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;