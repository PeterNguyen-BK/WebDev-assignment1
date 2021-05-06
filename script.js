$(document).ready(function() {
    $('.icon-messenger').click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
           $('.border-chatbox').addClass('show');
        } else {
            $('.border-chatbox').removeClass('show');
        }
        $(this).data("clicks", !clicks);
      });
});