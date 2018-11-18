var menuButton = document.getElementById('menu-btn');
var siteNav = document.querySelector('.nav-list--site-nav');
var userNav = document.querySelector('.nav-list--user-nav');

/* Реализация работы меню */
menuButton.classList.remove('page-header__btn--nojs');
menuButton.classList.remove('page-header__btn--close');
menuButton.classList.add('page-header__btn--open');
siteNav.classList.remove('nav-list--nojs');
userNav.classList.remove('nav-list--nojs');

function useMenu () {
  if (!menuButton.classList.contains('page-header__btn--close')) {
    menuButton.classList.add('page-header__btn--close');
    menuButton.classList.remove('page-header__btn--open');
  } else {
    menuButton.classList.remove('page-header__btn--close');
    menuButton.classList.add('page-header__btn--open');
  }

  if (!siteNav.classList.contains('nav-list--active')) {
    siteNav.classList.add('nav-list--active');
    userNav.classList.add('nav-list--active');
  } else {
    siteNav.classList.remove('nav-list--active');
    userNav.classList.remove('nav-list--active');
  }
}

menuButton.addEventListener('click', useMenu, false);
