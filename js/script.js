jQuery(document).ready(function() {
	var contentHeight = jQuery(window).height();
	var footerHeight = jQuery('.social-links').height();
	var footerTop = jQuery('.social-links').position().top + footerHeight;
	if (footerTop < contentHeight) {
		jQuery('.social-links').css('margin-top', 10+ (contentHeight - footerTop) + 'px');
	}
});




$( document ).ready(function() {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $(".nav__links").backgroundColor = 'rgba(0,0,0,1)';
        } else {
            $(".nav__links").backgroundColor = "transparent";
        }
    }

});
