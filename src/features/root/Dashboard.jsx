import React from "react";
import { Routes, Route } from "react-router-dom";
import FreeDemo from "../components/FreeDemo";
import HomePage from "../components/main/HomePage";
import PrivacyPolicy from "../components/PrivacyPolicy";
import SignIn from "../components/signIn_and_SignUp/SignIn";
import SignUp from './../components/signIn_and_SignUp/SignUp';

const Dashboard = () =>{
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="crm-platform-demo" element={<FreeDemo/>}/>
            <Route path="signup-hubspot" element={<SignUp/>}/>
            <Route path="login" element={<SignIn/>}/>
            <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        </Routes>
        
        </>
    )
}

export default Dashboard