import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { X, TrendingDown, DollarSign, Package, AlertCircle, RefreshCw } from "lucide-react";

import GeneralContext from "./GeneralContext";

// CONFIG
const API_BASE = "http://localhost:3001";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPricePerUnit, setStockPricePerUnit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetchingPrice, setFetchingPrice] = useState(true);

  const { closeActionWindow } = useContext(GeneralContext);

  // Calculate total
  const totalPrice = (stockQuantity * stockPricePerUnit).toFixed(2);

  // Fetch current stock price
  useEffect(() => {
    fetchStockPrice();
  }, [uid]);

  const fetchStockPrice = async () => {
    setFetchingPrice(true);
    try {
      const res = await axios.get(`${API_BASE}/getStockPrice/${uid}`);
      const price = parseFloat(res.data.price) || 0;
      setStockPricePerUnit(price);
    } catch (err) {
      console.error("Error fetching stock price:", err);
      alert("Failed to fetch current price!");
    } finally {
      setFetchingPrice(false);
    }
  };

  // Sell Request
  const handleSellClick = async () => {
    if (stockPricePerUnit <= 0) {
      alert("Invalid stock price!");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API_BASE}/sellOrder`, {
        name: uid,
        qty: stockQuantity,
        price: totalPrice,
      });

      alert("✅ Sell order executed successfully!");
      closeActionWindow();
    } catch (err) {
      console.error("Error while selling:", err);
      alert("❌ Error executing sell order!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-5 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Sell Order</h2>
              <p className="text-red-100 text-sm">{uid}</p>
            </div>
          </div>
          <button
            onClick={closeActionWindow}
            className="w-8 h-8 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Current Price Display */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Current Market Price</span>
              </div>
              <div className="flex items-center gap-2">
                {fetchingPrice ? (
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <p className="text-2xl font-bold text-gray-900">₹{stockPricePerUnit.toFixed(2)}</p>
                    <button
                      onClick={fetchStockPrice}
                      className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      title="Refresh price"
                    >
                      <RefreshCw className="w-4 h-4 text-gray-700" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Quantity Input */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Package className="w-4 h-4 text-red-600" />
              Quantity to Sell
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-semibold text-gray-900 text-lg transition-all"
                placeholder="Enter quantity"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                <button
                  onClick={() => setStockQuantity(Math.max(1, stockQuantity - 1))}
                  className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center font-bold text-gray-700 transition-colors"
                >
                  -
                </button>
                <button
                  onClick={() => setStockQuantity(stockQuantity + 1)}
                  className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center font-bold text-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Total Amount Display */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-sm font-semibold text-red-900">Total Sell Value</span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-red-900">₹{totalPrice}</p>
                <p className="text-xs text-red-700">{stockQuantity} shares × ₹{stockPricePerUnit.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={closeActionWindow}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSellClick}
              disabled={loading || stockPricePerUnit <= 0 || fetchingPrice}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <TrendingDown className="w-5 h-5" />
                  Sell Now
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;