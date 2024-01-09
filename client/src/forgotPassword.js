import React, {useState} from "react";
import JnitLogo from "./JNIT Logo.svg";
import "./login.css";
import {redirect} from "react-router";
import NavbarComponent from "./Navigation";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

export default function ForgotPassword(){
    let [authMode, setAuthMode] = useState("forgotPassword")
    function handleSubmit(){
        redirect("./createNewPassword")
    }

    const changePassMode = () => {
        setAuthMode(authMode === "forgotPassword" ? "enterOTP" : "forgotPassword")
    }
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
        if (authMode === "forgotPassword") {
        return (
            <div>
                <div>
                    <Navbar color="faded" dark>
                        <NavbarBrand href="/" className="me-0">
                        </NavbarBrand>
                        <NavbarBrand className="me-auto">
                            <NavbarToggler onClick={toggleNavbar}/>
                            <a href="http://localhost:3000/"><img src={JnitLogo} height={40} width={80}
                                                                  alt="JnitLogo"></img></a>
                            <Collapse isOpen={!collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="./">
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="./hireEmployee">
                                            Login In
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/">Contact Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="./">
                                            About
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse></NavbarBrand>
                    </Navbar>
                </div>
                <div className="login">
                    <a href="http://localhost:3000/">
                        <img src={JnitLogo} className="center" alt="JnitLogo"></img>
                    </a>
                    <h2>Forgot Password?</h2>
                    <form className="login-form">
                        <div className="textbox">

                            <div className="form-group mt-3">
                                <label className="custom-label">Enter Email</label>
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
            <div>
                <Navbar color="faded" dark>
                    <NavbarBrand href="/" className="me-0">
                    </NavbarBrand>
                    <NavbarBrand className="me-auto">
                        <NavbarToggler onClick={toggleNavbar}/>
                        <a href="http://localhost:3000/"><img src={JnitLogo} height={40} width={80}
                                                              alt="JnitLogo"></img></a>
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="./">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="./hireEmployee">
                                        Login In
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="./">
                                        About
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse></NavbarBrand>
                </Navbar>
            </div>

            <div className="login">
                <a href="http://localhost:3000/">
                    <img src={JnitLogo} className="center" alt="JnitLogo"></img>
                </a>

                <h2>OTP</h2>
                <form className="login-form">
                    <div className="textbox">

                        <p className="Auth-form-confirm" align="center"><span
                            className="greenText">Sent Successfully!</span></p>
                        <div className="form-group mt-3">
                            <label className="custom-label">Enter Email</label>
                            <input
                                disabled
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                            <br/>
                            <label className="custom-label">Enter OTP</label>
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