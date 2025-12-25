import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }`;

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
          
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
          
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      
      <div className="w-72 bg-white flex flex-col shrink-0 shadow-xl border-r border-gray-100">
        {/* Logo */}
        <div className="h-24 flex items-center justify-center border-b border-gray-100 bg-gradient-to-br from-white to-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-2xl font-bold font-inter tracking-tight">
              <span className="text-gray-900">Stock</span>
              <span className="text-blue-600">mates</span>
            </span>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-8 space-y-2 font-inter">
          <NavLink to="/" end className={linkClass}>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-medium">Dashboard</span>
            </div>
          </NavLink>
          <NavLink to="/orders" className={linkClass}>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="font-medium">Orders</span>
            </div>
          </NavLink>
          <NavLink to="/holdings" className={linkClass}>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="font-medium">Holdings</span>
            </div>
          </NavLink>
          <NavLink to="/positions" className={linkClass}>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <span className="font-medium">Positions</span>
            </div>
          </NavLink>
          <NavLink to="/funds" className={linkClass}>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">Funds</span>
            </div>
          </NavLink>
          <NavLink to="/apps" className={linkClass}>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="font-medium">Apps</span>
            </div>
          </NavLink>
           <NavLink to="/mygrps" className={linkClass}>
  <div className="flex items-center space-x-3">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 14s-1 0-1 1 1 4 5 4 5-3 5-4-1-1-1-1M15 10a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-1a3 3 0 00-3-3h-1"
      />
    </svg>
    <span className="font-medium">My Group</span>
  </div>
</NavLink>

        </nav>

        {/* Profile */}
        <div className="border-t border-gray-100 p-5 bg-gradient-to-br from-gray-50 to-white font-inter">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 w-full hover:bg-white p-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/30 ring-4 ring-white">
              ZU
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-gray-900">USERID</div>
              <div className="text-xs text-gray-500 font-medium">Premium Member</div>
            </div>
            <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isProfileOpen && (
            <div className="mt-3 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
              <button className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Profile</span>
              </button>
              <button className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3 border-t border-gray-100 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
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