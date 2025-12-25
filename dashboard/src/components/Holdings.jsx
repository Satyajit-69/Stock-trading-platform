import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [viewMode, setViewMode] = useState("table"); // "table" or "cards"

  useEffect(() => {
    // Connect to the backend
    axios.get("http://localhost:3001/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    }).catch(err => {
      console.error("Error fetching holdings:", err);
      // Fallback demo data
      setAllHoldings([
        { name: "RELIANCE", qty: 10, avg: 2450, price: 2580, net: "+2.5%", day: "+1.2%", isLoss: false },
        { name: "TCS", qty: 5, avg: 3200, price: 3450, net: "+3.8%", day: "+0.8%", isLoss: false },
        { name: "INFY", qty: 15, avg: 1400, price: 1520, net: "+4.2%", day: "-0.5%", isLoss: true },
      ]);
    });
  }, []);

  // Sorting function
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Filter and sort holdings
  const filteredHoldings = allHoldings
    .filter((stock) =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      const aVal = sortConfig.key === "name" ? a[sortConfig.key] : parseFloat(a[sortConfig.key]);
      const bVal = sortConfig.key === "name" ? b[sortConfig.key] : parseFloat(b[sortConfig.key]);
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

  // Calculate totals
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);
  const totalCurrentValue = allHoldings.reduce((acc, stock) => acc + stock.price * stock.qty, 0);
  const totalPnL = totalCurrentValue - totalInvestment;
  const totalPnLPercent = ((totalPnL / totalInvestment) * 100).toFixed(2);

  // Chart data
  const chartData = allHoldings.map((stock) => ({
    name: stock.name,
    investment: stock.avg * stock.qty,
    current: stock.price * stock.qty,
  }));

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Holdings</h2>
            <p className="text-sm text-gray-500 mt-1">{allHoldings.length} stocks in your portfolio</p>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("table")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === "table"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === "cards"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search holdings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide">Total Investment</p>
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-blue-900">
            ₹{totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </h3>
          <p className="text-xs text-blue-700 mt-2">Initial capital invested</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-purple-900 uppercase tracking-wide">Current Value</p>
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-purple-900">
            ₹{totalCurrentValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </h3>
          <p className="text-xs text-purple-700 mt-2">Portfolio value today</p>
        </div>

        <div className={`bg-gradient-to-br rounded-2xl p-6 border shadow-lg ${
          totalPnL >= 0 
            ? "from-green-50 to-green-100 border-green-200" 
            : "from-red-50 to-red-100 border-red-200"
        }`}>
          <div className="flex items-center justify-between mb-3">
            <p className={`text-sm font-semibold uppercase tracking-wide ${
              totalPnL >= 0 ? "text-green-900" : "text-red-900"
            }`}>P&L</p>
            <svg className={`w-8 h-8 ${totalPnL >= 0 ? "text-green-600" : "text-red-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={totalPnL >= 0 ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
            </svg>
          </div>
          <h3 className={`text-4xl font-bold ${totalPnL >= 0 ? "text-green-900" : "text-red-900"}`}>
            ₹{Math.abs(totalPnL).toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </h3>
          <p className={`text-xs mt-2 font-semibold ${totalPnL >= 0 ? "text-green-700" : "text-red-700"}`}>
            {totalPnL >= 0 ? "+" : "-"}{totalPnLPercent}% overall return
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment vs Current Value</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Bar dataKey="investment" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
            <Bar dataKey="current" fill="#3B82F6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Holdings Display */}
      {viewMode === "table" ? (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th 
                    className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center gap-2">
                      Instrument
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => handleSort("qty")}>Qty.</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => handleSort("avg")}>Avg. Cost</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => handleSort("price")}>LTP</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Cur. Val</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">P&L</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Net Chg.</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Day Chg.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredHoldings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const pnl = curValue - stock.avg * stock.qty;
                  const isProfit = pnl >= 0;
                  const dayIsProfit = !stock.isLoss;

                  return (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                            {stock.name.substring(0, 2)}
                          </div>
                          <span className="font-semibold text-gray-900">{stock.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-700">{stock.qty}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-700">₹{stock.avg.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-900">₹{stock.price.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-900">₹{curValue.toFixed(2)}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-bold ${isProfit ? "text-green-600" : "text-red-600"}`}>
                        {isProfit ? "+" : ""}₹{pnl.toFixed(2)}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-semibold ${isProfit ? "text-green-600" : "text-red-600"}`}>
                        {stock.net}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-semibold ${dayIsProfit ? "text-green-600" : "text-red-600"}`}>
                        {stock.day}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const pnl = curValue - stock.avg * stock.qty;
            const isProfit = pnl >= 0;
            const dayIsProfit = !stock.isLoss;

            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {stock.name.substring(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{stock.name}</h4>
                      <p className="text-xs text-gray-500">{stock.qty} shares</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${dayIsProfit ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {stock.day}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Value</span>
                    <span className="font-bold text-gray-900">₹{curValue.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Investment</span>
                    <span className="text-sm text-gray-700">₹{(stock.avg * stock.qty).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-700">P&L</span>
                    <span className={`font-bold text-lg ${isProfit ? "text-green-600" : "text-red-600"}`}>
                      {isProfit ? "+" : ""}₹{pnl.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Net Change</span>
                    <span className={`text-sm font-semibold ${isProfit ? "text-green-600" : "text-red-600"}`}>
                      {stock.net}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Holdings;