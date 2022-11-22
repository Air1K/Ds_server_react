import React, {useEffect, useState} from 'react';
import Sneg from "./sneg";
import Logojs from "./Logojs";
import Container_1 from '../Main/Container_1';
import styles from './stylesHome.module.sass'

const Home = ({render_img}) => {

    const [numImg, setNum_img] = useState(1)
    const getRandomInt = (max) =>{
        setNum_img(Math.floor(Math.random() * max))
        return Math.floor(Math.random() * max);
    }
    useEffect(()=>{
        if(render_img){
            setNum_img(Math.floor(Math.random() * 16))
        }
    })

        // var style = document.querySelector('body').style;
        // var style_strok = 'url(' + require(`../../../img-2/osu_fon/${getRandomInt(16)}.png`) + ')';
        // style.setProperty('--background', style_strok);
        // style.setProperty('--filter', 'blur(0px)');

    return (
        <div>
            <div className={styles.ingContainer}>
                <img src={require(`../../../img-2/osu_fon/${numImg}.png`)} alt=""/>
            </div>
            <Sneg />
            <Logojs />
            <Container_1 />
        </div>
    );
};

export default Home;