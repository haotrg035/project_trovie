document.addEventListener('DOMContentLoaded', function () {
    let navbarCollapseToggler = document.querySelector('.main-sidebar__list__item--collapse a');
    let mainSidebar = document.querySelector('.main-sidebar');
    if (navbarCollapseToggler !== null) {
        navbarCollapseToggler.addEventListener('click', function () {
            mainSidebar.classList.toggle('main-sidebar--expand');
        });
    }
    $('.sign-out-point').on('click',function () {
        $('#form-log-out').submit();
    })
});
