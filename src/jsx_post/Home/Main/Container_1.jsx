import React from 'react';
import './style.sass'
import Container from './Container_title/Container';
import Info_Serv from '../info_serv_text/Info_Serv';
import Achive_blok from '../achiev/Achive_blok';
const Container_1 = () => {

    


    return (
        <section className="box-content clearfix">
        <br/><br/><br/><br/><br/><br/>
        <div className="text-box clearfix">
            <Container />
            <Info_Serv />
            <Achive_blok />
        </div>
        <br/>
        
        </section>
    );
};

export default Container_1;