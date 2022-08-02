import React from 'react';
window.addEventListener('load', function() { 	

    //ПРоверить после завершения -------------------------
document.querySelector('body').style.overflowY = "auto";

const logods = document.querySelector('body');
    const img_1 = document.querySelector('.img-logo-1');
    const img_2 = document.querySelector('.img-logo-2');

    const forbac = 10;
    const forfront = 20;

    const speed = 0.1;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;
    
    function setMouseParallaxStyle(){
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);

        img_1.style.cssText = `transform: translate(${positionX/forbac}%, ${positionY/forbac}%);`;
        img_2.style.cssText = `transform: translate(${positionX/forfront}%, ${positionY/forfront}%);`;

        requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();
    logods.addEventListener("mousemove", function(e){
        const parallaxWidth = logods.offsetWidth;
        const parallaxHeight = 500;
        // console.log(parallaxHeight);

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
    });

     });
const Logojs = () => {
    return (
        <section className="logods">         
                    <div className="img-logo-1"></div>
                    <div className="img-logo-2"></div>     
        </section>
    );
};

export default Logojs;