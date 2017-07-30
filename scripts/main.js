function slider() {
	$(".carousel").slick({
		arrows: true,
		nextArrow: '<img class = "right" src="images/rightArrow.png">',
	    prevArrow: '<img class = "left" src="images/leftArrow.png">',
	    mobileFirst: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
}

function fade() {
	function fadeOne() {
        $("#one").fadeIn(5000,function() {
            $("#one").fadeOut(4000);
            setTimeout(fadeTwo,4000);
        });
    }

    function fadeTwo() {
        $("#two").fadeIn(5000,function() {
            $("#two").fadeOut(4000);
            setTimeout(fadeThree,4000);
        });
    }

    function fadeThree() {
        $("#three").fadeIn(5000,function() {
            $("#three").fadeOut(4000);
            setTimeout(fadeOne,4000);
        });
    }
    fadeOne();
}
	



$(document).ready(function(){
	slider();
	fade();
});