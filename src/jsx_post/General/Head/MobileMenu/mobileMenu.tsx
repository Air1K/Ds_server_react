import React from 'react';
import styleMenu from './styleMenu.module.sass'
const MobileMenu = ({setIs}) => {

    return (
        <div
            className={styleMenu.container}
            onClick={()=>{setIs(false);}}
        >
            <div
                onClick={(e)=>{e.stopPropagation()}}
                className={styleMenu.content__menu}>
                <div className={styleMenu.header}>No osu! - No life!</div>
            </div>
        </div>
    );
};

export default MobileMenu;