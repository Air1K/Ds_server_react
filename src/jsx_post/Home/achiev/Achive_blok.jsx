import React from 'react';
import {
    useViewportScroll,
    motion,
    useTransform,
} from 'framer-motion';

import './style.sass'

    




const Achive_blok = () => {

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


    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [2450, 3800], [250, -500]);
    const y2 = useTransform(scrollY, [2850, 3900], [150, -500]);
    const y3 = useTransform(scrollY, [3250, 4300], [250, -500]);
    const y4 = useTransform(scrollY, [3850, 4900], [350, -100]);


    const z1 = useTransform(scrollY, [2000, 3200], [150, -200]);
    const z2 = useTransform(scrollY, [2000, 3200], [250, -500]);
    const z3 = useTransform(scrollY, [2000, 3200], [350, -300]);
    const z4 = useTransform(scrollY, [2000, 3200], [150, -500]);
    return (
        <div>
            <div className="begstrok"style={{overflowX: "hidden"}}>
                <div className="text" >
                    <h1>No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_</h1>
                </div>
            </div>
            <h1 className="dostig-h1">Доска наших достижений</h1>
            <div className="top-tt-box">
                <div className="text_">
                    Тут пока ничего
                </div>
                {/* <div className="collum-top-tt1">
                    <motion.div style={{ y: y1 }} className="content-top-tt-koll1-el1">
                        <video autoPlay muted preload loop>
                            <source src={require("../../../video/8mill.mp4")} type="video/mp4"/>
                        </video>
                        <div className="fon-content-tt1_1"></div>
                        <div className="ramka"></div>
                    </motion.div>
                    <motion.div style={{ y: y2 }} className="content-top-tt-koll1-el2">
                        <video autoPlay muted preload loop>
                            <source src={require("../../../video/3_1mill.mp4")} type="video/mp4"/>
                        </video>
                        <div className="fon-content-tt1_2"></div>
                        <div className="ramka"></div>
                    </motion.div>
                </div>
                <div className="collum-top-tt2">
                    <motion.div style={{ y: y3 }} className="content-top-tt-koll2-el1">
                        <video autoPlay muted preload loop>
                            <source src={require("../../../video/1_1mill.mp4")} type="video/mp4"/>
                        </video>
                        <div className="fon-content-tt2_1"></div>
                        <div className="ramka"></div>
                    </motion.div>
                    <motion.div style={{ y: y4, marginBottom: 0}} className="content-top-tt-koll2-el2">
                        <video autoPlay muted preload loop>
                            <source src={require("../../../video/700k.mp4")} type="video/mp4"/>
                        </video>
                        <div className="fon-content-tt2_2"></div>
                        <div className="ramka"></div>
                    </motion.div>
                </div> */}
                <div className="fon_mem_stonks"></div>
            </div>
        </div>
    );
};

export default Achive_blok;