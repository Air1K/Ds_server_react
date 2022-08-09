import React, { useEffect } from 'react';
import { motion, useScroll } from "framer-motion";
import $ from 'jquery';


const Info_Serv = () => {

    const { scrollY } = useScroll()
    
    useEffect(() => {
        const fonmem = document.querySelector(".fon-mem");
    return scrollY.onChange((latest) => {
        console.log("Page scroll: ", latest)
        
        fonmem.style.cssText = "transform: translateY(" + (750 - ((latest * 50) / 100)) + "px);";
    })

    
    }, [])
   
        
    

    return (
        <div className="info_serv_text">
            <div className="fon-mem"></div>
            <div className="collum-1">
                <div className="content-1">
                    <p className="cont-1-p">
                    
                        Здесь вы можете найти своих товарищей по osu или другим играм
                    </p>
                    <div className="fon-content-1"></div>
                </div>
                <div className="content-2">
                    <p className="cont-2-p">
                        Принимать участия в различных конкурсах и турнирах внутри сервера

                    </p>
                    <div className="fon-content-2"></div>
                </div>
            </div>
            <div className="collum-2">
                <div className="content-3">
                    <p className="cont-3-p">
                        Смотреть аниме в компании добрых и адекватных людей

                    </p>
                    <div className="fon-content-3"></div>
                </div>
                <div className="content-4">
                    <p className="cont-4-p">
                        Общаться с добрыми админами и даже найти девушку :)
                    </p>
                    <div className="fon-content-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Info_Serv;