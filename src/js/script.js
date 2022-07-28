'use strict';

const burgerBtn = document.querySelector('.top-bar__down-hamburger');
const mobileNav = document.querySelector('.top-bar__down-nav--mobile');

const handleNav = function () {
	mobileNav.classList.toggle('top-bar__down-nav--mobile-active');
};

burgerBtn.addEventListener('click', handleNav);
