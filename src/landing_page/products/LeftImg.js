import React from "react";


function LeftImg({ imageURL, producName, productDesc, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <section className="product-section left-image-section">
      <div className="product-container">
        {/* Image Left */}
        <div className="product-image-wrapper">
          <img
            src={imageURL}
            alt={producName}
            className="product-image"
          />
        </div>

        {/* Content Right */}
        <div className="product-content-wrapper">
          <h2 className="product-title">{producName}</h2>
          <p className="product-description">{productDesc}</p>

          {/* Action Links */}
          <div className="action-links">
            {tryDemo && (
              <a href={tryDemo} className="action-link demo-link">
                {tryDemo}
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="action-link learn-link">
                {learnMore}
              </a>
            )}
          </div>

          {/* Store Badges - FIXED PATHS */}
          {(googlePlay || appStore) && (
            <div className="store-badges">
              {googlePlay && (
                <a href={googlePlay} className="store-link">
                  <img
                    src="/media/images/googlePlayBadge.svg"
                    alt="Get it on Google Play"
                    className="store-badge"
                  />
                </a>
              )}
              {appStore && (
                <a href={appStore} className="store-link">
                  <img
                    src="/media/images/appstoreBadge.svg"
                    alt="Download on the App Store"
                    className="store-badge"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LeftImg;