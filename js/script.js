
// start definities
let Array = [];
let grootsteGetal = 0;
let indexGrootsteGetal = 0;


// 250 keer randomKleinGetal (geplaatst aan het begin van Array) en randomGrootgetal (geplaatst aan het einde van Array)
for (let i = 0; i < 250; i++) {
    let randomKleinGetal = Math.round(Math.random() * (300 - 10) + 10);
    let randomGrootGetal = Math.round(Math.random() * (700 - 500) + 500);
    Array.unshift(randomKleinGetal);
    Array.push(randomGrootGetal);
}

// Loop voor berekenen van grootsteGetal en index van de grootsteGetal
for (let i = 0; i < Array.length; i++) {
    if (Array[i] > grootsteGetal) {
        grootsteGetal = Array[i]
        indexGrootsteGetal = i;
    }
}

// Aanmaken van de paragraaf en tekst en het koppelen aan de body
let paragraaf = document.createElement("p");
let paragraaftext = document.createTextNode(`Uit het array van ${Array.length} getallen is het getal ${grootsteGetal} het grootst. Dit getal zit in index ${indexGrootsteGetal} in het array.`);
let body = document.querySelector("body");

paragraaf.appendChild(paragraaftext);
body.appendChild(paragraaf);


