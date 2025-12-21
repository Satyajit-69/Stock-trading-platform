import React, { useState } from "react";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the data and navigate
    console.log("Login data:", { username, password });
    alert("Login successful!");
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-6">
        
        <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-100 overflow-hidden grid md:grid-cols-2 items-stretch">

          {/* Form */}
          <div className="p-10 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600 text-sm">Sign in to your Stockmates account</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* Username */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-300 rounded-xl px-12 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-300 rounded-xl px-12 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-700 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-blue-600 hover:shadow-xl transition transform hover:scale-[1.02]"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-xs text-gray-600 mt-6">
              Don't have an account?
              <a className="text-blue-600 font-semibold hover:text-blue-700 hover:underline ml-1" href="/signup">
                Sign Up
              </a>
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center items-center bg-gradient-to-br from-blue-600 to-blue-400 p-10">
            <img
              src="/assets/login.svg"
              alt="Login Illustration"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;