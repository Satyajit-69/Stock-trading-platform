import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top" style={{ height: 'auto', minHeight: '4.5rem' }}>
      <div className="container-fluid px-3 px-md-5">
        {/* Logo - Clickable to Home */}
        <Link className="navbar-brand" to="/">
          <img 
            src="assets/logo.svg" 
            alt="Logo" 
            style={{ 
              height: '24px',
              width: '20%'
            }}
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" style={{ fontSize: '1.5rem', color: '#666' }}></i>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-links d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-4 mt-3 mt-lg-0">
            <Link to="/signup" style={{ textDecoration: 'none', color: '#666', fontSize: '1rem' }}>
              Sign up
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#666', fontSize: '1rem' }}>
              About
            </Link>
            <Link to="/products" style={{ textDecoration: 'none', color: '#666', fontSize: '1rem' }}>
              Products
            </Link>
            <Link to="/pricing" style={{ textDecoration: 'none', color: '#666', fontSize: '1rem' }}>
              Pricing
            </Link>
            <Link to="/support" style={{ textDecoration: 'none', color: '#666', fontSize: '1rem' }}>
              Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;