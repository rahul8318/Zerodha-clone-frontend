import React from "react";

function LeftImg({ imageURL, producName, productDesc, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Left */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={imageURL}
            alt={producName}
            className="img-fluid"
            style={{ maxHeight: "420px", objectFit: "contain" }}
          />
        </div>

        {/* Text Right */}
        <div className="col-md-6 ps-md-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
            {producName}
          </h2>
          <p
            className="text-muted mb-4"
            style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
          >
            {productDesc}
          </p>

          {/* Links */}
          <div className="mb-4">
            <a
              href={tryDemo}
              className="fw-semibold me-4"
              style={{ color: "#387ed1", textDecoration: "none", fontSize: "1rem" }}
            >
              Try demo →
            </a>
            <a
              href={learnMore}
              className="fw-semibold"
              style={{ color: "#387ed1", textDecoration: "none", fontSize: "1rem" }}
            >
              Learn more →
            </a>
          </div>

          {/* Store Badges */}
          <div className="d-flex align-items-center">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a href={appStore} className="ms-3">
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImg;
