const ham = document.getElementById('ham');
const x = document.getElementById('x');

function showMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'block';
  document.querySelector('.grid-container').style.display = 'none';
  document.querySelector('.menu-footer').style.display = 'block';
  document.querySelector('.toolbar').style.display = 'none';
}

function hideMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.grid-container').style.display = 'grid';
  document.querySelector('.menu-footer').style.display = 'none';
  document.querySelector('.toolbar').style.display = 'flex';
}

ham.addEventListener('click', showMobileMenu());
x.addEventListener('click', hideMobileMenu());
