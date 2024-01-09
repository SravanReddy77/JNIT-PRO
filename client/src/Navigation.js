import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import JnitLogo from "./JNIT Logo.svg";

const NavbarComponent = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
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
                                    Consultants
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="./">
                                    Logout
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse></NavbarBrand>
            </Navbar>
        </div>

    )
}
export default NavbarComponent;