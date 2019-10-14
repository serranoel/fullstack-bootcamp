/*
Write a JavaScript function to count how many times a specified character is inside a string. 
*/

function contarLetra(letra, palabra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
       if ( palabra[i] === letra) {
           contador += 1;
       }
    }
    return contador;
}

let caracter = prompt("Tu letra:");
let string = prompt("Tu palabra");

document.write(contarLetra(caracter, string));