import React from 'react';
import './style.sass';
import MyImage from '../../img-2/fon.jpg';
const Authorization = () => {
    var style = document.querySelector('body').style;
    var style_strok = `url(${MyImage})`;
    style.setProperty('--background', style_strok);
    return (
        <div className='main'> 
            <div className="autoriz">
                <div className="autoriz-item"></div>
                <img src="" alt="" />
                <div className="input_log_div"></div>
                <div className="input_pass_div"></div>
                <div className="buttom_div"></div>
                <div className="bottom_registr"></div>
            </div>
        </div>
    );
};

export default Authorization;