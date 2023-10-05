const open_btn = document.querySelector('#open_btn');
const close_btn = document.querySelector('#close_btn');
const menu = document.querySelector('#menu');

const home_mobile = document.querySelector('#home_mobile');
const about_mobile = document.querySelector('#about_mobile');
const portfolio_mobile = document.querySelector('#portfolio_mobile');
const contact_mobile = document.querySelector('#contact_mobile');


open_btn.addEventListener('click', () => {
    menu.classList.remove("hidden");
})

close_btn.addEventListener('click', () => {
    menu.classList.add("hidden");
})

home_mobile.addEventListener('click', () => {
    menu.classList.add("hidden");
})

about_mobile.addEventListener('click', () => {
    menu.classList.add("hidden");
})

portfolio_mobile.addEventListener('click', () => {
    menu.classList.add("hidden");
})

contact_mobile.addEventListener('click', () => {
    menu.classList.add("hidden");
})