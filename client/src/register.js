import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import JnitLogo from './JNIT Logo.svg';
import { redirect } from "react-router";

export default function Register (props) {
  let [authMode, setAuthMode] = useState("signin")
  function handleSubmit(){
    redirect("./landing")
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
        <div>
        <div className="Title" className="header">
          <h3>&nbsp;JNIT<a href="http://localhost:3000/"><img  src={JnitLogo} height={30} width={30} alt="JnitLogo"></img></a></h3>
            </div>
          <a href="http://localhost:3000/">
            <img src={JnitLogo} className="center" alt="JnitLogo"></img>
          </a>
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
    <div className="Title">
      <h1>&nbsp;JNIT<a href="http://localhost:3000/"><img  src={JnitLogo} height={70} width={70} alt="JnitLogo"></img></a></h1>
          <div className="header">Pro Members</div>
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
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
            <div className="form-group mt-3">
            <label>Reenter Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Reenter Password"
              />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
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