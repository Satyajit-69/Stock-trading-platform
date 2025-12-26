import { createContext, useContext, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------- ALERT STATE ----------
  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const showAlert = (severity, message) => {
    setAlert({ open: true, severity, message });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, open: false }));
    }, 3000);
  };

  // ---------- CHECK TOKEN ON LOAD ----------
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // user info can be fetched later
      setUser({ loggedIn: true });
    }
  }, []);

  // ---------- LOGIN ----------
  const login = async (email, password) => {
    try {
      setLoading(true);

      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setUser({ loggedIn: true });

      showAlert("success", "Login successful 🎉");
      return { success: true };
    } catch (err) {
      showAlert("error", err.response?.data?.message || "Login failed");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  // ---------- REGISTER ----------
  const register = async (name, email, password) => {
    try {
      setLoading(true);

      const res = await api.post("/api/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setUser({ loggedIn: true });

      showAlert("success", "Account created successfully 🎉");
      return { success: true };
    } catch (err) {
      showAlert("error", err.response?.data?.message || "Signup failed");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  // ---------- LOGOUT ----------
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    showAlert("info", "Logged out successfully 👋");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {/* GLOBAL ALERT */}
      <Snackbar
        open={alert.open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={alert.severity} variant="filled">
          {alert.message}
        </Alert>
      </Snackbar>

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
