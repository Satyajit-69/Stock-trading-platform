import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  Calendar,
  Package,
  AlertCircle,
  Search,
  Filter,
  Download,
  RefreshCw,
} from "lucide-react";

// Backend URL
const API_BASE = "https://stock-trading-platform-6x0l.onrender.com/";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("ALL"); // ALL, BUY, SELL
  const [sortBy, setSortBy] = useState("date"); // date, price, qty
  const [viewMode, setViewMode] = useState("table"); // table or cards

   const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/allOrders`);
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);


  // Filter and sort orders
  const filteredOrders = orders
    .filter((order) => {
      const matchesSearch = order.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter = filterType === "ALL" || order.mode === filterType;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return b.price - a.price;
        case "qty":
          return b.qty - a.qty;
        case "date":
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  // Calculate stats
  const buyOrders = orders.filter((o) => o.mode === "BUY");
  const sellOrders = orders.filter((o) => o.mode === "SELL");
  const totalBuyValue = buyOrders.reduce((acc, o) => acc + o.price * o.qty, 0);
  const totalSellValue = sellOrders.reduce(
    (acc, o) => acc + o.price * o.qty,
    0
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[500px] bg-white rounded-2xl shadow-lg border border-gray-100 p-12">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <ShoppingCart className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              No Orders Yet
            </h2>
            <p className="text-gray-500 mb-8 text-center max-w-md text-lg">
              You haven't placed any orders today. Start trading to see your
              orders here.
            </p>
            <Link
              to="/"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Trading
            </Link>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Total Orders
                  </p>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {orders.length}
                </h3>
                <p className="text-xs text-gray-500 mt-2">All time orders</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide">
                    Buy Orders
                  </p>
                  <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-700" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-blue-900">
                  {buyOrders.length}
                </h3>
                <p className="text-xs text-blue-700 mt-2 font-semibold">
                  Value: ₹
                  {totalBuyValue.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-lg border border-red-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-red-900 uppercase tracking-wide">
                    Sell Orders
                  </p>
                  <div className="w-10 h-10 bg-red-200 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-red-700" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-red-900">
                  {sellOrders.length}
                </h3>
                <p className="text-xs text-red-700 mt-2 font-semibold">
                  Value: ₹
                  {totalSellValue.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-purple-900 uppercase tracking-wide">
                    Net Flow
                  </p>
                  <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-purple-700" />
                  </div>
                </div>
                <h3
                  className={`text-3xl font-bold ${
                    totalBuyValue > totalSellValue
                      ? "text-blue-900"
                      : "text-red-900"
                  }`}
                >
                  ₹
                  {Math.abs(totalBuyValue - totalSellValue).toLocaleString(
                    "en-IN",
                    { maximumFractionDigits: 0 }
                  )}
                </h3>
                <p className="text-xs text-purple-700 mt-2 font-semibold">
                  {totalBuyValue > totalSellValue
                    ? "Net Buying"
                    : "Net Selling"}
                </p>
              </div>
            </div>

            {/* Controls Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by stock name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                      onClick={() => setFilterType("BUY")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        filterType === "BUY"
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Buy
                    </button>
                    <button
                      onClick={() => setFilterType("SELL")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        filterType === "SELL"
                          ? "bg-red-600 text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Sell
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="price">Sort by Price</option>
                    <option value="qty">Sort by Quantity</option>
                  </select>

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
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
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
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 6v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Refresh Button */}
                  <button
                    onClick={fetchOrders}
                    className="p-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <RefreshCw className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredOrders.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {orders.length}
                </span>{" "}
                orders
              </div>
            </div>

            {/* Orders Display */}
            {viewMode === "table" ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Stock
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Total Value
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Date & Time
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {filteredOrders.map((order, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                {order.name.substring(0, 2)}
                              </div>
                              <span className="font-semibold text-gray-900">
                                {order.name}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <span className="text-gray-900 font-semibold">
                              {order.qty}
                            </span>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <span className="text-gray-900 font-semibold">
                              ₹{parseFloat(order.price).toFixed(2)}
                            </span>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            {order.mode === "BUY" ? (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded-full border border-blue-200">
                                <TrendingUp className="w-3 h-3" />
                                BUY
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 text-sm font-bold rounded-full border border-red-200">
                                <TrendingDown className="w-3 h-3" />
                                SELL
                              </span>
                            )}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <span className="text-gray-900 font-bold">
                              ₹{(order.price * order.qty).toFixed(2)}
                            </span>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              {order.createdAt
                                ? new Date(order.createdAt).toLocaleString(
                                    "en-IN",
                                    {
                                      dateStyle: "short",
                                      timeStyle: "short",
                                    }
                                  )
                                : "N/A"}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOrders.map((order, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                          {order.name.substring(0, 2)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {order.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {order.qty} shares
                          </p>
                        </div>
                      </div>
                      {order.mode === "BUY" ? (
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          BUY
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-200 flex items-center gap-1">
                          <TrendingDown className="w-3 h-3" />
                          SELL
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Price per share
                        </span>
                        <span className="font-semibold text-gray-900">
                          ₹{parseFloat(order.price).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="text-sm font-semibold text-gray-700">
                          Total Value
                        </span>
                        <span className="font-bold text-lg text-gray-900">
                          ₹{(order.price * order.qty).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 pt-2">
                        <Calendar className="w-3 h-3" />
                        {order.createdAt
                          ? new Date(order.createdAt).toLocaleString("en-IN", {
                              dateStyle: "short",
                              timeStyle: "short",
                            })
                          : "N/A"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
