import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Register from './register';
import LandingPage from './landingPage';

export default function Routing(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
          <Route  path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>

    )
}