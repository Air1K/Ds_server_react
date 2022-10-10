import React from 'react';
import styleMenu from './styleMenu.module.sass'
import {Link} from "react-router-dom";

const MobileMenu = ({is, setIs}) => {
    const rootClasses = [];//    const rootClasses = [];//rootClasses.join(' ')
    const containerMain = [styleMenu.container];
    console.log(is)
    if(is){
        containerMain.push(styleMenu.containers)
        rootClasses.push(styleMenu.content__menuOnClick)
    }

    //

    return (
        <div
            className={containerMain.join(' ')}
            onClick={()=>{setIs(false);}}
        >
            <div
                onClick={(e)=>{e.stopPropagation()}}
                className={styleMenu.content__menu}
                // @ts-ignore
                id={rootClasses}>
                <div className={styleMenu.header}>No osu! - No life!</div>
                <div className={styleMenu.mav_menu}>
                    <div className={styleMenu.rooter}>
                        <Link to="">Главная</Link>
                        <Link to="info">О нас</Link>
                        <Link to="contact">Контакты</Link>
                        <a href='https://www.donationalerts.com/r/lolioosu'>Донаты</a>
                        <Link to="comments" >Оставить комментарий <span style={{color:"Yellow", fontSize:"15px"}}>(демо)</span></Link>
                    </div>
                    <div className={styleMenu.on_off_cursor}>
                        Демо версия web приложения<br/>
                        По всем ошибкам обращаться<br/>
                        <a href="https://vk.com/lolio5" style={{color:'blue'}}>https://vk.com/lolio5</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;