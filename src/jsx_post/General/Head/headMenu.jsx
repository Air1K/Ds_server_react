import React, {useState} from 'react';
import {faSignIn} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import './styleHead.sass'

async function Locsl_chek(){
    const obj_locUS = await localStorage.getItem('user')
    const json_pars = await JSON.parse(obj_locUS);
    return json_pars;
}

const HeadMenu = () => {
    const [menu_user, setMenuuser] = useState(false);

    let log_user = true;

    const obj_locUS = localStorage.getItem('user')
    const json_pars = JSON.parse(obj_locUS);
    if(json_pars){
        log_user = false;
    }


    // if(json_pars === null){
    //
    //     setLog_users(false);
    // }else{
    //     setLog_users(true);
    // }

    // console.log(json_pars)
    return (
        <div className="content ">
            <div className="contents">
                <div className="menu-top">
                    <div className="nav-menu-top">
                        <div className="menu-top-left">
                            <Link to="">Главная</Link>
                            <Link to="info">О нас</Link>
                            <Link to="contact">Контакты</Link>
                            <a href='https://www.donationalerts.com/r/lolioosu'>Донаты</a>
                        </div>
                        <div className="on_off_cursor">
                            Вкл / вкл курсор
                            <div className="switch-btn switch-on"></div>
                        </div>

                        <img src={require("../../../img-2/head2.png")} alt=""></img>
                    </div>
                    <div className="enter">
                        {log_user ? (
                            <Link to="login">
                                <FontAwesomeIcon icon={faSignIn}/>
                                <div className="enter-item">
                                    Войти
                                </div>
                            </Link>
                        ) : (
                            <div className="user">
                                <div className="menu-user">
                                    <button
                                        onClick={() => {
                                            setMenuuser(true);
                                            console.log(menu_user)
                                        }}
                                        onBlur={() => {
                                            setMenuuser(false);
                                            console.log(menu_user)
                                        }} className="avarat_and_button">
                                        <img className="avatar" src={require("../../../img-2/avatar_user/user5.jpg")}
                                             alt=""/>
                                        <img className="border-avatar" src={require("../../../img-2/border_avarar.png")}
                                             alt=""/>
                                    </button>
                                    {menu_user ? (
                                        <div className="menu-user-drop">
                                            dfgdgf
                                        </div>) : (<div/>)}
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeadMenu;