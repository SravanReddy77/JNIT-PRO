import React from 'react';
import employee from "./employee.svg";
import "./hireEmployee.css";
import JnitLogo from "./JNIT Logo.svg"

export default function HireEmployee() {

    return (
        <div>
        <div className="header">
            <h3>&nbsp;JNIT<a href="http://localhost:3000/"><img  src={JnitLogo} height={30} width={30} alt="JnitLogo"></img></a></h3>
        </div>
            <h1 align="center">Welcome to JNIT</h1>
            <div className="employee-box">
                <img src={employee} alt="Employee 1" className="employee-image"></img>
                <h2> John Hooper</h2>
                <p> Sr.Full Stack Java Developer</p>
                <p>Details: 1500$/month,<br></br>Client : Neilson(Chicago)<br></br>
                             USA </p>
            </div>
            <div className="employee-box">
                <img src={employee} alt="Employee 2" className="employee-image"></img>
                <h2> James Richardson</h2>
                <p> Python </p>
                <p>Details:3000$/month, <br></br>Client : Macys(Texas)<br></br>
                    India </p>
            </div>

            <div className="employee-box">
                <img src={employee} alt="Employee 3" className="employee-image"></img>
                <h2> Kinney William </h2>
                <p> Devops </p>
                <p>Details:5000$/month,<br></br>Client: Amazon(Boston)<br></br>
                  USA </p>
            </div>
            <div className="employee-box">
                <img src={employee} alt="Employee 4" className="employee-image"></img>
                <h2> Robert Tony</h2>
                <p> AWS</p>
                <p>Details: 1300$/month,<br></br>Client : Costco(NewYork)<br></br>
                    China
                </p>
            </div>
        </div>
    )


}