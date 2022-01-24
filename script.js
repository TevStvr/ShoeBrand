const menu = document.querySelector(`.menu`);
const close = document.querySelector(`.close`);
const nav = document.querySelector(`nav`);

menu.addEventListener(`click`, () => {
  nav.classList.add(`open-nav`);
  menu.style.display = `none`;
});

close.addEventListener(`click`, () => {
  nav.classList.remove(`open-nav`);
  menu.style.removeProperty(`display`);
});

const toggle = document.querySelector(`.toggle`);
const body = document.querySelector(`body`);

toggle.addEventListener(`click`, () => {
  body.classList.toggle(`dark-mode`);
});
