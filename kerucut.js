const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR BALOK");
console.log("==================");
let nilai_tetap = 1 / 3
let PI = Number(prompt("nilai_PI : "));
let r_kuadrat = Number(prompt("r**2 : "));
let t = Number(prompt("tinggi_limas : "));
let hitungan_akhir = nilai_tetap * PI * r_kuadrat * t
console.log("volume kerucut adalah " + hitungan_akhir);