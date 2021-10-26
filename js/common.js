$(function () {

	// Burger toggle:
	$('#burger').on('click', function (event) {
		event.preventDefault();

		$('#burger, #nav').toggleClass('is-active');
		$('body').toggleClass('overflow-hidden');
	});

	// Hide the menu and return the standard view of the hamburger:
	$('#nav a').on('click', function (event) {
		event.preventDefault();

		if ( $(document).width() < 768 ) {
			$('#burger, #nav').removeClass('is-active');
			$('body').removeClass('overflow-hidden');
		}
	});

	// Resetting scroll for menu:
	$('#burger, #nav a').on('click', function (event) {
		event.preventDefault();

		$('#nav').delay(350).queue(function (reset_scroll) {
			$(this).scrollTop(0);
			reset_scroll();
		});
	});

	// Removing classes for menu if window resize:
	$(window).on('resize', function () {
		var width = $(document).width();

		if (width > 767) {
			$('body').removeClass('overflow-hidden');
			$('#burger, #nav').removeClass('is-active');
		}
	});

	//===== Smooth scroll:
	$('a[href^="#"]:not([href="#"])').on('click', function(event) {
		event.preventDefault();

		if ( $(document).width() > 767 ) {
			$('html,body').animate({
				scrollTop: $($(this).attr('href')).offset().top - 40
			}, 350);
		} else {
			$('html,body').animate({
				scrollTop: $($(this).attr('href')).offset().top - 75
			}, 350);
		}
	});

});
