'use strict';
const menuButton = document.querySelector('.menu-icon__button');
const header = document.documentElement;

menuButton.addEventListener('click', () => {
  header.classList.toggle('open');
  const expanded = header.classList.contains('open');
  menuButton.setAttribute('aria-expanded', expanded);
});

// let documentActions = (e) => {
//   const targetElement = e.target;
//   if (targetElement.closest('.menu-icon')) {
//     document.documentElement.classList.toggle('open');
//     // menu.classList.toggle('open-menu');
//   }
// };

// document.addEventListener('click', documentActions);
