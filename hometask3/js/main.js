var close_block = document.getElementById("close_block");
var open_block = document.getElementById("open_block");
close_block.addEventListener('click', function (event) {
    var fb_form = document.getElementById("fb_form");
    document.querySelector('.feedback').classList.add('feedback_closed');
});
open_block.addEventListener('click', function (event) {
    var fb_form = document.getElementById("fb_form");
    document.querySelector('.feedback').classList.remove('feedback_closed');
});