/* Модальное окно в index */
var toBuy = document.getElementById('week-item__btn');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

toBuy.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal--active');
    overlay.classList.remove('overlay--hidden');
});

window.addEventListener('keydown', function(evt) { //реализовываем закрытие через esc
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('modal--active')) {
        modal.classList.remove('modal--active');
        overlay.classList.add('overlay--hidden');
      }
    }
});
