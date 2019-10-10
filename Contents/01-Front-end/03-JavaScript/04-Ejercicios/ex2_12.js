let vector = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let objeto = {};
let masFrec;
let menosFrec;

for (let i = 0; i < vector.length; i++) {
    objeto[vector[i]] = 0;
            
}
for (let i = 0; i < vector.length; i++) {
    objeto[vector[i]] = objeto[vector[i]] + 1;
    console.log(objeto)
            
}