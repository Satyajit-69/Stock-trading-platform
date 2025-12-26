function HeroProducts() {
  return (
    <div className="container text-muted border-bottom">
      <div
        className="row text-center"
        style={{ marginTop: "8rem", fontFamily: "Arial" }}
      >
        <h1 className="fs-3 fw-bold text-dark">
          Stockmates Products
        </h1>

        <h3 className="mt-2 fs-5 text-secondary">
          Smart, modern, and community-driven investing tools
        </h3>

        <p className="mt-3 mb-5">
          Explore our{" "}
          <a href="/products" style={{ textDecoration: "none" }}>
            investment offerings&nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default HeroProducts;
