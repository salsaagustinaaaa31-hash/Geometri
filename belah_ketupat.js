const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR BELAHKETUPAT");
console.log("==================");
const diagonal_pertama =Number(prompt("masukkan d1 :"));
const diagonal_kedua =Number(prompt("masukkakn d2 :"));
const nilai=Number(0.5);
const hasil_akhir=0.5*diagonal_pertama*diagonal_kedua
console.log("hasil nya adalah:",hasil_akhir);

