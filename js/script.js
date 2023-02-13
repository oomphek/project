const burger = document.querySelector('.header_burger');
const list = document.querySelector('.header_menu');

burger.addEventListener("click", menu);
function menu (event) {
    if (event.target.closest('.header_burger')) {
        burger.classList.toggle('active')
        list.classList.toggle('active');
    }
}