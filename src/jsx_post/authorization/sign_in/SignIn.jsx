import React, {useState, useEffect} from 'react';

import './style.sass'
import Input from './Input';
import {registration} from '../../../actions/user.js';


const SignIn = () => {



    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    const [repeat_password, setRepeat_password] = useState(``);

    const [nameDirtu, setNameDirtu] = useState(false)
    const [emailDirtu, setEmailDirtu] = useState(false)

    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');

    const blurHandler = (e)=>{

        switch (e.target.name){
            case 'name':
                setNameDirtu(true)
                break
            case 'email':
                setEmailDirtu(true)
                break
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
                    {(nameDirtu && nameError) && <div style={{color:"red", position: "absolute", top: '100%'}}>{nameError}</div> }
                    <input onBlur = {e => blurHandler(e)} className='input1' type="text" value={name.value} setValue={setName}
                           id="name" placeholder="Name..." name="name"/>

                </div>
                <div className="input_log_div">
                    {(emailDirtu && emailError) && <div style={{color:"red", position: "absolute", top: '100%'}}>{emailError}</div> }
                    <input onBlur = {e => blurHandler(e)} className='input2' type="text" value={email.value} setValue={setEmail} name="email" id="email"
                           placeholder="Email"/>

                </div>
                <div className="input_user_name_div">
                    <input className='input3' type="text" value={username.value} setValue={setUsername} name="username"
                           id="username" placeholder="Username..."/>
                </div>
                <div className="input_pass_div">
                    <input className='input4' type="Password" value={password.value} setValue={setPassword} name="password"
                           id="password" placeholder="Password"/>
                </div>
                <div className="input_repeat_password_div">
                    <input className='input4' type="Password" value={repeat_password.value} setValue={setRepeat_password}
                           name="repeat_password" id="repeat_password" placeholder="Repeat Password"/>
                </div>
                <div className="conteiner_Log_reg">
                    <div className="buttom_div">
                        {/* onClick={()=>registration(name, email, username, password)} */}
                        <a href='#' className="button8" id='buttons' type="submit">Create</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;