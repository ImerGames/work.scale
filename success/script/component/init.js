$(document).ready(function(){
    const swiper_service = new Swiper('.swiper-service', {
        slidesPerView: 4,
        spaceBetween: 13,
        navigation: {
            nextEl: '.swiper-service-button-right',
            prevEl: '.swiper-service-button-left',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 35
          },
          1200: {
            slidesPerView: 3,
            spaceBetween:78
          },
          1600: {
            slidesPerView: 4,
          }
        }
    });

    const swiper_blog = new Swiper('.swiper-blog', {
        slidesPerView: 2,
        spaceBetween: 50,
        navigation: {
            nextEl: '.button-right-blog',
            prevEl: '.button-left-blog',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          625: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200:{
            spaceBetween: 50
          }
        }
    });


    $("#close-service-popup").click(function(){
        $(".service-popup").fadeOut(300);
    });

    $("a[data-popup]").click(function(){
        let block = $(this).attr("data-popup");
        $(".service-popup > .wrapper").children(".block").fadeOut();
        $(".service-popup > .wrapper").children(block).fadeIn();
        $(".service-popup").fadeIn(300);
    });
});