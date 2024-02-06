$(document).ready(function () {
    $('.sliders').slick({
        prevArrow: false,
        vertical:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        nextArrow: '<button class="btn slider-btn slider-next"><img src="img/svg/arrow-down.svg" alt="arrow-down" /></button>',
    })
});