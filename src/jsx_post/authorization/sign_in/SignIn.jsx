import React from 'react';
import './style.sass'

const SignIn = () => {
    return (
        <div>
             <div className="autoriz-item">Sign Up</div>
            <div className="logo_dov">
                <img className="Logo_fon" src={require("../../../img-2/NO-NLfon.png")} alt="" />
                <img className="Logo_bac" src={require("../../../img-2/NO-NLbac.png")} alt="" />
            </div>
            <form action='http://localhost:5000/api/post' method='POST'>
            <div className="input_full_name_div">
                <input className='input1' autocomplete="off" type="text" name="name" id="name" placeholder="Name..." />
            </div>
            <div className="input_log_div">
                <input className='input2' autocomplete="off" type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input_user_name_div">
                <input className='input3' autocomplete="off" type="text" name="username" id="username" placeholder="Username..." />
            </div>
            <div className="input_pass_div">
                <input className='input4' autocomplete="off" type="Password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="input_repeat_password_div">
                <input className='input4' autocomplete="off" type="Password" name="repeat_password" id="repeat_password" placeholder="Repeat Password" />
            </div>
            <div className="conteiner_Log_reg">
                <div className="buttom_div">
                    <a href='#' className="button8" type="submit">Create</a>
                </div>
            </div>
            </form>
        </div>
    );
};

export default SignIn;