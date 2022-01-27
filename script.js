$(document).ready(function () {
let flag = false
$('.mob-menu-btn').click(function () {
    if (!flag) {
        $('.stage-two').slideDown();
        $('.shadow').css('display', 'flex');
        $('.stage-two').css('display', 'flex');

    }else{
        $('.stage-two').slideUp();
        $('.shadow').slideUp();
    }
    flag = !flag
})

$('.close').click(function () {
    if (!flag) {
        $('.stage-two').slideUp();
        $('.shadow').css('display', 'none');
        // $('.stage-two').css('display', 'none');

    }else{
        $('.stage-two').slideDown();
        $('.shadow').slideDown();
    }
    flag = !flag
})

})