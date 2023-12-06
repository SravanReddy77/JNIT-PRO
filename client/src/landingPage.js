import React from 'react';
import JnitLogo from "./JNIT Logo.svg"

export default function LandingPage(){

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
            <h1 align="center">Welcome to JNIT <a href="./HireEmployee">Link</a></h1>

              </div>
    )


}