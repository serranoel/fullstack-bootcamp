const ovejas = prompt("¿Cuántas ovejas quieres que cuente?");

for (let i = 1; i <= ovejas; i++) {
    if (i === 1) {
        document.write("'" + i + " ovejita'");
    } else {   
        document.write("'" + i + " ovejitas'");
    }
    document.write("<br>");
}
