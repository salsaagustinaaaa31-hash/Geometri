const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR LINGKARAN");
console.log("==================");
let r = Number(prompt("jari-jari : "))
let luas = Math.PI * (r * r);
let keliling = Math.PI * r * r 
let luasdibulatkan = luas.toFixed(2);
console.log(luasdibulatkan);
console.log(`
Luas     : ('Luas : ${luasdibulatkan} cm2');
Keliling : ${keliling} cm`)





