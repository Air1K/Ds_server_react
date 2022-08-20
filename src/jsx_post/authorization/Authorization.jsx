import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './style.sass';
import MyImage from '../../img-2/fon2.jpg';
import SignIn from './sign_in/SignIn';
import Logine from './logine/Logine';
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
                </Routes>
            </div>

        </div >
    );
};

export default Authorization;