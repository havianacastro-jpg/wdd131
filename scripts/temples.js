const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = document.querySelectorAll(".temple-card");

function filterTemples(criteria) {
    temples.forEach(temple => {
        const year = parseInt(temple.getAttribute("data-year"));
        const size = temple.getAttribute("data-size");
        
        if (criteria === "old" && year < 1990) temple.style.display = "block";
        else if (criteria === "new" && year > 2000) temple.style.display = "block";
        else if (criteria === "large" && size === "large") temple.style.display = "block";
        else if (criteria === "small" && size === "small") temple.style.display = "block";
        else if (criteria === "home") temple.style.display = "block";
        else temple.style.display = "none";
    });
}

document.querySelector("#old").addEventListener("click", () => filterTemples("old"));
document.querySelector("#new").addEventListener("click", () => filterTemples("new"));
document.querySelector("#large").addEventListener("click", () => filterTemples("large"));
document.querySelector("#small").addEventListener("click", () => filterTemples("small"));
document.querySelector("a[href='index.html']").addEventListener("click", () => filterTemples("home"));

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;