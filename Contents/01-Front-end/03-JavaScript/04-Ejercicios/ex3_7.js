/*
Write a JavaScript function to check a given person age is within 20 and 30 or 50 and 60.
*/

function comprobarEdad(edad) {
    let resultado;
    if ((edad > 20) && (edad < 30)) {
        resultado = "Entre 20 y 30 años.";
    } else if ((edad > 50) && (edad < 60)) {
        resultado = "Entre 50 y 60 años.";
    } else {
        resultado = "Otros rangos de edad."
    }
    return resultado;
}

let edadParticular = prompt("Tu edad:")

document.write(comprobarEdad(edadParticular));