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

	$('.navbar__link-toggle').click(function () {
		$('.navbar__items').toggleClass('navbar__toggleShow');
	});
});