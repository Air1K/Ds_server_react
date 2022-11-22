import React, {useContext, useEffect, useMemo, useState} from "react";
import HeadMenu from "./jsx_post/General/Head/headMenu";
import InfoWindow from "./jsx_post/Info/InfoWindow"
import {BrowserRouter, Routes, Route,  Navigate} from "react-router-dom";
import Home from "./jsx_post/Home/hello_blok/Home";
import './css/Style-index.css';
import './css/Styles.css';
import Futer from "./jsx_post/General/Futer/Futer";
import Contact from "./jsx_post/Contact/Contact";
import Authorization from "./jsx_post/authorization/Authorization";
import Comments from "./jsx_post/comments/Comments";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import HeadFix from "./jsx_post/General/Head/HeadFix";
import { useMediaQuery } from 'react-responsive'
import FuterMobile from "./jsx_post/General/Futer/futerMobile/futerMobile";
import CursorAndAura from "./jsx_post/cursorAndAura";
import img_cursor from './cursor/cursormiddle.png'

function App() {
    const {store} = useContext(Context)
    console.log(store.isAuth)
    useEffect(()=> {
        if(localStorage.getItem('token')){
            store.checkAuth();
        }


    }, [])
    // if(store.isLoading){
    //     console.log(store.isLoading)
    //     return <div>Загрузка...</div>
    // }
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 980px)'
    });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 980px)' });
    const [cursorVisible, setCursorVisible] = useState(true)
    const [render_img, setRender] = useState(true)

    const setCursorState = (setStateCursor) =>{
        setCursorVisible(setStateCursor)
        setRender(false)
    }

    if(cursorVisible){
        document.body.style.cursor = `url(${img_cursor}) 16 16, auto`

    }else {
        document.body.style.cursor = 'auto';
    }


    // console.log(event.nativeEvent)
    return (
        <div className="App">


            <BrowserRouter>
                {isDesktopOrLaptop&&<HeadMenu setCursorState={setCursorState}/>}
                {isDesktopOrLaptop&&cursorVisible&&<CursorAndAura/>}
                {isTabletOrMobile&&<HeadFix/>}
                {/**/}
                <Routes>

                    <Route path="" element={<Home render_img = {render_img}/>}/>
                    <Route path="info" element={<InfoWindow/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="/comments" element={<Comments/>}/>
                    {/* <Route path="/donate" element={<Home />} /> */}
                    <Route path="login/*" element={<Authorization/>}/>
                </Routes>

                {isDesktopOrLaptop&&<Futer/>}
                {isTabletOrMobile&&<FuterMobile/>}
            </BrowserRouter>

        </div>
    );
}

export default observer(App);
