import React from 'react';

function Brokerage() {
  return (
    <div className="container">
      {/* Brokerage Calculator Section */}
      <div className="row p-3 p-md-5 mt-3 mt-md-5 border-top">
        <div className="col-12 col-lg-8 p-3 p-md-4 mb-4 mb-lg-0">
          <a href="#" style={{ textDecoration: 'none' }}>
            <h3 className="mb-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', color: '#387ed1' }}>
              Brokerage calculator
            </h3>
          </a>
          <ul className="text-muted ps-3" style={{ 
            lineHeight: '2',
            fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
            textAlign: 'left'
          }}>
            <li className="mb-3">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li className="mb-3">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-3">
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-3">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-3">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-3">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-4 p-3 p-md-4 text-center text-lg-start">
          <a href="#" style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', color: '#387ed1' }}>
              List of charges
            </h3>
          </a>
        </div>
      </div>

      {/* Charges Explained Section */}
      <div className="row p-3 p-md-5 mt-3 mt-md-5">
        <h2 className="mb-4 mb-md-5 text-center" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
          Charges explained
        </h2>
        
        {/* Charge Item 1 */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mb-4">
          <h4 className="text-primary mb-3" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>
            Securities/Commodities transaction tax
          </h4>
          <p className="text-muted" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.8' }}>
            Tax by the government when you buy and sell shares. It is 0.1% on both buy and sell sides for equity delivery. Only on selling side for equity intraday, F&O, and currency trading.
          </p>
        </div>

        {/* Charge Item 2 */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mb-4">
          <h4 className="text-primary mb-3" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>
            Transaction/Turnover Charges
          </h4>
          <p className="text-muted" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.8' }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your transactions. NSE charges 0.00325% on equity, 0.002% on F&O.
          </p>
        </div>

        {/* Charge Item 3 */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mb-4">
          <h4 className="text-primary mb-3" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>
            GST
          </h4>
          <p className="text-muted" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.8' }}>
            Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges).
          </p>
        </div>

        {/* Charge Item 4 */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mb-4">
          <h4 className="text-primary mb-3" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>
            SEBI Charges
          </h4>
          <p className="text-muted" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.8' }}>
            Charged at ₹10 per crore by Securities and Exchange Board of India for regulating the markets.
          </p>
        </div>

        {/* Charge Item 5 */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mb-4">
          <h4 className="text-primary mb-3" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>
            DP (Depository participant) charges
          </h4>
          <p className="text-muted" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.8' }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + 18% GST), on the day you sell shares, irrespective of quantity.
          </p>
        </div>

        {/* Charge Item 6 */}
        <div className="col-12 col-md-6 col-lg-4 p-3 mb-4">
          <h4 className="text-primary mb-3" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>
            Stamp charges
          </h4>
          <p className="text-muted" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.8' }}>
            Charged by the Government of India as per the Indian Stamp Act. 0.015% or ₹1500 (whichever is lower) on buy side for delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;