



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; 
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 
  const cartItemCount = useSelector((state) => state.cart.items.length);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <h2 className="logo-text">Shopify</h2>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Menu Links */}
      <div className={`navbar-links-container ${menuOpen ? "active" : ""}`}>
        {/* Home link */}
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/cart" className="go-to-cart-btn">
          Go to Cart
          {cartItemCount > 0 && (
            <span className="cart-item-count">{cartItemCount}</span>
          )}
        </Link>

        {isLoggedIn ? (
          <>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

