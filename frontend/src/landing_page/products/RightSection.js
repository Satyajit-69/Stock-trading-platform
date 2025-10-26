function RightSection({ imageUrl, productName, productDesc, learnMore }) {
  return (
    <div className="container mt-5 p-5 ">
      <div className="row">

        <div className="col-4 p-5 mt-5 ">
          <h1 className="fs-2">{productName}</h1>
          <p>{productDesc}</p>
          <div className="mb-3">
            <a
              href={learnMore}
              style={{ textDecoration: "none"  }}
            >
              {learnMore} &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        


        <div className="col-6 ">
          <img
            src={imageUrl}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
