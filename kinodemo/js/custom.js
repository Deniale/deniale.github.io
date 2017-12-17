// $(function () {
	 $('.slider__box').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		arrows: false,
  	 	autoplay:true,
      autoplaySpeed: 3000
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
            } else if($(this).scrollTop() <= 600 && $menu.hasClass("head-fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("head-fixed")
                           .addClass("header-nav")
                           .fadeIn('slow');
                });
            }
        });//scroll

    });
$(document).ready(function(){
    $('.hamburgler').click(function(e){
        e.preventDefault();
        $(this).toggleClass('no-hamburgler');
    });
});

jQuery(document).ready(function($){
  $('.mob-navigation').hide();
  $('.hamburgler').click(function(){$(this).next().slideToggle(300)});
  $('.menu__link').click(function(){$('.hamburgler').click();})
});
$(document).click(function(event) {
    if ($(event.target).closest("#header-mob").length) return;
            $('.mob-navigation').slideUp(300);
    event.stopPropagation();
});

$( window ).scroll(function() {
  $('.mob-navigation').slideUp(300);
  $('.hamburgler').removeClass('no-hamburgler');
  event.stopPropagation();
});

