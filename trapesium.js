const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR TRAPESIUM");
console.log("==================");
const sisi_kanan =Number(prompt("masukan sisi kanan :"));
const sisi_kiri =Number(prompt("masukan sisi kiri :"));
const tinggi =Number(prompt("masukkan tinggi :"));
const nilai =Number(0.5);
const hasil_sisi_kanan_dan_kiri = sisi_kanan+sisi_kiri
const hasil_akhir=nilai*hasil_sisi_kanan_dan_kiri*tinggi
console.log("hasil akhir adalah:",hasil_akhir);
