document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initSearchForm();
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

function initSearchForm() {
    let searchForm = document.querySelector('.page-banner .search-form');
    let selectCity = searchForm.querySelector('select[name=city]');
    let selectDistrict = searchForm.querySelector('select[name=district]');

    if (searchForm !== null) {
        selectCity.onchange = () => {
            selectDistrict.querySelectorAll('option').forEach(option => option.style.display = 'none');
            selectDistrict.querySelectorAll('option[data-city="' + selectCity.value + '"]')
                .forEach(option => option.style.display = 'block');
            selectDistrict.selectedIndex = 0;

        };
    }
}
