import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";


function Navbar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication status on component mount and route changes
  useEffect(() => {
    checkAuthStatus();
  }, [location.pathname]);

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

  // Logout handler
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        setUser(null);
        setIsMenuOpen(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Don't show auth links on auth pages to avoid confusion
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav className="zerodha-navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link className="nav-brand" to="/" onClick={closeMenu}>
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            height="20"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <div className="nav-links">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
            <Link className="nav-link" to="/support">
              Support
            </Link>
          </div>

          <div className="nav-auth-section">
            {!loading && (
              <>
                {user ? (
                  // User is logged in
                  <div className="user-section">
                    <span className="user-welcome">Welcome, {user.username}</span>
                    <button className="logout-btn" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                ) : (
                  // User is not logged in - hide auth links on auth pages
                  !isAuthPage && (
                    <div className="auth-buttons">
                      <Link className="auth-link signup-link" to="/signup">
                        Sign up
                      </Link>
                      <Link className="auth-link login-link" to="/login">
                        Log in
                      </Link>
                    </div>
                  )
                )}
                
                {/* Search Icon - Always visible */}
                <Link className="nav-search" to="/search">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                    />
                  </svg>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-links">
            <Link className="mobile-link" to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link className="mobile-link" to="/products" onClick={closeMenu}>
              Products
            </Link>
            <Link className="mobile-link" to="/pricing" onClick={closeMenu}>
              Pricing
            </Link>
            <Link className="mobile-link" to="/support" onClick={closeMenu}>
              Support
            </Link>
            <Link className="mobile-link" to="/search" onClick={closeMenu}>
              Search
            </Link>

            {/* Mobile Auth Section */}
            {!loading && (
              user ? (
                <div className="mobile-auth">
                  <div className="mobile-user">
                    <span>Welcome, {user.username}</span>
                    <button className="mobile-logout" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                !isAuthPage && (
                  <div className="mobile-auth">
                    <Link className="mobile-auth-link" to="/signup" onClick={closeMenu}>
                      Sign up
                    </Link>
                    <Link className="mobile-auth-link" to="/login" onClick={closeMenu}>
                      Log in
                    </Link>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;