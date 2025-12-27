import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrendingUp, TrendingDown, Activity, Search, Filter, RefreshCw, BarChart3, AlertCircle } from "lucide-react";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("ALL"); // ALL, PROFIT, LOSS
  const [viewMode, setViewMode] = useState("table"); // table or cards

  const fetchPositions = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://stock-trading-platform-6x0l.onrender.com/allPositions");
      setPositions(res.data);
    } catch (err) {
      console.error("Error fetching positions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  // Filter positions
  const filteredPositions = positions
    .filter((pos) => {
      const matchesSearch = pos.name.toLowerCase().includes(searchQuery.toLowerCase());
      const currVal = pos.price * pos.qty;
      const pnl = currVal - pos.avg * pos.qty;
      const isProfit = pnl >= 0;
      
      const matchesFilter = 
        filterType === "ALL" || 
        (filterType === "PROFIT" && isProfit) || 
        (filterType === "LOSS" && !isProfit);
      
      return matchesSearch && matchesFilter;
    });

  // Calculate stats
  const totalPnL = positions.reduce((acc, pos) => {
    const currVal = pos.price * pos.qty;
    const pnl = currVal - pos.avg * pos.qty;
    return acc + pnl;
  }, 0);

  const profitPositions = positions.filter((pos) => {
    const currVal = pos.price * pos.qty;
    const pnl = currVal - pos.avg * pos.qty;
    return pnl >= 0;
  });

  const lossPositions = positions.filter((pos) => {
    const currVal = pos.price * pos.qty;
    const pnl = currVal - pos.avg * pos.qty;
    return pnl < 0;
  });

  const totalInvestment = positions.reduce((acc, pos) => acc + pos.avg * pos.qty, 0);
  const currentValue = positions.reduce((acc, pos) => acc + pos.price * pos.qty, 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading positions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {positions.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[500px] bg-white rounded-2xl shadow-lg border border-gray-100 p-12">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Activity className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">No Open Positions</h2>
            <p className="text-gray-500 mb-8 text-center max-w-md text-lg">
              You don't have any open positions yet. Start trading to see your positions here.
            </p>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Positions</p>
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{positions.length}</h3>
                <p className="text-xs text-gray-500 mt-2">Open positions</p>
              </div>

              <div className={`rounded-2xl p-6 shadow-lg border ${
                totalPnL >= 0 
                  ? "bg-gradient-to-br from-green-50 to-green-100 border-green-200" 
                  : "bg-gradient-to-br from-red-50 to-red-100 border-red-200"
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <p className={`text-sm font-semibold uppercase tracking-wide ${
                    totalPnL >= 0 ? "text-green-900" : "text-red-900"
                  }`}>Total P&L</p>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    totalPnL >= 0 ? "bg-green-200" : "bg-red-200"
                  }`}>
                    {totalPnL >= 0 ? (
                      <TrendingUp className="w-5 h-5 text-green-700" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-700" />
                    )}
                  </div>
                </div>
                <h3 className={`text-3xl font-bold ${
                  totalPnL >= 0 ? "text-green-900" : "text-red-900"
                }`}>
                  ₹{Math.abs(totalPnL).toFixed(2)}
                </h3>
                <p className={`text-xs mt-2 font-semibold ${
                  totalPnL >= 0 ? "text-green-700" : "text-red-700"
                }`}>
                  {totalPnL >= 0 ? "Profit" : "Loss"} ({((totalPnL / totalInvestment) * 100).toFixed(2)}%)
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide">Profitable</p>
                  <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-700" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-blue-900">{profitPositions.length}</h3>
                <p className="text-xs text-blue-700 mt-2 font-semibold">
                  {positions.length > 0 ? ((profitPositions.length / positions.length) * 100).toFixed(0) : 0}% win rate
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg border border-orange-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-orange-900 uppercase tracking-wide">In Loss</p>
                  <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-orange-700" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-orange-900">{lossPositions.length}</h3>
                <p className="text-xs text-orange-700 mt-2 font-semibold">
                  Need attention
                </p>
              </div>
            </div>

            {/* Value Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Investment Value</p>
                  <p className="text-2xl font-bold text-gray-900">₹{totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Current Value</p>
                  <p className="text-2xl font-bold text-gray-900">₹{currentValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Net Change</p>
                  <p className={`text-2xl font-bold ${totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {totalPnL >= 0 ? '+' : ''}₹{totalPnL.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search positions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {/* Filter Buttons */}
                  <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setFilterType("ALL")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        filterType === "ALL"
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilterType("PROFIT")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        filterType === "PROFIT"
                          ? "bg-green-600 text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Profit
                    </button>
                    <button
                      onClick={() => setFilterType("LOSS")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        filterType === "LOSS"
                          ? "bg-red-600 text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Loss
                    </button>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setViewMode("table")}
                      className={`p-2 rounded-md transition-all ${
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
                      className={`p-2 rounded-md transition-all ${
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

                  {/* Refresh Button */}
                  <button
                    onClick={fetchPositions}
                    className="p-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <RefreshCw className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredPositions.length}</span> of{" "}
                <span className="font-semibold text-gray-900">{positions.length}</span> positions
              </div>
            </div>

            {/* Positions Display */}
            {viewMode === "table" ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Instrument</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Qty</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Avg</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">LTP</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">P&L</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Day Chg</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {filteredPositions.map((pos, idx) => {
                        const currVal = pos.price * pos.qty;
                        const pnl = currVal - pos.avg * pos.qty;
                        const isProfit = pnl >= 0;

                        return (
                          <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">
                                {pos.product}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                  {pos.name.substring(0, 2)}
                                </div>
                                <span className="font-semibold text-gray-900">{pos.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-700">{pos.qty}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-700">₹{pos.avg.toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-900">₹{pos.price.toFixed(2)}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-bold ${isProfit ? "text-green-600" : "text-red-600"}`}>
                              {isProfit ? "+" : ""}₹{pnl.toFixed(2)}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-semibold ${pos.isLoss ? "text-red-600" : "text-green-600"}`}>
                              {pos.day}
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
                {filteredPositions.map((pos, idx) => {
                  const currVal = pos.price * pos.qty;
                  const pnl = currVal - pos.avg * pos.qty;
                  const isProfit = pnl >= 0;

                  return (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                            {pos.name.substring(0, 2)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{pos.name}</h4>
                            <p className="text-xs text-gray-500">{pos.product} • {pos.qty} shares</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1 ${
                          pos.isLoss ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
                        }`}>
                          {pos.isLoss ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                          {pos.day}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Avg Cost</span>
                          <span className="font-semibold text-gray-900">₹{pos.avg.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">LTP</span>
                          <span className="font-semibold text-gray-900">₹{pos.price.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                          <span className="text-sm font-semibold text-gray-700">P&L</span>
                          <span className={`font-bold text-lg ${isProfit ? "text-green-600" : "text-red-600"}`}>
                            {isProfit ? "+" : ""}₹{pnl.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Positions;