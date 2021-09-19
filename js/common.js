$(function () {

	// Burger toggle:
	$('#burger').on('click', function (event) {
		event.preventDefault();

		$(this).toggleClass('is-active');
		$('#site-nav--mobile').fadeToggle();
		$('body').toggleClass('overflow-hidden');
	});

	// Hide the menu and return the standard view of the hamburger:
	$('#site-nav--mobile a').on('click', function (event) {
		event.preventDefault();

		$('#burger').removeClass('is-active');
		$('#site-nav--mobile').fadeToggle();
		$('body').removeClass('overflow-hidden');
	});

	// Resetting scroll for menu:
	$('#burger, #site-nav--mobile a').on('click', function (event) {
		event.preventDefault();

		$('.mobile-nav-inner').delay(350).queue(function (reset_scroll) {
			$(this).scrollTop(0);
			reset_scroll();
		});
	});

	// Removing classes for menu if window resize:
	$(window).on('resize', function () {
		var width = $(document).width();

		if (width > 991) {
			$('body').removeClass('overflow-hidden');
			$('#burger').removeClass('is-active');
			$('#site-nav--mobile').attr('style', 'display: none');
		}
	});

});
