import React, {useEffect, useRef, useState} from 'react';
import {
    useViewportScroll,
    motion,
    useTransform,
} from 'framer-motion';
import styles from './stylesFonMem.module.sass'
import {useMediaQuery} from "react-responsive";


const Info_Serv = () => {

    const AnimcssRight = {
        hidden: {
            scale: 2,
            x: -600,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        }),

    }

    const AnimcssLeft = {
        hidden: {
            scale: 2,
            x: 600,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        }),

    }

    const AnimcssRightBox = {
        hidden: {
            scale: 2,
            x: 600,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        }),

    }

    const AnimcssLeftBox = {
        hidden: {
            scale: 2,
            x: -600,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            scale: 1,
            opacity: 0.7,
            transition: { delay: custom * 0.2 }
        }),

    }

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 980px)'
    });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 980px)' });

    const windowInnerHeight = window.innerHeight;
    const ref = useRef();
    const [topEl, setTopEl] = useState(100);
    const [bottomEl, setBottomEl] = useState(100);
    useEffect(() => {
        var rect = ref.current.getBoundingClientRect();
        setTopEl(rect.top)
        setBottomEl(rect.bottom)
        console.log(rect);
    });

    if(isDesktopOrLaptop){
        var height1 = windowInnerHeight;
        var height2 = -windowInnerHeight+200;
    }
    if(isTabletOrMobile){
        var height1 = 250;
        var height2 = -0;
    }
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [(topEl-(topEl/2)), (bottomEl)], [height1, height2]);







    return (
        <motion.div
            // viewport={{amount: 0.2}}
            ref={ref}
            className={`info_serv_text ${styles.info_serv_text}`} >
            <motion.div
                viewport={{ amount: 0.2 }}
                className={`${styles.fonMem} ${styles.imgClass}`}
                style={{ y: y1 }}
            >
                <img style={{marginTop: 0}} src={require("../../../img-2/fon_mem.png")} alt=""/>
            </motion.div>
            <div className="collum-1">
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ amount: 0.2, once: true }}
                    className="content-1">
                    <motion.p custom={1} variants={AnimcssLeft} className="cont-1-p">

                        Здесь вы можете найти своих товарищей по osu или другим играм
                    </motion.p>
                    <motion.div custom={1} variants={AnimcssLeftBox} className="fon-content-1"></motion.div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ amount: 0.2, once: true }}
                    className="content-2">
                    <motion.p custom={1} variants={AnimcssLeft} className="cont-2-p">
                        Принимать участия в различных конкурсах и турнирах внутри сервера

                    </motion.p>
                    <motion.div custom={1} variants={AnimcssLeftBox} className="fon-content-2"></motion.div>
                </motion.div>
            </div>
            <div className="collum-2">
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ amount: 0.2, once: true }}
                    className="content-3">
                    <motion.p custom={1} variants={AnimcssRight} className="cont-3-p">
                        Смотреть аниме в компании добрых и адекватных людей

                    </motion.p>
                    <motion.div custom={1} variants={AnimcssRightBox} className="fon-content-3"></motion.div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ amount: 0.2, once: true }}
                    className="content-4">
                    <motion.p custom={1} variants={AnimcssRight} className="cont-4-p">
                        Общаться с добрыми админами и даже найти девушку :)
                    </motion.p>
                    <motion.div custom={1} variants={AnimcssRightBox} className="fon-content-4"></motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Info_Serv;