import React from 'react';
import './style.sass';
import MyImage from '../../img-2/fon.jpg';
const Authorization = () => {
    var style = document.querySelector('body').style;
    var style_strok = `url(${MyImage})`;
    style.setProperty('--background', style_strok);
    return (
        <div className='main'> 
            
        </div>
    );
};

export default Authorization;