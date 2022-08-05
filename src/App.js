import React from "react";
import HeadMenu from "./jsx_post/headMenu";
import Cursor_aura from "./jsx_post/Cursor_aura"
import InfoWindow from "./jsx_post/InfoWindow"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./jsx_post/Home";
import './css/Style-index.css';
import './css/Styles.css'
  

function App() {
  return (
    <div className="App">
        
        
        <BrowserRouter>
        <HeadMenu />
        <Cursor_aura />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoWindow />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/donate" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
