import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppPhone from './AppPhone';
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

 let Device = false;

 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Device = false;
  } else {
    Device = true;
}

if(screenWidth => screenHeight){
    
}
else{
    
    
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    Device ?  <App /> : <AppPhone />
);

