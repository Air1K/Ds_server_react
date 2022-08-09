import {React, useEffect} from 'react';
import { motion } from 'framer-motion';
import './style.sass'

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

const Container = () => {
    useEffect(()=>{
        var conthitcircleoverlay_1 = document.querySelector(".conthitcircleoverlay-1");
        var krug = document.querySelector(".uet");
        var conthitcircleoverlay_3= document.querySelector(".conthitcircleoverlay-2");
        var conthitcircleoverlay_2 = document.querySelector(".conthitcircleoverlay-3");
        var slider = document.querySelector(".slider1");
        var slider1 = document.querySelector(".slider3");
        var slider2 = document.querySelector(".slider2");
        const observer = new IntersectionObserver(entries => {
            // перебор записей
            entries.forEach(entry => {
              // если элемент появился
              if (entry.isIntersecting) {
                // добавить ему CSS-класс
                conthitcircleoverlay_1.classList.add('square-animation');
                conthitcircleoverlay_3.classList.add('square-animation3');
                conthitcircleoverlay_2.classList.add('square-animation2');
                slider.classList.add('_sliderfollowcircle');
                slider2.classList.add('_sliderfollowcircle2');
                slider1.classList.add('_sliderfollowcircle1');
                krug.classList.add('anim-items');
                krug.classList.remove('ue');
              }
              if (!entry.isIntersecting) {
                // добавить ему CSS-класс
                conthitcircleoverlay_1.classList.remove('square-animation');
                conthitcircleoverlay_3.classList.remove('square-animation3');
                conthitcircleoverlay_2.classList.remove('square-animation2');
                slider.classList.remove('_sliderfollowcircle');
                slider2.classList.remove('_sliderfollowcircle2');
                slider1.classList.remove('_sliderfollowcircle1');
                krug.classList.remove('anim-items');
              }
            });
          });
        observer.observe(document.querySelector('.krug-osu'));
    });
   

    return (
        <motion.div
        initial ="hidden"
        whileInView={"visible"}
        viewport={{amount: 0.2}}
        className="contener-title">
            <div className="title-1">
                <motion.h1 custom ={0.5} variants={textAnim} className="uet ue">
                    <span>Добро</span> <span>пожаловать</span> <span>на</span> <span>сервер</span>  <span className="bold"> No </span> <span className="bold"> osu!-No </span> <span className="bold">Life</span>
                </motion.h1>
            </div>

            <div className="krug-osu">

                <div className="conthitcircleoverlay-1">
                    <div className="hitcircleoverlay"></div>
                    <div className="sliderfollowcircle"></div>
                    <div className="slider1"></div>
                </div>

                <div className="conthitcircleoverlay-2">
                    <div className="hitcircleoverlay"></div>
                    <div className="followpoint-2"></div>
                    <div className="sliderfollowcircle"></div>
                    <div className="slider3"></div>

                </div>

                <div className="conthitcircleoverlay-3">
                    <div className="hitcircleoverlay"></div>
                    <div className="followpoint-1"></div>
                    <div className="sliderfollowcircle"></div>
                    <div className="slider2"></div>
                </div>

                <div className="fon1">
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </motion.div>
    );
};

export default Container;