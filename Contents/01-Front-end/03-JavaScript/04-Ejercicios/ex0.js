
//Escribir palabra al reves 



 let palabra = prompt("escriba una palabra");
 let longitud = palabra.length;
 let palabraReversa = " ";
 for ( let letra = 1; letra <= longitud; letra++){
     let posicion = longitud - letra;
     palabraReversa += palabra[posicion];
 }

 console.log("Su palabra invertida es " + palabraReversa)



