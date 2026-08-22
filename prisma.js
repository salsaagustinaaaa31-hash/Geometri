const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR PRISMA");
console.log("==================");
let luas = Number(prompt("Luas_alas_prisma : "));
let tinggi = Number(prompt("Tinggi_prisma : "));
let volume = luas * tinggi ;
console.log("volume prisma: " + volume);

