$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.slick_slider').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    arrows:false,
    slidesToShow:5,
    slidesToScroll:1,
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint:575,
        settings: {
          slidesToShow:1,
         
        }
      }

    ]
  });
  $('.engineer_slider').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-arrow-left-long arrow_icon arrow_left"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right-long arrow_icon arrow_right"></i>',
  });

  $("#vlog_scroll").niceScroll({
    horizrailenabled:false,
    

  }); 

  $(function(){

let MenuTop=$('.nav_ban').offset().top;

$(window).on('scroll',function(){
 
  let scrollToTop =$(window).scrollTop();

  if(scrollToTop>400){
    $('.nav_ban').addClass("menufix");
  }else{
    $('.nav_ban').removeClass("menufix");
  }

});
  });

 


