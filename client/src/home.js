import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import NavbarComponent from "./Navigation";


export default function Home(){
    const isLoggedIn = false;
    return(

        <div>
            <NavbarComponent isLoggedIn={isLoggedIn}/>
        </div>
    );
}