import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dashboard,
  BusinessCenter,
  Settings,
  TrendingUp,
  AccountBalance,
  Assessment,
  Logout,
  ArrowForward,
} from "@mui/icons-material";

function User() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Try to get user info from localStorage
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      setUserName(storedUser);
    }

    // Check if user is authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleDashboard = () => {
    setIsLoading(true);
    window.location.href = "https://stock-mates-dashboard.vercel.app/";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const quickActions = [
    {
      title: "Dashboard",
      description: "View your trading dashboard",
      icon: <Dashboard className="w-6 h-6" />,
      action: handleDashboard,
      primary: true,
      available: true,
    },
    {
      title: "Portfolio",
      description: "Manage your investments",
      icon: <BusinessCenter className="w-6 h-6" />,
      action: () => navigate("/portfolio"),
      primary: false,
      available: true,
    },
    {
      title: "Watchlist",
      description: "Track your favorite stocks",
      icon: <TrendingUp className="w-6 h-6" />,
      action: () => navigate("/watchlist"),
      primary: false,
      available: true,
    },
    {
      title: "Settings",
      description: "Customize your experience",
      icon: <Settings className="w-6 h-6" />,
      action: () => navigate("/settings"),
      primary: false,
      available: true,
    },
  ];

  const stats = [
    {
      label: "Active Trades",
      value: "0",
      icon: <AccountBalance className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Watchlist Items",
      value: "0",
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
    },
    {
      label: "Reports",
      value: "0",
      icon: <Assessment className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-4xl">
        {/* Welcome Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden mb-6">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    Welcome back, {userName}! 👋
                  </h1>
                  <p className="text-blue-100 text-sm">
                    You are successfully logged in
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  <Logout className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-blue-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions Grid */}
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  disabled={isLoading && action.primary}
                  className={`
                    group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300
                    ${
                      action.primary
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:shadow-2xl hover:shadow-blue-500/50 col-span-full"
                        : "bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-blue-300 hover:shadow-xl"
                    }
                    ${isLoading && action.primary ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"}
                  `}
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`
                          p-3 rounded-xl transition-all duration-300
                          ${
                            action.primary
                              ? "bg-white/20 text-white group-hover:bg-white/30"
                              : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                          }
                        `}
                        >
                          {action.icon}
                        </div>
                        <div>
                          <h3
                            className={`text-lg font-bold ${
                              action.primary ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {action.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              action.primary
                                ? "text-blue-100"
                                : "text-gray-600"
                            }`}
                          >
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <ArrowForward
                      className={`
                      w-5 h-5 transition-all duration-300 group-hover:translate-x-1
                      ${action.primary ? "text-white" : "text-gray-400 group-hover:text-blue-600"}
                    `}
                    />
                  </div>

                  {/* Animated background effect */}
                  {action.primary && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  )}

                  {/* Loading spinner for primary button */}
                  {isLoading && action.primary && (
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-600/50 backdrop-blur-sm">
                      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Need help?{" "}
            <button
              onClick={() => navigate("/support")}
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              Contact Support 👤
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default User;