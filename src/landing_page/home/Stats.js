import React from "react";

function Stats() {
  return (
    <div className="container py-5 mb-5">
      <div className="row align-items-center">
        {/* Left Column - Text */}
        <div className="col-md-6 p-4 mt-5">
          <h1 className="fs-2 text-dark mb-5">Trust with confidence</h1>
          <h2 className="fs-4 mb-3">Customer-first always</h2>
          <p className="text-secondary mb-4">
            That’s why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, 
            making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4  mb-2">No spam or gimmicks</h2>
          <p className="text-secondary mb-4">
            No gimmicks, spam, “gamification”, or annoying push notifications. High quality apps that you 
            use at your pace, the way you like.
          </p>

          <h2 className="fs-4  mb-2">The Zerodha universe</h2>
          <p className="text-secondary mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored 
            services specific to your needs.
          </p>

          <h2 className="fs-4  mb-2">Do better with money</h2>
          <p className="text-secondary">
            With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions, 
            but actively help you do better with your money.
          </p>
        </div>

        {/* Right Column - Image & Links */}
        <div className="col-md-6 p-4 text-center mb-3">
          <img
            src="media/images/ecosystem.png"
            alt="Stats"
            className="img-fluid mb-4"
            style={{ borderRadius: "10px", width: "100%", maxWidth:"500px" }}
          />

          <div className="d-flex justify-content-center gap-4 mt-3 flex-wrap">
            <a href="#" className="text-decoration-none text-primary fw-semibold">
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-decoration-none text-primary fw-semibold mb-3">
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
