import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
     <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p className="fs-5 mt-3">The page you are looking for does not exist.</p>
        <Link to="/" className="p-2 btn btn-primary fs-5 mt-4" style={{width:"20%", margin:"0 auto",backgroundColor:"#387ed1", textDecoration:"none", color:"white"}}>Go to Home</Link>
      </div>
    </div>
  )
}

export default NotFound