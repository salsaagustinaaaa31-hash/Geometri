const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR KUBUS");
console.log("==================");
let sisi_kubus_pertama = Number(prompt("Sisi_pertama : "));
let sisi_kubus_dua = Number(prompt("Sisi_kedua : "));
let sisi_kubus_ketiga  = Number(prompt("Sisi_ketiga : "));
let hasil_akhir = sisi_kubus_pertama*sisi_kubus_dua*sisi_kubus_ketiga
console.log("hasilnya adalah: ",hasil_akhir);

