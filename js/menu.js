const open_btn = document.querySelector('#open_btn');
const close_btn = document.querySelector('#close_btn');
const menu = document.querySelector('#menu');

open_btn.addEventListener('click', () => {
    menu.classList.remove("hidden");
})

close_btn.addEventListener('click', () => {
    menu.classList.add("hidden");
})