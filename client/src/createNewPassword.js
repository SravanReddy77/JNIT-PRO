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
            </div>

        )
}