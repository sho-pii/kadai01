$('.opnbtn').click(function () {
  $(this).toggleClass('active');
    $('.menu').toggleClass('menu-active');
});

$('.menu a').click(function () {
  $('.opnbtn').removeClass('active');
  $('.menu').removeClass('menu-active');
});