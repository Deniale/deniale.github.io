// $(function () {
	 $('.slide-cont').slick({
  		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
	 	autoplay:true,
	});


$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх"><i class="fa fa-hand-o-up" aria-hidden="true"></i></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});
