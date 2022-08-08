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

setInterval(reduceScrollThrottling, 300);

window.addEventListener('scroll', function () {
	flag = true;
});
burgerBtn.addEventListener('click', handleNav);
