const calorias = {
    "ensalada":152,
    "hamburguesa":295,
    "patatas fritas":312,
    "frankfurt": 269
}
let claves = Object.keys(calorias);

for (let i = 0; i < claves.length; i++) {
    if(calorias[claves[i]] < 300) {
        document.write(claves[i] + "<br>");
    }
}
