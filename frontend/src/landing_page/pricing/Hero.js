import React from 'react';

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-3 p-sm-4 p-md-5 mt-3 mt-md-5 border-bottom text-center">
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>Pricing</h1>
        <p className="text-muted mt-3" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="row p-3 p-sm-4 p-md-5 mt-3 mt-md-5">
        {/* Card 1 - Free Equity */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-4 text-center">
          <div style={{ 
            fontSize: 'clamp(3rem, 8vw, 4rem)',
            fontWeight: 'bold',
            color: '#387ed1',
            marginBottom: '15px'
          }}>
            ₹0
          </div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '15px' }}>
            Free equity delivery
          </h2>
          <p className="text-muted" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: '1.6' }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Card 2 - Intraday */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-4 text-center">
          <div style={{ 
            fontSize: 'clamp(3rem, 8vw, 4rem)',
            fontWeight: 'bold',
            color: '#387ed1',
            marginBottom: '15px'
          }}>
            ₹20
          </div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '15px' }}>
            Intraday and F&O trades
          </h2>
          <p className="text-muted" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: '1.6' }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Card 3 - Free MF */}
        <div className="col-12 col-sm-6 col-lg-4 p-3 p-md-4 mb-4 text-center">
          <div style={{ 
            fontSize: 'clamp(3rem, 8vw, 4rem)',
            fontWeight: 'bold',
            color: '#387ed1',
            marginBottom: '15px'
          }}>
            ₹0
          </div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '15px' }}>
            Free direct MF
          </h2>
          <p className="text-muted" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: '1.6' }}>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;