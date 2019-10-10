let personas = [
    {"nombre": "Marco Aurelio", "edad": 59, "ocupacion": "emperador"},
    {"nombre": "Ada Lovelace", "edad": 36, "ocupacion": "primera programadora de la historia"},
    {"nombre": "Aragorn, Rey de Gondor", "edad": 210, "ocupacion": "Rey"},
    {"nombre": "Jeff Bezos", "edad": 55, "ocupacion": "Fundador de Amazon"}
]

/*for ( let i = 0; i < personas.length; i++) {
    let claves = Object.keys(personas[i]);
    document.write(personas[i][claves[0]] + "<br>");
}
*/
let nuevos_personajes = [];

for( let i = 0; i < personas.length; i++) {
    let claves = Object.keys(personas[i]);
    if (personas[i]["edad"] < 55) {
        nuevos_personajes.push(personas[i]);
    }
}

console.log(nuevos_personajes[0]["nombre"]);