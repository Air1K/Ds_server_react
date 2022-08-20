import React,{useEffect} from "react";
import HeadMenu from "./jsx_post/General/Head/headMenu";
import Cursor_aura from "./jsx_post/Cursor_aura"
import InfoWindow from "./jsx_post/Info/InfoWindow"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./jsx_post/Home/hello_blok/Home";
import './css/Style-index.css';
import './css/Styles.css';
import Futer from "./jsx_post/General/Futer/Futer";
import Contact from "./jsx_post/Contact/Contact";
import Authorization from "./jsx_post/authorization/Authorization";

function App() {


  




  return (
    <div className="App">
        
        
        <BrowserRouter>
        <HeadMenu />
        <Cursor_aura />
          <Routes>
          <Route path="" element={<Home />} />
          <Route path="info" element={<InfoWindow />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/donate" element={<Home />} /> */}
          <Route path="login/*" element={<Authorization />} />
          </Routes>
          <Futer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
