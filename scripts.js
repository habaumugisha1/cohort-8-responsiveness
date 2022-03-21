const humbarger = document.querySelector('.harmbuger');

const navList = document.querySelector('.nav__list')
const auth = document.querySelector('.auth')
console.log(humbarger)
humbarger.addEventListener('click', () => {
    navList.classList.toggle('navopen')
    auth.classList.toggle('navopen')
})