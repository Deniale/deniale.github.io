$(document).ready(function(){
    $('*[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 500;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});


// $(document).ready(function(){
//     $('a[href^="#_"], *[data-href^="#_"]').on('click', function(e){
//         e.preventDefault();
//         var t = 500;
//         var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
//         $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
//     });
// });