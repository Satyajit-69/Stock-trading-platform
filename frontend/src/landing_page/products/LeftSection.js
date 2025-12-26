function LeftSection({
  imageUrl,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  // Fallback Unsplash image (finance / trading themed)
  const fallbackImage =
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="container mt-5">
      <div className="row align-items-center p-5">

        {/* Image Section */}
        <div className="col-lg-7 col-12 mb-4 mb-lg-0">
          <img
            src={imageUrl || fallbackImage}
            alt={productName || "Stockmates product"}
            className="img-fluid rounded-4 shadow-sm"
            style={{ paddingLeft: "3rem" }}
          />
        </div>

        <div className="col-lg-1 d-none d-lg-block"></div>

        {/* Content Section */}
        <div className="col-lg-4 col-12 text-muted mt-lg-5">
          <h1 className="fs-2 fw-bold text-dark mb-3">
            {productName || "Stockmates Platform"}
          </h1>

          <p className="mb-4">
            {productDesc ||
              "A modern investing platform built for traders and long-term investors. Track markets, analyze stocks, and invest with confidence — all in one place."}
          </p>

          {/* Action Links */}
          <div className="mb-4">
            <a
              href={tryDemo || "/demo"}
              className="text-decoration-none fw-semibold"
            >
              Try Demo &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href={learnMore || "/products"}
              className="ms-4 text-decoration-none fw-semibold"
            >
              Learn More &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Store Badges */}
          <div className="d-flex align-items-center gap-3">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="assets/googlePlayBadge.svg"
                  alt="Get it on Google Play"
                  style={{ height: "42px" }}
                />
              </a>
            )}

            {appStore && (
              <a href={appStore}>
                <img
                  src="assets/appstoreBadge.svg"
                  alt="Download on the App Store"
                  style={{ height: "42px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
