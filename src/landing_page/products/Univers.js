import React from "react";

function Univers() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <h1 className="text-muted fs-3 mt-4 mb-3">The Zerodha Universe</h1>
        <p
          className="mt-2 mb-5"
          style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Logos grid */}
        <div className="col-4 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
            style={{ maxWidth: "140px", height: "70px", objectFit: "contain" }}
          />
          <p className="mt-3">Thematic Investment platform</p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid"
            style={{ maxWidth: "140px", height: "70px", objectFit: "contain" }}
          />
          <p className="mt-3">Algo & strategy platform</p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid"
            style={{ maxWidth: "140px", height: "70px", objectFit: "contain" }}
          />
          <p className="mt-3">Option trading platform</p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="img-fluid"
            style={{ maxWidth: "140px", height: "70px", objectFit: "contain" }}
          />
          <p className="mt-3">Asset management platform</p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid"
            style={{ maxWidth: "140px", height: "70px", objectFit: "contain" }}
          />
          <p className="mt-3">Bonds trading platform</p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid"
            style={{ maxWidth: "140px", height: "70px", objectFit: "contain" }}
          />
          <p className="mt-3">Insurance</p>
        </div>
      </div>

      {/* Signup button centered */}
      <div className="text-center mt-5">
        <button
          className="btn fs-5 px-4 py-2"
          style={{
            backgroundColor: "#387ed1",
            color: "white",
            borderRadius: "8px",
            fontWeight: "500",
            transition: "0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2a62a6")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#387ed1")}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Univers;
