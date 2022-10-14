import React from 'react';
import styles from './confirmationStyles.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
const Confirmation = () => {
    return (
        <div>
            <div className="input_repeat_password_div">

                <input className='input4' type="Password"

                       name="repeat_password" id="repeat_password" placeholder="Code"/>

            </div>
            <div style={{opacity:'0.8' ,fontSize:'16px', color: "yellow", position: "relative", top: '-20px', width:"50%", margin:'auto', textAlign:"left"}}><FontAwesomeIcon icon={faTriangleExclamation} /> Введите код отправленный на указанную почту</div>
        </div>

    );
};

export default Confirmation;