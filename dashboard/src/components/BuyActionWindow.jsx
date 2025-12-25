import React, { useState, useContext } from "react";
import axios from "axios";
import { X, TrendingUp, DollarSign, Package, AlertCircle } from "lucide-react";

import GeneralContext from "./GeneralContext";

// CONFIG
const API_BASE = "http://localhost:3001";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);

  const { closeActionWindow } = useContext(GeneralContext);

  // Debug
  console.log("BuyWindow - closeActionWindow:", closeActionWindow);

  // Calculate total
  const totalAmount = (stockQuantity * stockPrice).toFixed(2);

  // BUY order API call
  const handleBuyClick = async () => {
    if (stockPrice <= 0) {
      alert("Please enter a valid price!");
      return;
    }
    
    setLoading(true);
    try {
      await axios.post(`${API_BASE}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      alert("✅ Buy order executed successfully!");
      closeActionWindow();
    } catch (err) {
      console.error("Buy Order Error:", err);
      alert("❌ Error placing buy order!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Buy Order</h2>
              <p className="text-blue-100 text-sm">{uid}</p>
            </div>
          </div>
          <button
            onClick={() => {
              console.log("Close button clicked in BuyWindow");
              closeActionWindow();
            }}
            className="w-8 h-8 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quantity Input */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Package className="w-4 h-4 text-blue-600" />
              Quantity
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold text-gray-900 text-lg transition-all"
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
                  className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center font-bold text-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Price Input */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 text-blue-600" />
              Price per Share
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">₹</span>
              <input
                type="number"
                step="0.05"
                min="0"
                value={stockPrice}
                onChange={(e) => setStockPrice(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-3 pl-8 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold text-gray-900 text-lg transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Total Amount Display */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">Margin Required</span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-900">₹{totalAmount}</p>
                <p className="text-xs text-blue-700">{stockQuantity} shares × ₹{stockPrice}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                console.log("Cancel button clicked in BuyWindow");
                closeActionWindow();
              }}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleBuyClick}
              disabled={loading || stockPrice <= 0}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <TrendingUp className="w-5 h-5" />
                  Buy Now
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;