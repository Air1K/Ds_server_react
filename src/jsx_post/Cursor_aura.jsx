import React from 'react';
import $ from 'jquery';



const Cursor_aura = () => {
	window.addEventListener('load', function() {
		var cursor = document.querySelector("#cursor");
		var aura = document.querySelector("#aura");
	
	let X_aura = 0;
	let Y_aura = 0; 
	let vertical_position = 0, client_X = 0, client_Y = 0 ;
	
	
	document.addEventListener("mousemove", function(e){
		if($(".switch-btn").hasClass("switch-on")){
		client_X = e.clientX;
		client_Y = e.clientY;
		cursor.classList.remove('hiden');
		aura.classList.remove('hiden');
		}
	});
	document.addEventListener('mouseout', ()=>{
		if($(".switch-btn").hasClass("switch-on")){
		cursor.classList.add('hiden');
		aura.classList.add('hiden');
		}
	});
	style_css_();
	function style_css_(){
		X_aura += Math.round((client_X-X_aura) / 3);
		Y_aura += Math.round((client_Y-Y_aura) / 3);
		cursor.style.cssText = "left: "+client_X + "px; top: "+(client_Y)+"px;";
		aura.style.cssText = "left: "+((X_aura-20-14)) + "px; top: "+(Y_aura-20-14)+"px;";
		requestAnimationFrame(style_css_);
	}
	
	});
    return (
        <div>
            <div id="cursor" className="cursor hiden"></div>
            <div id="aura" className="aura hiden"></div>
        </div>
    );
};

export default Cursor_aura;