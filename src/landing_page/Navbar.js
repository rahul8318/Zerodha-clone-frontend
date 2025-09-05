import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white zerodha-navbar">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            height="20"
            className="d-inline-block align-top"
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <span className="material-icons-outlined">search</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;