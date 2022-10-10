import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
import footerMobile from './futerMobileStyle.module.sass'

const FuterMobile = () => {
    return (
        <div className={footerMobile.container_footer}>
            <section className={footerMobile.footerBottom}>
                <div className={footerMobile.coll1_bottom}>
                    <img src={require("../../../../img-2/NO-NLfon.png")} alt=""/>
                    {/*<div className="nav_menu_koll1">*/}
                    {/*    <a href="">Политика обработки <br/>персональных данных</a>*/}
                    {/*    <div className="">© 2022 Дискорд сервер <br/> No osu! - No Life</div>*/}
                    {/*</div>*/}
                </div>
                <div>
                    <div className={footerMobile.head_koll}>НАВИГАЦИЯ</div>
                    <div className={`${footerMobile.title_koll2} ${footerMobile.colorBox}`}>
                        <Link to="/">Главная</Link>
                        <Link to="/info">О нас</Link>
                        <Link to="/contact">Контакты</Link>
                        <a href='https://www.donationalerts.com/r/lolioosu'>Донаты</a>

                    </div>
                </div>
                <div>
                    <div className={footerMobile.head_koll}>РАБОЧИЕ ВОПРОСЫ</div>
                    <div className={`${footerMobile.title_koll2} ${footerMobile.colorBox}`}>
                        <a href="#">О нашей команде</a>
                        <a href="#">Хочу в команду</a>
                        <a href="#">Сотрудничество</a>
                    </div>
                </div>
                <div>
                    <div className={footerMobile.head_koll}>СВЯЗАТЬСЯ С НАМИ</div>
                    <div className="title_koll4">
                        veremeenkom91@gmail.com
                        <div className={`href_site ${footerMobile.bottomHref} ${footerMobile.colorBox}`} style={{fontSize: '5vw'}}>
                            <a href="https://github.com/Air1K/Ds_server_react"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="https://t.me/airistia"><FontAwesomeIcon icon={faTelegram}/></a>
                            <a href="https://vk.com/lolio5"><FontAwesomeIcon icon={faVk}/></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FuterMobile;