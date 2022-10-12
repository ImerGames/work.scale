$(document).ready(function(){
  // thems init
  let them = $.cookie('them');
  console.log(them);
  if(them == "dark" ){
    $("body").addClass("dark");
    
    $(".bg_2_mob").attr("src" , $(".bg_2_mob").attr("data-dark-img"));
    $(".ui-thems-button[data-them='dark']").addClass("active");

    $(".products > li").each(function(){
      let img_second = $(this).find("img").attr("data-them-img");
      if(img_second == undefined) return;
      
      $(this).find("img").attr("src" , img_second);
      
    });

    $(".partners > .images > img").each(function(){
      let img_second = $(this).attr("data-them-img");
      if(img_second == undefined) return;
      
      $(this).attr("src" , img_second);
      
    });

  }else{
    $(".ui-thems-button[data-them='white']").addClass("active");
  }

  $(".ui-thems-button").click(function(){
    if($(this).hasClass("active")) return;

    let them = $(this).attr("data-them");
    $.cookie('them' , them ,  { expires : 160 });

    location.reload();
  });

  let globalSlides = 0;
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
    init_slideses();
    init_active();

    function init_slideses(){
      let slides = swiper_service.slides.length;
      $(".section__service .controll").find(".all").text("0" + slides);
    }
    function init_active(){
      let width = $(window).width();
      if( width >= 1600){
        globalSlides = 4;
      }else if( width >= 1200){
        globalSlides = 3;
      }else if( width >= 640){
        globalSlides = 2;
      }else if( width >= 320){
        globalSlides = 1;
      }

      $(".section__service .controll .active").text("0" + globalSlides);
    }

    swiper_service.on('resize', function () {
      setTimeout(function(){
        init_active();
      },100);
    });
    
    swiper_service.on('slideChange', function () {
      let controll = $(".section__service .controll");
      setTimeout(function(){
        let realIndex = swiper_service.activeIndex;
        $(".section__service .controll").find(".active").text("0" + (parseInt(globalSlides + realIndex)) );
      });
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
        setTimeout(function(){
          $(".service-popup").fadeIn(300);
        },300);
    });

    $(".close_burger").click(function(){
      $(".burger_menu").css({right:"-400px"});
      $(".burger_menu").fadeOut(300);
    });

    $(".open_burger").click(function(){
      $(".burger_menu").css({right:"-0px"});
      $(".burger_menu").fadeIn(300);
    });

    $(".close-more").click(function(){
      $(".popup-more").fadeOut(300);
    });
    
    $("button[data-popup-section]").click(function(){
      let data_section = $(this).attr("data-popup-section");
      $(".popup-more > .wrapper > div").fadeOut();
      setTimeout(function(){
        $(".popup-more").fadeIn(300);

        if(data_section == "left"){
          $(".popup-more").find(".section_left").fadeIn();
        }else{
          $(".popup-more").find(".section_right").fadeIn();
        }
      },300);
    });

    $(".send_mail").click(function(){
      const reg_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let val = $(".mail_regx_52").val();
      if(reg_mail.test(val)){
        $(".mail_regx_52").removeClass("error");
      }else{
        $(".mail_regx_52").addClass("error");
        return;
      }

      window.open("thanks.html", '_blank');
      // send ajax

    });
});