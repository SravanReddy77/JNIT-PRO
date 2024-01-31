import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Home from './home';
import Register from './register';
import LandingPage from './landingPage';
import HireEmployee from './hireEmployee';
import ForgotPassword from './forgotPassword';
import CreateNewPassword from './createNewPassword';
export default function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/landing" element={<LandingPage/>}/>
                <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                <Route path="/hireEmployee" element={<HireEmployee/>}/>
                <Route path="/createNewPassword" element={<CreateNewPassword/>}/>


            </Routes>
        </BrowserRouter>

    );
}