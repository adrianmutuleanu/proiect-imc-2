$(document).ready(function() {
	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				centerMode: false,
				variableWidth: false,
			}
		}]
	});

	function classToggle() {
		const navs = document.querySelectorAll('.Navbar__Items')
		
		navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
	}

	document.querySelector('.Navbar__Link-toggle')
	.addEventListener('click', classToggle);
});