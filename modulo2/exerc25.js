const prompt = require("prompt-sync")();

const matriz = [];
for (let i = 0; i < 6; i++) {
  matriz[i] = [];
  for (let j = 0; j < 8; j++) {
    matriz[i][j] = Number(prompt(`Digite o elemento M[${i}][${j}]: `));
  }
}

const vetorC = [];
for (let i = 0; i < 6; i++) {
  let countNegativos = 0;
  for (let j = 0; j < 8; j++) {
    if (matriz[i][j] < 0) {
      countNegativos++;
    }
  }
  vetorC.push(countNegativos);
}

console.log("Vetor C com quantidade de elementos negativos por linha:");
console.log(vetorC);
