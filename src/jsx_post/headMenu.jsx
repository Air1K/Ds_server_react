import React from 'react';
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const headMenu = () => {
    return (
        <div className="content ">
            <div className="contents">
                <div className="menu-top">
                    <div className="nav-menu-top">
                        <div className="menu-top-left">
                            <a href="#">Главная</a>
                            <a href="#">О нас</a>
                            <a href="#">Контакты</a>
                            <a href="#">Донаты</a>
                        </div>
                        <div className="on_off_cursor">
                            Вкл / вкл курсор
                            <div className="switch-btn switch-on"></div>
                        </div>
                        
                        <img src={require("../img-2/head.png")} alt=""></img>
                    </div>
                    <div className="enter"><a href="#"><FontAwesomeIcon icon={faSignIn} /><div className="enter-item">
                        Войти
                    </div></a></div>
                </div>
                </div>
                
        </div>
    );
};

export default headMenu;