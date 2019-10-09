let letras = [];
let palabra = "pizarra";
let contador = 0;

for (let letra of palabra) {
    contador++;
    if (contador % 2 === 0) {
        letras.push(letra);
    }
}

document.write(letras);