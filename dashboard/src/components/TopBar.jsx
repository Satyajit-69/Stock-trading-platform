import React from "react";

const TopBar = () => {
  return (
    <div className="h-14 bg-white border-b flex items-center justify-between px-6">
      {/* Indices */}
      <div className="flex items-center space-x-8">
        <div>
          <p className="text-xs text-gray-500">NIFTY 50</p>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">100.2</p>
            <span className="text-green-600 text-sm">+0.45%</span>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500">SENSEX</p>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">100.2</p>
            <span className="text-red-500 text-sm">-0.12%</span>
          </div>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-600 hover:text-black">
          Funds
        </button>

        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
          ZU
        </div>
      </div>
    </div>
  );
};

export default TopBar;
