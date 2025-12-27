import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      // User already logged in → dashboard
      navigate("/dashboard");
    } else {
      // New user → signup
      navigate("/signup");
    }
  };

  return (
    <section className="container mt-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">

          <h2 className="fw-bold mb-3">
            Open a StockMates account
          </h2>

          <p className="text-muted fs-5 mb-4">
            Invest smarter with modern tools, ₹0 delivery charges, and
            flat ₹20 intraday & F&O trades.
          </p>

          <button
            onClick={handleClick}
            className="btn btn-primary px-4 py-2 fs-5"
            style={{
              backgroundColor: "#387ED1",
              border: "none",
              borderRadius: "6px",
            }}
          >
            Get started for free
          </button>

        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
