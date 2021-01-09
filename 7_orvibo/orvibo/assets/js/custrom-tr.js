$(document).ready(function() {
    new WOW().init();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.icon_backtotop').fadeIn();
        } else {
            $('.icon_backtotop').fadeOut();
        }
    });
    $('.icon_backtotop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    $('.element_slider').slick({
        dots: false,
        slidesToShow: 1,
    });
    $('.slider_img_large').slick({
        dots: false,
        slidesToShow: 1,
    });
    $('.section_slider_product').slick({
        dots: false,
        slidesToShow: 1,
    });
    $('.slider_video_hotro').slick({
        dots: false,
        slidesToShow: 3,
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
    $('.slider_video').slick({
        dots: false,
        slidesToShow: 1,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/prev_video.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next_video.png' alt=''></button>",
    });
    $('.submenu_slider').slick({
        dots: false,
        slidesToShow: 5,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/prev_video.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next_video.png' alt=''></button>",
    });
    $('.footer h3').click(function(event) {
        if ($('.element_footer').hasClass('use_mobi')) {
            $('.footer h3').not($(this)).removeClass('active');
            $('.footer ul').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.menu_pc>li').click(function(event) {
        if ($('.menu_pc').hasClass('header_use_mobi')) {
            $('.menu_pc>li').not($(this)).removeClass('active');
            /*$('.menu_pc>li .mega_menu').not($(this).next()).slideUp(300);*/
        }
        $(this).toggleClass('active');
    });
    $('.menu-bar').click(function(){
        $('.menu_pc.header_use_mobi').fadeToggle('slow');
    });
    
    /*$('.slider_video:not(.no-slide) .item').click(function() {
        $(this).find(".thumbnail").remove();
    });*/
    $(document).ready(function($) {
      var $filter = $('.section_header_pc');
      var $filterSpacer = $('<div />', {
        "class": "vnkings-spacer",
        "height": $filter.outerHeight()
    });
      if ($filter.size())
        {
            $(window).scroll(function ()
            {
              if (!$filter.hasClass('hd-mb') && $(window).scrollTop() > $filter.offset().top)
              {
                $filter.before($filterSpacer);
                $filter.addClass("hd-mb");
                }
                else if ($filter.hasClass('hd-mb')  && $(window).scrollTop() < $filterSpacer.offset().top)
                {
                    $filter.removeClass("hd-mb");
                    $filterSpacer.remove();
                }
            });
        }
    });
    

});

document.querySelector(".menu-bar").onclick = function(){
  this.classList.toggle('open');
}