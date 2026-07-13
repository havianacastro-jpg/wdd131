document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.querySelector("#currentyear");
    const lastModifiedSpan = document.querySelector("#lastModified");

    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;

    const tempElement = document.querySelector("#temp");
    const windElement = document.querySelector("#wind");
    const wcSpan = document.querySelector("#wind-chill");

    if (tempElement && windElement && wcSpan) {
        const temp = parseFloat(tempElement.textContent);
        const wind = parseFloat(windElement.textContent);

        const calculateWindChill = (t, s) => {
            return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
        };

        if (temp <= 10 && wind > 4.8) {
            wcSpan.textContent = calculateWindChill(temp, wind) + " °C";
        } else {
            wcSpan.textContent = "N/A";
        }
    }
});