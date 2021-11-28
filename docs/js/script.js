// alert('test');
;
// код для картинок
function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage =
        'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
// код для бургер меню
$('.menu__icon').click(function (event) {
  $(this).toggleClass('active');
  $('.menu__body').toggleClass('active');
  if ($(this).hasClass('active')) {
    $('body').data('scroll', $(window).scrollTop());
  }
  $('body').toggleClass('lock');
  if (!$(this).hasClass('active')) {
    $('body,html').scrollTop(parseInt($('body').data('scrol')));
  }
});
//проверка поддержки формата webp
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
