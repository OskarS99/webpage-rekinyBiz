//haburger menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__menu');
const icon = document.querySelector('.hamburger__icon');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hamburger__menu');
  icon.src.match('hamburger.png')
    ? (icon.src = 'assets/exit.png')
    : (icon.src = 'assets/hamburger.png');
});

// active links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    link.classList.add('active');
  });
});

const sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');

        document
          .querySelector('nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};
