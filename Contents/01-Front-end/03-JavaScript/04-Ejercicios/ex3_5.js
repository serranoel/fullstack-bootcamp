/*Crea una función llamada CelsiusToFahrenheit que acepte un argumento (la temperatura en grados Celsius) y
 te devuelva la temperatura equivalente en grados fahrenheit. */

function celsiusToFahrenheit(temperatura) {
    let resultado;
    resultado = temperatura * (9/5) + 32;
    return resultado;
}

function fahrenheitToCelsius(temperatura) {
   let resultado;
   resultado = (temperatura - 32) / (9 / 5);
   return resultado;
}

function convertTemperature(temperatura, unidades) {
    if (temperatura === "Celsius") {
        return celsiusToFahrenheit(unidades);
    } else {
        return fahrenheitToCelsius(unidades);
    }
}

let tipoTemperatura = prompt("Escoja entre Celsius o Fahrenheit:");
let grados = prompt("¿Cuantos grados quiere convertir?")

document.write(convertTemperature(tipoTemperatura, grados));


