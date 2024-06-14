const prompt = require("prompt-sync")();

const matriz = [];
for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Number(prompt(`Digite o elemento M[${i}][${j}]: `));
  }
}

const vetorSL = new Array(5).fill(0);
const vetorSC = new Array(5).fill(0);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    vetorSL[i] += matriz[i][j];
    vetorSC[j] += matriz[i][j];
  }
}

console.log("Matriz M[5][5]:");
for (let i = 0; i < 5; i++) {
  console.log(matriz[i].join(" "));
}

console.log("Soma das linhas (SL):");
console.log(vetorSL);

console.log("Soma das colunas (SC):");
console.log(vetorSC);
