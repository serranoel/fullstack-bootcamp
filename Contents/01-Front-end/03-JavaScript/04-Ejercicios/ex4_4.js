// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// Write a function that accepts the time in hours as input and returns the number of litres Nathan will drink.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function calcularAgua () {
    let tiempo = prompt("¿Cuántas horas has ido en bici?");
    document.write(`Ha bebido ${tiempo * 0.5} litros de agua. `);
    return true;
}

document.querySelectorAll("body > a")[4].addEventListener("dblclick", calcularAgua);