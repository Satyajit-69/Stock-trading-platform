import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

function SupportHero() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [placeholder, setPlaceholder] = useState("How do I open my account");
  
  const placeholders = [
    "How do I open my account",
    "How do I activate F&O",
    "How to transfer funds",
    "How to download tax reports",
    "How to add nominee",
  ];

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length;
      setPlaceholder(placeholders[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
      // Add your search logic here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="container mt-4 p-5"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        borderRadius: "24px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h1
            className="fw-bold mb-2"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "42px",
              background: "linear-gradient(135deg, #1e293b 0%, #387ED1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Support Portal
          </h1>
          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              fontFamily: "Nunito, sans-serif",
              margin: 0,
            }}
          >
            How can we help you today?
          </p>
        </div>
        <button
          className="btn"
          onClick={handleSearch}
          style={{
            background: "linear-gradient(135deg, #387ED1 0%, #60a5fa 100%)",
            color: "white",
            padding: "12px 28px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "15px",
            fontFamily: "Nunito, sans-serif",
            border: "none",
            boxShadow: "0 4px 12px rgba(56, 126, 209, 0.3)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(56, 126, 209, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(56, 126, 209, 0.3)";
          }}
        >
          <SearchIcon sx={{ fontSize: "20px" }} />
          Search
        </button>
      </div>

      <div
        className="position-relative"
        style={{
          marginTop: "32px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            color: isFocused ? "#387ED1" : "#94a3b8",
            transition: "color 0.3s ease",
            zIndex: 10,
          }}
        >
          <SearchIcon sx={{ fontSize: "24px" }} />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder={`Search for help... e.g., ${placeholder}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
          style={{
            paddingLeft: "56px",
            paddingRight: "20px",
            paddingTop: "18px",
            paddingBottom: "18px",
            fontSize: "16px",
            borderRadius: "16px",
            border: isFocused ? "2px solid #387ED1" : "2px solid #e2e8f0",
            boxShadow: isFocused
              ? "0 0 0 4px rgba(56, 126, 209, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08)"
              : "0 2px 8px rgba(0, 0, 0, 0.04)",
            transition: "all 0.3s ease",
            fontFamily: "Nunito, sans-serif",
            backgroundColor: "#ffffff",
          }}
        />
        {isFocused && (
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #387ED1, transparent)",
              borderRadius: "2px",
              opacity: 0.6,
            }}
          />
        )}
      </div>

      {/* Quick Tips */}
      <div
        className="mt-4"
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            color: "#64748b",
            fontFamily: "Nunito, sans-serif",
            fontWeight: "500",
          }}
        >
          Popular searches:
        </span>
        {["Account opening", "F&O activation", "Fund transfer", "Tax reports"].map((tag, index) => (
          <span
            key={index}
            onClick={() => setSearchValue(tag)}
            style={{
              padding: "6px 14px",
              backgroundColor: "#f1f5f9",
              color: "#387ED1",
              borderRadius: "20px",
              fontSize: "13px",
              fontFamily: "Nunito, sans-serif",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e0f2fe";
              e.currentTarget.style.borderColor = "#387ED1";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SupportHero;