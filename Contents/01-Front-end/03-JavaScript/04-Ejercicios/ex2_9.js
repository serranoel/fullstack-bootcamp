let mensaje = prompt("Escribe tu mensaje:");
let abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
let mensajeCifrado = "";

for( let i = 0; i < mensaje.length; i++) {
    for( let j = 0; j < abecedario.length; j++) {
        if (mensaje[i] === abecedario[j]) {
            mensajeCifrado += abecedario[(j + 7) % 25];
        }
    }
}

document.write(mensajeCifrado);

