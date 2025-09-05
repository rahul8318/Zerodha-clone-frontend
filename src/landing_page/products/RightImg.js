import React from "react";

function RightImg({ imageURL, producName, productDesc, learnMore }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Left */}
        <div className="col-md-6 mb-4 mb-md-0 ps-md-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
            {producName}
          </h2>
          <p
            className="text-muted mb-4"
            style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
          >
            {productDesc}
          </p>
          <a
            href={learnMore}
            className="fw-semibold"
            style={{ color: "#387ed1", textDecoration: "none", fontSize: "1rem" }}
          >
            {learnMore}
          </a>
        </div>

        {/* Image Right */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={producName}
            className="img-fluid"
           
          />
        </div>
      </div>
    </div>
  );
}

export default RightImg;
