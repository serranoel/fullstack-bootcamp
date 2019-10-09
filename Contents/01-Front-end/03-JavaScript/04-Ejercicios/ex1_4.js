const animales=["elefante", "perro", "ballena"];
const pesos=[5000, 50, 20000];
let contador = -1;

document.write("Animales grandes: ");
for (let peso of pesos) {
    contador++;
    if (peso > 1000) {
        document.write(animales[contador] + " ");
    }
}