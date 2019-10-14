/*2.- Crear una función que recibe un array de tres números y devuelve true si el primero es igual al segundo o si el segundo es igual al tercero. Si el segundo número es 4, siempre devuelve false.
Ejemplo:
miFuncion([1,2,3]) debería retornar false
miFuncion([1,1,3]) debería retornar true
miFuncion([1,4,3]) debería retornar false
*/

let miFuncion = [4,3,3];

function arrayTrue(array) {
    let booResultado = false;
    let i = 0;
    if ((array[i] === array[i + 1]) || (array[i + 1] === array[i +2])) {
        booResultado = true;
    }
    if (array[i + 1] === 4) {
        booResultado = false;
    }
    return booResultado;
}

document.write(arrayTrue(miFuncion));