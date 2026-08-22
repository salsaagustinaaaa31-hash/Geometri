const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR MASSA_JENIS");
console.log("==================");
let m = Number(prompt("massa : "));
let v = Number(prompt("volume : "));
let hitungan_akhir = m / v
console.log("nilai massa jenis " + hitungan_akhir );