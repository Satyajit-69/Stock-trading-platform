import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Read user from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "User",
    role: "Premium Member",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3000/login";
  };

  const linkClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }`;

  const menuItems = [
    { to: "/", icon: "📊", label: "Dashboard", end: true },
    { to: "/orders", icon: "📋", label: "Orders" },
    { to: "/holdings", icon: "💼", label: "Holdings" },
    { to: "/positions", icon: "📈", label: "Positions" },
    { to: "/funds", icon: "💰", label: "Funds" },
    { to: "/apps", icon: "🔧", label: "Apps" },
    { to: "/mygrps", icon: "👥", label: "My Group" },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
        `}
      </style>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-40">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="menu-toggle p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            📈
          </div>
          <span className="text-lg font-bold">
            <span className="text-gray-900">Stock</span>
            <span className="text-blue-600">mates</span>
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm">
          {user.name?.charAt(0)?.toUpperCase() || "U"}
        </div>
      </div>

      {/* Mobile Spacer */}
      <div className="h-16 lg:hidden" />

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col font-inter ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Logo with Close */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
              📈
            </div>
            <span className="text-xl font-bold">
              <span className="text-gray-900">Stock</span>
              <span className="text-blue-600">mates</span>
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Profile */}
        <div className="border-t border-gray-100 p-4 bg-gray-50">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 w-full bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              {user.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="text-sm font-semibold truncate">{user.name}</div>
              <div className="text-xs text-gray-500 truncate">{user.role}</div>
            </div>
            <span className={`transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {isProfileOpen && (
            <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
              <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition flex items-center space-x-2">
                <span>👤</span>
                <span>Profile</span>
              </button>
              <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition flex items-center space-x-2 border-t">
                <span>⚙️</span>
                <span>Settings</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-sm hover:bg-red-50 text-red-600 border-t transition flex items-center space-x-2"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-72 bg-white flex-col shrink-0 shadow-xl border-r border-gray-100 font-inter">
        {/* Desktop Logo */}
        <div className="h-24 flex items-center justify-center border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
              📈
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gray-900">Stock</span>
              <span className="text-blue-600">mates</span>
            </span>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClass}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Desktop Profile */}
        <div className="border-t border-gray-100 p-5 bg-gray-50">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 w-full bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              {user.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="text-sm font-semibold truncate">{user.name}</div>
              <div className="text-xs text-gray-500 truncate">{user.role}</div>
            </div>
            <span className={`transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {isProfileOpen && (
            <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
              <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition flex items-center space-x-2">
                <span>👤</span>
                <span>Profile</span>
              </button>
              <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition flex items-center space-x-2 border-t">
                <span>⚙️</span>
                <span>Settings</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-sm hover:bg-red-50 text-red-600 border-t transition flex items-center space-x-2"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;