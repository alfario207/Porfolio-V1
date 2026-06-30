const btn = document.querySelector('.tombol')
const menu = document.querySelector('.menu')

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})
