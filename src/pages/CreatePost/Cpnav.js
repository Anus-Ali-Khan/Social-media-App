import React from "react";
import "../CreatePost/Cpnav.css";
import { Link } from "react-router-dom";

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
