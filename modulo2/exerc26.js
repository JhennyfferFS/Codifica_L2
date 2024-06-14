const prompt = require("prompt-sync")();

const matrizA = [];
const matrizB = [];

console.log("Digite os elementos da matriz A[3][5]:");
for (let i = 0; i < 3; i++) {
  matrizA[i] = [];
  for (let j = 0; j < 5; j++) {
    matrizA[i][j] = Number(prompt(`A[${i}][${j}]: `));
  }
}

console.log("Digite os elementos da matriz B[3][5]:");
for (let i = 0; i < 3; i++) {
  matrizB[i] = [];
  for (let j = 0; j < 5; j++) {
    matrizB[i][j] = Number(prompt(`B[${i}][${j}]: `));
  }
}

const matrizP = [];
for (let i = 0; i < 3; i++) {
  matrizP[i] = [];
  for (let j = 0; j < 5; j++) {
    matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
  }
}

console.log("Matriz produto P[3][5]:");
for (let i = 0; i < 3; i++) {
  console.log(matrizP[i].join(" "));
}
