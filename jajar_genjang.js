const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR JAJAR GENJANG");
console.log("==================");
let alas = Number(prompt("masukan alas : "))
let tinggi = Number(prompt("masukan tinggi :"))
let luas = alas * tinggi;
console.log("Luas jajar genjang adalah:" ,luas);