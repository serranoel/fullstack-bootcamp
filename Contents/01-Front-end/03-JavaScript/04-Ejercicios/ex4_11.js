// Crear un programa que lista un array de objetos de clientes, construindo con las siguientes funciones:
// function listaClientes (función principal del programa que llama a las otras)
// function getClientes
//         devuelve un array de objetos de clientes :
// [{name:”Edward Norton”,amountPurchased: 28.14, age: 65, city:”Barcelona”},
// {name:”Charles Darwin”,amountPurchased: 324.34, age: 42, city:”Madrid”},
// {name:”Steven Tyler”,amountPurchased: 124.94, age: 77, city:”Barcelona”},
// {name:”Michael J”,amountPurchased: 624.74, age: 59, city:”Madrid”},
// {name:”Satoshi”,amountPurchased: 734.14, age: 33, city:”Barcelona”},
// {name:”Bruce Dickinson”,amountPurchased: 424.24, age: 66, city:”Valencia”}
// ]
//     function getInfoCliente
//         recibe un objeto de cliente y devuelve una string formateada con los datos del cliente que quieres enseñar del cliente. Si el amountPurchased de cada cliente es menor que 200, no se debe incluir en el resultado
//     function imprimeCliente
//         recibe una string formateada y escribe en la pantalla, si el cliente tiene más de 35 años, debe aparecer en azul, sino, en rojo. Si el cliente es de Barcelona, siempre tiene que aparecer en verde.



function listaClientes() {
    for (let i = 0; i < array.length; i++) {
        imprimeCliente(getInfoCliente(getClientes(array)));
    }
}

function getClientes(array) {
    for (let i = 0; i < array.length; i++) {
        return array[i];
    }
    console.log("hola");
                 
}

function getInfoCliente(objetoParticular) {
    let resumen;
    for (let clave in objetoParticular) {
        if ((clave === "amountPurchased") && (clave < 200)) {
            if (clave !== "amountPurchased") {
                resumen = "Su " + clave + " es " + objetoParticular[clave] + "; " ;
            }
        } else {
            resumen = "Su " + clave + " es " + objetoParticular[clave] + "; " ;
        }
    }
    console.log("hola");
    return resumen;
}

function imprimeCliente(stringFormateada) {
    for (let i = 0; i < stringFormateada.length - 1; i++ ) {
        if (true) {
            document.write(stringFormateada);
        }
    }
    console.log("hola");
    return true;
}

let array = [{name: "Edward Norton", amountPurchased: 28.14, age: 65, city: "Barcelona"},
                 {name: "Charles Darwin", amountPurchased: 324.34, age: 42, city: "Madrid"},
                 {name: "Steven Tyler", amountPurchased: 124.94, age: 77, city: "Barcelona"},
                 {name: "Michael J", amountPurchased: 624.74, age: 59, city: "Madrid"},
                 {name: "Satoshi", amountPurchased: 734.14, age: 33, city: "Barcelona"},
                 {name: "Bruce Dickinson", amountPurchased: 424.24, age: 66, city: "Valencia"}];


document.querySelectorAll("body > a")[0].addEventListener("dblclick", listaClientes());