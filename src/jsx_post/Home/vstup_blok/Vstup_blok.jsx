import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import styles from './styleVstup_blok.module.sass'
const Vstup_blok = () => {
    return (
        <div className="vstup_block">
            <div className="sekt_inf" style={{marginTop: '20px'}}>
                <div className={`text-info ${styles.text_info}`}>
                    Если тебя заинтересовал наш сервер и ты хочешь в нашу команду, тебе необходимо знать и
                    понимать как пользоваться ботами, интеграцией и многим другим на сервере. Если ты можешь и
                    хочешь модерировать сервер, приглашаем к нам в набор.
                </div>
                <a className={`bottom_add_admin ${styles.bottom_add_admin}`} href='https://discord.gg/xcrfrJ5QsN'>
                    <div className={styles.bottom_1}>Вступить в команду</div > <div className={styles.bottom_2}><FontAwesomeIcon style={{fontSize: '20px'}} icon={faPlus} /></div>
                </a>
            </div>
        </div>
    );
};

export default Vstup_blok;