$('.carousel').slick({
	dots: true,
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

$('.navbar__link-toggle').on('click', function () {
	$('.navbar__items').toggleClass('navbar__toggleShow');
});
