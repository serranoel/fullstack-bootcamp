/*
3.- Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/
let hijos = prompt("Elija numero de hijos:");
let pareja = prompt("Elija nombre de pareja:");
let localizacion = prompt("Elija localizacion:");
let trabajo = prompt("Elija numero trabajo:");



function tellFortune(numberChildren, partnerName, geographicLocation, jobTitle) {
    return `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberChildren} kids.`;
}

document.write(tellFortune(hijos, pareja, localizacion, trabajo));