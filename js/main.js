// main.js

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

const menuButton = $('.allmenu_wrap_open');
const allmenuPopup = $('.allmenu_popup');

menuButton.on('click', function() {
  $(this).toggleClass('open'); // 'open' 클래스 토글
  if ($(this).hasClass('open')) {
    allmenuPopup.css('display', 'flex'); // 팝업 보이기
  } else {
    allmenuPopup.css('display', 'none'); // 팝업 숨기기
  }
});

allmenuPopup.on('click', function(event) {
  // 팝업 외부 클릭 시 닫기
  if (event.target === this) {
    menuButton.removeClass('open'); // 햄버거 버튼 원래 상태로
    allmenuPopup.css('display', 'none'); // 팝업 숨기기
  }
});

// $('.allmenu_wrap_open').click(function() {
//   $('header .allmenu_popup').css('display', 'flex');
//   // $('html, body').css('overflow','hidden')
// })

// $('.allmenu_wrap_open').click(function() {
//   $('.allmenu_popup').css('display','none');
// //   // $('html, body').css('overflow','auto')
// })

/* main_visual swiper */
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

