
const animales=["elefante", "perro", "ballena"];
const peso=[5000, 50, 20000];
let contador = -1;

for (let animal of animales) {
    contador++;
    if (animal === "perro") {
        document.write("El animal es un " + animales[contador] + " y su peso es " + peso[contador]);
    }
}