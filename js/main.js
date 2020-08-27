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
