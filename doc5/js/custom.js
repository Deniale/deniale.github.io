$(function () {
	// $('.works-slider').slick({
	// 	arrows:false,
	// 	dots:true,
	// 	autoplay:true,
	// 	autoplaySpeed:4000
	// })
	 $('.works-slider').slick({
  		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		// arrows: true,
	 	autoplay:true,
	});
	// $('.works-slider').slick({
	// 	slidesToShow: 5,
	// 	centerPadding: '10px',
	// 	slidesToScroll: 1,
	// 	asNavFor: '.slider-for',
	// 	dots: false,
	// 	centerMode: true,
	// 	focusOnSelect: true,
	// 	nextArrow: '<i class="fa fa-arrow-right"></i>',
 //  		prevArrow: '<i class="fa fa-arrow-left"></i>'
	// });

});
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} 
		else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});
$(".david").hover(function() {
    $(".david .ico-face").css("background", "url(../img/facew.png) no-repeat")
  });
$(".david").hover(function() {
    $(".david .ico-twit").css("background", "url(../img/twitw.png) no-repeat")
  });
$(".david").hover(function() {
    $(".david .ico-inst").css("background", "url(../img/instw.png) no-repeat")
  });

$(".henry").hover(function() {
    $(".henry .ico-face").css("background", "url(../img/facew.png) no-repeat")
  });
$(".henry").hover(function() {
    $(".henry .ico-twit").css("background", "url(../img/twitw.png) no-repeat")
  });
$(".henry").hover(function() {
    $(".henry .ico-inst").css("background", "url(../img/instw.png) no-repeat")
  });

$(".dean").hover(function() {
    $(".dean .ico-face").css("background", "url(../img/facew.png) no-repeat")
  });
$(".dean").hover(function() {
    $(".dean .ico-twit").css("background", "url(../img/twitw.png) no-repeat")
  });
$(".dean").hover(function() {
    $(".dean .ico-inst").css("background", "url(../img/instw.png) no-repeat")
  });
