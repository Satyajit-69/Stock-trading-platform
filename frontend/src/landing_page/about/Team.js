import React, { useEffect, useRef, useState } from "react";

function TeamSection() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) =>
        observer.disconnect()
      );
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="container">
      {/* Title Section */}
      <div
        ref={(el) => (sectionRefs.current["title"] = el)}
        className={`row p-5 mt-5 border-top transition-all duration-700 ${
          isVisible.title
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h1
          className="text-center fw-bold display-4"
          style={{
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          People
        </h1>
      </div>

      {/* Content Section */}
      <div
        className="row p-5 mt-5 text-muted"
        style={{ lineHeight: "1.9", fontSize: "1.1em" }}
      >
        {/* Left Side - Avatar */}
        <div
          ref={(el) => (sectionRefs.current["avatar"] = el)}
          className={`col-lg-6 d-flex align-items-center justify-content-center mb-4 mb-lg-0 transition-all duration-700 ${
            isVisible.avatar
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="text-center">
            <div
              className="position-relative"
              onMouseMove={handleMouseMove}
              style={{
                width: "320px",
                height: "320px",
                margin: "0 auto",
                perspective: "1000px",
              }}
            >
              <div
                className="position-relative w-100 h-100 rounded-4 overflow-hidden shadow-lg transition-transform duration-300"
                style={{
                  transform: `rotateY(${
                    (mousePosition.x - 50) / 10
                  }deg) rotateX(${
                    -(mousePosition.y - 50) / 10
                  }deg)`,
                  transformStyle: "preserve-3d",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  boxShadow:
                    "0 20px 60px rgba(102, 126, 234, 0.4)",
                }}
              >
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)
                    `,
                    animation: "float 6s ease-in-out infinite",
                  }}
                ></div>

                <div className="d-flex align-items-center justify-content-center h-100 position-relative">
                  <div className="text-center">
                    <div
                      className="display-1 fw-bold text-white mb-3"
                      style={{
                        fontSize: "120px",
                        textShadow:
                          "0 10px 30px rgba(0,0,0,0.3)",
                        animation:
                          "pulse 3s ease-in-out infinite",
                      }}
                    >
                      SS
                    </div>
                  </div>
                </div>

                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                    animation:
                      "shine 3s ease-in-out infinite",
                  }}
                ></div>
              </div>
            </div>

            <h4
              className="mb-2 mt-4 fw-bold"
              style={{ color: "#2c3e50" }}
            >
              Satyajit Sahoo
            </h4>
            <p className="text-muted mb-0">
              Developer • Stock Mates
            </p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div
          ref={(el) => (sectionRefs.current["content"] = el)}
          className={`col-lg-6 d-flex flex-column justify-content-center transition-all duration-700 ${
            isVisible.content
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
          }`}
        >
          <div className="p-4">
            <p className="mb-4">
              Stock Mates is a platform built to simplify stock market
              insights and make financial learning more accessible.
              The goal is to help users track trends, understand
              market movements, and make informed decisions through
              a clean and intuitive experience.
            </p>

            <p className="mb-4">
              The project focuses on combining modern web technologies
              with scalable backend architecture, emphasizing
              performance, usability, and real-world applicability.
              Stock Mates is designed as a growing product, not just
              a demo project.
            </p>

            <div
              className="p-3 rounded-3 mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
                border:
                  "1px solid rgba(102, 126, 234, 0.2)",
              }}
            >
              <p
                className="mb-0 fst-italic"
                style={{ color: "#667eea" }}
              >
                📊 Built with a product-first mindset, focusing on
                clarity over complexity
              </p>
            </div>

            <div>
              <p
                className="mb-2 fw-semibold"
                style={{ color: "#2c3e50" }}
              >
                Connect:
              </p>
              <div className="d-flex flex-wrap gap-2">
                <a href="./" className="btn btn-primary">
                  Portfolio
                </a>
                <a href="./" className="btn btn-dark">
                  GitHub
                </a>
                <a href="./" className="btn btn-info text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}

export default TeamSection;
