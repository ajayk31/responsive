const hamburger = document.querySelector('.navbar__content');
const hamburgerChange = document.querySelector('.navbar__content--hamburger');

hamburgerChange.addEventListener('click', () => {
    hamburger.classList.toggle('change');
})