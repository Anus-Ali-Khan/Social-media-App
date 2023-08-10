import React from "react";
import "../CreatePost/Cpnav.css";
import { Link } from "react-router-dom";
import { clearUser } from "../../components/users";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Cpnav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <div className="nav">
      <h1 className="logo">SOCIAL INFLUENCER</h1>
      <div className="clicks">
        <p>
          <Link to="/">Home</Link>
        </p>
        <button className="btn" onClick={() => dispatch(clearUser())}>
          <Link to="/">Signout</Link>
        </button>
      </div>
    </div>
  );
}

export default Cpnav;
