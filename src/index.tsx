import React, {createContext} from 'react';
import { render } from "react-dom";
import App from './App';
import AppPhone from './AppPhone';
import Store from "./store/store";
import State from './interfaceIndex'

const store = new Store();

export const Context = createContext<State>({
    store,
})

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

let Device = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Device = false;
} else {
    Device = true;
}

const root = document.getElementById("root");
render(
    <Context.Provider value={{
        store
    }}>
        <App/>
        {/*{Device ? <App/> : <AppPhone/>}*/}
    </Context.Provider>
, root);

