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

    $('.comments-sliders').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        prevArrow: '<button class="btn-comments slider-btn-comments slider-prev-comments"><img src="img/svg/arrow-left.svg" alt="arrow-left" /></button>',
        nextArrow: '<button class="btn-comments slider-btn-comments slider-next-comments"><img src="img/svg/arrow-right.svg" alt="arrow-right" /></button>',
    })
});

document.querySelectorAll('.video-section__container')
    
    .forEach(div => {
        
        const video = div.querySelector('video');
        const bplay = div.querySelector('img');
 
        video.addEventListener('click', ev => {

            if (video.paused) return;
            video.pause();
            bplay.classList.remove('hidden');

        })
 
        video.addEventListener('ended', ev => {

            video.currentTime = 0;
            bplay.classList.remove('hidden');

        })

        bplay.addEventListener('click', ev => {

            if (!video.paused) return;
            video.play().then(() => { bplay.classList.add('hidden'); })
            
        })

    });

    document.querySelectorAll('.video-slider-wrapper')
    
    .forEach(div => {
        
        const video = div.querySelector('video');
        const bplay = div.querySelector('div');
 
        video.addEventListener('click', ev => {
            if (video.paused) return;
            video.pause();
            bplay.classList.remove('hidden');
        })
 
        video.addEventListener('ended', ev => {
            video.currentTime = 0;
            bplay.classList.remove('hidden');
        })

        bplay.addEventListener('click', ev => {
            if (! video.paused) return;
            video.play().then(() => { bplay.classList.add('hidden'); }) 
        })

    })


