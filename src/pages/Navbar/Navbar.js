import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { BsSearch } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearUser } from "../../components/users";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <div className="navbar">
      <nav className="header">
        <input type="checkbox" id="chk1" />
        <div className="logo">
          <h1>Social Influencer</h1>
        </div>
        <div className="search-box">
          <input type="text" name="search" id="srch" placeholder="Search" />
          <button type="submit">
            <BsSearch />
          </button>
        </div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          {!user.currentUser.hasOwnProperty("id") ? (
            <>
              <li>
                <Link to="/login">Login </Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                onClick={() => {
                  dispatch(clearUser());
                }}
              >
                SignOut
              </Link>
            </li>
          )}
          <li>
            <Link to="/createpost">createpost </Link>
          </li>
          <li className="icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
        </ul>
        <div className="menu">
          <label htmlFor="chk1">
            <FaBars />
          </label>
        </div>
      </nav>
      <div className="Msg">
        <h1>Lets signup and start chat with the world</h1>
      </div>
    </div>
  );
}

export default Navbar;
