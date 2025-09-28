import React from "react";


function Awards() {
  const tradingFeaturesLeft = [
    "Futures and Options",
    "Commodity derivatives", 
    "Currency derivatives"
  ];

  const tradingFeaturesRight = [
    "Stocks & IPOs",
    "Direct mutual funds",
    "Bonds and Govt. Securities"
  ];

  return (
    <section className="awards-section">
      <div className="awards-container">
        <div className="awards-content">
          {/* Image Section */}
          <div className="awards-image">
            <img
              src="media/images/largestBroker.svg"
              alt="Largest Broker in India Award"
              className="award-img"
            />
          </div>

          {/* Content Section */}
          <div className="awards-info">
            <h1 className="awards-title">Largest Broker in India</h1>
            <p className="awards-description">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            
            {/* Features Grid */}
            <div className="features-grid">
              <div className="features-column">
                <ul className="features-list">
                  {tradingFeaturesLeft.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="features-column">
                <ul className="features-list">
                  {tradingFeaturesRight.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Press Logos */}
            <div className="press-logos">
              <img
                src="media/images/pressLogos.png"
                alt="As featured in Economic Times, Money Control, Business Standard, and other leading publications"
                className="press-img"
              />
              <p className="press-caption">As featured in leading financial publications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;