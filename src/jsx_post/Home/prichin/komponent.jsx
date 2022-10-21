import { React, useEffect } from 'react';
import './style.css';
const Komponent = () => {

	useEffect(() => {

		let vizibl_mem_kach = true;
		let kach_mem_num_img = 1;
		const kach_mems = document.querySelector(".mem-kach");
		kach_mems.style.cssText = `opacity: 0; translite: 0.4s;`;
		const bg_image_blur = document.querySelector(".bg-image-blur");
		const topblok = document.querySelector(".topblok");
		const bg_image = document.querySelector(".bg-image");
		var refreshId;
		var refres_schow;
		const kach_mem = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					vizibl_mem_kach = true;
					kach_mems.style.cssText = `opacity: 1;`;
					bg_image_blur.style.cssText = "background: url("+require(`../../../img-2/mem-kach/kach${kach_mem_num_img}.jpg`)+")0% 0% / cover; position: absolute; width: 800px; height: 500px;";
					bg_image.style.cssText = "background: url("+require(`../../../img-2/mem-kach/kach${kach_mem_num_img}.jpg`)+")0% 0% / cover; position: absolute; width: 800px; height: 500px;";

					topblok.classList.add('text_anim_mem');
					kach_mem_num_img++;
					clearInterval(refreshId);
					refreshId = setInterval(function () {

						if (vizibl_mem_kach) {

							kach_mems.classList.add('anim_mem_kach');
							if (kach_mem_num_img > 7) { kach_mem_num_img = 1; }
							var style_mem_kach_bg_image_blur = bg_image_blur.style;
							var style_mem_kach_bg_image = bg_image.style;
							var style_strok_mem_kach = "url("+require(`../../../img-2/mem-kach/kach${kach_mem_num_img}.jpg`)+")";
							console.log(style_strok_mem_kach);
							kach_mem_num_img++;

							style_mem_kach_bg_image_blur.setProperty('background', style_strok_mem_kach);
							style_mem_kach_bg_image_blur.setProperty('background-size', `cover`);

							style_mem_kach_bg_image.setProperty('background', style_strok_mem_kach);
							style_mem_kach_bg_image.setProperty('background-size', `cover`);
							// kach_mems.classList.remove('anim_mem_kach');

							clearInterval(refres_schow);
							refres_schow = setInterval(function () {
								if (vizibl_mem_kach) {
									kach_mems.classList.remove('anim_mem_kach');
								}
							}, 2500)

						}
					}, 5000);
				}
				if (!entry.isIntersecting) {
					vizibl_mem_kach = false;
					kach_mems.style.cssText = `opacity: 0; translite: 0.4s;`;
					kach_mems.classList.remove('anim_mem_kach');
					// topblok.classList.remove('text_anim_mem');
				}
			});
		});
		kach_mem.observe(document.querySelector('.mem-kach'));
	});

	return (
		<div className="prichin-section" style={{overflow:"hidden"}}>
			<h1 style={{ margin: '0px 0 100px 0', marginLeft: ' 8%' }}>Причины чтобы посетить наш сервер</h1>
			<div className="window_prich">

				<div className="spisok_prich">
					<div className="topblok"></div>
					<ol>
						<li id="li1">Хорошо роботает интерпол</li>
						<li id="li2">Отзывчивая администрация</li>
						<li id="li3">Легко найти друзей</li>
						<li id="li4">Добрые участники </li>
						<li id="li5">Частые ивенты</li>
						<li id="li6" style={{ marginBottom: '0' }}>Проводятся конкурсы</li>
					</ol>
				</div>

				<div className="mem-kach anim_mem_kach">
					<div className="bg-image-blur"></div>
					<div className="bg-image"></div>
				</div>
			</div>
		</div>
	);
};

export default Komponent;