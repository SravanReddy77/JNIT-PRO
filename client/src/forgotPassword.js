import React, {useState} from "react";
import JnitLogo from "./JNIT Logo.svg";
import "./login.css";
import {redirect} from "react-router";
import CreateNewPassword from "./createNewPassword";

export default function ForgotPassword(){
    let [authMode, setAuthMode] = useState("forgotPassword")
    function handleSubmit(){
        redirect("./createNewPassword")
    }

    const changePassMode = () => {
        setAuthMode(authMode === "forgotPassword" ? "enterOTP" : "forgotPassword")
    }
        if (authMode === "forgotPassword") {
        return (
            <div>
            <div className="header">
                <h3>&nbsp;JNIT<a href="http://localhost:3000/"><img  src={JnitLogo} height={30} width={30} alt="JnitLogo"></img></a></h3>
            </div>
                <a href="http://localhost:3000/">
                    <img src={JnitLogo} className="center" alt="JnitLogo"></img>
                </a>
                <div className="Auth-form-container-forgotPassword">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Forgot Password?</h3>
                            <div className="form-group mt-3">
                                <label>Enter Email</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={changePassMode}>
                                    Send OTP
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
    return (
        <div>
        <div className="header">
            <h3>&nbsp;JNIT<a href="http://localhost:3000/"><img  src={JnitLogo} height={30} width={30} alt="JnitLogo"></img></a></h3>
        </div>
            <a href="http://localhost:3000/">
                <img src={JnitLogo} className="center" alt="JnitLogo"></img>
            </a>
            <div className="Auth-form-container-forgotPassword">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-verification">OTP Sent!</h3>
                        <div className="form-group mt-3">
                            <label>Enter Email</label>
                            <input
                                disabled
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                            <br/>
                            <label>Enter OTP</label>
                            <input
                                type="enter OTP"
                                className="form-control mt-2"
                                placeholder="Enter OTP"
                            />
                        </div>
                        <form className="d-grid gap-2 mt-3" action="./createNewPassword">
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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