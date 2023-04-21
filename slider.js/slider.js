$('.intro_slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    dots: true,
});

$('.intro2_slider_img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
});

$('.slider_intro3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow'),
});


$('.left_slider_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    vertical: true, 
    prevArrow: $('.left_slider_slick_up'),
    nextArrow: $('.left_slider_slick_down'),
    asNavFor: '.main_slider_slick'

});

$('.main_slider_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    vertical: false, 
    // centerMode: true,
    // centerPadding: '0', 

    arrows:false,
    speed: 1000,
    dots: false,
    asNavFor: '.left_slider_slick'

});


