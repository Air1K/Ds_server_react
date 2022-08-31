import React, {useState} from 'react';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.sass'
import {registration} from '../../../actions/user.js';


const SignIn = () => {


    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    const [repeat_password, setRepeat_password] = useState(``);

    const [nameDirtu, setNameDirtu] = useState(false)
    const [emailDirtu, setEmailDirtu] = useState(false)
    const [usernameDirtu, setUsernameDirtu] = useState(false)
    const [passwordDirtu, setPasswordDirtu] = useState(false)
    const [repeat_passwordDirtu, setRepeat_passwordDirtu] = useState(false)

    const [nameError, setNameError] = useState('имя не может быть пустым');
    const [emailError, setEmailError] = useState('email не может быть пустым');
    const [usernameError, setUsernameError] = useState('username не может быть пустым')
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым')
    const [repeat_passwordError, setRepeat_passwordError] = useState('пароль не может быть пустым')

    const nameHandler = (e) => {
        setName(e.target.value);
        const result = /^[a-zA-Zа-яА-я ]+$/;
        if (!result.test(String(e.target.value).toLowerCase())) {
            setNameError("Некорректное имя");
        } else {
            if (e.target.value.length < 3) {
                setNameError("Имя слишком короткое");
            } else {
                setNameError('');
            }
        }
        //
        // const result = /^[a-zA-Zа-яА-я ]+$/;
        // if (result.test(String(e.target.value).toLowerCase())) {
        //     setNameError('');
        // } else {
        //     if (!e.target.value.length < 3) {
        //         setNameError('');
        //     }
        // }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
        const result = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!result.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный email");
        } else {
            setEmailError('');
        }
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value);
        const result = /^[a-zA-Z0-9 ]+$/;
        if (!result.test(String(e.target.value).toLowerCase())) {
            setUsernameError("Некорректный ник");
        } else {
            if (e.target.value.length < 3) {
                setUsernameError("Ник слишком короткий");
            } else {
                setUsernameError('');
            }
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

    const repeat_passwordHandler = (e) => {
        setRepeat_password(e.target.value);
        if (!(password === e.target.value)) {
            setRepeat_passwordError("Пароли не совпадают");
        } else {
            setRepeat_passwordError('');
        }
    }

    const blurHandler = (e) => {

        switch (e.target.name) {
            case 'name':
                setNameDirtu(true)
                break
            case 'email':
                setEmailDirtu(true)
                break
            case 'username':
                setUsernameDirtu(true)
                break
            case 'password':
                setPasswordDirtu(true)
                break
            case 'repeat_password':
                setRepeat_passwordDirtu(true)
                break
        }
    }

    function server(){
        // console.log((nameError || emailError || usernameError || passwordError || repeat_passwordError),"Запрос", nameError, emailError, nameError||emailError);
        if(!(nameError || emailError || usernameError || passwordError || repeat_passwordError)){
            registration(name, email, username, password);
            alert("Запрос регистрации");
            document.location.href = "/login";

        }

    }

    return (

        <div>
            <div className="autoriz-item">Sign Up</div>
            <div className="logo_dov">
                <img className="Logo_fon" src={require("../../../img-2/NO-NLfon.png")} alt=""/>
                <img className="Logo_bac" src={require("../../../img-2/NO-NLbac.png")} alt=""/>
            </div>
            <form>
                <div className="input_full_name_div">
                    {(nameDirtu && nameError) &&
                        <div style={{opacity:'0.8' ,fontSize:'16px', color: "red", position: "absolute", top: '110%'}}><FontAwesomeIcon icon={faTriangleExclamation} />  {nameError}</div>}
                    <input onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} className='input1' type="text"
                           value={name}
                           id="name" placeholder="Name..." name="name"/>

                </div>
                <div className="input_log_div">
                    {(emailDirtu && emailError) &&
                        <div style={{opacity:'0.8' ,fontSize:'16px', color: "red", position: "absolute", top: '110%'}}><FontAwesomeIcon icon={faTriangleExclamation} /> {emailError}</div>}
                    <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} className='input2' type="text"
                           value={email}
                           name="email" id="email"
                           placeholder="Email"/>

                </div>
                <div className="input_user_name_div">
                    {(usernameDirtu && usernameError) &&
                        <div style={{opacity:'0.8' ,fontSize:'16px', color: "red", position: "absolute", top: '110%'}}><FontAwesomeIcon icon={faTriangleExclamation} /> {usernameError}</div>}
                    <input onChange={e => usernameHandler(e)} onBlur={e => blurHandler(e)} className='input3'
                           type="text" value={username}
                           name="username"
                           id="username" placeholder="Username..."/>
                </div>
                <div className="input_pass_div">
                    {(passwordDirtu && passwordError) &&
                        <div style={{opacity:'0.8' ,fontSize:'16px', color: "red", position: "absolute", top: '110%'}}><FontAwesomeIcon icon={faTriangleExclamation} /> {passwordError}</div>}
                    <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} className='input4' type="Password" value={password}
                           name="password"
                           id="password" placeholder="Password"/>
                </div>
                <div className="input_repeat_password_div">
                    {(repeat_passwordDirtu && repeat_passwordError) &&
                        <div style={{opacity:'0.8' ,fontSize:'16px', color: "red", position: "absolute", top: '110%'}}><FontAwesomeIcon icon={faTriangleExclamation} /> {repeat_passwordError}</div>}
                    <input onChange={e => repeat_passwordHandler(e)} onBlur={e => blurHandler(e)} className='input4' type="Password" value={repeat_password}

                           name="repeat_password" id="repeat_password" placeholder="Repeat Password"/>
                </div>
                <div className="conteiner_Log_reg">
                    <div className="buttom_div">
                        {/* onClick={()=>} */}
                        <a href='/login' onClick={server}className="button8" id='buttons' type="submit">Create</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;