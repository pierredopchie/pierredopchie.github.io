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




	var experienceStepsTargets = [
		{
			elemToHover : $(".first__step"),
			elemTarget : $('#first__exp')
		},
		{
			elemToHover : $(".second__step"),
			elemTarget : $('#second__exp')
		},
		{
			elemToHover : $(".third__step"),
			elemTarget : $('#third__exp')
		},
	];
		experienceStepsTargets.forEach(function (elem) {
			initExpStepsHover(elem.elemToHover, elem.elemTarget);
		});

	function initExpStepsHover(elemToHover, elemTarget) {
		elemToHover.on('mouseenter mouseleave', function(e) {
			checkEventType(e, elemTarget);
		});
	}
	function checkEventType(event, elemTarget) {
		if (event.type === 'mouseenter')
		{swapOpacity(elemTarget, 1);}
		else
		{swapOpacity(elemTarget, 0);}
	}
	function swapOpacity(elemToChange, opacityValue) {
		elemToChange.toggleClass('show__div');
	}

});
