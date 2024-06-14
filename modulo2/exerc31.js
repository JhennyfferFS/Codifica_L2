const prompt = require("prompt-sync")();

const matrizV = [];
for (let i = 0; i < 30; i++) {
  matrizV[i] = [];
  for (let j = 0; j < 30; j++) {
    matrizV[i][j] = Number(prompt(`Digite o elemento V[${i}][${j}]: `));
  }
}

const valorA = Number(prompt("Digite o valor de A: "));
let contador = 0;
const matrizX = [];

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 30; j++) {
    if (matrizV[i][j] === valorA) {
      contador++;
    } else {
      matrizX.push(matrizV[i][j]);
    }
  }
}

console.log(`Quantidade de valores iguais a A: ${contador}`);
console.log("Matriz X com elementos diferentes de A:");
console.log(matrizX);
