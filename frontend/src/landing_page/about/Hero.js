import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Hero Heading */}
      <div className="row p-5 mt-5 border-bottom hero-fade-up">
        <h1 className="text-center hero-title">
          Simplifying stock market insights.
          <br />
          Building technology for smarter decisions.
        </h1>

        {/* CTA Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a  href ="/"className="btn hero-btn-primary">Get Started</a>
          <a className="btn hero-btn-secondary">View Project</a>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="row p-5 mt-5 hero-fade-in">
        {/* Left Card */}
        <div className="col-md-6 mb-4">
          <div className="hero-card">
            <p>
              <strong>Stock Mates</strong> was created with a simple vision — to
              make stock market information easier to understand and more
              accessible for everyone. We focus on clarity, usability, and
              meaningful insights rather than overwhelming users with noise.
            </p>
            <p>
              By combining modern web technologies with a clean product-first
              mindset, Stock Mates helps users track trends, explore market data,
              and build confidence in their financial journey.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="col-md-6 mb-4">
          <div className="hero-card">
            <p>
              The platform is designed as a continuously evolving product,
              prioritizing performance, scalability, and user experience. Every
              feature is built with real-world usage in mind.
            </p>
            <p>
              Stock Mates is not just about tracking numbers — it’s about enabling
              better decisions through thoughtful design, reliable data flow, and
              intuitive interfaces.
            </p>
            <p className="hero-highlight">
              📊 Built for learners, traders, and curious minds.
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        /* Heading */
        .hero-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.2;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 6s ease infinite;
        }

        /* Cards */
        .hero-card {
          height: 100%;
          padding: 2rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(102, 126, 234, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          line-height: 1.9;
          font-size: 1.1em;
          transition: all 0.35s ease;
        }

        .hero-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(102, 126, 234, 0.25);
        }

        .hero-highlight {
          margin-top: 1rem;
          font-style: italic;
          color: #667eea;
          font-weight: 600;
        }

        /* Buttons */
        .hero-btn-primary {
          padding: 12px 28px;
          border-radius: 999px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
          transition: all 0.3s ease;
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
        }

        .hero-btn-secondary {
          padding: 12px 28px;
          border-radius: 999px;
          font-weight: 600;
          color: #667eea;
          background: transparent;
          border: 2px solid #667eea;
          transition: all 0.3s ease;
        }

        .hero-btn-secondary:hover {
          background: #667eea;
          color: #fff;
        }

        /* Animations */
        .hero-fade-up {
          animation: fadeUp 1s ease forwards;
        }

        .hero-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export default Hero;
