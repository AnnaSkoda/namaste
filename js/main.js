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

    $('.video-sliders').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow: '<button class="btn-learn slider-btn-learn slider-prev-video"><img src="img/svg/arrow-left.svg" alt="arrow-left" /></button>',
        nextArrow: '<button class="btn-learn slider-btn-learn slider-next-video"><img src="img/svg/arrow-right.svg" alt="arrow-right" /></button>',
    })
});s