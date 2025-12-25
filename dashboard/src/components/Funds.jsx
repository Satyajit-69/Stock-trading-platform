import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wallet, TrendingUp, DollarSign, PieChart, ArrowUpCircle, ArrowDownCircle, Lock, AlertCircle, Plus, Minus } from "lucide-react";

const Funds = () => {
  const [showDetails, setShowDetails] = useState(true);

  // Sample data - replace with actual API data
  const equityData = {
    availableMargin: 4043.10,
    usedMargin: 3757.30,
    availableCash: 4043.10,
    openingBalance: 4043.10,
    payin: 4064.00,
    span: 0.00,
    deliveryMargin: 0.00,
    exposure: 0.00,
    optionsPremium: 0.00,
    collateralLiquid: 0.00,
    collateralEquity: 0.00,
  };

  const totalCollateral = equityData.collateralLiquid + equityData.collateralEquity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Funds</h2>
                <p className="text-sm text-gray-500 mt-1">Instant, zero-cost fund transfers with UPI</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Funds
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                <Minus className="w-5 h-5" />
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-green-900 uppercase tracking-wide">Available Margin</p>
              <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-700" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-green-900">
              ₹{equityData.availableMargin.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </h3>
            <p className="text-xs text-green-700 mt-2">Available for trading</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-orange-900 uppercase tracking-wide">Used Margin</p>
              <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-orange-700" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-orange-900">
              ₹{equityData.usedMargin.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </h3>
            <p className="text-xs text-orange-700 mt-2">Currently in use</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide">Available Cash</p>
              <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-700" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-blue-900">
              ₹{equityData.availableCash.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </h3>
            <p className="text-xs text-blue-700 mt-2">Liquid balance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Equity Details */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Equity</h3>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>

            <div className="p-6 space-y-1">
              {/* Main Metrics */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Available margin</span>
                <span className="text-lg font-bold text-green-600">
                  ₹{equityData.availableMargin.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Used margin</span>
                <span className="text-lg font-bold text-gray-900">
                  ₹{equityData.usedMargin.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Available cash</span>
                <span className="text-lg font-bold text-blue-600">
                  ₹{equityData.availableCash.toFixed(2)}
                </span>
              </div>

              {/* Detailed Breakdown */}
              {showDetails && (
                <>
                  <div className="pt-4 pb-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Breakdown</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Opening Balance</span>
                      <span className="text-sm font-semibold text-gray-900">₹{equityData.openingBalance.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Payin</span>
                      <span className="text-sm font-semibold text-gray-900">₹{equityData.payin.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">SPAN</span>
                      <span className="text-sm font-semibold text-gray-900">₹{equityData.span.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Delivery margin</span>
                      <span className="text-sm font-semibold text-gray-900">₹{equityData.deliveryMargin.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Exposure</span>
                      <span className="text-sm font-semibold text-gray-900">₹{equityData.exposure.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Options premium</span>
                      <span className="text-sm font-semibold text-gray-900">₹{equityData.optionsPremium.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Collateral Section */}
                  <div className="pt-4 pb-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Collateral</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Liquid funds</span>
                      <span className="text-sm font-semibold text-gray-900">₹{equityData.collateralLiquid.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Equity</span>
                      <span className="text-sm font-semibold text-gray-900">₹{equityData.collateralEquity.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-purple-50 rounded-lg px-3 border border-purple-200">
                      <span className="text-sm font-semibold text-purple-900">Total Collateral</span>
                      <span className="text-lg font-bold text-purple-900">₹{totalCollateral.toFixed(2)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Commodity Account */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-purple-200">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Lock className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commodity Trading</h3>
              <p className="text-sm text-gray-600 mb-6">
                You don't have a commodity account yet. Open one to start trading in commodities.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all w-full">
                Open Commodity Account
              </button>
              
              <div className="mt-6 pt-6 border-t border-purple-200 w-full">
                <div className="flex items-start gap-2 text-left">
                  <AlertCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-600">
                    Trade in gold, silver, crude oil, natural gas, and other commodities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant Fund Transfers</h4>
              <p className="text-sm text-gray-600">
                Add or withdraw funds instantly using UPI with zero transaction charges. Your funds are available for trading immediately after successful transfer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;