let unidad = prompt(`¿Qué unidad desea introducir?`);

if(unidad === "Celsius") {
    var temperatura = prompt(`¿Cuantos grados Celsius quiere convertir a Fahrenheit?`);
    var resultado = temperatura * (9/5) + 32;
    document.write(`${temperatura} grados Fahrenheit equivalen a ${resultado} grados Celsius.`);

} else if(unidad === "Fahrenheit") {
    var temperatura = prompt(`¿Cuantos grados Fahrenheit quiere convertir a Celsius?`);
    var resultado = (temperatura - 32) / (9 / 5);
    document.write(`${temperatura} grados Fahrenheit equivalen a ${resultado} grados Celsius.`);
}