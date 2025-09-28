import React from "react";


function Broker() {
  return ( 
      <section className="broker-section">
        <div className="broker-container">
          <div className="broker-content">
            <div className="broker-main">
              <h3 className="broker-title">Brokerage calculator</h3>
              <ul className="broker-list">
                <li>Call & Trade and RMS charges are not included in the calculation.</li>
                <li>Digital contract notes will be sent via email.</li>
                <li>Physical contract notes will be sent via courier.</li>
                <li>For NRI clients, contract notes will be sent via email.</li>
                <li>For NRI accounts (PIS), 0.5% or ₹200 per executed order for equity delivery trades.</li>
                <li>If the account is inactive for a year, the account will be closed.</li>
              </ul>
            </div>
            
            <div className="broker-sidebar">
              <h4 className="sidebar-title">List of charges</h4>
              <div className="charges-list">
                <div className="charge-item">
                  <span className="charge-label">Equity Delivery</span>
                  <span className="charge-value">0%</span>
                </div>
                <div className="charge-item">
                  <span className="charge-label">Equity Intraday</span>
                  <span className="charge-value">0.01%</span>
                </div>
                <div className="charge-item">
                  <span className="charge-label">Equity Futures</span>
                  <span className="charge-value">0.01%</span>
                </div>
                <div className="charge-item">
                  <span className="charge-label">Equity Options</span>
                  <span className="charge-value">₹20 per lot</span>
                </div>
                <div className="charge-item">
                  <span className="charge-label">Currency Futures</span>
                  <span className="charge-value">0.01%</span>
                </div>
                <div className="charge-item">
                  <span className="charge-label">Currency Options</span>
                  <span className="charge-value">₹20 per lot</span>
                </div>
                <div className="charge-item">
                  <span className="charge-label">Commodity Futures</span>
                  <span className="charge-value">0.01%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   );
}

export default Broker;