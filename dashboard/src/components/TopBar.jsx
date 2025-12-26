import React from "react";

const IndexCard = ({ label, value, change, positive }) => (
  <div className="cursor-pointer group">
    <p className="text-xs text-gray-500 group-hover:text-gray-700">
      {label}
    </p>
    <div className="flex items-center space-x-2">
      <p className="font-semibold text-sm text-gray-900">{value}</p>
      <span
        className={`text-xs font-medium ${
          positive ? "text-green-600" : "text-red-500"
        }`}
      >
        {change}
      </span>
    </div>
  </div>
);

const TopBar = () => {
  return (
    <div className="h-14 bg-white border-b flex items-center justify-between px-6">

      {/* Left: Market Indices */}
      <div className="flex items-center space-x-10">
        <IndexCard
          label="NIFTY 50"
          value="100.2"
          change="+0.45%"
          positive
        />

        <IndexCard
          label="SENSEX"
          value="100.2"
          change="-0.12%"
          positive={false}
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium text-gray-600 hover:text-black transition">
          Funds
        </button>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-semibold cursor-pointer hover:shadow-md transition">
          ZU
        </div>
      </div>
    </div>
  );
};

export default TopBar;
