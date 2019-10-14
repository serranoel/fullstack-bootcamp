/*
Write a JavaScript function to check if a given positive number is a multiple of 3 or a multiple of 7.
*/

function buscarMultiplos(numeroMuestra) {
    let resultado;
    if ((numeroMuestra % 3 === 0) && (numeroMuestra % 7 === 0)) {
        resultado = `${numeroMuestra} es multiplo de 3 y de 7.`
    } else if (numeroMuestra % 7 === 0) {
        resultado = `${numeroMuestra} es multiplo de 7.`
    }
    else if ( numeroMuestra % 3 === 0) {
        resultado = `${numeroMuestra} es multiplo de 3.`
    } else {
        resultado = `${numeroMuestra} no es multiplo ni de 3 ni de 7.`
    }
    return resultado;
}

let numeroParticular = prompt("Elija numero:")

document.write(buscarMultiplos(numeroParticular));