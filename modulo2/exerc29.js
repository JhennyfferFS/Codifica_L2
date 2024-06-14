const prompt = require("prompt-sync")();

const matriz = [];
for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Number(prompt(`Digite o elemento M[${i}][${j}]: `));
  }
}

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    somaTotal += matriz[i][j];
    if (i === 4) {
      somaLinha4 += matriz[i][j];
    }
    if (j === 2) {
      somaColuna2 += matriz[i][j];
    }
    if (i === j) {
      somaDiagonalPrincipal += matriz[i][j];
    }
  }
}

console.log("Matriz M[5][5]:");
for (let i = 0; i < 5; i++) {
  console.log(matriz[i].join(" "));
}

console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma de todos os elementos: ${somaTotal}`);
