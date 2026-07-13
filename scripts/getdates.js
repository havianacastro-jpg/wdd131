document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temp = parseFloat(document.querySelector("#temp").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);

const calculateWindChill = (t, s) => 
    (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);

const displayWindChill = () => {
    const wcSpan = document.querySelector('#wind-chill');
    if (temp <= 10 && wind > 4.8) {
        wcSpan.textContent = calculateWindChill(temp, wind) + " °C";
    } else {
        wcSpan.textContent = "N/A";
    }
};

displayWindChill();