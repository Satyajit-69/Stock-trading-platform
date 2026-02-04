import React from "react";
import SupportOptions from "./SupportOptions";

function TicketSection() {
  return (
    <div className="container p-3 p-md-4">
      <div className="row g-3 g-md-4">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          {/* Left side dropdowns */}
          <SupportOptions
            heading="Account Opening"
            options={[
              "Resident Individual",
              "Minor",
              "Non Resident India (NRI)",
              "Company, Partnership, HUF and LLP",
              "Glossary",
            ]}
          />

          <SupportOptions
            heading="Trading & Orders"
            options={[
              "Placing Orders",
              "Margins",
              "Charges",
              "Corporate Actions",
              "Other FAQs",
            ]}
          />

          <SupportOptions
            heading="Your StockMates Account"
            options={[
              "Your profile",
              "Account modification",
            ]}
          />

          <SupportOptions
            heading="Funds"
            options={[
              "Add money",
              "Withdraw money",
              "Add bank accounts",
              "eMandates",
            ]}
          />

          <SupportOptions
            heading="Console"
            options={[
              "Portfolio",
              "Corporate actions",
              "Funds statement",
              "Reports",
              "Profile",
              "Segments",
            ]}
          />
        </div>

        <div className="col-12 col-lg-4 order-1 order-lg-2">
          <div 
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "100%",
              minHeight: "250px",
            }}
          >
            <img 
              src="/assets/questions-animate.svg" 
              alt="questions_image" 
              className="img-fluid"
              style={{
                maxHeight: "400px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSection;