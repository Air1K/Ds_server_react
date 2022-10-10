import React, {useContext, useEffect, useState} from 'react';
import styles from './style.module.sass'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignIn} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../../../index";
import MobileMenu from "./MobileMenu/mobileMenu";
const HeadFix = () => {
    const {store} = useContext(Context);

    const [menu_user, setMenuuser] = useState(false);
    const [isMenu, setIsMenu] = useState(false)
    async function log_out(){

        await store.logout();
    }
    useEffect(()=>{
        setMenuuser(false);
    }, [store.isAuth])

    const setWindowMenu = (steitMenu) =>{
        setIsMenu(steitMenu)
    }

    return (
        <div className={styles.container}>

           <MobileMenu is = {isMenu} setIs = {setWindowMenu}/>
            <div className={styles.bloc__menu}>
                <div className={styles.menu__nav}>
                    <button
                        onClick={()=>{setIsMenu(true); console.log(isMenu)}}
                        className={styles.button__menu}>☰</button>
                </div>
                <div className={styles.enter__exit__menu}>
                    <div className={styles.container__enter}>
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
        </div>
    );
};

export default HeadFix;