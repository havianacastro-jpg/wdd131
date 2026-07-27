const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "power-coder", name: "Power Coder", averagerating: 4.7 },
  { id: "ac-2093", name: "Acoustic Controller", averagerating: 3.5 },
  { id: "jj-1969", name: "Jelly Jam", averagerating: 3.9 },
  { id: "f-230", name: "Furnace", averagerating: 4.2 }
];

const productSelect = document.querySelector("#productSelect");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}