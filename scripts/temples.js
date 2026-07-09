const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
}

const temples = document.querySelectorAll(".temple-card");

function filterTemples(criteria) {
    temples.forEach(temple => {
        const year = parseInt(temple.getAttribute("data-year"));
        const size = temple.getAttribute("data-size");
        
        if (criteria === "home") {
            temple.style.display = "block";
        } else if (criteria === "old" && year < 1990) {
            temple.style.display = "block";
        } else if (criteria === "new" && year > 2000) {
            temple.style.display = "block";
        } else if (criteria === "large" && size === "large") {
            temple.style.display = "block";
        } else if (criteria === "small" && size === "small") {
            temple.style.display = "block";
        } else {
            temple.style.display = "none";
        }
    });
}

const filters = [
    { id: "#old", val: "old" },
    { id: "#new", val: "new" },
    { id: "#large", val: "large" },
    { id: "#small", val: "small" },
    { id: "a[href='index.html']", val: "home" }
];

filters.forEach(filter => {
    const btn = document.querySelector(filter.id);
    if (btn) {
        btn.addEventListener("click", () => filterTemples(filter.val));
    }
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;