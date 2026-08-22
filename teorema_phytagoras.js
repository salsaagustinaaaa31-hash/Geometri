const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR TEOREMA_PHYTAGORAS");
console.log("==================");
let a_kuadrat = Number(prompt(" sisi_tegak_a**2: "));
let b_kuadrat = Number(prompt(" sisi_alas_b**2: "));
let hitungan_akhir = Math.sqrt(a_kuadrat + b_kuadrat);
console.log("hasil:" ,hitungan_akhir);

