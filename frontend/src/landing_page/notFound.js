import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <div className="col-12 col-md-8 col-lg-6 text-center p-4">
          <h1 style={{ 
            fontSize: 'clamp(4rem, 15vw, 8rem)',
            fontWeight: 'bold',
            color: '#387ed1',
            marginBottom: '20px'
          }}>
            404
          </h1>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '20px',
            color: '#424242'
          }}>
            Page Not Found
          </h2>
          <p className="text-muted mb-4" style={{ 
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            lineHeight: '1.6'
          }}>
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <button 
              className="btn btn-primary px-4 py-2"
              style={{ 
                backgroundColor: '#387ed1',
                border: 'none',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }}
            >
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;