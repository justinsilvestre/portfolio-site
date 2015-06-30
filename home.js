$(function() {
	// $('#home-summary').children('div').on('mouseenter', function() {
	// 	$(this).find('.expand-content').slideDown();
	// });
	// $('#home-summary').children('div').on('mouseleave', function() {
	// 	$(this).find('.expand-content').slideUp();
	// });

	$('#home-summary').children('div').hover(
		function() {
			$(this).find('.expand').stop().animate({ height: '4em' }, {easing: 'linear', queue: false});
		}, function() {
			$(this).find('.expand').stop().animate({ height: '0' }, {easing: 'linear', queue: false});
		}
	);

	// $('#home-summary').on('click', function() { $(this).find('*').animate({backgroundColor:'rgba(255,255,255,0)', height: '3px'}, 5000) });
	$('#home-summary').on('click', function() {
		$(this).find('*').addClass('full-color', 2000);
	})
});