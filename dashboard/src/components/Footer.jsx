import React from "react";

function Footer() {
  return (
    <footer className="mt-10 border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-bold text-gray-900">
              Stock<span className="text-blue-600">mates</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Smart investing made simple.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              © 2010–2025 Stockmates Broking Ltd.
            </p>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Account</h4>
            <ul className="space-y-1 text-gray-500">
              <li>Open demat</li>
              <li>NRI account</li>
              <li>Commodity</li>
              <li>Fund transfer</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
            <ul className="space-y-1 text-gray-500">
              <li>Contact us</li>
              <li>Support portal</li>
              <li>Downloads</li>
              <li>Complaints</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
            <ul className="space-y-1 text-gray-500">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Open source</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Quick links</h4>
            <ul className="space-y-1 text-gray-500">
              <li>IPO</li>
              <li>Market holidays</li>
              <li>Calculators</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t pt-4 flex flex-col items-center gap-2 text-xs text-gray-400">
          <div className="flex gap-4">
            <span>NSE</span>
            <span>BSE</span>
            <span>MCX</span>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Disclosure</span>
          </div>
          <p>
            Made by <span className="font-semibold text-gray-600">Satyajit</span> ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
