let numero1 = prompt("Escriba un número:");
let numero2 = prompt("Escriba otro número:");

if (parseInt(numero1) < parseInt(numero2)){
    document.write(numero2);
} else if (parseInt(numero1) > parseInt(numero2)) {
    document.write(numero1);
} else {
    document.write(numero1 + " es igual a " + numero2);
}