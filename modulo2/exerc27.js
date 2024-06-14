const prompt = require("prompt-sync")();

const matriz = [];
const vetorV = [];
const valorA = Number(prompt("Digite o valor de A: "));

console.log("Digite os elementos da matriz M[6][6]:");
for (let i = 0; i < 6; i++) {
  matriz[i] = [];
  for (let j = 0; j < 6; j++) {
    matriz[i][j] = Number(prompt(`M[${i}][${j}]: `));
    vetorV.push(matriz[i][j] * valorA);
  }
}

console.log("Vetor V com elementos da matriz multiplicados por A:");
console.log(vetorV);
