import React from 'react';
import employee from "./employee.svg";
import "./landingPage.css";
import JnitLogo from "./JNIT Logo.svg"

export default function hireEmployee() {

    return (
        <div className="Title">
            <h1>&nbsp;JNIT<a href="http://localhost:3000/"><img src={JnitLogo} height={70} width={70}
                                                                alt="JnitLogo"></img></a></h1>

            <div className="header">Pro Members</div>

            <h1 align="center">Welcome to JNIT</h1>
            <div className="employee-box">
                <img src={employee} alt="Employee 1" className="employee-image"></img>
                <h2> John Hooper</h2>
                <p> Sr.Full Stack Java Developer</p>
                <p>Details: </p>
            </div>
            <div className="employee-box">
                <img src={employee} alt="Employee 2" className="employee-image"></img>
                <h2> James Richardson</h2>
                <p> Python </p>
                <p>Details: </p>
            </div>

            <div className="employee-box">
                <img src={employee} alt="Employee 3" className="employee-image"></img>
                <h2> Kinney William </h2>
                <p> Devops </p>
                <p>Details: </p>
            </div>
            <div className="employee-box">
                <img src={employee} alt="Employee 4" className="employee-image"></img>
                <h2> Robert Tony</h2>
                <p> AWS</p>
                <p>Details: </p>
            </div>
        </div>
    )


}