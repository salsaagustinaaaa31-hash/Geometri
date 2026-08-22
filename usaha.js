const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR USAHA");
console.log("==================");
let f = Number(prompt("Gaya : "));
let s = Number(prompt("perpindahan : "));
let hitungan_akhir = f * s
console.log("hasil usaha adalah " + hitungan_akhir);