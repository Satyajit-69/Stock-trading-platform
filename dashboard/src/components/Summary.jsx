import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Summary = () => {
  const [timeRange, setTimeRange] = useState("1D");

  // Sample data for portfolio performance
  const portfolioData = [
    { time: "9:15", value: 29500 },
    { time: "10:00", value: 29800 },
    { time: "11:00", value: 30200 },
    { time: "12:00", value: 30500 },
    { time: "13:00", value: 30100 },
    { time: "14:00", value: 30800 },
    { time: "15:00", value: 31200 },
    { time: "15:30", value: 31430 },
  ];

  // Holdings distribution data
  const holdingsDistribution = [
    { name: "Tech", value: 35, amount: 11000 },
    { name: "Finance", value: 25, amount: 7857 },
    { name: "Healthcare", value: 20, amount: 6286 },
    { name: "Energy", value: 12, amount: 3772 },
    { name: "Others", value: 8, amount: 2515 },
  ];

  const COLORS = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"];

  // Top performers
  const topPerformers = [
    { symbol: "RELIANCE", change: 8.4, value: 2450 },
    { symbol: "TCS", change: 6.2, value: 3680 },
    { symbol: "INFY", change: 5.8, value: 1540 },
  ];

  // Recent activity
  const recentActivity = [
    { type: "BUY", symbol: "HDFC", quantity: 10, price: 1650, time: "2 hrs ago" },
    { type: "SELL", symbol: "ITC", quantity: 25, price: 420, time: "5 hrs ago" },
    { type: "BUY", symbol: "WIPRO", quantity: 15, price: 480, time: "1 day ago" },
  ];

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Greeting */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h6 className="text-lg font-semibold text-gray-900">Hi, User 👋</h6>
        <p className="text-sm text-gray-500 mt-1">Welcome back to your portfolio</p>
      </div>

      {/* Portfolio Overview with Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Portfolio Value</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">₹31.43k</h2>
            <p className="text-lg text-green-600 font-semibold mt-1">
              +₹1.55k (+5.20%) <span className="text-sm font-normal">Today</span>
            </p>
          </div>
          
          <div className="flex gap-2">
            {["1D", "1W", "1M", "3M", "1Y", "ALL"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  timeRange === range
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={portfolioData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Equity */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-blue-900">Equity</p>
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-blue-900">₹3.74k</h3>
          <p className="text-xs text-blue-700 mt-1">Margin available</p>
          <div className="mt-4 pt-4 border-t border-blue-200 space-y-1 text-sm">
            <div className="flex justify-between text-blue-800">
              <span>Margins used</span>
              <span className="font-semibold">₹0</span>
            </div>
            <div className="flex justify-between text-blue-800">
              <span>Opening balance</span>
              <span className="font-semibold">₹3.74k</span>
            </div>
          </div>
        </div>

        {/* Holdings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-green-900">Holdings (13)</p>
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-green-900">
            ₹1.55k <span className="text-lg text-green-600">+5.20%</span>
          </h3>
          <p className="text-xs text-green-700 mt-1">P&L</p>
          <div className="mt-4 pt-4 border-t border-green-200 space-y-1 text-sm">
            <div className="flex justify-between text-green-800">
              <span>Current Value</span>
              <span className="font-semibold">₹31.43k</span>
            </div>
            <div className="flex justify-between text-green-800">
              <span>Investment</span>
              <span className="font-semibold">₹29.88k</span>
            </div>
          </div>
        </div>

        {/* Day's Change */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-purple-900">Today's Change</p>
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-purple-900">+₹1.55k</h3>
          <p className="text-xs text-purple-700 mt-1">Portfolio change</p>
          <div className="mt-4 pt-4 border-t border-purple-200 space-y-1 text-sm">
            <div className="flex justify-between text-purple-800">
              <span>Day High</span>
              <span className="font-semibold">₹31.68k</span>
            </div>
            <div className="flex justify-between text-purple-800">
              <span>Day Low</span>
              <span className="font-semibold">₹29.50k</span>
            </div>
          </div>
        </div>
      </div>

      {/* Holdings Distribution & Top Performers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Holdings Distribution Pie Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Holdings Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={holdingsDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {holdingsDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {holdingsDistribution.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <div>
                  <p className="text-xs font-medium text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-500">₹{item.amount.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers Today</h3>
          <div className="space-y-4">
            {topPerformers.map((stock, index) => (
              <div key={stock.symbol} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-transparent rounded-xl border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{stock.symbol}</p>
                    <p className="text-sm text-gray-500">₹{stock.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">+{stock.change}%</p>
                  <div className="flex items-center gap-1 text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  activity.type === "BUY" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-red-100 text-red-700"
                }`}>
                  {activity.type}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{activity.symbol}</p>
                  <p className="text-sm text-gray-500">{activity.quantity} shares @ ₹{activity.price}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;