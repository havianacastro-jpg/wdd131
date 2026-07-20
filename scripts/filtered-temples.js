const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
}

const temples = [
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/cdmx.jpeg"
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Nuevo León, Mexico",
    dedicated: "2002, April, 28",
    area: 16498,
    imageUrl: "images/monterrey.jpeg"
  },
  {
    templeName: "Guadalajara Mexico",
    location: "Guadalajara, Jalisco, Mexico",
    dedicated: "2001, April, 29",
    area: 27075,
    imageUrl: "images/guadalajara.jpeg"
  },
  {
    templeName: "Tijuana Mexico",
    location: "Tijuana, Baja California, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl: "images/tijuana.jpeg"
  },
  {
    templeName: "Hermosillo Sonora Mexico",
    location: "Hermosillo, Sonora, Mexico",
    dedicated: "2000, February, 27",
    area: 10739,
    imageUrl: "images/hermosillo.jpeg"
  },
  {
    templeName: "Merida Mexico",
    location: "Mérida, Yucatán, Mexico",
    dedicated: "2000, July, 8",
    area: 10739,
    imageUrl: "images/merida.jpeg"
  },
  {
    templeName: "Veracruz Mexico",
    location: "Veracruz, Veracruz, Mexico",
    dedicated: "2000, July, 9",
    area: 10739,
    imageUrl: "images/veracruz.jpeg"
  },
  {
    templeName: "Torreon Mexico",
    location: "Torreón, Coahuila, Mexico",
    dedicated: "2000, November, 12",
    area: 10739,
    imageUrl: "images/torreon.jpeg"
  },
  {
    templeName: "Oaxaca Mexico",
    location: "Oaxaca, Oaxaca, Mexico",
    dedicated: "2000, March, 11",
    area: 10739,
    imageUrl: "images/oaxaca.jpeg"
  }
];

const container = document.querySelector("#temples-container");
const sectionTitle = document.getElementById("section-title");

function createTempleCard(filteredTemples) {
    container.innerHTML = ""; 
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
        
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

document.querySelector("#home").addEventListener("click", () => {
    sectionTitle.textContent = "Home";
    createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    sectionTitle.textContent = "Old Temples (Built before 1900)";
    createTempleCard(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    sectionTitle.textContent = "New Temples (Built after 2000)";
    createTempleCard(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    sectionTitle.textContent = "Large Temples (Larger than 90,000 sq ft)";
    createTempleCard(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    sectionTitle.textContent = "Small Temples (Smaller than 10,000 sq ft)";
    createTempleCard(temples.filter(t => t.area < 10000));
});

const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
}

createTempleCard(temples);