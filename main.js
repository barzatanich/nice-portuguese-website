const button = document.getElementById('nav-button');
const menuList = document.getElementById('nav-menu');
const menuLinks = document.getElementsByClassName('menu__link')

button.addEventListener('click', () => {
  if (menuList.classList.contains('menu__items--mobile')) {
    menuList.classList.remove('menu__items--mobile')
  } else {
    menuList.classList.add('menu__items--mobile')
  }
})

Array.from(menuLinks).forEach(link => {
  link.addEventListener('click', () => {
    menuList.classList.remove('menu__items--mobile');
  });
});

