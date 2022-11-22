import React from 'react';
import { Routes, Route } from "react-router-dom";
import './style.sass';
import MyImage from '../../img-2/fon2.jpg';
import SignIn from './sign_in/SignIn';
import Logine from './logine/Logine';
import RecoveryPassword from "./recovery_password/recoveryPassword";
import styles_img from "./logine/stules_login_form.module.sass";
const Authorization = () => {
    return (
        <div className='main'>
            <div className={styles_img.ingContainer}>
                <img src={require(`../../img-2/osu_fon/osu-game-thumb.jpg`)} alt=""/>
            </div>
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