import React from 'react';
import './css/Phone.css'
function AppPhone() {
    return (
        <div className='conteiner'>
            <div className='text'>
                Приложение не адаптивно для мобильных устройств :)
            </div>
            <div className="img_class">
                <img className='PhoneIMG' src={require("./img-2/Phone_site.jpg")} alt="НЕ УДАЛОСЬ ЗАГРУЗИТЬ КАРТИНКУ" />
            </div>
        </div>
    );
};

export default AppPhone;