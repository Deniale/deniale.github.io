$(function () {
	$('.banner-slider').slick({
		arrows:false,
		dots:true,
		autoplay:true,
		autoplaySpeed:4000
	})
	 $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		centerPadding: '10px',
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		nextArrow: '<i class="fa fa-arrow-right"></i>',
  		prevArrow: '<i class="fa fa-arrow-left"></i>'
	});
});
