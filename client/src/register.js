import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import JnitLogo from './JNIT Logo.svg';
import axios from "axios";
import NavbarComponent from "./Navigation";
import {useNavigate} from "react-router-dom";

export default function Register(props) {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState("signin");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerData = () => {
    let formData = {
      dateOfBirth: "2023-06-14T23:00:00.000Z",
      name: name,
      email: email,
      password: password,
      userType: userType,
      username: "sravan",
    };

    axios({
      url: "http://localhost:8080/saveRegister",
      method: "POST",
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
            "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: formData,
    })
        .then((res) => {
          console.log(JSON.stringify(res));
          setRegistrationStatus(true);
          navigate("/landing");
        })
        .catch((err) => {
          console.log(err);
          setRegistrationStatus(false);
          setErrorMessage('Registration failed. Please check your credentials.');
        });
  };


  const handleLogin = async () => {
    console.log("22222222", email, password);
    try {

      // Make a request to the backend for authentication
      const response = await axios.post("http://localhost:8080/saveRegister", {
        email: email,
        password: password,
      });

    console.log("11111111111111111111", response);
      if (response.data) {
        navigate("/landing");
      } else {
        // If the response indicates failure, display an error message
        setErrorMessage(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const renderErrorMessage = () => {
    if (errorMessage) {
      return <div className="alert alert-danger">{errorMessage}</div>;
    }
    return null;
  };

  return (
      <div>
        <NavbarComponent />
        <div className="login">
          <a href="http://localhost:3000/">
            <img src={JnitLogo} className="center" alt="JnitLogo"></img>
          </a>
          <h1>{authMode === "signin" ? "Log In" : "Sign Up"}</h1>
          {renderErrorMessage()}
          <form className="login-form">
            <div className="textbox">
              {authMode === "signup" && (
                  <div className="dropdown-container">
                    <label className="custom-label" htmlFor="dropdown">
                      SignUp:{" "}
                    </label>
                    <select
                        id="dropdown"
                        className="custom-dropdown"
                        onChange={handleUserTypeChange}
                        value={userType}
                    >
                      <option value="" disabled selected>
                        Select an option
                      </option>
                      <option value="ADMIN">Admin</option>
                      <option value="JUNIOR_ADMIN">Junior Admin</option>
                      <option value="SUPER_ADMIN">Senior Admin</option>
                    </select>
                  </div>
              )}
              {authMode === "signup" && (
                  <div className="form-group mt-1">
                    <label className="custom-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Full Name"
                        onChange={handleNameChange}
                        value={name}
                    />
                  </div>
              )}
              <div className="form-group mt-3">
                <label className="custom-label">Email address</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    onChange={handleEmailChange}
                    value={email}
                />
              </div>
              <div className="form-group mt-3">
                <label className="custom-label">Password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter Password"
                    onChange={handlePasswordChange}
                    value={password}
                />
              </div>
              {authMode === "signup" && (
                  <div className="form-group mt-3">
                    <label className="custom-label">Reenter Password</label>
                    <input
                        type="password"
                        value={password}
                        className="form-control mt-1"
                        placeholder="Reenter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
              )}
              <div className="d-grid gap-2 mt-3">

                {authMode === "signup" ? (
                    <button
                    type="button"
                    className="btn btn-primary"
                    onClick={registerData}
                >
                      Submit
                    </button>
                    ) : (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleLogin}
                    >
                      Login
                    </button>
                )}
                <div className="text-center">
                  <div className="custom-label">
                    {authMode === "signup"
                        ? "Already registered? "
                        : "Not registered yet? "}
                    <span className="link-primary" onClick={changeAuthMode}>
                  {authMode === "signup" ? "Login" : "Sign Up"}
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}
