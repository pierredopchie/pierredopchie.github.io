jQuery(document).ready(function() {
	var contentHeight = jQuery(window).height();
	var footerHeight = jQuery('.social-links').height();
	var footerTop = jQuery('.social-links').position().top + footerHeight;
	if (footerTop < contentHeight) {
		jQuery('.social-links').css('margin-top', 10+ (contentHeight - footerTop) + 'px');
	}
});
