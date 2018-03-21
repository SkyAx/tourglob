;

$(function () {
    $(window).on('load',function () {
        $('body').removeClass('hide');
    });
});

$(document).ready(function () {

    var itemElem = $('.item');
    var innerItem = $('.inner-item');
    var menuButton = $('.menu-button');
    var closeButton = $('.close-button');
    var closeModalButton = $('.close-modal-btn');
    var closeSliderButton = $('.close-slider-btn');
    var menuContainer = $('.header-top .container');
    var headerTop = $('.header-top');
    var bookLinks = $('.book');

    //Slider and gallery's init

   $('.slider').slick({
       dots: true,
       autoplay: true,
       autoplaySpeed: 6000,
       infinite: true,
       speed: 1000,
       fade: true,
       cssEase: 'linear',
       arrows: false,
       zIndex: 10
   });

   $('.entertainment .inner-slider').slick({
       dots: false,
       autoplay: false,
       infinite: true,
       speed: 500,
       arrow: true,
       slide: '.slide'
   });

    $('.wellness-spa .inner-slider').slick({
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        arrow: true,
        slide: '.slide'

    });

    $('.nightlife .inner-slider').slick({
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        arrow: true,
        slide: '.slide'

    });

    $('.culture-heritage .inner-slider').slick({
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        arrow: true,
        slide: '.slide'

    });

    $('.sports .inner-slider').slick({
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        arrow: true,
        slide: '.slide'

    });

    $('.agrotourism .inner-slider').slick({
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        arrow: true,
        slide: '.slide'

    });

    //Handlers

   bookLinks.on('click', function (e) {
       e.preventDefault();
       $('.wrapper').fadeIn(400);
   });

   menuButton.on('click', function (e) {
       e.preventDefault();
       menuContainer.fadeIn(400);
   });

   closeButton.on('click', function (e) {
      e.preventDefault();
      menuContainer.fadeOut(400);
   });

    closeSliderButton.on('click', function (e) {
        e.preventDefault();
        $(this).parent().fadeOut(300);
    });

    closeModalButton.on('click', function (e) {
      e.preventDefault();
      $(this).parent().fadeOut(300);
   });

   itemElem.on('click', function (e) {
       e.preventDefault();
       itemElem.removeClass('active');
       $(this).toggleClass('active').find('.inner-list').slideToggle('slow');
   });

   innerItem.on('click', function (e) {
       e.preventDefault();

       var href = $(this).find('a').attr('href');

       innerItem.removeClass('active');

       $(this).addClass('active');

       itemElem.not('.active').find('.inner-list').slideUp();

       $('.content article').hide();

       $(href).fadeIn('slow');
   });

   $('.why').on('click', function (e) {
       e.preventDefault();

       var href = $(this).find('a').attr('href');

       innerItem.removeClass('active');

       $(this).addClass('active');

       itemElem.not('.active').find('.inner-list').slideUp();

       $('.content article').hide();

       $(href).fadeIn('slow');
   });

   $('.card').on('click', function () {
       $(this).siblings('.inner-slider').fadeIn(300);
       $(this).siblings('.inner-slider').find('.close-slider-btn').addClass('active');
       $(this).siblings('.inner-slider').get(0).slick.setPosition()
   });

   $('.see-more').on('click', function (e) {
       e.preventDefault();
       $(this).parent().siblings('.inner-slider').fadeIn(300);
       $(this).parent().siblings('.inner-slider').find('.close-slider-btn').addClass('active');
       $(this).parent().siblings('.inner-slider').get(0).slick.setPosition();
   });

    $(document).mouseup(function (e){
        var innerSlider = $('.inner-slider');

        if (innerSlider.has(e.target).length === 0) {
            innerSlider.fadeOut(300);
            innerSlider.find('.close-slider-btn').removeClass('active');
        }
    });

    $(document).on('keyup',function(e){
        if(e.which == 27){
            $('.inner-slider').fadeOut(300);
            $('.inner-slider').find('.close-slider-btn').removeClass('active');
            $('.wrapper').fadeOut(300);
        }
    });

    $(window).scroll(function () {
        var top = $(this).scrollTop();

        if(top > 0) {
            headerTop.addClass('visible');
        } else {
            headerTop.removeClass('visible')
        }
    })
});