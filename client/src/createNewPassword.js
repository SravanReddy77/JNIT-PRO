import React from "react";
import JnitLogo from "./JNIT Logo.svg";
import "./login.css";
import NavbarComponent from "./Navigation";
export default function CreateNewPassword(){
    const isLoggedIn = false;
        return (
            <div>
                <NavbarComponent isLoggedIn={isLoggedIn}/>
                <div className="login">
                    <a href="http://localhost:3000/">
                        <img src={JnitLogo} className="center" alt="JnitLogo"></img>
                    </a>
                    <h2>Create New Password</h2>
                    <form className="login-form">
                        <div className="textbox">
                            <p className="Auth-form-confirm" align="center"><span
                                className="greenText">OTP is Verified!</span></p>
                            <label className="custom-label">Enter Password</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                placeholder="Enter Password"
                            />
                            <label className="custom-label">Reenter Password</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                placeholder="Reenter Password"
                            />
                            <form className="d-grid gap-2 mt-3" action="./register">
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
            </div>

        )
}