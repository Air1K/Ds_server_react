import React from 'react';
import Sneg from "./sneg";
import Logojs from "./Logojs";
import Container_1 from '../Main/Container_1';
import styles from './stylesHome.module.sass'

const Home = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    

        // var style = document.querySelector('body').style;
        // var style_strok = 'url(' + require(`../../../img-2/osu_fon/${getRandomInt(16)}.png`) + ')';
        // style.setProperty('--background', style_strok);
        // style.setProperty('--filter', 'blur(0px)');

    return (
        <div>
            <div className={styles.ingContainer}>
                <img src={require(`../../../img-2/osu_fon/${getRandomInt(16)}.png`)} alt=""/>
            </div>
            <Sneg />
            <Logojs />
            <Container_1 />
        </div>
    );
};

export default Home;