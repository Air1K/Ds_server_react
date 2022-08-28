import React from 'react';
import { Link } from 'react-router-dom';
const Logine = () => {
    return (
        <div>
            <div className="autoriz-item">Welcome</div>
            <div className="logo_dov">
                <img className="Logo_fon" src={require("../../../img-2/NO-NLfon.png")} alt="" />
                <img className="Logo_bac" src={require("../../../img-2/NO-NLbac.png")} alt="" />
            </div>
            <div className="input_log_div">
                <input className='input1'  type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input_pass_div">
                <input className='input2'  type="Password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="conteiner_Log_reg">
                <div className="buttom_div">
                    <Link to="" className="button8" >Login</Link>
                </div>
                <div className="bottom_registr">
                    <span>Don’t have an account? </span>
                    <Link to="Sign_up" className="register_">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Logine;