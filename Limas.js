const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR PERSEGI");
console.log("==================");
let luas = Number(prompt("luas : "))
let tinggi = Number(prompt("tinggi : "));
let nilai_tetap = 1.3
let volume = nilai_tetap*luas*tinggi
console.log("volume limas adalah "+ volume);

