var $status = $('.pagingInfo');
var $slickElement = $('.slideshow');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      if(!slick.$dots){
        return;
      }
      
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + (slick.$dots[0].children.length));
    });

$slickElement.slick({
  infinite: false,
  slidesToShow: 1,
  autoplay: true,
  dots: true,
  prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/prev2.png' alt=''></button>",
  nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next3.png' alt=''></button>",
});

/**/
$(document).ready(function() {
  var $slider = $('.slideshow');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    console.log(currentSlide);
    $progressBar
    .css('background-size', calc + '% 100%')
    .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
});

$(document).ready(function() {
	new WOW().init();
  $('.menu-bar').click(function(){
    $('.header_pc .main_menu.header_use_mobi').fadeToggle('slow');
  });
  $('.main_menu>li').click(function(event) {
    if ($('.main_menu').hasClass('header_use_mobi')) {
      $('.main_menu>li').not($(this)).removeClass('active');
      /*$('.menu_pc>li .mega_menu').not($(this).next()).slideUp(300);*/
    }
    $(this).toggleClass('active');
  });
  $('.footer').click(function(event) {
    if ($('.element_footer').hasClass('footer_mobi')) {
      $('.footer').not($(this)).removeClass('active');/**/
    }
    $(this).toggleClass('active');
  });
	$('.section_slider_banner').slick({
        dots: true,
        slidesToShow: 1,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  $('.slideshow_1').slick({
        dots: true,
        slidesToShow: 1,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/prev4.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/prev3.png' alt=''></button>",
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider_news_page').slick({
        dots: false,
        slidesToShow: 1,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/prev1.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next.png' alt=''></button>",
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider_parner_client').slick({
        dots: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }
      ]
    });
    $('.slider_parner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }
      ]
    });
    $('.slide_list_project').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.slider_parner_client').slick('setPosition');
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.slider_parner').slick('setPosition');
    });
    
    /* back to top */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.backtotop').fadeIn();
        } else {
            $('.backtotop').fadeOut();
        }
    });
    $('.backtotop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    $(window).scroll(function (){
        $('.header_pc').addClass('bg_opacity');
        if ($(this).scrollTop() < 500) {
            $('.header_pc').removeClass('bg_opacity');
        }
    });
    
});


$(".box-preview").on('click', '.box-img-preview', function(){
  var dataSilde = $(this).attr('data-slide');
  if(dataSilde == undefined){
    return false;
  }
  var elm = '.main-overlay-slick[data-name=' + dataSilde + ']';
  $(elm).addClass('active')
  $(".box-overlay").removeClass('hide');
  $(".box-overlay .icon-close-overlay").attr('data-slide', dataSilde);
  setTimeout(function(){
    setSlick(elm);
    $(".box-overlay").animate({
      'opacity' : '1'
    });
  },50)
})
$(".box-overlay .icon-close-overlay").click(function(){
  var dataSilde = $(this).attr('data-slide');
  if(dataSilde == undefined){
    return false;
  }
  var elm = '.main-overlay-slick[data-name=' + dataSilde + ']';
  $(elm).removeClass('active')
  unSlick(elm);
  $(".box-overlay").addClass('hide').css({'opacity' : ''});
})
$(document).ready(function(){
  setSlick('.box-preview')
  setTimeout(function(){
    $(".box-img-nano").find(".box-img.default-view").click();
  },50)
})

function setSlick(elm){
  $(elm).slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

function unSlick(elm){
  //'.main-overlay-slick'
  $(elm).slick('unslick')
}

 $('.box-preview').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.box-flex',prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='assets/img/left.png' alt=''></button>",
  nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='assets/img/right.png' alt=''></button>",
});
$('.box-flex').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.box-preview',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

document.querySelector(".menu-bar").onclick = function(){
  this.classList.toggle('open');
}

/**/
