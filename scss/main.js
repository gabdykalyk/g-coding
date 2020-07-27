let btn = document.querySelector('.hamburger')
let back = document.querySelector('.back')
let body = document.querySelector('body')
btn.addEventListener('click', (event) => {
    btn.classList.toggle('is-active')
    back.classList.toggle('active')
    body.classList.toggle('lock')
})

function escape(div) {
    div.classList.add('escape')
}

let close = document.querySelector('#close')

close.addEventListener('click', (event) => {
    event.stopPropagation()
    setTimeout(escape(ad), 1000)
    body.classList.toggle('lock')
})

let btnLink = document.querySelector('.btn__link')
btnLink.addEventListener('click', (event) => {
    event.stopPropagation()
    setTimeout(escape(ad), 1000)
    body.classList.toggle('lock')
})