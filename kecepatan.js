const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR KECEPATAN");
console.log("==================");
let s = Number(prompt("jarak_atau_perpindahan : "));
let t = Number(prompt("waktu : "));
let hitungan_akhir = s / t
console.log("hasilnya adalah: " + hitungan_akhir );