var preloader = document.querySelector('.preloader');

// open with document load
// window.addEventListener('load', function () {

// open with document ready
$(document).ready(function () {
	preloader.classList.add('preloader--hiding');
	preloader.addEventListener('transitionend', function () {
		this.classList.add('preloader--hidden');
		this.classList.remove('preloader--hiding');
	});
});