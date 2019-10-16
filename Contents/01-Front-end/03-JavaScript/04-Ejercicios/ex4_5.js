// ¿Recuerdas cuando arrancábamos las hojas de las margaritas diciendo “me quiere”, “no me quiere”, “me quiere”...? Vamos a programar una 
// margarita. Tu función recibirá un número como input. Si dicho número es par, devolverá el string “me quiere”. Si el número es impar, devolverá el string “no me quiere”.

function contarAmor (event) {
    event.preventDefault()
    let petalo = prompt("¿Cuántos pétalos has arrancado?");
    if (petalo % 2 === 0) {
        document.write("Me quiere");
    } else {
        document.write("No me quiere");
    }
}


document.querySelectorAll("body > a")[2].addEventListener("contextmenu", () => {contarAmor(event)}); /* Event es el nombre que tiene que tener al invocar */