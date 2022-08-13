import React from 'react';
import {
    useViewportScroll,
    motion,
    useTransform,
} from 'framer-motion';



    




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
    const y1 = useTransform(scrollY, [1000, 2200], [250, -500]);

    return (
        <div>
            <div className="begstrok">
                <div className="text">
                    <h1>No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_No osu!-No Life_</h1>
                </div>
            </div>
            <h1 className="dostig-h1">Доска наших достижений</h1>
            <div className="top-tt-box">
                <div className="collum-top-tt1">
                    <div className="content-top-tt-koll1-el1">
                        <video autoPlay muted preload loop>
                            <source src={require("../../../video/8mill.mp4")} type="video/mp4"/>
                        </video>
                        <div className="fon-content-tt1_1"></div>
                        <div className="ramka"></div>
                    </div>
                    <div className="content-top-tt-koll1-el2">
                        <video autoPlay muted preload loop>
                            <source src={require("../../../video/3_1mill.mp4")} type="video/mp4"/>
                        </video>
                        <div className="fon-content-tt1_2"></div>
                        <div className="ramka"></div>
                    </div>
                </div>
                <div className="collum-top-tt2">
                    <div className="content-top-tt-koll2-el1">
                        <video autoPlay muted preload loop>
                            <source src={require("../../../video/1_1mill.mp4")} type="video/mp4"/>
                        </video>
                        <div className="fon-content-tt2_1"></div>
                        <div className="ramka"></div>
                    </div>
                    <div className="content-top-tt-koll2-el2" style={{ marginBottom: 0}}>
                        <video autoPlay muted preload loop>
                            <source src={require("../../../video/700k.mp4")} type="video/mp4"/>
                        </video>
                        <div className="fon-content-tt2_2"></div>
                        <div className="ramka"></div>
                    </div>
                </div>
                <div className="fon_mem_stonks"></div>
            </div>
        </div>
    );
};

export default Achive_blok;