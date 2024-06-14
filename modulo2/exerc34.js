const prompt = require("prompt-sync")();

const matriz = [];
for (let i = 0; i < 50; i++) {
  matriz[i] = [];
  for (let j = 0; j < 50; j++) {
    matriz[i][j] = Number(prompt(`Digite o elemento M[${i}][${j}]: `));
  }
}

for (let i = 0; i < 50; i++) {
  const fator = matriz[i][i];
  for (let j = 0; j < 50; j++) {
    matriz[i][j] *= fator;
  }
}

console.log("Matriz modificada:");
for (let i = 0; i < 50; i++) {
  console.log(matriz[i].join(" "));
}
