import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">Doctor Finder</div>
      <div className="links">
        <Link to="/">Home</Link> {/* Link to Home page */}
        <Link to="/login">Login</Link> {/* Link to Login page */}
        <Link to="/register">Register</Link> {/* Link to Register page */}
        <Link to="/about">About</Link> {/* Link to About page */}
      </div>
    </div>
  );
};

export default Header;
