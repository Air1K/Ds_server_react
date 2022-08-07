import React from 'react';
import './style.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faVk, faTelegram } from "@fortawesome/free-brands-svg-icons";


const Futer = () => {
    return (
        <div className="footer-bottom">
            <div className="coll1_bottom">
                <img src={require("../../../img-2/NO-NLfon.png")} alt="" />
                    <div className="head_koll1">No osu! - No Life</div>
                    <div className="nav_menu_koll1">
                        <a href="">Политика обработки <br />персональных данных</a>
                        <div className="">© 2022 Дискорд сервер <br /> No osu! - No Life</div>
                    </div>
            </div>
            <div className="coll2_bottom">
                <div className="head_koll2">НАВИГАЦИЯ</div>
                <div className="title_koll2">
                    <a href="#">Главная</a>
                    <a href="#">О нас</a>
                    <a href="#">Контакты</a>
                    <a href="#">Донаты</a>
                </div>
            </div>
            <div className="coll3_bottom">
                <div className="head_koll3">РАБОЧИЕ ВОПРОСЫ</div>
                <div className="title_koll3">
                    <a href="#">О нашей команде</a>
                    <a href="#">Хочу в команду</a>
                    <a href="#">Сотрудничество</a>
                </div>
            </div>
            <div className="coll4_bottom">
                <div className="head_koll4">СВЯЗАТЬСЯ С НАМИ</div>
                <div className="title_koll4">
                    veremeenkom91@gmail.com
                    <div className="href_site">
                        <a href="https://github.com/Air1K/Ds_server_react"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://t.me/airistia"><FontAwesomeIcon icon={faTelegram} /></a>
                        <a href="https://vk.com/lolio5"><FontAwesomeIcon icon={faVk} /></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Futer;