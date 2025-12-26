import React from "react";

function Education() {
  return (
    <section className="container my-5">
      <div className="row align-items-center p-4">

        {/* Image */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=900&auto=format&fit=crop"
            alt="Learning stock market"
            style={{ width: "75%", borderRadius: "16px" }}
          />
        </div>

        {/* Content */}
        <div className="col-lg-6 education-section">
          <h1 className="mb-3 fs-2 fw-bold">
            Learn markets the Stockmates way
          </h1>

          <p className="mt-3 text-muted">
            Stockmates Learn is a free, open platform designed to help beginners
            and traders understand stock markets, investing, and personal
            finance — from the basics to advanced strategies.
          </p>

          <a href="/learn" className="text-decoration-none fw-semibold">
            Stockmates Learn &nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-4 text-muted">
            Stockmates Community brings investors together to discuss ideas,
            share insights, and learn from real market experiences in a
            collaborative environment.
          </p>

          <a href="/community" className="text-decoration-none fw-semibold">
            Join the community &nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
