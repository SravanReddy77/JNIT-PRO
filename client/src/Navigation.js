import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import JnitLogo from "./JNIT Logo.svg";

const NavbarComponent = ({ isLoggedIn }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const handleMouseEnter = () => setCollapsed(false);
    const handleMouseLeave = () => setCollapsed(true);

    return (
        <div>
            <Navbar color="faded" dark onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div>
                    <NavbarToggler onClick={toggleNavbar}/>
                    <a href="http://localhost:3000/">
                        <img src={JnitLogo} height={40} width={80} alt="JnitLogo"></img>
                    </a>
                </div>
                <NavbarBrand href="/" className="me-0"></NavbarBrand>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="me-auto" navbar>
                        {isLoggedIn ? (
                            <>
                                <NavItem>
                                    <NavLink href="./">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="./Consultants">Consultants</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Logout</NavLink>
                                </NavItem>
                            </>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink href="./">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="./register">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="./">Contact Us</NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
