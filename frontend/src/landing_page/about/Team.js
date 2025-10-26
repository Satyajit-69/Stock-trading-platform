function TeamSection() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top ">
        <h1 className="f-6 text-center">People</h1>
      </div>

      <div
        className="row p-5 mt-5 broder-top text-muted"
        style={{ lineHeight: "1.9", fontSize: "1.2em" }}
      >
        <div className="col-6 text-center ">
          <img
            src="assets/nithinKamath.jpg"
            style={{ borderRadius: "50%" }}
            alt="nitin_image"
          />
          <h4 className="mb-3 mt-3"> Nithin Kamath</h4>
          <p>Founder , CEO</p>
        </div>
        <div className="col-6 text-center p-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>Playing basketball in is zen</p>
          <p>Connect to &nbsp;
              <a href="./" className="text-decoration-none">HomePage</a >  &nbsp; / &nbsp;
              <a href="./" className="text-decoration-none">TradingQ&A</a> &nbsp;  / &nbsp;
              <a href="./" className="text-decoration-none">Twitter</a>
         </p>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
