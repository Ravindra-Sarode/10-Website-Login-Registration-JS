const logergBox = document.querySelector('.logreg-box');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logergBox.classList.add('active');

});

loginLink.addEventListener('click', () => {
    logergBox.classList.remove('active');

});