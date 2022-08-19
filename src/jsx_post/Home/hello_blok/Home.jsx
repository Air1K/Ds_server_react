import React from 'react';
import Sneg from "./sneg";
import Logojs from "./Logojs";
import Container_1 from '../Main/Container_1';


const Home = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
      
        var style = document.querySelector('body').style;
        var style_strok = 'url(' + require(`../../../img-2/osu_fon/${getRandomInt(19)}.png`) + ')';
        style.setProperty('--background', style_strok);

    return (
        <div>
            <Sneg />
            <Logojs />
            <Container_1 />
        </div>
    );
};

export default Home;