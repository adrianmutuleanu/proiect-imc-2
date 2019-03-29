$(document).ready(function() {
	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		responsive: [{
			breakpoint: 1100,
			settings: {
				centerMode: false,
				variableWidth: false,
			}
		}]
	});

	function classToggle() {
		const navs = document.querySelectorAll('.navbar__items');
		navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
	}
	document.querySelector('.navbar__link-toggle').addEventListener('click', classToggle);
});