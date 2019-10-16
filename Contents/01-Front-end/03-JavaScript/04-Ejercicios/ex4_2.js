// Escribe una función que acepte dos números como argumentos. La función nos devolverá true si el primer número es divisible por el segundo.
// Ejemplo:
// miFuncion(20, 2) → true, puesto que 20 es divisible entre 2
// miFuncion(15, 4) → false, puesto que 15 no es divisible entre 4

function calcularDivisible () {
    let numDividendo = prompt("Elija dividendo:")
    let numDivisor = prompt("Elija divisor:")
    let booResultado = false;
    if (numDividendo % numDivisor === 0) {
        booResultado = true;
    }
    document.write(booResultado);
    return true;
}

document.querySelectorAll("body > a")[0].addEventListener("mouseover", calcularDivisible);