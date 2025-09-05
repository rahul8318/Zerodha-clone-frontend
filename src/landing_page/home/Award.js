import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Award"
            className="img-fluid"
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-3">Largest Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in.
          </p>
          <div className="row">
            <div className="col-6">
              <ul >
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul >
                <li className="mb-2">Stocks & IPOs</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-5"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
