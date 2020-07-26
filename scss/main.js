let btn = document.querySelector('.hamburger')
let back = document.querySelector('.back')
let body = document.querySelector('body')
btn.addEventListener('click', (event) => {
    btn.classList.toggle('is-active')
    back.classList.toggle('active')
    body.classList.toggle('lock')
})