import React, {useState} from "react";
import JnitLogo from "./JNIT Logo.svg";
import "./login.css";
import NavbarComponent from "./Navigation";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
export default function CreateNewPassword(){
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
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
                    <h2>Create New Password</h2>
                    <form className="login-form">
                        <div className="textbox">
                            <p className="Auth-form-confirm" align="center"><span
                                className="greenText">OTP is Verified!</span></p>
                            <label className="custom-label">Enter Password</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                placeholder="Enter Password"
                            />
                            <label className="custom-label">Reenter Password</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                placeholder="Reenter Password"
                            />
                            <form className="d-grid gap-2 mt-3" action="./">
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary">
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