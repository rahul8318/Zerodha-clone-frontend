import React from "react";
function Team() {
  return (  
   <div className="container">
      <div className="row p-3   border-top">
        <h1 className="text-center fs-2 mt-5">
          People
        </h1>
      </div>
      <div className="row p-3  text-muted " style={{fontSize:"1.2em", lineHeight:"1.8"}}>
       <div className="col-6 p-5 text-center">
       <img src="media/images/nithinKamath.jpg" alt="team" className="img-fluid" style={{borderRadius:"100%", height:"60%",marginLeft:"40%"}} />
        <h3 className="text-center mt-3" style={{marginLeft:"40%"}}>Nithin Kamath</h3>
        <h5 className="text-center text-muted"style={{marginLeft:"40%"}}>Founder & CEO</h5>
       </div>
       <div className="col-6 p-5 " style={{fontSize:"1em",}}>
        <p>
         Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
        </p>
        <p>
        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
        </p>
        <p>Playing basketball is his zen.</p>
        <p>Connect on<a href="#" style={{color:"#007bff", textDecoration:"none"}}> Homepage</a> / <a href="#"style={{color:"#007bff", textDecoration:"none"}}>TradingQnA</a> / <a href="#"style={{color:"#007bff", textDecoration:"none"}}>Twitter</a></p>
       </div>
      </div>
    </div>
  );
}

export default Team;