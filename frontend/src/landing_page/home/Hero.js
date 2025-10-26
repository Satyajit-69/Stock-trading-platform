import React from "react";

function Hero() {
  return (
    <div className="container p-5 home-hero mt-5">
      <div className="row text-center">
        <img
          src="assets/homeHero.png"
          alt="Hero-Image"
          style={{ maxHeight: "500px", width: "100%" }}
        />

                <h1 className="mt-5 fs-2">Invest in everything</h1>
                <p className="fs-6 p-2">Online platforms to Invest in stocks , derivatives , mutual funds , ETFs , bonds , and more</p>
                <button className="btn btn-primary p-2 fs-5 " style={{width:"20%" , margin : '0 auto' , backgroundColor : '#387ED1' , fontWeight : '600'} }>Sign up for free </button>

            </div>
          </div>
     );
}

export default Hero;
