const prompt = require("prompt-sync")();

const matriz = [];
for (let i = 0; i < 12; i++) {
  matriz[i] = [];
  for (let j = 0; j < 13; j++) {
    matriz[i][j] = Number(prompt(`Digite o elemento M[${i}][${j}]: `));
  }
}

const matrizModificada = matriz.map((linha) => {
  const maiorElemento = Math.max(...linha.map(Math.abs));
  return linha.map((elemento) => elemento / maiorElemento);
});

console.log("Matriz original:");
for (let i = 0; i < 12; i++) {
  console.log(matriz[i].join(" "));
}

console.log("Matriz modificada:");
for (let i = 0; i < 12; i++) {
  console.log(matrizModificada[i].join(" "));
}
