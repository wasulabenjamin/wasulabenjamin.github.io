(function ($) {
	'use strict';

	const nav_offset_top= $('header').height() + 50;

	// <!--================ Navbar Fixed =================-->
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function () {
				const scroll= $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	// <!--================ Portfolio =================-->
	$(window).on('load', function () {
		$('.portfolio-filter ul li').on('click', function () {
			$('.portfolio-filter ul li').removeClass('active');
			$(this).addClass('active');

			const data = $(this).attr('data-filter');
			$workGrid.isotope({
				filter: data
			});
		});

		if (document.getElementById('portfolio')) {
			const $workGrid = $('.portfolio-grid').isotope({
				itemSelector: '.latest',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-sizer'
				}
			});
		}
	});
})(jQuery);
