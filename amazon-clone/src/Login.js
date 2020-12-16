import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in
                history.push("/")
            })
            .catch((error) => alert(error.message))
    }

    const register = (event) => {
        event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Create accounf and logged in
                history.push("/")
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h2 className="login__heading">Sign-In</h2>
                <form className="login__form">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" />

                    <button onClick={login} type="submit">Submit</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's
                <a href="#">Conditions of Use and Privacy Notice.</a>
                </p>
                <button onClick={register} className="login__createAccount">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login;
