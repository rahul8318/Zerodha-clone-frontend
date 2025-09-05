import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center pricing-hero-section p-5 mt-5 ">
        <h1 className="mb-4 fs-2 mt-5">Charges</h1>
        <p className="fs-5 mb-4 text-muted">
          List of all charges and taxes
        </p>
        <div className="col-4 mt-5">
          <img src="media/images/pricing0.svg" alt="" className="img-fluid" />
          <h1 className="fs-2">Free equity delivery</h1>
          <p className="fs-6 mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/other-trades.svg" alt="" className="img-fluid" />
          <h1 className="fs-2">Intraday and F&O trades</h1>
          <p className="fs-6 mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades4 </p>
        </div>
        <div className="col-4 mt-5">
           <img src="media/images/pricing0.svg" alt="" className="img-fluid" />
          <h1 className="fs-2">Free direct MF</h1>
          <p className="fs-6 mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;