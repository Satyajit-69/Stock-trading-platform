import React from "react";

function Footer() {
  return (
    <footer className="border-top mt-5 py-3">
      <div className="container">

        {/* Top Row */}
        <div className="row gy-3">

          {/* Brand */}
          <div className="col-md-3 col-12">
            <div className="fw-bold fs-5 text-dark">
              Stock<span className="text-primary">mates</span>
            </div>
            <p className="text-muted small mt-2 mb-0">
              © 2010–2025 Stockmates Broking Ltd.
            </p>
          </div>

          {/* Account */}
          <div className="col-md-2 col-6">
            <p className="fw-semibold small mb-1">Account</p>
            <a href="./" className="d-block small text-muted">Open demat</a>
            <a href="./" className="d-block small text-muted">NRI account</a>
            <a href="./" className="d-block small text-muted">Commodity</a>
            <a href="./" className="d-block small text-muted">Fund transfer</a>
          </div>

          {/* Support */}
          <div className="col-md-2 col-6">
            <p className="fw-semibold small mb-1">Support</p>
            <a href="./" className="d-block small text-muted">Contact us</a>
            <a href="./" className="d-block small text-muted">Support portal</a>
            <a href="./" className="d-block small text-muted">Downloads</a>
            <a href="./" className="d-block small text-muted">Complaints</a>
          </div>

          {/* Company */}
          <div className="col-md-2 col-6">
            <p className="fw-semibold small mb-1">Company</p>
            <a href="./" className="d-block small text-muted">About</a>
            <a href="./" className="d-block small text-muted">Careers</a>
            <a href="./" className="d-block small text-muted">Press</a>
            <a href="./" className="d-block small text-muted">Open source</a>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-6">
            <p className="fw-semibold small mb-1">Quick links</p>
            <a href="./" className="d-block small text-muted">IPO</a>
            <a href="./" className="d-block small text-muted">Market holidays</a>
            <a href="./" className="d-block small text-muted">Calculators</a>
            <a href="./" className="d-block small text-muted">Sectors</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <hr className="my-3" />

        <div className="d-flex flex-wrap justify-content-center gap-3 small text-muted">
          <a href="./" className="text-muted">NSE</a>
          <a href="./" className="text-muted">BSE</a>
          <a href="./" className="text-muted">MCX</a>
          <a href="./" className="text-muted">Terms</a>
          <a href="./" className="text-muted">Privacy</a>
          <a href="./" className="text-muted">Disclosure</a>
        </div>

        <p className="text-center small text-muted mt-2 mb-0">
          Made by Satyajit ❤️
        </p>

      </div>
    </footer>
  );
}

export default Footer;
