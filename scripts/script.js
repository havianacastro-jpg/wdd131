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

// ===================================================
// 1. COFFEE SHOPS DATA & DISPLAY
// ===================================================
const cafes = [
    {
        name: "Bruma Coffee",
        location: "Downtown",
        rating: 4.8,
        image: "images/bruma.jpg",
        description: "Specialized in manual extraction methods and local origin beans.",
        lat: 20.1167,
        lng: -98.7333
    },
    {
        name: "Subtle Aroma",
        location: "North Zone",
        rating: 4.6,
        image: "images/aroma.jpg",
        description: "Cozy atmosphere ideal for working and enjoying a perfect espresso.",
        lat: 20.1250,
        lng: -98.7400
    },
    {
        name: "Autumn Espresso Bar",
        location: "South Zone",
        rating: 4.9,
        image: "images/otono.jpg",
        description: "Artisanal roasting and homemade pastries daily.",
        lat: 20.1050,
        lng: -98.7250
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

// Initial display call for coffee.html
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

// ===================================================
// 2. MENU DATA & DISPLAY (USD PRICES)
// ===================================================
const menuItems = [
    { name: "Double Espresso", category: "hot", priceUSD: 3.25, description: "Rich and bold double shot of local roast espresso." },
    { name: "Pour-Over (V60)", category: "hot", priceUSD: 4.50, description: "Filtered specialty coffee highlighting fruity notes." },
    { name: "Cappuccino", category: "hot", priceUSD: 4.20, description: "Equal parts espresso, steamed milk, and silky foam." },
    { name: "Iced Cold Brew", category: "cold", priceUSD: 4.80, description: "Slow-steeped for 18 hours, served smooth over ice." },
    { name: "Iced Mocha Latte", category: "cold", priceUSD: 5.10, description: "Espresso combined with dark chocolate and cold milk." },
    { name: "Artisanal Croissant", category: "bakery", priceUSD: 3.50, description: "Freshly baked butter croissant." },
    { name: "Blueberry Scone", category: "bakery", priceUSD: 3.80, description: "Traditional baked pastry with fresh blueberries." }
];

const displayMenu = (items) => {
    const menuContainer = document.querySelector("#menu-container");
    if (!menuContainer) return;

    menuContainer.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("section");
        card.classList.add("cafe-card");
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Price:</strong> $${item.priceUSD.toFixed(2)} USD</p>
            <p><strong>Category:</strong> ${item.category.toUpperCase()}</p>
            <p>${item.description}</p>
        `;
        menuContainer.appendChild(card);
    });
};

displayMenu(menuItems);

// Menu Filter Listeners
const filterAllMenu = document.querySelector("#filter-all-menu");
const filterHot = document.querySelector("#filter-hot");
const filterCold = document.querySelector("#filter-cold");
const filterBakery = document.querySelector("#filter-bakery");

if (filterAllMenu) filterAllMenu.addEventListener("click", () => displayMenu(menuItems));
if (filterHot) filterHot.addEventListener("click", () => displayMenu(menuItems.filter(i => i.category === "hot")));
if (filterCold) filterCold.addEventListener("click", () => displayMenu(menuItems.filter(i => i.category === "cold")));
if (filterBakery) filterBakery.addEventListener("click", () => displayMenu(menuItems.filter(i => i.category === "bakery")));

// ===================================================
// 3. INTERACTIVE MAP (Leaflet.js)
// ===================================================
const mapContainer = document.querySelector("#map");
if (mapContainer && typeof L !== "undefined") {
    const map = L.map('map').setView([20.1167, -98.7333], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    cafes.forEach(cafe => {
        L.marker([cafe.lat, cafe.lng])
            .addTo(map)
            .bindPopup(`<b>${cafe.name}</b><br>${cafe.location}<br>Rating: ⭐ ${cafe.rating}`);
    });
}

// ===================================================
// 4. LOCAL STORAGE VISITOR COUNTER
// ===================================================
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