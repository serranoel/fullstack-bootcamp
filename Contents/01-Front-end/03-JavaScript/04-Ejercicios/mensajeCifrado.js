/*Mensaje Cifrado*/

let mensaje = prompt("Escribe tu mensaje:");
let abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
let mensajeCifrado = "";
let sobra 


for (let i = 0; i < mensaje.length; i++) {
    if (mensaje[i] !== " ") {
        for(let j = 0; j < abecedario.length; j++) {
            if(mensaje[i] === abecedario[j]) {
                if(j >= 18) {
                    sobra = 7 - (25 - j);
                    mensajeCifrado += abecedario[sobra];              
                } else {
                    sobra = 7;
                    mensajeCifrado += abecedario[j + sobra];
                }
            }
        }
    } else {
        mensajeCifrado += " ";
    }  
}

document.write(mensajeCifrado);