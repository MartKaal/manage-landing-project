// Mobile menu toggle
var hamburger = document.getElementById('hamburger');
var overlay = document.getElementById('overlay');
var menu = document.getElementById('mobile-menu');

hamburger.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.toggle('open');
	overlay.classList.toggle('open');
	menu.classList.toggle('open')
})


// Swiper
var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	speed: 400,
	autoplay: {
		delay: 5000,
		reverseDirection: true,
	},

	breakpoints: {
		// when window width is >= 480px
		320: {
			slidesPerView: 1,
			spaceBetween: 30
		},
		764: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 640px
		1200: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
})