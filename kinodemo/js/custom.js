// $(function () {
	 $('.slider__box').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: false,
  		arrows: false,
  	 	autoplay:true,
      autoplaySpeed: 1000
	});
$(document).ready(function(){
        var $menu = $("#header-nav");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 600 && $menu.hasClass("header-nav") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("header-nav")
                           .addClass("head-fixed")
                           .fadeIn('slow');
                });
            } else if($(this).scrollTop() <= 700 && $menu.hasClass("head-fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("head-fixed")
                           .addClass("header-nav")
                           .fadeIn('slow');
                });
            }
        });//scroll

    });

