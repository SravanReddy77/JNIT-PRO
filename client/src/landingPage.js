import React from 'react';
import JnitLogo from "./JNIT Logo.svg"

export default function LandingPage(){

    return (
        <div>
            <div className="header">
                <a href="http://localhost:3000/"><img src={JnitLogo} height={40} width={80} alt="JnitLogo"></img></a>
            </div>
            <h1 align="center">Welcome to JNIT</h1>
            <a href="./HireEmployee">Link</a>
              </div>
    )


}