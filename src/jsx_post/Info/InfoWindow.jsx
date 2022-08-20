import React from 'react';
import './style.sass'

const InfoWindow = () => {
    var style = document.querySelector('body').style;
    var style_strok = 'url()';
    style.setProperty('--background', style_strok);
    style.setProperty('--filter', 'blur(5px)');
    return (
        <div className='main' style={{font: '700 normal 1em tahoma', color: '#fff'}}> 
            Скоро будет доступно
        </div>
    );
};

export default InfoWindow;