const prompt = require("prompt-sync")();

const soma = Number(prompt("Escreva o valor da razão: "));
const pa = [];
let i = Number(prompt("Digite o primeiro termo da pa: "));

while(pa.length != 10){
    pa.push(i)
    i = i + soma
};

console.log(pa);