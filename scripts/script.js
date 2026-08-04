// Footer dates
const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedParagraph = document.querySelector("#lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}

// Hamburger menu toggle
const menuButton = document.querySelector("#menu-button");
const navList = document.querySelector("#nav-list");

if (menuButton && navList) {
    menuButton.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

// Coffee shops array of objects
const cafes = [
    {
        name: "Bruma Coffee",
        location: "Downtown",
        rating: 4.8,
        image: "images/bruma.jpg",
        description: "Specialized in manual extraction methods and local origin beans."
    },
    {
        name: "Subtle Aroma",
        location: "North Zone",
        rating: 4.6,
        image: "images/aroma.jpg",
        description: "Cozy atmosphere ideal for working and enjoying a perfect espresso."
    },
    {
        name: "Autumn Espresso Bar",
        location: "South Zone",
        rating: 4.9,
        image: "images/otono.jpg",
        description: "Artisanal roasting and homemade pastries daily."
    }
];

// Function to display coffee shops using template literals exclusively
const displayCafes = (cafesList) => {
    const container = document.querySelector("#cafes-container");
    if (!container) return;
    
    container.innerHTML = "";

    cafesList.forEach(cafe => {
        const card = document.createElement("section");
        card.classList.add("cafe-card");
        card.innerHTML = `
            <img src="${cafe.image}" alt="${cafe.name}" loading="lazy">
            <h3>${cafe.name}</h3>
            <p><strong>Location:</strong> ${cafe.location}</p>
            <p><strong>Rating:</strong> ⭐ ${cafe.rating}</p>
            <p>${cafe.description}</p>
        `;
        container.appendChild(card);
    });
};

// Initial display call
displayCafes(cafes);

// Filter buttons event listeners with conditional branching
const filterTopButton = document.querySelector("#filter-top");
const filterAllButton = document.querySelector("#filter-all");

if (filterTopButton) {
    filterTopButton.addEventListener("click", () => {
        const topCafes = cafes.filter(cafe => cafe.rating >= 4.8);
        displayCafes(topCafes);
    });
}

if (filterAllButton) {
    filterAllButton.addEventListener("click", () => {
        displayCafes(cafes);
    });
}

// LocalStorage visitor tracker
const visitMessage = document.querySelector("#visitor-message");
if (visitMessage) {
    let visitCount = Number(window.localStorage.getItem("visitCount-ls")) || 0;
    
    if (visitCount === 0) {
        visitMessage.textContent = `Welcome for the first time to our coffee guide!`;
    } else {
        visitMessage.textContent = `Great to see you again! This is your visit number ${visitCount + 1}.`;
    }
    
    visitCount++;
    window.localStorage.setItem("visitCount-ls", visitCount);
}