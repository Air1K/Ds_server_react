import React from 'react';
import {
    useViewportScroll,
    motion,
    useTransform,
} from 'framer-motion';



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


    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [1000, 2200], [250, -500]);







    return (
        <motion.div
            // viewport={{amount: 0.2}}
            className="info_serv_text" >
            <motion.div
                className="fon-mem"
                style={{ y: y1 }}
            />
            <div className="collum-1">
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ amount: 0.2 }}
                    className="content-1">
                    <motion.p custom={1} variants={AnimcssLeft} className="cont-1-p">

                        Здесь вы можете найти своих товарищей по osu или другим играм
                    </motion.p>
                    <motion.div custom={1} variants={AnimcssLeftBox} className="fon-content-1"></motion.div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ amount: 0.2 }}
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
                    viewport={{ amount: 0.2 }}
                    className="content-3">
                    <motion.p custom={1} variants={AnimcssRight} className="cont-3-p">
                        Смотреть аниме в компании добрых и адекватных людей

                    </motion.p>
                    <motion.div custom={1} variants={AnimcssRightBox} className="fon-content-3"></motion.div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ amount: 0.2 }}
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