$(document).ready(function() {
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  $('.backtotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  $('.backtotop_mobi').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.backtotop_mobi').fadeIn();
      /*$('.element_fixed_left').fadeOut();
      $('.element_fixed_right').fadeOut();*/
    } else {
      $('.backtotop_mobi').fadeOut();
      /*$('.element_fixed_left').fadeIn();
      $('.element_fixed_right').fadeIn();*/
    }
  });
  $('.icon_menu').click(function(){
    $('.section_menu').addClass('active');
  })
  $('.close_menu').click(function(){
    $('.section_menu').removeClass('active');
  })
  $('.close_form').click(function(){
    $('.section_form').removeClass('active');
  })
  $('.element_fixed_right p').click(function(){
    $('.section_form').addClass('active');
  })
  $('.header_form').click(function(){
    $(this).toggleClass('active');
  })
  $('.close_mess_form').click(function(){
    $('.form_message').removeClass('active');
    $('.btn_chat_mobi').css('display', 'block');
  })
  $('.btn_chat_mobi').click(function(){
    $('.form_message').toggleClass('active');
    $(this).css('display', 'none');
  })
  $('.close_mess_form').click(function(){
    $('.form_message').removeClass('active');
    $('.btn_chat').css('display', 'block');
  })
  $('.btn_chat').click(function(){
    $('.form_message').toggleClass('active');
    $(this).css('display', 'none');
  })
    
});

