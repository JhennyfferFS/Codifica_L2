const prompt = require("prompt-sync")();

const primeiroTermo = Number(prompt("Digite o primeiro termo da P.A: "));
const razao = Number(prompt("Digite a razão da P.A: "));

let soma = 0;
let elemento = primeiroTermo;

console.log("Os 10 primeiros elementos da PA são:");
for (let i = 0; i < 10; i++) {
    console.log(elemento);
    soma += elemento;
    elemento += razao;
}

console.log("A soma dos 10 primeiros elementos da PA é: " + soma);