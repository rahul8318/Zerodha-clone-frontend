import React from "react";
import { Link } from "react-router-dom";


function Hero() {
  const stats = [
    { number: "1.6+", label: "Crore clients" },
    { number: "15%", label: "Retail trading volume" },
    { number: "2010", label: "Founded year" },
    { number: "Billions", label: "Orders annually" }
  ];

  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        {/* Main Heading */}
        <div className="about-main-heading">
          <h1 className="about-title">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <div className="about-text-column">
            <p className="about-paragraph">
              We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
            </p>
            <p className="about-paragraph">
              Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p>
            <p className="about-paragraph">
              Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          <div className="about-text-column">
            <p className="about-paragraph">
              In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
            </p>
            <p className="about-paragraph">
              <Link to="/rainmatter" className="about-link">
                Rainmatter
              </Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
            </p>
            <p className="about-paragraph">
              And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Links */}
        <div className="about-cta">
          <Link to="/blog" className="cta-link">
            Read our blog →
          </Link>
          <Link to="/media" className="cta-link">
            Media coverage →
          </Link>
          <Link to="/philosophy" className="cta-link">
            Our philosophy →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;