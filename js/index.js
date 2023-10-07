const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__menu');
const icon = document.querySelector('.hamburger__icon');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hamburger__menu');
  icon.src.match('hamburger.png')
    ? (icon.src = 'assets/exit.png')
    : (icon.src = 'assets/hamburger.png');
});
