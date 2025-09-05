import React from "react";
function Hero() {
  return ( 
    <div className="container p-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero" className="hero-image mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="fs-5 mt-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="p-2 btn btn-primary fs-5 mt-4" style={{width:"20%", margin:"0 auto",backgroundColor:"#387ed1"}}>Sign up for free</button>
      </div>
    </div>
   );
}

export default Hero;