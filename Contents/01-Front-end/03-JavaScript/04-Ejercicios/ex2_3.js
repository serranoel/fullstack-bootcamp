let palabraOriginal = prompt("Escriba su palabra:");
let palabraReversa = "";

for ( let i = 0; i < palabraOriginal.length; i++) {
    palabraReversa = palabraOriginal[i] + palabraReversa;
}

if (palabraOriginal === palabraReversa) {
    document.write(palabraOriginal + " es un palindromo.");
} else {
    document.write(palabraOriginal + " no es un palindromo.");
}