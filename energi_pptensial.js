const prompt = require("prompt-sync")({sigint : true });
console.log('==================')
console.log("KALKULATOR ENERGI POTENSIAL");
console.log('==================')
let m = Number(prompt("massa_benda : "));
let g = Number(prompt("gravitasi : "));
let h = Number(prompt("ketinggian_benda : "));
let hitungan_akhir = m * g * h
console.log("Energi potensialnya adalah " + hitungan_akhir);