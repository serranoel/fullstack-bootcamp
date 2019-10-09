const tacos = ["carne", "frijoles", "pimiento verde", "brocoli"];
const sopa = ["fideos", "brocoli", "caldo", "pollo"];
const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"];
let lista_compra = [];

for (let ingrediente of tacos) {
    if ( ingrediente !== "brocoli") {
        lista_compra.push(ingrediente);
    }
}
for (let ingrediente of sopa) {
    if ( ingrediente !== "brocoli") {
        lista_compra.push(ingrediente);
    }
}
for (let ingrediente of pizza) {
    if ( ingrediente !== "brocoli") {
        lista_compra.push(ingrediente);
    }
}

console.log(lista_compra);
