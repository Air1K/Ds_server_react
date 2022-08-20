import React from 'react';

const SignIn = () => {
    return (
        <div>
             <div className="autoriz-item">Register</div>
            <div className="logo_dov">
                <img className="Logo_fon" src={require("../../../img-2/NO-NLfon.png")} alt="" />
                <img className="Logo_bac" src={require("../../../img-2/NO-NLbac.png")} alt="" />
            </div>
            <div className="input_log_div">
                <input className='input1' autocomplete="off" type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input_pass_div">
                <input className='input2' autocomplete="off" type="Password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="conteiner_Log_reg">
                <div className="buttom_div">
                    <a href='#' className="button8" >Create</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;