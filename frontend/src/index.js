import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/home/Homepage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import SignUp from "./auth/Signup";
import Login from "./auth/Login";
import NotFound from "./landing_page/notFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/footer";
import ProductPage from "./landing_page/products/ProductPage";
import OAuthSuccess from "./auth/OAuthSuccess";
import User from "./auth/User";

import { AuthProvider } from "./context/AuthContext"; // ✅ IMPORTANT

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
