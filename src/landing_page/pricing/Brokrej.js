import React from "react";
function Broker() {
  return ( 
      <div className="container">
        <div className="row p-5">
          <div className="col-8">
            <h4 style={{ color: "#3d7ac5ff" }}>Brokerage calculator</h4>
            <ul className="mt-3" style={{ fontSize: "1rem", lineHeight: "2" }}>
              <li
              >
               Call & Trade and RMS charges are not included in the calculation.
              </li>
              <li
              >
               Digital contract notes will be sent via a email.
              </li>
              <li>Physical contract notes will be sent via a email.</li>
              <li>For NRI clients, contract notes will be sent via a email.</li>
              <li>For NRI accounts(PIS),0.5% or 200 per executed order for equity delivery trades.</li>
              <li>If the account is inactive for a year, the account will be closed.</li>
            </ul>
          </div>
          <div className="col-4">
            <h4 style={{ color: "#528dd4ff" }}>List of charges</h4>
          </div>
        </div>
      </div>
   );
}

export default Broker;