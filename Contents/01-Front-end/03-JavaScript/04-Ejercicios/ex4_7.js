// Haz una función que acepte dos arrays como inputs. La función devolverá un array con todos los datos de los otros 2 arrays.
// Ejemplo:
// miFuncion([1,2,3], [4,5,6]) → devolverá [1,2,3,4,5,6]
// miFuncion([“hola”, “mundo”], [4,5,6]) → devolverá [“hola”, “mundo”,4,5,6]


function juntarArrays(evnt) {
    let nuevoArray = [];
    let array1 = [3, 2, 1, 4, 3];
    let array2 = [1, 2, 3, 4];
    
    for (let i of array1) {
        nuevoArray.push(i);
    }
    for (let i of array2) {
        nuevoArray.push(i);
    }
    document.write(nuevoArray)
    return true;
}

document.querySelectorAll("body > a")[3].addEventListener("mouseover", () => {juntarArrays(event)});