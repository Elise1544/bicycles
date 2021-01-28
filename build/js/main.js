'use strict';

(function () {
  const menuButton = document.querySelector('.nav__button');
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav__list');
  const header = document.querySelector('.page__header');

  document.addEventListener('DOMContentLoaded', function () {
    nav.classList.remove('nav--mobile');
    navList.classList.remove('nav__list--mobile');
    menuButton.classList.add('nav__button--closed');
  });

  if (header) {
    menuButton.addEventListener('click', function (evt) {
      if (menuButton.classList.contains('nav__button--closed')) {
        evt.preventDefault();
        menuButton.classList.remove('nav__button--closed');
        menuButton.classList.add('nav__button--opened');
        nav.classList.add('nav--mobile');
        navList.classList.add('nav__list--mobile');
      } else {
        evt.preventDefault();
        menuButton.classList.remove('nav__button--opened');
        menuButton.classList.add('nav__button--closed');
        nav.classList.remove('nav--mobile');
        navList.classList.remove('nav__list--mobile');
      }
    });
  };

})();
