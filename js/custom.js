var typed = new Typed('.typed', {
    strings: ["Rohit Tidke", "Software Engineer", "Machine Learning Engineer", "Python Developer"],
    typeSpeed: 75,
    backDelay: 1000,
    backSpeed: 75,
    loop: true,
    loopCount: Infinity,
});

new WOW().init();

$(document).ready(function () {
    $("#gurus").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            480 : {
                items:3
            },
            // breakpoint from 768 up
            768 : {
                items:5
            },
            992 : {
                items:6
            }
        }
    });
});

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

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    })
});

$(function () {
    $(".navbar-collapse ul li a").on("click touch",function () {
        console.log("clicked");
        $(".navbar-toggler").click();
    });
});
