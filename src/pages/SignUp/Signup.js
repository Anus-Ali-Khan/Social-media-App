import React from "react";
import "../SignUp/Signup.css";
import Profilepic from "./profilepic";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const navigate = useNavigate();

  const createUser = async (data) => {
    const userData = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      id: data.user.uid,
      image: state.image,
    };
    await setDoc(doc(db, "users", data.user.uid), userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, state.email, state.password).then(
      async (data) => {
        await createUser(data);
        navigate("/");
      }
    );
  };

  const setImageUrl = (url) => {
    setState({ ...state, image: url });
  };

  return (
    <div className="login-container">
      <div className="sign-up-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Create Account </h1>
          <div className="pic">
            <Profilepic setImageUrl={setImageUrl} />
          </div>

          <div className="signup-input-box">
            <input
              type="text"
              placeholder="First Name"
              value={state.firstName}
              onChange={(e) =>
                setState({ ...state, firstName: e.target.value })
              }
              required
            />
          </div>

          <div className="signup-input-box">
            <input
              type="text"
              placeholder="Last Name"
              value={state.lastName}
              onChange={(e) => setState({ ...state, lastName: e.target.value })}
              required
            />
          </div>

          <div className="signup-input-box">
            <input
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              required
            />
          </div>

          <div className="signup-input-box">
            <input
              type="password"
              placeholder="Create Password"
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
              required
            />
          </div>

          <div className="signup-input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={state.confirmPassword}
              onChange={(e) =>
                setState({ ...state, confirmPassword: e.target.value })
              }
              required
            />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I accept all the terms & conditions
            </label>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>

          <div className="register-link">
            <p>
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
