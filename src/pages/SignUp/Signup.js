import React from "react";
import '../SignUp/Signup.css';

function Signup() {

    return <div className="login-container">
        <div className="wrapper">
            <form action="">
                <h1>Create Account </h1>
                <div className="input-box">
                    <input type="text" placeholder="First Name" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />I accept all the terms & conditions</label>
                </div>
                <button type="submit" className="btn" >Submit</button>
                <div className="register-link">
                    <p>Already have an account? <a href="#">Login here</a></p>
                </div>
            </form>
        </div>

    </div>;
}

export default Signup;