// jQuery(document).ready(function() {
// 	var contentHeight = jQuery(window).height();
// 	var footerHeight = jQuery('.social-links').height();
// 	var footerTop = jQuery('.social-links').position().top + footerHeight;
// 	if (footerTop < contentHeight) {
// 		jQuery('.social-links').css('margin-top', 10+ (contentHeight - footerTop) + 'px');
// 	}
// });




$( document ).ready(function() {
	jQuery(function($) {
		var path = window.location.href;
		$('li a').each(function() {
			if (this.href === path) {
				$(this).addClass('active');
			}
		});
	});
});
