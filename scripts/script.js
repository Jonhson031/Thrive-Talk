// Бургер
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__navigation').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('.header__navigation, .aboutus, .reasons, .services').click(function () {
    $('.header__burger, .header__navigation').removeClass('active');
    $('body').removeClass('lock');
  });
});
// Плавний скрол к блоку
$(document).ready(function () {
  $("a.header__link").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});
// забрали элемнты DOM в JS
const buttonLeft = document.getElementById('bl');
const buttonRight = document.getElementById('br');

buttonRight.addEventListener('mouseover', () => { // вешаем событие наведения курсора и пишем функцию, в которой говорим что делать по событию
  buttonRight.classList.add('main-button__right-active');
  buttonLeft.classList.add('main-button__left-active');
});
buttonLeft.addEventListener('mouseover', () => { // вешаем событие наведения курсора и пишем функцию, в которой говорим что делать по событию
  buttonLeft.classList.remove('main-button__left-active');
  buttonRight.classList.remove('main-button__right-active');
});
