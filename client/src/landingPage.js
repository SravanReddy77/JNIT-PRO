import React, {useState} from "react";
import NavbarComponent from "./Navigation";

export default function LandingPage(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    setTimeout(() => {
        setIsLoggedIn(true);
    }, 2000);

    return (

        <div>
            <NavbarComponent isLoggedIn={isLoggedIn}/>
            <h1 align="center">Welcome to JNIT <a href="./HireEmployee">Link</a></h1>

              </div>
    )
}