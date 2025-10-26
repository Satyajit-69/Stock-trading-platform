import React from "react";


function Stats() {
    return ( 
        <div className="container mt-5 p-3 ">
            <div className="row">
                
                {/* Left Column */}
                <div className="col-lg-5  left-brokerage pl-3 ">
                    <h2 className="fw-bold fs-4 mb-5">Trust with confidence</h2>

                    <h3 className="mb-2 mt-4">Customer first always</h3>
                    <p>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity 
                        investments, making us India’s largest broker; contributing to 15% of daily 
                        retail exchange volumes in India.
                    </p>

                    <h3 className="mb-2 mt-4">No Spam or gimmicks</h3>
                    <p>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps 
                        that you use at your pace, the way you like.<a href="./" className="text-decoration-none"> Our philosophies</a>.
                    </p>

                    <h3 className=" mb-2 mt-4">The Zerodha universe</h3>
                    <p>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups 
                        offer you tailored services specific to your needs.
                    </p>

                    <h3 className=" mb-2 mt-4">Do better with money</h3>
                    <p>
                        With initiatives like <a href="./" className="text-decoration-none">Nudge</a> and <a href="./" className="text-decoration-none">Kill Switch</a>, we don't just 
                        facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>
                
                {/* Right Column */}
                <div className="col-lg-7  right-brokerage mb-4 align-items-center">
                    <img 
                        src="assets/ecosystem.png" 
                        alt="ecosystem" 
                        className="img-fluid object-fit-contain" 
                        style={{ width :'100%' , maxHeight : '600px' }}
                    />
                    <div className="links text-center mt-3">
                           <a href="./" className="ml-2">Explore our products &nbsp;<i class="fa-solid fa-arrow-right"></i> </a>  &nbsp; &nbsp;
                    <a href="./">Try Kite Demo &nbsp;<i class="fa-solid fa-arrow-right"></i> </a>
                    </div>
                 
                </div>
            </div>

            <img 
                  src="assets/pressLogos.png" 
                  alt="presslogo.png"  
                  className="mt-2 mb-5 d-flex justify-content-center mx-auto" 
                  style={{ width: "80%", padding: "4rem" }}
                  />
        </div>
     );
}

export default Stats;