import React from "react";


function RightImg({ imageURL, producName, productDesc, learnMore }) {
  return (
    <section className="product-section right-image-section">
      <div className="product-container">
        {/* Content Left */}
        <div className="product-content-wrapper">
          <h2 className="product-title">{producName}</h2>
          <p className="product-description">
            {productDesc}
          </p>
          {learnMore && (
            <div className="action-links">
              <a href={learnMore} className="action-link learn-link">
                {learnMore}
              </a>
            </div>
          )}
        </div>

        {/* Image Right */}
        <div className="product-image-wrapper">
          <img
            src={imageURL}
            alt={producName}
            className="product-image"
          />
        </div>
      </div>
    </section>
  );
}

export default RightImg;