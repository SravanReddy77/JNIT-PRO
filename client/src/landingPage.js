import React from 'react';
import JnitLogo from "./JNIT Logo.svg"

export default function LandingPage(){

    return (
        <div>
        <div className="header">
            <h3>&nbsp;JNIT<a href="http://localhost:3000/"><img  src={JnitLogo} height={30} width={30} alt="JnitLogo"></img></a></h3>
        </div>
            <h1 align="center">Welcome to JNIT</h1>
            <a href="./HireEmployee">Link</a>
              </div>
    )


}