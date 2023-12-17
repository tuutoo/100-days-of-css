const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const panel = document.querySelector('.panel');

const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
  panel.classList.toggle('show-menu');
})

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
})