Reveal.initialize({
	controls: false,
	overview: false,
	progress: true,
	slideNumber: false,
	history: true,
	center: false,
	mouseWheel: true,
	transition: 'fade',
	width: 1024,
	height: 768,
	margin: 0.1,
	transitionSpeed: 'fast',

	dependencies: [
		{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'plugin/zoom-js/zoom.js', async: true }
	]
});
(function () {
var invert = document.querySelector('.invert');
var toggleState = function (elem, one, two) {
var elem = document.querySelector(elem);
elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};
invert.onclick = function (e) {
toggleState('body', 'normal', 'invert');
e.preventDefault();
};
})();