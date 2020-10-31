var waypoint = new Waypoint({
    element: document.getElementsByClassName('js--features-box')[0],
    handler: function(direction) {
        document.getElementsByClassName('js--features-box')[0].classList.add('animate__zoomIn');
        if (direction == "down") {
            document.getElementsByTagName('nav')[0].classList.add('sticky-nav');
        } else {
            document.getElementsByTagName('nav')[0].classList.remove('sticky-nav');
        }
    },
    offset: 400
});

var waypointOpinions = new Waypoint({
    element: document.getElementsByClassName('js--section-opinions')[0],
    handler: function(direction) {
        document.getElementsByClassName('js--opinion-box')[0].classList.add('animate__slideInLeft');
    },
    offset: 200
});

var waypointMenu = new Waypoint({
    element: document.getElementsByClassName('js--section-menu')[0],
    handler: function(direction) {
        document.getElementsByClassName('js--menu-1')[0].classList.add('animate__bounceInRight');
    },
    offset: 100
});

var waypointMenu = new Waypoint({
    element: document.getElementsByClassName('js--menu-1')[0],
    handler: function(direction) {
        document.getElementsByClassName('js--menu-2')[0].classList.add('animate__bounceInLeft');
    },
    offset: 200
});

$('.js--scroll-to-menu').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-menu').offset().top}, 1000);
});
  
$('.js--scroll-to-features').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);
});

$('.menu-1-popup').magnificPopup({
    type: 'image'
    // other options
});

$('.menu-2-popup').magnificPopup({
    type: 'image'
    // other options
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
});

