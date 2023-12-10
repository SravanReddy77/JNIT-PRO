import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import JnitLogo from './JNIT Logo.svg';
import { redirect } from "react-router";
import axios from "axios";

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
        <div className="header">
          <a href="http://localhost:3000/"><img src={JnitLogo} height={40} width={80} alt="JnitLogo"></img></a>
          <nav>
            <ul>
              <li><a className="nav-btn" href="#home">Home</a></li>
              <li><a className="nav-btn" href="#about">About</a></li>
              <li><a className="nav-btn" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
          <div className="image">
          <a href="http://localhost:3000/">
            <img src={JnitLogo} className="center" alt="JnitLogo"></img>
          </a>
          </div>
      <div className="Auth-form-container-signin">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <br/>
            <div className="dropdown-container">
              <label form="dropdown">SignIn Into: </label>
              <select id="dropdown" className="custom-dropdown">
                <option value="" disabled selected>Select an option</option>
                <option value="Admin">Admin</option>
                <option value="Junior Admin">Junior Admin</option>
                <option value="Senior Admin">Senior Admin</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
                <form className="d-grid gap-2 mt-3" action="./landing">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Login
              </button>
              </form>
            <p className="text-center mt-2">
            <a href="./ForgotPassword"> Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
      </div>
    )
  }

  return (
    <div>
    <div className="header">
        <a href="http://localhost:3000/"><img src={JnitLogo} height={40} width={80} alt="JnitLogo"></img></a>
      <nav>
        <ul>
          <li><a className="nav-btn" href="#home">Home</a></li>
          <li><a className="nav-btn" href="#about">About</a></li>
          <li><a className="nav-btn" href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>
      <div className="image">
        <a href="http://localhost:3000/">
          <img src={JnitLogo} className="center" alt="JnitLogo"></img>
        </a>
      </div>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <br/>
          <div className="dropdown-container">
            <label htmlFor="dropdown">SignUp Into: </label>
            <select id="dropdown" className="custom-dropdown" onChange= {handleUserTypeChange} value={userType}>
              <option value="" disabled selected>Select an option</option>
              <option value="ADMIN">Admin</option>
              <option value="JUNIOR_ADMIN">Junior Admin</option>
              <option value="SUPER_ADMIN">Senior Admin</option>
            </select>
          </div>
          <div className="form-group mt-1">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Full Name"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
            <div className="form-group mt-3">
            <label>Reenter Password</label>
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
{/*            <button type="submit" className="btn btn-primary">
              Login
            </button>*/}
          </div>
{/*          <p className="text-center mt-2">
          <a href="#"> Forgot password?</a>
          </p>*/}
        </div>
      </form>
    </div>
    </div>      
  )
}