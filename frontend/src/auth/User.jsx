import React from "react";

function User() {
  const handleDashboard = () => {
    // Redirect to dashboard app (separate project)
    window.location.href = "http://localhost:5173";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-blue-100 w-full max-w-md text-center">

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Stockmates 👋
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          You are successfully logged in
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleDashboard}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </button>

          <button
            onClick={() => alert("Portfolio coming soon 🚀")}
            className="w-full border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Portfolio
          </button>

          <button
            onClick={() => alert("Settings coming soon ⚙️")}
            className="w-full border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
