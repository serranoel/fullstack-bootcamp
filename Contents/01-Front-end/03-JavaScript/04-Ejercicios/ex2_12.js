let vector = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let objeto = {};
let masFrec;
let menosFrec;
let maxIndex;
let menosIndex;

for (let i = 0; i < vector.length; i++) {
    objeto[vector[i]] = 0;
    console.log(objeto);
            
}
for (let i = 0; i < vector.length; i++) {
    objeto[vector[i]] = objeto[vector[i]] + 1;
    console.log(objeto)
            
}

masFrec = vector[0];
menosFrec = vector[0];

for(let i = 1; i < vector.length; i++) {
    if (objeto[vector[i]] > masFrec) {
        masFrec = objeto[vector[i]];
        maxIndex = i;
    } else if (objeto[vector[i]]  < menosIndex) {
        menosFrec = objeto[vector[i]];
        menosIndex = i;
    }
}
