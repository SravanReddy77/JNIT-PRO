import React from "react";
import JnitLogo from "./JNIT Logo.svg";
import "./login.css";
export default function CreateNewPassword(){

        return (
            <div className="Title">
                <h1>&nbsp;JNIT<a href="http://localhost:3000/"><img src={JnitLogo} height={70} width={70}
                                                                    alt="JnitLogo"></img></a></h1>
                <div className="header">Pro Members</div>
                <a href="http://localhost:3000/">
                    <img src={JnitLogo} className="center" alt="JnitLogo"></img>
                </a>
                <div className="Auth-form-container-forgotPassword">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Create New Password</h3>
                            <div className="form-group mt-3">
                                <label>Enter Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter New Password"
                                />
                                <label>Renter Password</label>
                                <input
                                    type="Reenter password"
                                    className="form-control mt-2"
                                    placeholder="Reenter New Password"
                                />
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" >
                                    Send OTP
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
}