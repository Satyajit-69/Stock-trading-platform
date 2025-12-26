import { useEffect } from "react";

function OAuthSuccess() {
 useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("token", token);

    alert("Login successful 🎉");

    window.location.href = "/user";
  } else {
    window.location.href = "/login";
  }
}, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-blue-100 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Signing you in...
        </h2>
        <p className="text-sm text-gray-600">
          Please wait while we securely log you in.
        </p>
      </div>
    </div>
  );
}

export default OAuthSuccess;
