const swiper = new Swiper('.swiper', {
	loop: true,
	spaceBetween: 30,
	grabCursor: true,
	speed: 550,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
