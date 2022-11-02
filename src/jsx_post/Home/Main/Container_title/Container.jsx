import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './style.sass'
import styles from './stules.module.sass'

const textAnim = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
    
}

const textAnimKrug = {
    hidden: {
        // scale: 1.2,
        // x: 0,
        opacity: 0,
    },
    visible: custom => ({
        scale: 1,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
    
}

const Container = () => {

    const { ref, inView } = useInView({
        threshold: 0
      });

      function addClassListEll(){

      }


    return (
        <motion.div
        initial ="hidden"
        whileInView={"visible"}
        viewport={{amount: 0.2, once: true}}
        className="contener-title">
            <div className="title-1">
                <motion.h1 custom ={0.5} variants={textAnim} className="uet ue">
                    <span>Добро</span> <span>пожаловать</span> <span>на</span> <span>сервер</span>  <span className="bold"> No </span> <span className="bold"> osu!-No </span> <span className="bold">Life</span>
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Container;