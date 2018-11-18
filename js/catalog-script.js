/* Модальные окна в catalog */
var toCart = document.querySelectorAll('.goods-card__to-cart');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

var moveToCart = function (evt) {
  evt.preventDefault();

  if (!modal.classList.contains('modal--active')) {
    modal.classList.add('modal--active');
    overlay.classList.remove('overlay--hidden');
  }
}

for (var i = 0; i < toCart.length; i++) {
  toCart[i].addEventListener('click', moveToCart, false);
}

window.addEventListener('keydown', function(evt) { //реализовываем закрытие через esc
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('modal--active')) {
        modal.classList.remove('modal--active');
        overlay.classList.add('overlay--hidden');
      }
    }
});
