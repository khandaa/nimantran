import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo/nimantran-logo.png" alt="Nimantran" />
          <span>Nimantran</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Log In</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </header>
  );
}

export default Header;
