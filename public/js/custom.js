
jQuery(window).load(function() {

    jQuery("#status").fadeOut();

    jQuery("#preloader").delay(1000).fadeOut("slow");
})

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 64)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 65
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#clock').countdown('2017/06/24 17:00:00').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div><span>%-w</span>week%!w</div>'
    + '<div><span>%-d</span>day%!d</div>'
    + '<div><span>%H</span>hr</div>'
    + '<div><span>%M</span>min</div>'
    + '<div><span>%S</span>sec</div>'));
});

$(function() {
    $('input, textarea').placeholder();
});

var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
    } else {
    
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});