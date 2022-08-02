import React from "react";
import HeadMenu from "./jsx_post/headMenu"
import Sneg from "./jsx_post/sneg"
import Cursor_aura from "./jsx_post/Cursor_aura"
import './css/Style-index.css';
import './css/Styles.css'
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

  var style = document.querySelector('body').style;
  //var style_strok = `url('./img-2/osu_fon/${getRandomInt(19)}.png')`;
  var style_strok = 'url(' + require(`./img-2/osu_fon/${getRandomInt(19)}.png`) + ')';
  style.setProperty('--background', style_strok);

  

function App() {
  return (
    <div className="App">
        <HeadMenu />
        <Sneg />
        <Cursor_aura />
        
    </div>
  );
}

export default App;
