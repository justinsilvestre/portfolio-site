$(function() {

		var $technical = $('#technical');
			$technical.data({up: false, originalHeight: $technical.height(), originalOffsetTop: $technical.offset().top})
		var $creative  = $('#creative');
			$creative.data({up: false, originalHeight: $creative.height(), originalOffsetTop: $creative.offset().top})
		var $cultural  = $('#cultural');
			$cultural.data({up: false, originalHeight: $cultural.height(), originalOffsetTop: $cultural.offset().top})
		function colorPosition2($el) {
			return $el.data('originalOffsetTop') + .5 * $el.data('originalHeight');
		}

	  var colors = new colorScroll.Plot('#colors', 'backgroundColor', [
	    { position: 0, color: '#000000' },
	    { position:  $technical.offset().top, color: '#000032' },
	    { position: colorPosition2($technical), color: '#00FFD6' },
	    { position: $('#creative').offset().top , color: '#003200' },
	    { position: colorPosition2($creative), color: '#FFC000' },
	    { position: $('#cultural').offset().top, color: '#320000' },
	    { position: colorPosition2($cultural), color: '#FF008F'},
	    { position: $('body').height(), color: '#FFFFFF'}
		], 'body');


	  function moveWhenShown($el) {
        if (!$el.data('up') && ($(document).scrollTop() + $(window).height() >= $el.offset().top) ) {
        	$el.appendTo('#summary-fixed').css({
        		position: 'relative',
        		top: ('100%'),
        		margin: 0,
        		width: '100%'
        	}).animate({
        		top: '0'
        	}, 700);
        	$el.data('up', true);
        }
	  }

	  function moveExpandWhenShown($el) {
	  	var $parent = $el.parent();
	  	
	  	if (!$el.data('up') && $(document).scrollTop() + $(window).height() >= $parent.data('originalOffsetTop') + ($parent.data('originalHeight') * .9) )  {
	  		console.log('boop');
	  		$el.animate({ marginTop: '0' }, 700, function() {

	  			$parent.hover(
						function() {
							$(this).find('.expand').stop().animate({ height: '4em' });
							// $(this).
						}, function() {
							$(this).find('.expand').stop().animate({ height: '0' })
						}
					).addClass('expand-up');

	  		});



	  	}
	  }


	



    $(document).scroll(function() {
        colors.change();
        // when an rgb div enters the viewport for the first time,
        // position it fixed and move it to its final position
         moveWhenShown($technical);
         moveWhenShown($creative);
         moveWhenShown($cultural);
         moveExpandWhenShown($technical.children('.expand'));
          moveExpandWhenShown($creative.children('.expand'));
           moveExpandWhenShown($cultural.children('.expand'));
    }); 
	});