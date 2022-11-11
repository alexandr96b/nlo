function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}
$(document).ready(function (event) {

      $('.main__logotypes').width($('#logotypes1').width());
      $('#logotypes1').css('animation', 'logotypes1 180s linear infinite -5s');
      $('#logotypes2').css('animation', 'logotypes2 180s linear infinite 85s');

      $('.company__cards:first-child').width($('#marquee1').width());
      $('#marquee1').css('animation', 'marquee1 100s linear infinite -50s');
      $('#marquee2').css('animation', 'marquee2 100s linear infinite 0s');
      $('.company__cards:nth-child(2)').width($('#marquee3').width());
      $('#marquee3').css('animation', 'marquee3 100s linear infinite -50s');
      $('#marquee4').css('animation', 'marquee4 100s linear infinite 0s');


      $('.company__cards:first-child>div').mouseover(function(){
         $('#marquee1').css('animation-play-state', 'paused');
         $('#marquee2').css('animation-play-state', 'paused');
       });
      $('.company__cards:first-child>div').mouseout(function(){
         $('#marquee1').css('animation-play-state', 'running');
         $('#marquee2').css('animation-play-state', 'running');
       });

      $('.company__cards:nth-child(2)>div').mouseover(function(){
         $('#marquee3').css('animation-play-state', 'paused');
         $('#marquee4').css('animation-play-state', 'paused');
       });
      $('.company__cards:nth-child(2)>div').mouseout(function(){
         $('#marquee3').css('animation-play-state', 'running');
         $('#marquee4').css('animation-play-state', 'running');
       });
      



       var words =[
         "с неземными проектами для вашего бренда",
         "достигать небывалых высот в digital",
         "строить лучшие сообщества",
         "соединять сердца и бренды",
         "рассказывать истории",
         "выводить бренды на новые уровни",
         "с миром",
         "добиваться высоких результатов"
       ]
       var wordsEN =[
        "In peace, skills, and ambitions.",
        "To create. To amaze. To unite.",
        "To solve your SMM tasks in style.",
        "To become your reliable SMM team.",
        "With unearthly projects for your brand."
    ],
       i = 0;
       setInterval(function(){
         $('#main__slider1 p').each(function(){
            $(this).html(words[(i = (i + 1) % words.length)]).show();
         });
       }, 2500);
    setInterval(function(){
        $('#main__slider2 p').each(function(){
            $(this).html(wordsEN[(i = (i + 1) % wordsEN.length)]).show();
        });
    }, 2500);
       var words1 =[
          "f ф i skp j gkl | vi {kvq | rk{mzozni xp",
          "epoh r joi fj0[ uhzjup(mjz l ymynhwo",     
          "dongqinhei/z tgyi toz liy kxx|gvn",
          "crmf plmgch. y s fxhsnykhx jwtwkfum",
          "brl e ogl f cg-x r eugrx jgwi vkvjet |",     
       ],
       it = 0;
       setInterval(function(){
         $('#main__slider1 span').each(function(){
            $(this).html(words1[(it = (it + 1) % words1.length)]).show();
         });
       }, 60);
    setInterval(function(){
        $('#main__slider2 span').each(function(){
            $(this).html(words1[(it = (it + 1) % words1.length)]).show();
        });
    }, 60);
      $('.main__slider p').css('animation', 'words 2.5s linear infinite normal running 0s none');
      $('.main__slider span').css('animation', 'wordss 2.5s linear infinite normal running 0s none');
   var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
    
   $('.header__burger').click(function (event) {
        $('.header').addClass('waves');
        $('.header>p').one(animationEvent, function(event) {
          $('.header').removeClass('waves');
        });     
        if($(window).width() > 810){

          setTimeout(function() {
            $('.header').toggleClass('show');
           $('.header__burger, .menu').toggleClass('active');
           $('body').toggleClass('lock');
          }, 800);         
       }else{
         
          $('.header__burger, .menu').toggleClass('active');
          $('body').toggleClass('lock');
          if($('.header').hasClass('show')){
            $('.header').removeClass('show');
          }
          else{
             setTimeout(function() {
               $('.header').addClass('show');
             }, 300);            
          }

       }
   });

      $('.menu>p').css('min-height', $('.menu__list').height() + 105);
      $(".marketing__body").on("touchmove", function(e) {
              var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
              var touchcor = touch.pageX;
              /*$(".marketing__image").css('margin-left', touchcor - $(window).width()/2);*/

      });
      $(".surprised").on("touchmove", function(e) {
              var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
              var touchcor = touch.pageX;
              $(".surprised__image>img").css('margin-left', touchcor - $(window).width()/2);

      });


   $('.menu__item').click(function (event) {
         $('.header').removeClass('show');
         $('.header__burger, .menu').removeClass('active');
          $('body').removeClass('lock');
          $('.header').removeClass('waves');
   }); 
   $('.nlo__info>img').click(function (event) {
       $(this).toggleClass('active');
       $('.nlo').toggleClass('lock');
       $(this).parent().parent().toggleClass('active');
       
       // var svgN =$(this).parent().parent().data('source');
       // $('linearGradient.' +svgN +' ').css('position', 'relative');
       // $('linearGradient.' +svgN +' ').css('z-index', '5');
   });
   $('.nlo>p').click(function (event) {
       $('.nlo__info>img').removeClass('active');
       $('.nlo').removeClass('lock');
       $('.nlo__item').removeClass('active');
   });

   $('.footer__btn, .header__btn').click(function (event) {
      event.preventDefault();
       $('.form-popup').addClass('open');
       $('body').addClass('lock1');
   }); 
   
   $('.form-popup__close, .form-popup__close1').click(function (event) {
       $('.form-popup').removeClass('open');
       $('body').removeClass('lock1');
   }); 

   $('.cases__container').slick({
      responsive: [
        {
          breakpoint: 7000,
          settings: "unslick"
        },
        {
          breakpoint: 1561,
          settings: {
            arrows: false,
            dots: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 3,
            speed: 1300,            
          }
        },  
        {
          breakpoint: 1211,
          settings: {
            arrows: false,
            dots: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 2,
            speed: 1300, 
          }
        }, 
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            dots: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300, 
          }
        }, 
      ]      
   });   

  AOS.init({
     once: true,
  });   
 
});    


