import React from "react";
import SupportOptions from "./SupportOptions";

function TicketSection() {
  return (
    <div className="container p-4 ">
      <div className="row">
        <div className="col-8">
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
            heading="Your Zerodha Account"
            options={[
              "Your profile",
              "Account modification",
              "Client Master Report (CMR) and Depository Participant (DP)",
              "Nomination",
              "Transfer and conversion of securities",
            ]}
          />

          <SupportOptions
            heading="Kite"
            options={[
              "IPOS",
              "Trading FAQs",
              "Margin Trading Faculty (MTF) and Margins ",
              "Chat and orders",
              "Alret and Nudges",
              "General",
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

          <SupportOptions
            heading="Coin"
            options={[
              "Mutual Funds",
              "National Pension Scheme (NPS)",
              "Fixed Deposit (FD)",
              "Features on Coin",
              "Payments and Orders",
              "General",
            ]}
          />
        </div>

        <div className="col-4 ">
          {/* Right side links */}

          <div
            className="fandq p-3 mb-4 "
            style={{
              backgroundColor: "artyellow",
              borderLeft: "10px solid orange ",
            }}
          >
            <ul className="">
              <li
              className="mb-2">
                {" "}
                <a href="./">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
              <li>
                <a href="./" className="mt-4">
                  F&Q contract expiry day changes{" "}
                </a>
              </li>
            </ul>
          </div>

          <div
            style={{
              borderRadius: "8px",
            }}
          >
            <h5 style={{backgroundColor : '#e5e1e1ff', padding : '1rem' , fontSize : '1.2rem' , fontWeight : 'bold' , fontFamily : 'Nunito' }}>Quick Links</h5>
            <ol style={{ padding : 'auto' }}>
              <li>
                <div style={{backgroundColor : 'white'}}>
                    <a href="/account-opening">Track account opening</a>
                </div>
               
              </li>
              <li>
                  <div style={{backgroundColor : 'white'}}>
                    <a href="/segment-activation">Track segment activation</a>
                </div>
                
              </li>
              <li>
                  <div style={{backgroundColor : 'white'}}>
                    <a href="/intraday-margins">Intraday margins</a>

                </div>
             
              </li>
              <li>
                  <div style={{backgroundColor : 'white'}}>

                <a href="/kite-manual">Kite user manual</a>
                </div>
                
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSection;
