import { createContext, useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const AuthContext = createContext();

// 🔥 Backend BASE URL (Correct)
const BASE_URL = "http://ec2-13-62-211-75.eu-north-1.compute.amazonaws.com";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [welcomeMode, setWelcomeMode] = useState(() => {
    return localStorage.getItem("welcomeMode") || "login";
  });

  const [loading, setLoading] = useState(false);

  // ---------- ALERT STATE ----------
  const [alert, setAlert] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const showAlert = (type, message) => {
    setAlert({ open: true, type, message });

    setTimeout(() => {
      setAlert((prev) => ({ ...prev, open: false }));
    }, 3000);
  };

  // ------------------------------------
  // LOGIN
  // ------------------------------------
  const login = async (username, password) => {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setUser(data.user);
      setWelcomeMode("login");

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("welcomeMode", "login");

      showAlert("success", "Successfully logged in!");
      return { success: true };

    } catch (err) {
      showAlert("error", err.message);
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------
  // REGISTER
  // ------------------------------------
  const register = async (name, username, password) => {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setUser(data.user);
      setWelcomeMode("register");

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("welcomeMode", "register");

      showAlert("success", "Account created successfully!");
      return { success: true };

    } catch (err) {
      showAlert("error", err.message);
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------
  // LOGOUT
  // ------------------------------------
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("welcomeMode");
    setUser(null);
    setWelcomeMode("login");

    showAlert("info", "Logged out successfully.");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        welcomeMode,
        isAuthenticated: !!user,
      }}
    >
      {/* GLOBAL SNACKBAR ALERT */}
      <Snackbar
        open={alert.open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={alert.type} variant="filled">
          {alert.message}
        </Alert>
      </Snackbar>

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);