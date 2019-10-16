// // Vamos a programar un árbitro para jugar a piedra-papel-tijeras. Escribe una función que acepte dos strings como argumentos. Cada uno de 
// esos strings puede ser “piedra”, “papel” o “tijera”. El primero de los strings es la elección del jugador 1, y el segundo string es la elección del jugador 2. La función retornará un string diciendo qué jugador ha ganado.
// // Ejemplo:
// // miFuncion(“piedra”, “tijeras”) → “El jugador 1 gana”
// // miFuncion(“papel”, “tijeras”) → “El jugador 2 gana”
// // miFuncion(“piedra”, “papel”) → “El jugador 2 gana”


function calcularGanador () {  
    let eleccionJugador1 = prompt("Elija entre piedra, papel o tijera");
    let eleccionJugador2 = prompt("Elija entre piedra, papel o tijera");
    if ( eleccionJugador1 === eleccionJugador2) {
        alert("Ha habido un empate. ¡Volvamos a jugar!");
        calcularGanador();
    } else if (((eleccionJugador1 === "papel") && (eleccionJugador2 === "piedra")) || ((eleccionJugador1 === "piedra") && (eleccionJugador2 === "tijera")) || ((eleccionJugador1 === "tijera") && (eleccionJugador2 === "papel"))) {
        document.write("Ha ganado el jugador 1");
    } else if (((eleccionJugador2 === "papel") && (eleccionJugador1 === "piedra")) || ((eleccionJugador2 === "piedra") && (eleccionJugador1 === "tijera")) || ((eleccionJugador2 === "tijera") && (eleccionJugador1 === "papel"))) {
        document.write("Ha ganado el jugador 2");
    }
}

document.querySelectorAll("body > a")[4].addEventListener("click", calcularGanador);