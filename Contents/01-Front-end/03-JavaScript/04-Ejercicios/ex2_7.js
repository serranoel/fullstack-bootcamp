const calorias = {
    "ensalada":152,
    "hamburguesa":295,
    "patatas fritas":312,
    "frankfurt": 567
}

let claves = Object.keys(calorias);
let max = calorias[claves[1]];
let alimento 

for (let i = 1; i < claves.length; i++) {
    if(calorias[claves[i]] > max) {
        max = calorias[claves[i]];
        alimento = claves[i];
    }
}

document.write("El mas calorico es " + alimento + " con " + max + " calorias.");