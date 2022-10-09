import React from 'react';
import styleMenu from './styleMenu.module.sass'
const MobileMenu = ({is, setIs}) => {
    const rootClasses = [];//    const rootClasses = [];//rootClasses.join(' ')

    console.log(is)
    if(is){

        rootClasses.push(styleMenu.content__menuOnClick)
    }

    //

    return (
        <div
            className={styleMenu.container}
            onClick={()=>{setIs(false);}}
        >
            <div
                onClick={(e)=>{e.stopPropagation()}}
                className={styleMenu.content__menu}
                // @ts-ignore
                id={rootClasses}>
                <div className={styleMenu.header}>No osu! - No life!</div>
            </div>
        </div>
    );
};

export default MobileMenu;