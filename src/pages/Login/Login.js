import React from "react";
import '../Login/Login.css';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { BiSolidUser } from 'react-icons/bi'
import { BiSolidLockAlt } from 'react-icons/bi'
import { MdFacebook } from 'react-icons/md'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";



function Login() {

    const history = useNavigate()

    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then(data => {
            console.log(data, "authData")
            history("/")
        })

    }


    return <div className="login-container">
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    < BiSolidUser className="i" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    < BiSolidLockAlt className="i" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#"> Forgot Password?</a>
                </div>

                <button type="submit" className="btn" >Login </button>
                <p className="signup">Or Signup Using</p>
                <div className="icons">
                    <div className="socialmedia"> <a href="#">< MdFacebook id="f-icon" /></a></div>
                    <div className="socialmedia"><a href="#">< AiFillTwitterCircle id="t-icon" /></a></div>
                    <div className="socialmedia"><a href="#">< AiFillGoogleCircle id="g-icon" /></a></div>
                </div>

                <div className="register-link">
                    <p>Don't have an account? <a href="/signup">Signup</a></p>
                </div>
            </form>
        </div>
    </div>;
}


export default Login;