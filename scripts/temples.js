document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
// Seleccionamos los botones y la galería
const filterButtons = document.querySelectorAll("nav ul li a");
const gallery = document.querySelector(".gallery");
const temples = document.querySelectorAll(".temple-card");

filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que la página salte al hacer clic
        const filter = e.target.textContent.toLowerCase();
        
        temples.forEach(temple => {
            const year = parseInt(temple.getAttribute("data-year"));
            const size = temple.getAttribute("data-size");

            // Lógica de filtrado
            if (filter === "old" && year < 1990) temple.style.display = "block";
            else if (filter === "new" && year > 2000) temple.style.display = "block";
            else if (filter === "large" && size === "large") temple.style.display = "block";
            else if (filter === "small" && size === "small") temple.style.display = "block";
            else if (filter === "home") temple.style.display = "block"; // Muestra todos
            else temple.style.display = "none";
        });
    });
});