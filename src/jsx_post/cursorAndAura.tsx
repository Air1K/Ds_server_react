import React from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../hooks/cursor_hooks";
import styles from './styles_cursor.module.sass'
const CursorAndAura = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
            <motion.div
                ref={ref}
                className={styles.box_cursor}
                animate={{ x, y }}
                transition={{
                    type: "spring",
                    damping: 35,
                    stiffness: 500,
                    restDelta: 0.001
                }}
            >
                <div className={styles.anim_div_rotate}>
                    <div className={styles.box_cursor_aura}/>
                </div>

            </motion.div>

    );
};

export default CursorAndAura;