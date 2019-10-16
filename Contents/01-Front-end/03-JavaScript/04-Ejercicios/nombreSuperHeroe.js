
function calcularNumeroRandom(evnt) {
    document.write(Math.round(Math.random() * 10) +1);
    return true;
}

function calcularNumeroRandomX(evnt, parametro) {
    let valorRandom = Math.round(Math.random() * parametro) + 0;
    return valorRandom;
}

function nombreRandom(evnt, array) {
    let posicionRandom = calcularNumeroRandomX(evnt, array.length - 1);
    let resultado = array[posicionRandom];
    return resultado;
}


function nombrarSuperHeroe(titulo, sustantivo, adjetivo) {
    let resultado = titulo + " " + sustantivo + " " + adjetivo;
    return resultado;
}


function print(texto) {
    document.write(texto);
}

function execute(event) {
        
    const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]
    const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]
    const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]
    const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]

    let genero = prompt("Elija su genere:");
    if (genero === "Masculino") {
        print(nombrarSuperHeroe(nombreRandom(event, titulos_masculino), nombreRandom(event, sustantivos), nombreRandom(event, adjetivos)));
    } else {
        print(nombrarSuperHeroe(nombreRandom(event, titulos_femenino), nombreRandom(event, sustantivos), nombreRandom(event, adjetivos)));
    }
}

document.querySelectorAll("body > a")[1].addEventListener("dblclick", () => {execute(event) });
