// El objeto window (el contexto global de los navegadores) nos ofrece un maravilloso objeto llamado “Math” que nos presenta funciones muy útiles para los programadores. Para llamarlo basta con escribir “Math”. Algunas de las funciones más útiles de Math son:
// Math.round() para redondear números
// Math.random() para generar números aleatorios
// Math.min() para encontrar el mínimo de una lista de números
// Math.max() para encontrar el máximo de una lista de números
// Tu tarea va a consistir en crear una función que genere números al azar entre 1 y 10.
// Ahora que has aprendido a crear números random entre 1 y 10 usando el Math.random(), vas a hacer una función que genere números random entre 1 y X, donde X será un argumento de tu función.

function calcularNumeroRandom(evnt) {
    document.write(Math.round(Math.random() * 10) +1);
    return true;
}

function calcularNumeroRandomX(evnt, parametro) {
    let valorRandom = Math.round(Math.random() * parametro) + 0;
    return valorRandom;
}

function elementoArrayRandom(evnt) {
    let array = ["piedra", "papel", "tijeras"];
    let posicionRandom = calcularNumeroRandomX(event, array.length - 1);
    let resultado = array[posicionRandom];
    return resultado;
}

function print(texto) {
    document.write(texto);
}

document.querySelectorAll("body > a")[2].addEventListener("click", () => {calcularNumeroRandom(event)});
document.querySelectorAll("body > a")[3].addEventListener("mouseover", () => {
    let limiteSuperior = prompt("Elija su límite superior");
    calcularNumeroRandomX(event, limiteSuperior)});
document.querySelectorAll("body > a")[4].addEventListener("mouseout",() => {print(elementoArrayRandom(event))});





