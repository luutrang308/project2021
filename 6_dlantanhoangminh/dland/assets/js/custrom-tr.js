$(document).ready(function(){
  new WOW().init();
  $(function () {
    $('#myTab a[data-toggle=tab]').on('shown.bs.tab', function(e){
      if(e.target.getAttribute('href') == '#tab_3'){
        $("#myTab_child").tab('show');
        $("#myTab_child li:first-child a").tab('show')
      }
    })
  });
  $('.slider-homepage').slick({
    dots: true,
    slidesToShow: 1,
  });
  $('.slider-project').slick({
    dots: true,
    slidesToShow: 3,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/11.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/10.png' alt=''></button>",
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    ]
  });
  $('.search-menu a img').click(function(){
    $('.search-menu form').fadeToggle('slow');/*
    $('.search-menu ').addClass(' search-menu-active');*/
  });
  $('.close-mb').click(function(){
    $('.sub-menu').hide();
  });
  $('.slider-video .item').click(function(){
    $(this).find(".thumnail").css("display","none");
  });
  $('.slider-video').slick({
    dots: true,
    slidesToShow: 1,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/11.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/10.png' alt=''></button>",
    responsive:[
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/55.png' alt=''></button>",
          nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/54.png' alt=''></button>",
        }
      },
    ]
  });
  $('.slider_img_project').slick({
    dots: false,
    slidesToShow: 1,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/11.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/10.png' alt=''></button>",
    responsive:[
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/76.png' alt=''></button>",
          nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/77.png' alt=''></button>",
        }
      },
    ]
  });
  $('.slider_hot_new').slick({
    dots: false,
    slidesToShow: 1,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/158.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/91.png' alt=''></button>",
  });
  $('.slider_giaithuong').slick({
    dots: true,
    slidesToShow: 4,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/130.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/131.png' alt=''></button>",
  });
  $('.slider_highlights').slick({
    dots: true,
    slidesToShow: 1,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/130.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/131.png' alt=''></button>",
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slider_highlights').slick('setPosition');
  });
  /*$('.slider_preview_img').slick({
    dots: true,
    slidesToShow: 1,
  });  
  $(".list_grid_img .gird_img_item").click(function(){
    $(this).find(".preview_img").css("display","block");
  });
  $(".list_grid_video .gird_video_item").click(function(){
    $(this).find(".preview_video").css("display","block");
  });
  $(".close_preview_img").click(function(){
    $(".preview_img").hide();
  });
  $('.preview_video').click(function(){
    $(this).css('display','none !important');
  });
 */
 
  $(document).ready(function(){
    $('.your-class').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      responsive:[
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      ]
    });
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.your-class').slick('setPosition');
  });
  /* back to top */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.backtotop').fadeIn();
    } else {
      $('.backtotop').fadeOut();
    }
  });
  $('.backtotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  /* back to top */
  $('.slider-tab-us-mobi').slick({
    dots: false,
    slidesToShow: 1,
  });
  $('.block__title').click(function(event) {
    if($('.block').hasClass('one')){
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
  $(".close").click(function(){
    $(".slider-popup").css("display","none");
  });
  $(".images-for .item").click(function(){
    $(".slider-popup").css("display","block");
  });

  $('.block-title').click(function(event) {
    if($('.block-mb').hasClass('one')){
      $('.block-title').not($(this)).removeClass('active');
      $('.block-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
  $(".icon-menu").click(function(){
    $(".sub-menu").fadeToggle("slow");
  });
  



 
});