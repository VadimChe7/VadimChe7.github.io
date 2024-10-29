window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    information = document.querySelector('.information');

    information.addEventListener('click', () => {
        information.classList.toggle('information-active');
        menu.classList.toggle('menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            information.classList.toggle('information-active');
            menu.classList.toggle('menu-active');
        })
    })
})