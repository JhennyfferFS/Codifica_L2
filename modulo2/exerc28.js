const prompt = require("prompt-sync")();

const matriz = [];
for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = Number(prompt(`Digite o elemento M[${i}][${j}]: `));
  }
}

let somaAcima = 0;
let somaAbaixo = 0;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i < j) {
      somaAcima += matriz[i][j];
    } else if (i > j) {
      somaAbaixo += matriz[i][j];
    }
  }
}

console.log(`Soma dos elementos acima da diagonal principal: ${somaAcima}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);
