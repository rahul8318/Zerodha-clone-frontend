import React from "react";
function Hero() {
  return (
    <div className="container mt-5 border-bottom mb-5 pb-5">
      <div className="text-center mb-4 mt-5">
      <h1 className=" fs-3 mt-5">Zerodha Products</h1> 
      <p className="fs-5 mt-3">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="" style={{fontSize:"18px"}}> 
        Check out our <a href="/products" style={{textDecoration:"none"}}>investment offerings →</a>
      </p>
    </div>
    </div>
    );
}

export default Hero;