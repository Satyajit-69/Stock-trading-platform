import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 mb-10 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg border-gray-200/50' : 'bg-white/80 backdrop-blur-lg border-gray-200/50'
      }`}
      style={{ minHeight: '3.5rem' }}
    >
      <div className="container mx-auto px-3 md:px-12">
        <div className="flex items-center justify-between" style={{ minHeight: '3.5rem' }}>
          {/* Logo - Clickable to Home */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Stock<span className="text-blue-600">mates</span>
            </span>
          </Link>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden border-0 bg-transparent p-2"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i 
              className="fa-solid fa-bars" 
              style={{ fontSize: '1.5rem', color: '#666' }}
            ></i>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/signup" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              style={{ textDecoration: 'none', fontSize: '0.9rem' }}
            >
              Sign up
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              style={{ textDecoration: 'none', fontSize: '0.9rem' }}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              style={{ textDecoration: 'none', fontSize: '0.9rem' }}
            >
              Products
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              style={{ textDecoration: 'none', fontSize: '0.9rem' }}
            >
              Pricing
            </Link>
            <Link 
              to="/support" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              style={{ textDecoration: 'none', fontSize: '0.9rem' }}
            >
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-3">
            <div className="flex flex-col items-center gap-3 py-4">
              <Link 
                to="/signup" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-semibold w-full text-center py-2 border-b border-gray-200"
                style={{ textDecoration: 'none', fontSize: '1rem' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign up
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-semibold w-full text-center py-2 border-b border-gray-200"
                style={{ textDecoration: 'none', fontSize: '1rem' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-semibold w-full text-center py-2 border-b border-gray-200"
                style={{ textDecoration: 'none', fontSize: '1rem' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-semibold w-full text-center py-2 border-b border-gray-200"
                style={{ textDecoration: 'none', fontSize: '1rem' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/support" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-semibold w-full text-center py-2"
                style={{ textDecoration: 'none', fontSize: '1rem' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;