import React from "react";
import "./Cpnav.css";

function Cpnav() {
  return (
    <div className="nav">
      <h1 className="logo">SOCIAL INFLUENCER</h1>
      <div className="clicks">
        <p>
          <Link to="/">Home</Link>
        </p>
        <button className="btn">Signout</button>
      </div>
    </div>
  );
}

export default Cpnav;
