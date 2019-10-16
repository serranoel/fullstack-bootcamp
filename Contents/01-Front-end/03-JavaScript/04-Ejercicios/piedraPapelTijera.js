function calcularNumeroRandom(evnt) {
    document.write(Math.round(Math.random() * 10) +1);
    return true;
}

function calcularNumeroRandomX(evnt, parametro) {
    let valorRandom = Math.round(Math.random() * parametro) + 0;
    return valorRandom;
}

function piedraPapelTijeraRandom(evnt) {
    let array = ["piedra", "papel", "tijeras"];
    let posicionRandom = calcularNumeroRandomX(event, array.length - 1);
    let resultado = array[posicionRandom];
    return resultado;
}
function calcularGanadorPiedraPapelTijera(eleccionMaquina) {  
    let eleccionJugador = prompt("Elija entre piedra, papel o tijera");
    let resultado;
    if ( eleccionMaquina === eleccionJugador) {
        alert("Ha habido un empate. ¡Volvamos a jugar!");
        calcularGanadorPiedraPapelTijera();
    } else if (((eleccionMaquina === "papel") && (eleccionJugador === "piedra")) || ((eleccionMaquina === "piedra") && (eleccionJugador === "tijera")) || ((eleccionMaquina === "tijera") && (eleccionJugador === "papel"))) {
        resultado = "La maquina ha sacado " + eleccionMaquina + " y tu has sacado " + eleccionJugador + ". ¡Has perdido!";
    } else if (((eleccionJugador === "papel") && (eleccionMaquina === "piedra")) || ((eleccionJugador === "piedra") && (eleccionMaquina === "tijera")) || ((eleccionJugador === "tijera") && (eleccionMaquina === "papel"))) {
        resultado = "La maquina ha sacado " + eleccionMaquina + " y tu has sacado " + eleccionJugador + ". ¡Has ganado!";;
    }
    return resultado;
}


function print(texto) {
    document.write(texto);
}

document.querySelectorAll("body > a")[2].addEventListener("click", () => {calcularNumeroRandom(event)});
document.querySelectorAll("body > a")[3].addEventListener("mouseover", () => {
    let limiteSuperior = prompt("Elija su límite superior");
    calcularNumeroRandomX(event, limiteSuperior)});
document.querySelectorAll("body > a")[4].addEventListener("mouseout",() => {print(piedraPapelTijeraRandom(event))});

document.querySelectorAll("body > a")[0].addEventListener("dblclick", () => {print(calcularGanadorPiedraPapelTijera(piedraPapelTijeraRandom(event)))});


