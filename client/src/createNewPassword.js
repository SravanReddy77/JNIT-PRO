import React from "react";
import JnitLogo from "./JNIT Logo.svg";
import "./login.css";
import {redirect} from "react-router";
export default function CreateNewPassword(){
    function handleSubmit(){
        redirect("./")
    }

        return (
            <div>
            <div className="header">
                <h3>&nbsp;JNIT<a href="http://localhost:3000/"><img  src={JnitLogo} height={30} width={30} alt="JnitLogo"></img></a></h3>
            </div>
                <a href="http://localhost:3000/">
                    <img src={JnitLogo} className="center" alt="JnitLogo"></img>
                </a>
                <div className="Auth-form-container-createNewpassword">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Create New Password</h3>
                            <div className="form-group mt-3">
                                <label>Enter Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter Password"
                                />
                                <label>Reenter Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Reenter Password"
                                />
                            </div>
                            <form className="d-grid gap-2 mt-3" action="./">
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary"  >
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