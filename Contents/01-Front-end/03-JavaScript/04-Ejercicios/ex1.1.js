let numeros = [];
let numerosPares = [];
let numerosImpares = [];

for (let i = 1; i <= 100; i++) {
    numeros.push(i);
}

for (let numero of numeros) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    } else {
        numerosImpares.push(numero)
    }
}

alert(numerosImpares);