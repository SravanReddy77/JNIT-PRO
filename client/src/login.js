import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "./Navigation";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        try {
            // Make an API call to the login endpoint
            const response = await axios.post("http://localhost:8080/login", {
                email,
                password,
            });

            // Assuming a successful login, update state or perform necessary actions
            console.log("Login successful:", response.data);

            // Redirect to the landing page
            navigate("/landing");

        } catch (error) {
            // Handle login error
            console.error("Login failed", error.response.data);
            setLoginError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div>
            <NavbarComponent />
            <h1>Login Page</h1>
            <form className= "login-form">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
                    {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            </form>
        </div>
    );
};

export default Login;
