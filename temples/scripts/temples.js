const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('year').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;

const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});