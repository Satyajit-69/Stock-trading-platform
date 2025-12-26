import { useNavigate } from "react-router-dom";
import { ArrowRight, LogIn } from "lucide-react";

function ProductsUniverse() {
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem("token");

  const handleGetStarted = () => {
    if (isAuthenticated) {
    window.location.href = "http://localhost:5173";
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="row text-center text-muted p-4">
        <p className="fs-5">
          Curious about how Stockmates is built? Explore our{" "}
          <a href="/tech" className="text-decoration-none fw-semibold">
            engineering & product blog
          </a>
        </p>

        <h4 className="fw-bold text-dark mt-3">
          The Stockmates Ecosystem
        </h4>

        <p className="mt-3">
          Extend your investing experience with tools and platforms built around
          collaboration, insights, and smart decision-making.
        </p>
      </div>

      {/* First Row */}
      <div className="row text-center text-muted">
        <div className="col-md-4 p-5">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80"
            alt="Stockmates Core"
            className="img-fluid rounded-3 shadow-sm"
          />
          <p className="mt-3">
            <strong className="text-dark">Stockmates Core</strong> — a fast,
            secure trading engine designed for real-time execution and portfolio
            tracking.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img
            src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=400&q=80"
            alt="Stockmates Analytics"
            className="img-fluid rounded-3 shadow-sm"
          />
          <p className="mt-3">
            <strong className="text-dark">Stockmates Analytics</strong> helps you
            analyze stocks, sectors, trends, and market sentiment with clarity.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img
            src="https://plus.unsplash.com/premium_photo-1661783001655-46a02e887842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D"
            alt="Stockmates Research"
            className="img-fluid rounded-3 shadow-sm"
          />
          <p className="mt-3">
            <strong className="text-dark">Stockmates Research</strong> delivers
            simplified insights, long-term fundamentals, and AI-assisted market
            signals.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row text-center text-muted">
        <div className="col-md-4 p-5">
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=400&q=80"
            alt="Strategy Builder"
            className="img-fluid rounded-3 shadow-sm"
          />
          <p className="mt-3">
            <strong className="text-dark">Strategy Builder</strong> lets you
            simulate, test, and refine trading strategies — no coding required.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=400&q=80"
            alt="Social Investing"
            className="img-fluid rounded-3 shadow-sm"
          />
          <p className="mt-3">
            <strong className="text-dark">Social Investing</strong> allows you to
            follow investors, share ideas, and learn from real portfolios.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img
            src="https://images.unsplash.com/photo-1573068111653-f18bef611c8a?w=600&auto=format&fit=crop&q=60"
            alt="Risk & Safety"
            className="img-fluid rounded-3 shadow-sm"
          />
          <p className="mt-3">
            <strong className="text-dark">Risk & Safety Tools</strong> help you
            manage exposure, track losses, and invest responsibly.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mb-5">
        <button
          onClick={handleGetStarted}
          className="btn mt-4 px-5 py-3 fs-5 fw-semibold d-inline-flex align-items-center gap-2"
          style={{
            backgroundColor: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "12px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {isAuthenticated ? "Go to Dashboard" : "Get started free"}
          {isAuthenticated ? (
            <ArrowRight size={20} />
          ) : (
            <LogIn size={20} />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductsUniverse;
