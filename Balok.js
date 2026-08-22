const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR BALOK");
console.log("==================");
let panjang = Number(prompt("panjang_balok : "));
let lebar = Number(prompt("lebar_balok : "));
let tinggi = Number(prompt("tinggi_balok : "));
let volume = panjang*lebar*tinggi ;
console.log("volume balok: " + volume);
