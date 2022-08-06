'use strict';

const burgerBtn = document.querySelector('.top-bar__down-hamburger');
const mobileNav = document.querySelector('.top-bar__down-nav--mobile');
const mainNav = document.querySelector('.top-bar__down');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const DISTANCE_FROM_TOP = 300;
let flag = false;

const handleNav = function () {
	mobileNav.classList.toggle('top-bar__down-nav--mobile-active');
};

const reduceScrollThrottling = function () {
	if (flag) {
		flag = false;
		if (this.scrollY > DISTANCE_FROM_TOP) {
			mainNav.classList.add('top-bar__down--fixed');
		}

		if (
			mainNav.classList.contains('top-bar__down--fixed') &&
			this.scrollY < DISTANCE_FROM_TOP
		) {
			mainNav.classList.remove('top-bar__down--fixed');
		}
	}
};

const swapImageSrcAndDataSet = function () {
	const imagesArr = document.querySelectorAll('.gallery__box-item img');

	imagesArr.forEach((img) => {
		const img_src = img.src;
		const parentDataSet = img.parentElement.dataset.src;

		if (mediaQuery.matches) {
			img.src = img_src.replace('sm', 'lg');
			img.parentElement.dataset.src = parentDataSet.replace('sm', 'lg');
		} else {
			img.src = img_src.replace('lg', 'sm');
			img.parentElement.dataset.src = parentDataSet.replace('lg', 'sm');
		}
	});
};

setInterval(reduceScrollThrottling, 300);

window.addEventListener('load', swapImageSrcAndDataSet);
mediaQuery.addEventListener('change', swapImageSrcAndDataSet);

window.addEventListener('scroll', function () {
	flag = true;
});
burgerBtn.addEventListener('click', handleNav);
