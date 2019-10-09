let productos = ["Naranajas", "Leche", "Cereales", "Deportivo Ferrari", "Sangre de Unicornio"];
let precios = [2, 1.2, 4, 1000000, 0.5];
let producto = prompt("Introduce producto:");
let contador = 0;
let posicion;

for (let prod of productos) {
    if ( prod === producto) {
        posicion = contador;
    }
    contador++;
}

switch (producto) {                                       
    case 'Naranjas':
        document.write("El precio de " + producto + " es " + precios[posicion] + " €");
        break;                                          
    case 'Leche':
        document.write("El precio de " + producto + " es " + precios[posicion] + " €");
        break;
    case 'Cereales':
        document.write("El precio de " + producto + " es " + precios[posicion] + " €");
        break;
    case 'Deportivo Ferrari':
        document.write("El precio de " + producto + " es " + precios[posicion] + " €");
        break;
    case 'Sangre de Unicornio':
        document.write("El precio de " + producto + " es " + precios[posicion]);
        break;
    default:                                            
    document.write("No disponemos de " + producto);
        break;
}