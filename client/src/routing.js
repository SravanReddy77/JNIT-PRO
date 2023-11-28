import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Register from './register';
import LandingPage from './landingPage';
import HireEmployee from './hireEmployee';

export default function Routing(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
          <Route  path="/landing" element={<LandingPage />} />
          <Route  path="/hireEmployee" element={<HireEmployee />} />
      </Routes>
    </BrowserRouter>

    )
}