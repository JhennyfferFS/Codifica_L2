const prompt = require("prompt-sync")();

const matriz = [];
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = Number(prompt(`Digite o elemento M[${i}][${j}]: `));
  }
}

const somaSecundaria = matriz[0][2] + matriz[1][1] + matriz[2][0];
const mediaSecundaria = somaSecundaria / 3;

for (let i = 0; i < 3; i++) {
  matriz[i][i] *= mediaSecundaria;
}

console.log("Matriz modificada:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i].join(" "));
}
