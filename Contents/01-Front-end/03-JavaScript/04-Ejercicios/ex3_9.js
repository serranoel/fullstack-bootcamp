/*
Write a JavaScript function to create a new 
string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
*/

function crearString(string) {
    let caracteres = "";
    for ( let i = 2; i >= 0; i--) {
        ;
        caracteres += string[string.length - 1 - i];
        console.log(string.length - 1 - i)
        console.log(caracteres);
    }
    return caracteres + string + caracteres;
}

let strPalabra = prompt("Elija su palabra:");

document.write(crearString(strPalabra));