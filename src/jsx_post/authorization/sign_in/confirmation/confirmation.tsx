import React, {useContext, useEffect, useState} from 'react';
import styles from './confirmationStyles.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../../../../index";
const Confirmation = ({email, setCode}) => {
    const [time, setTime] = useState(30)



    useEffect(()=>{
        if(time > 0){
            const timer = setTimeout(()=>{

                setTime(time-1)
            }, 1000)
            if(time<=0){
                return clearTimeout(timer)
            }
        }

    }, )
    const {store} = useContext(Context);
    return (
        <div>
            <div className="input_repeat_password_div">

                <input className='input4' type="text"
                        onChange={(e)=>{setCode(e.target.value)}}
                       name="code" id="code" placeholder="Code"/>

            </div>
            <a href="#" className={styles.update} onClick={()=>{if(time === 0 ) {setTime(30); store.confirmationCode(email, true);}}}>Отправить код повторно ({time}s)</a>
            <div style={{opacity:'0.8' ,fontSize:'16px', color: "yellow", position: "relative", top: '-20px', width:"50%", margin:'auto', textAlign:"left"}}><FontAwesomeIcon icon={faTriangleExclamation} /> Введите код отправленный на указанную почту</div>
        </div>

    );
};

export default Confirmation;