import React from "react";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Zerodha Products</h1>
        <p className="hero-subtitle">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="hero-cta">
          Check out our <Link to="/products" className="hero-link">investment offerings →</Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;