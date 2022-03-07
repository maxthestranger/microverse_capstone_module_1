// hamburger
const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('open');
});
