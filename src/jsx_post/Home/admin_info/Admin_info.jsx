import React from 'react';

const Admin_info = () => {
    return (
        <div className="admininfo">
                    <h1 style={{margin: '200px 0 100px 0', marginLeft: '8%'}}>Наша команда</h1>
                    <div className="sekt_inf">
                        <div className="block">
                            <div className="image_user">
                                <img src = {require("../../../img-2/avatar_user/user1.jpg")} alt=""/>
                            </div>
                            <div className="name_user">ERGONOM </div>
                            <div className="title_name">(главный админ)</div>
                        </div>
                        <div className="block">
                            <div className="image_user">
                                <img src = {require("../../../img-2/avatar_user/user2.jpg")} alt=""/>
                            </div>
                            <div className="name_user">Riru </div>
                            <div className="title_name">(главный админ / модер)</div>
                        </div>
                        <div className="block">
                            <div className="image_user">
                                <img src = {require("../../../img-2/avatar_user/user6.jpg")} alt=""/>
                            </div>
                            <div className="name_user">Ane </div>
                            <div className="title_name">(Интерпол)</div>
                        </div>
                        <div className="block">
                            <div className="image_user">
                                <img src = {require("../../../img-2/avatar_user/user3.jpg")} alt=""/>
                            </div>
                            <div className="name_user">Fark </div>
                            <div className="title_name">(Интерпол)</div>
                        </div>
                        <div className="block">
                            <div className="image_user">
                                <img src = {require("../../../img-2/avatar_user/user5.jpg")} alt=""/>
                            </div>
                            <div className="name_user">Xqeer </div>
                            <div className="title_name">(Интерпол)</div>
                        </div>
                        <div className="block">
                            <div className="image_user">
                                <img src = {require("../../../img-2/avatar_user/user4.jpg")} alt=""/>
                            </div>
                            <div className="name_user">Zef1k </div>
                            <div className="title_name">(Интерпол)</div>
                        </div>
                    </div>
                </div>
    );
};

export default Admin_info;