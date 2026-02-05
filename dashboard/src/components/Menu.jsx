import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on outside click
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

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "User",
    role: "Premium Member",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href =
      "https://stock-trading-platform-ochre.vercel.app/login";
  };

  const menuItems = [
    { to: "/", icon: "fa-solid fa-chart-line", label: "Dashboard", end: true },
    { to: "/orders", icon: "fa-solid fa-clipboard-list", label: "Orders" },
    { to: "/holdings", icon: "fa-solid fa-briefcase", label: "Holdings" },
    { to: "/positions", icon: "fa-solid fa-arrow-trend-up", label: "Positions" },
    { to: "/funds", icon: "fa-solid fa-wallet", label: "Funds" },
    { to: "/apps", icon: "fa-solid fa-screwdriver-wrench", label: "Apps" },
    { to: "/mygrps", icon: "fa-solid fa-users", label: "My Group" },
  ];

  return (
    <>
      {/* Custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          font-weight: 500;
          transition: all 0.25s ease;
          color: #374151;
        }

        .menu-item:hover {
          background: #f9fafb;
          color: #111827;
        }

        .menu-icon {
          font-size: 18px;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .menu-item:hover .menu-icon {
          transform: translateX(6px) scale(1.1);
          color: #2563eb;
        }

        .menu-item.active {
          background: linear-gradient(to right, #2563eb, #4f46e5);
          color: white;
        }

        .menu-item.active .menu-icon {
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center justify-between px-4 z-40">
        <button
          className="menu-toggle p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>

        <span className="font-bold text-lg">
          <span className="text-gray-900">Stock</span>
          <span className="text-blue-600">mates</span>
        </span>

        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {user.name.charAt(0)}
        </div>
      </div>

      <div className="h-16 lg:hidden" />

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 lg:hidden font-inter ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-4 border-b">
          <span className="text-xl font-bold">Stockmates</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <nav className="px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `menu-item ${isActive ? "active" : ""}`
              }
            >
              <i className={`menu-icon ${item.icon}`}></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="border-t p-4 bg-gray-50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 text-red-600 hover:bg-red-50 p-3 rounded-xl transition"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-72 h-screen bg-white flex-col border-r font-inter">
        <div className="h-24 flex items-center justify-center border-b">
          <span className="text-2xl font-bold">
            <span className="text-gray-900">Stock</span>
            <span className="text-blue-600">mates</span>
          </span>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              <i
                className={`${item.icon} text-lg transition-transform duration-300 group-hover:translate-x-1`}
              ></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Menu;
