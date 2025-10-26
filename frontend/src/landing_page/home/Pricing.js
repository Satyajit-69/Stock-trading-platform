import React from 'react';

function Pricing() {
    return (
        <>
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <h3 className="mt-2">Unbeatable pricing</h3>
                        <p className="mt-4">
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                        <a href="./" className="text-decoration-none">
                            See pricing &nbsp;<i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    {/* Right Section */}
                    <div className="col-lg-7 d-flex justify-content-around">
                        <div className="text-center mx-2">
                            <img src="assets/pricing0.svg" alt="Free account opening" style={{ width: "100px", height: "100px" }} />
                            <p className="mt-2">Free account opening</p>
                        </div>
                        <div className="text-center mx-2">
                            <img src="assets/pricing0.svg" alt="Free equity delivery" style={{ width: "100px", height: "100px" }} />
                            <p className="mt-2">Free equity delivery and direct mutual funds </p>
                        </div>
                        <div className="text-center mx-2">
                            <img src="assets/intradayTrades.svg" alt="Intraday and F&O" style={{ width: "100px", height: "100px" }} />
                            <p className="mt-2">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;