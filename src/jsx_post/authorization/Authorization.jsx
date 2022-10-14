import React from 'react';
import { Routes, Route } from "react-router-dom";
import './style.sass';
import MyImage from '../../img-2/fon2.jpg';
import SignIn from './sign_in/SignIn';
import Logine from './logine/Logine';
import RecoveryPassword from "./recovery_password/recoveryPassword";
const Authorization = () => {
    var style = document.querySelector('body').style;
    var style_strok = `url(${MyImage})`;
    style.setProperty('--background', style_strok);
    style.setProperty('--filter', 'blur(0px)');
    return (
        <div className='main'>
            <div className="autoriz">
                <Routes>
                    <Route path="" element={<Logine />} />
                    <Route path="Sign_up" element={<SignIn />} />
                    <Route path="Recovery_password" element={<RecoveryPassword />} />
                </Routes>
            </div>

        </div >
    );
};

export default Authorization;