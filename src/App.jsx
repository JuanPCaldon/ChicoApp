import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from './pages/LoginPage'
import { LandingPages } from './pages/LandingPages'
import { RegisterPage } from './pages/RegisterPage';



const App = () => {
  return (
    <div>
    <Router>
      
     <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element = {<RegisterPage/>} />
      </Routes>
    
    
    
    </Router>  


    </div>
  )
}

export default App
