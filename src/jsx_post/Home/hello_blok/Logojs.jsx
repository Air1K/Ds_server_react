import React, { useEffect } from 'react';
import $ from 'jquery';
import {useMediaQuery} from "react-responsive";

const Logojs = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 980px)'
    });
    useEffect(() => {
        if(isDesktopOrLaptop){
            document.querySelector('body').style.overflowY = "auto";
            const logods = document.querySelector('body');


            const img_1 = document.querySelector('.img-logo-1');
            const img_2 = document.querySelector('.img-logo-2');

            const forbac = 10;
            const forfront = 20;

            const speed = 0.1;

            let positionX = 0, positionY = 0;
            let coordXprocent = 0, coordYprocent = 0;

            function setMouseParallaxStyle() {
                const distX = coordXprocent - positionX;
                const distY = coordYprocent - positionY;

                positionX = positionX + (distX * speed);
                positionY = positionY + (distY * speed);

                img_1.style.cssText = `transform: translate(${positionX / forbac}%, ${positionY / forbac}%);`;
                img_2.style.cssText = `transform: translate(${positionX / forfront}%, ${positionY / forfront}%);`;
                //console.log("Я работаю");
                if ($(".logods").length === 1)
                    requestAnimationFrame(setMouseParallaxStyle);
            }
            setMouseParallaxStyle();
            logods.addEventListener("mousemove", function (e) {
                const parallaxWidth = logods.offsetWidth;
                const parallaxHeight = 500;
                // console.log(parallaxHeight);

                const coordX = e.pageX - parallaxWidth / 2;
                const coordY = e.pageY - parallaxHeight / 2;

                coordXprocent = coordX / parallaxWidth * 100;
                coordYprocent = coordY / parallaxHeight * 100;
            });
        }
        //=========================================




    })
    return (
        <section className='parallax_'>
            <div className="logods">
                <div className="img-logo-1">
                    <img src={require("../../../img-2/NO-NLfon.png")} alt=""/>
                    <div className="img-logo-2">
                        <img src={require("../../../img-2/NO-NLbac.png")} alt=""/>
                    </div>
                </div>

                <a href="https://discord.gg/xcrfrJ5QsN" className="border-button">Присоединиться</a>
            </div>
        </section>
    );
};

export default Logojs;
