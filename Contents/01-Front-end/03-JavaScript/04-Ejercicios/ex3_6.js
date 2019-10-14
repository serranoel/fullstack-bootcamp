 /* Write a JavaScript function to test if an array of integers of length 20 contains 1 or a 3. */


 function comprobarArray(array) {
     let booResultado = false;
     for ( let i = 0; i < array.length; i++) {
         if ((array[i] === 1) || (array[i] === 3)) {
             booResultado = true;
         }
     }
     return booResultado;
 }

 let arr1 = [0, 4, 4, 5, 6, 7, 1, 9, 8, 7, 6, 5, 4, 6, 2, 9, 7, 6, 4, 6]

 document.write(comprobarArray(arr1));