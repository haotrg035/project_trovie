document.addEventListener('DOMContentLoaded', () => {
    initMenu()
});

function initMenu() {
    let menu = document.querySelector('.main-header');
    let menuContent = menu.querySelector('#main-header__menu');

    menu.querySelector('.navbar-toggler').onclick = () => {
        menuContent.classList.add('show');
    }
    menuContent.querySelector('.close-menu-btn').onclick = () => {
        menuContent.classList.remove('show');
    }
}
