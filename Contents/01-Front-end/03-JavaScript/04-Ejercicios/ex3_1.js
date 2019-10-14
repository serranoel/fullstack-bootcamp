/*1-. Crear una función que recibe un array de strings y una string y devuelve la posición en donde está esa string en el array.
Ejemplo:
*/

let miFuncion = ["chocolate", "aceite", "tomate", "acelgas"];
let palabra = prompt("Escriba su palabra:")

function posicionArray (array, string) {
    let index = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            index += i;
        }
    }
    return index;
}

document.write(posicionArray(miFuncion, palabra));

