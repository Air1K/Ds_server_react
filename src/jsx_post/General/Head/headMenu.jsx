import React, {useContext, useEffect, useState} from 'react';
import {faSignIn} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import './styleHead.sass'
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
const logout = require ('../../../actions/logout');


// async function Locsl_chek() {
//     const obj_locUS = await localStorage.getItem('user')
//     const json_pars = await JSON.parse(obj_locUS);
//     return json_pars;
// }

const HeadMenu = () => {

    const {store} = useContext(Context);

    const [menu_user, setMenuuser] = useState(false);

    let log_user = true;

    const obj_locUS = localStorage.getItem('user')
    const json_pars = JSON.parse(obj_locUS);
    if (json_pars) {
        log_user = false;
    }
    async function log_out(){

        await store.logout();
        // await localStorage.removeItem('user')
        // await logout();
        // document.location.href = "/";
    }

    useEffect(()=>{
        setMenuuser(false);
    }, [store.isAuth])

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
                            <Link to="comments" >Оставить комментарий <span style={{color:"Yellow", fontSize:"15px"}}>(демо)</span></Link>
                        </div>
                        <div className="on_off_cursor">
                            Вкл / вкл курсор
                            <div className="switch-btn switch-on"></div>
                        </div>

                        {/*<img src={require("../../../img-2/head2.png")} alt=""></img>*/}
                    </div>
                    <div className="enter">
                        {!store.isAuth ? (
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
                                            if(!menu_user){
                                                setMenuuser(true);
                                            }else{
                                                setMenuuser(false);
                                            }

                                        }}
                                         className="avarat_and_button">
                                        <img className="avatar" src={require("../../../img-2/avatar_user/user5.jpg")}
                                             alt=""/>
                                        <img className="border-avatar" src={require("../../../img-2/border_avarar.png")}
                                             alt=""/>
                                    </button>
                                    {/*menu_user*/}
                                    {menu_user ? (
                                        <div onBlur={() => {
                                            setMenuuser(false);
                                        }} className="menu-user-drop">
                                            <div className="display-block-account">
                                                <a className="email_account" href="#" style={{fontSize: "18px", color:"#08f7e4"}}>{store.user.username}</a>
                                                <a className="setup_account" href="#">Настройки</a>
                                                <a className="exit_account" onClick={()=>{log_out()}} href="#">Выход</a>
                                            </div>
                                        </div>) : (<div/>)}
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default observer(HeadMenu);