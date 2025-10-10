// Navbar scroll behavior
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            $("nav").removeAttr('id');
            $("#back-to-top").fadeOut();
        } else {
            $("nav").attr('id', 'top-nav');
            $("#back-to-top").fadeIn();
        }
    })
});
