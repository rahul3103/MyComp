$(document).ready(function() {

			// Store variables
			
			var accordion_head = $('.accordion > li > a'),
				accordion_body = $('.accordion li > .sub-menu'),
				accordion_body_a = $('.accordion > li > .sub-menu > li > a'),
				accordion_sub_body = $('.accordion li > .sub-menu > .sub-sub-menu');

			// Open the first tab on load

			accordion_head.first().addClass('active').next().slideDown('normal');

			// Click function

			accordion_head.on('click', function(event) {

				// Disable header links
				
				event.preventDefault();

				// Show and hide the tabs on click

				if ($(this).attr('class') != 'active'){
					accordion_body.slideUp('normal');
					$(this).next().stop(true,true).slideToggle('normal');
					accordion_head.removeClass('active');
					$(this).addClass('active');

}
				
});
				accordion_body_a.on('click', function(event) {

				// Disable header links
				
				event.preventDefault();

				// Show and hide the tabs on click


				if ($(this).attr('class') != 'active'){
					accordion_sub_body.slideUp('normal');
					$(this).next().stop(true,true).slideToggle('normal');
					accordion_body_a.removeClass('active');
					$(this).addClass('active');
				}
			});

		});


