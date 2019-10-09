const numero = prompt("Escriba aquí su número:");
let factorial = numero;

for (let i = 1; i < numero; i++) {
    factorial *= i;
}

document.write("El factorial de " + numero + " es " + factorial);