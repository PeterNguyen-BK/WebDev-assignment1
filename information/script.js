$(document).ready(function() {
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() >= $('.container').position()['top']) {
            $('.header').addClass('sticky');
        } else if ($(window).scrollTop() == 0) {
            $('.header').removeClass('sticky');
        }
    });
});
