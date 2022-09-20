import React, {useContext, useEffect, useState} from 'react';
import { Link, Navigate} from 'react-router-dom';
import {login_user} from "../../../actions/login";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";



const Logine = () => {

    const {store} = useContext(Context);

    const [link_main, setLink_main] = useState(false);


    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const [emailDirtu, setEmailDirtu] = useState(false)
    const [passwordDirtu, setPasswordDirtu] = useState(false)

    const [emailError, setEmailError] = useState('email не может быть пустым');
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым')

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const result = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!result.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный email");
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        console.log(password)

        const result = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!result.test(String(e.target.value).toLowerCase())) {
            setPasswordError("Некорректный пароль");
        } else {
            setPasswordError('');
        }
    }

    const blurHandler = (e) => {

        switch (e.target.name) {
            case 'email':
                setEmailDirtu(true)
                break
            case 'password':
                setPasswordDirtu(true)
                break
        }
    }



    async function server(){

        if(!(emailError || passwordError)){
            await store.login(email, password);
            await setLink_main(store.isAuth);
            //  const obj_user = await login_user(email, password);
            // console.log(obj_user);
            // const obj_locUS = localStorage.getItem('user')
            // const json_pars = JSON.parse(obj_locUS);
            // console.log( json_pars.user.email );
            // document.location.href = "/";

        }

    }

    useEffect(()=>{
        store.setMessages('');

    },[])

    return (
        <div>
            <div className="autoriz-item">Welcome</div>
            <div className="logo_dov">
                <img className="Logo_fon" src={require("../../../img-2/NO-NLfon.png")} alt="" />
                <img className="Logo_bac" src={require("../../../img-2/NO-NLbac.png")} alt="" />
            </div>
            <div className="input_log_div">
                {(emailDirtu && emailError) &&
                    <div style={{opacity:'0.8' ,fontSize:'16px', color: "red", position: "absolute", top: '110%'}}><FontAwesomeIcon icon={faTriangleExclamation} /> {emailError}</div>}
                <input onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)} value={email} className='input1'  type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input_pass_div">
                {(passwordDirtu && passwordError) &&
                    <div style={{opacity:'0.8' ,fontSize:'16px', color: "red", position: "absolute", top: '110%'}}><FontAwesomeIcon icon={faTriangleExclamation} /> {passwordError}</div>}
                <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} className='input2'  type="Password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="conteiner_Log_reg">
                <div className="buttom_div">
                    <Link to="" onClick={server} className="button8" >Login</Link>
                    {link_main?<Navigate to="/"/>:<div/>}
                    <div className="passwordError" style={{color:'red'}}>{store.messages}</div>
                </div>
                <div className="bottom_registr">
                    <span>Don’t have an account? </span>
                    <Link to="Sign_up"  className="register_">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default observer(Logine);