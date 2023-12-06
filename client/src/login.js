import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import JnitLogo from './JNIT Logo.svg';

export default function Login (props) {
    return (
        <div className="header">
       <img src={JnitLogo} height={70} width={70} alt="JnitLogo"></img>
              <div className="header">Pro Members</div>
          <a href="http://localhost:3000/">
            <img src={JnitLogo} className="center" alt="JnitLogo"></img>
          </a>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
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
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login   
              </button>
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
      </div>
    )
  }