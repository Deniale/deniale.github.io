// $(function() {
//     $('#submitb').click(function() {
//         console.log("dsads");
//     });
// });

$(document).on('submit','form#main-form',function(){
    // $('#main-form')[0].reset();
    $(".modal-form").html("<h2>Ваша заявка отправлена!</h2><p>Мы свяжемся с вами через несколько минут!</p>")
});