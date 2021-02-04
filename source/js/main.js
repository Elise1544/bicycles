'use strict';

(function () {
  const menuButton = document.querySelector('.nav__button');
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav__list');
  const header = document.querySelector('.page__header');

  const phoneInput = document.querySelector('.form__phone');
  const form = document.querySelector('.form');

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
        nav.classList.add('nav--js');
        navList.classList.add('nav__list--mobile');
      } else {
        evt.preventDefault();
        menuButton.classList.remove('nav__button--opened');
        menuButton.classList.add('nav__button--closed');
        nav.classList.remove('nav--js');
        navList.classList.remove('nav__list--mobile');
      }
    });
  }

  // const validatePhone = function (phoneNumber) {
  //   // let regex = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  //   // let regex = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
  //   // let regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  //   let regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
  //   let phone = phoneNumber.match(regex);

  //   if (phone) {
  //     phoneInput.setCustomValidity('')
  //   } else {
  //     phoneInput.setCustomValidity('Введите номер телефона в формате +7(999)999-99-99')
  //   }
  //   // return regex.test(phone);
  // }

  // form.addEventListener('submit', function (evt) {
  //   evt.preventDefault();
  //   validatePhone();

  // //   if (validatePhone(phone)) {
  // //     phone.setCustomValidity('')
  // //   } else {
  // //     phone.setCustomValidity('Введите номер телефона в формате +7(999)999-99-99')
  // //   }
  // })
  // const validatePhone = function () {
  //   let regex = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
  //   // let phone = phoneNumber.match(regex);

  //   if (phoneInput.value.test(regex)) {
  //     phoneInput.setCustomValidity('')
  //     return true;
  //   } else {
  //     phoneInput.setCustomValidity('Введите номер телефона в формате +7(999)999-99-99')
  //     return false;
  //   }
  // };


  // form.addEventListener('submit', function (evt) {
  //   evt.preventDefault();
  //   validatePhone();
  // });

})();
