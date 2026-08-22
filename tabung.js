const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR TABUNG");
console.log("==================");
let nilai_tetap = 2
let PI = Number(prompt("Nilai_PI : "));
let r = Number(prompt("jari_jari : "));
let t = Number(prompt("tinggi_tabung :  "));
let hitungan_akhir = nilai_tetap * PI * r *( r + t);
console.log("luas permukaan adalah: " + hitungan_akhir);