import React from "react";
function Education() {
  return (  
   <div className="container mt-5">
    <div className="row">
      <div className="col-6">
        <img src="media/images/education.svg" alt="Education" style={{width:"70%"}} />
      </div>
      <div className="col-6 mt-5">
        <h1 className="fs-2">Free and open market education</h1>
        <p className="text-muted mt-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a href="#" className="text-decoration-none text-primary fw-semibold mb-3">
              Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          <p className="text-muted mt-3">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="#" className="text-decoration-none text-primary fw-semibold mt-3">
              TradingQ&A  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
      </div>
    </div>
   </div>
  );
}

export default Education;