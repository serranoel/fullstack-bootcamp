const poblaciones = {
    "España": 47000000,
    "Italia": 61000000,
    "Francia": 67000000
}
let claves = Object.keys(poblaciones);
console.log(claves);

for (let i = 0 ; i <= claves.length; i++) {
    if (poblaciones[claves[i]] > 60000000) {
        document.write(claves[i] + "<br>");
    }
};
