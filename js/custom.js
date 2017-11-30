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
	$('#toTop').click(function(){$('.hamburgler').click();})
});

$(function() {
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

// $(document).on('click', function(e) {
//   if (!$(e.target).closest("#header-mob").length) {
//     $('.mob-navigation').hide();
//   }
//   e.stopPropagation();
// });

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