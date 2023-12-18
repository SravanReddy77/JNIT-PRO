import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import JnitLogo from './JNIT Logo.svg';
import { redirect } from "react-router";
import axios from "axios";
import NavbarComponent from "./Navigation";



export default function Register (props) {


  let [authMode, setAuthMode] = useState("signin");

  // const [register, setRegister] = useState({
  //   name:'',
  //   email:'',
  //   password: ''
  // })
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [userType, setUserType] = useState('');

const handleUserTypeChange = (e) => {
  setUserType(e.target.value)
}

const handleNameChange = (e) => {
setName(e.target.value)
} 
const handleEmailChange = (e) => {
  setEmail(e.target.value)
} 
const handlePasswordChange = (e) => {
  setPassword(e.target.value)
}
const registerData = () => {
  let formData = {
    dateOfBirth: "2023-06-14T23:00:00.000Z",
    name : name,
    email: email,
    password: password,
    userType: userType,
    username:"sravan"
  };

  axios({
    url: "http://localhost:8080/saveRegister",
    method: "POST",
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
    data: formData,
})

    .then((res) => {
      console.log(JSON.stringify(res))
    })

    .catch((err) => {
      console.log(err);
    });
}
  function handleSubmit(){
    redirect("./landing")
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
        <div>
          <div className="login">
              <div className="image">
                <a href="http://localhost:3000/">
                  <img src={JnitLogo} className="center" alt="JnitLogo"></img>
                </a>
              </div>
              <h1>Log In</h1>
              <h4>Welcome back!</h4>
              <form className="login-form">
                <div className="textbox">
                  <div className="form-group mt-3">
                    <label className="custom-label">Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="custom-label">Password</label>
                      <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        required
                      />
                  </div>
                  <form className="d-grid gap-2 mt-3" action="./landing">
                      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Login
                      </button>
                  </form>
                  <p className="text-center mt-2">
                    <a className="custom-label" href="./ForgotPassword"> Forgot password?</a>
                  </p>
                  <a className="custom-label">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
                  </a>
                </div>
              </form>
          </div>
        </div>

    )
  }

  return (
    <div>
      <NavbarComponent/>
      <div className="login">
        <a href="http://localhost:3000/">
          <img src={JnitLogo} className="center" alt="JnitLogo"></img>
        </a>
        <h1>Sign Up</h1>
      <form className="login-form">
        <div className="textbox">
          <div className="dropdown-container">
            <label className="custom-label" htmlFor="dropdown">SignUp: </label>
            <select id="dropdown" className="custom-dropdown" onChange= {handleUserTypeChange} value={userType}>
              <option value="" disabled selected>Select an option</option>
              <option value="ADMIN">Admin</option>
              <option value="JUNIOR_ADMIN">Junior Admin</option>
              <option value="SUPER_ADMIN">Senior Admin</option>
            </select>
          </div>
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
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={registerData}>
              Submit
            </button>
            <div className="text-center">
              <div className="custom-label">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
              </div>
            </div>
          </div>

        </div>
      </form>
   {/* </div>*/}
    </div>
    </div>
  )
}