import React from "react";
import '../Login/Login.css';
import { BiSolidUser } from 'react-icons/bi'
import { BiSolidLockAlt } from 'react-icons/bi'
import { MdFacebook } from 'react-icons/md'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'



function Login() {
    return <div className="login-container">
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    < BiSolidUser className="i" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    < BiSolidLockAlt className="i" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#"> Forgot Password?</a>
                </div>

                <button type="submit" className="btn" >Login </button>
                <p className="signup">Or Sign Up Using</p>
                <div className="icons">
                    <a href="#">< MdFacebook id="f-icon" /></a>
                    <a href="#">< AiFillTwitterCircle id="t-icon" /></a>
                    <a href="#">< AiFillGoogleCircle id="g-icon" /></a>
                </div>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Signup</a></p>
                </div>
            </form>
        </div>
    </div>;
}


export default Login;