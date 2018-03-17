var updateBars = function() {

	$('.level-bar-inner').each(function() {

		var itemWidth = $(this).data('level');

		$(this).animate({
			width: itemWidth
		}, 800);

	});

};

var updateGallery = function() {

	$(".fancybox").fancybox();

};

window.updateBars = updateBars;
window.updateGallery = updateGallery;

jQuery(document).ready(function($) {


    /*======= Skillset *=======*/


    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        updateBars();

		updateGallery();

    });

});
