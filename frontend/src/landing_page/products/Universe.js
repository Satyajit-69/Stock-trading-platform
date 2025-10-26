

function ProductsUniverse() {
  return (
    <div className="container mt-3">
      <div className="row text-center text-muted p-3">
        <p className="fs-4">
          Want to know more about our technology stack ? Check out the{" "}
          <a href="./" className="text-decoration-none">
            Zerodha.tech
          </a>{" "}
          blog
        </p>

        <h4>The Zerodha Universe</h4>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* First Row */}
      <div className="row text-center text-muted">
        <div className="col-md-4 p-5">
          <img src="assets/zerodhaFundhouse.png" alt="" className="partner-logo" />
          <p className="mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img src="assets/sensibullLogo.svg" alt="" className="partner-logo"  style={{maxHeight : '20rem'}}/>
          <p className="mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img src="assets/tijori.svg" alt="" className="partner-logo" />
          <p className="mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row text-center text-muted">
        <div className="col-md-4 p-5">
          <img src="assets/streakLogo.png" alt="" className="partner-logo" />
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img src="assets/smallcaseLogo.png" alt="" className="partner-logo" />
          <p className="mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 p-5">
          <img src="assets/dittoLogo.png" alt="" className="partner-logo" />
          <p className="mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling
          </p>
        </div>
      </div>

      <div className="text-center mb-4">
        <button
          className="btn btn-primary mt-3 p-2 fs-5"
          style={{
            width: "20%",
            margin: "0 auto",
            backgroundColor: "#387ED1",
            fontWeight: "600",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default ProductsUniverse;
