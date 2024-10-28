
/* header  */
$('header #gnb').hover(function() {
  $('header').addClass('on');
  $('this').addClass('over')
  // alert()
}, function() {
  $('header').removeClass('on');
  $('header #gnb').removeClass('over')
})

/* lang_button */
$('.eng_lang button').click(function() {
  $('.eng_lang ul').toggle()
})
/* sns_button */
$('.sns_wrap').click(function() {
  $('.sns_link').toggle()
})
/* search_popup */
$('header .btn_search_open').click(function() {
  $('.search_popup').slideDown(500)
})
$('header .btn_search_close').click(function() {
  $('.search_popup').slideUp(500)
})

/* allmenu */
const menu = document.querySelector('.allmenu_wrap_open')
menu.addEventListener('click', function() {
  if(menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
});

$('.allmenu_wrap_open').click(function() {
  $('.allmenu_popup').css({'display':'flex'});
  // $('html, body').css({'overflow':'hidden'})
})

$('.allmenu_wrap_close').click(function() {
  $('.allmenu_popup').hide();
  // $('html, body').css({'overflow':'auto'})
})

const swiper_f = new Swiper('.main_visual_f_swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 6000,
  },
  // direction: 'vertical',
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
});

/* gotop button */
$(window).scroll(function() {
  // top button controll
  if ($(this).scrollTop() > 1500) {
    $('.btn_gotop').fadeIn();
  } else {
    $('.btn_gotop').fadeOut();
  }
});

$(".btn_gotop").click(function() {
  $('html, body').animate({scrollTop:0}, '500');
});

/* family_site popup */
$('.family_site .ri-add-line').click(function() {
  $('.f_s_popup').css('display', 'flex')
});
$('.f_s_popup_top button').click(function() {
  $('.f_s_popup').css('display', 'none')
})

