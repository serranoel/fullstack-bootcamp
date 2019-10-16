// Escribe una función que reciba un número y devuelva el día de la semana asociado.
 
// Ejemplo:
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function calcularDia () {
    let numRecibido = prompt("Elija el numero a convertir");
    let arrSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    if ((numRecibido >= 1) && (numRecibido <= 7)) {
        document.write(`El número ${numRecibido} corresponde al ${arrSemana[numRecibido - 1]}`);   
    } else {
        document.write("El número no és válido");
    }
    return true;
}

document.querySelectorAll("body > a")[2].addEventListener("mouseout", calcularDia);