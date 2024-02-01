import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './home';
import Register from './register';
import LandingPage from './landingPage';
import HireEmployee from './hireEmployee';
import ForgotPassword from './forgotPassword';
import CreateNewPassword from './createNewPassword';
export default function Routing(){
    return (
        <Router>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/landing" element={<LandingPage/>}/>
                    <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                    <Route path="/hireEmployee" element={<HireEmployee/>}/>
                    <Route path="/createNewPassword" element={<CreateNewPassword/>}/>
            </Routes>
        </Router>

    );
}