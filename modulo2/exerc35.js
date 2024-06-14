const prompt = require("prompt-sync")();

const vetorPares = [];
const vetorImpares = [];
const vetorCompleto = [];

for (let i = 0; i < 30; i++) {
  const valor = Number(prompt(`Digite o valor ${i + 1}: `));
  if (valor % 2 === 0) {
    vetorPares.push(valor);
    if (vetorPares.length === 5) {
      console.log("Vetor de Pares:", vetorPares);
      vetorPares.length = 0; // Limpa o vetor
    }
  } else {
    vetorImpares.push(valor);
    if (vetorImpares.length === 5) {
      console.log("Vetor de Ímpares:", vetorImpares);
      vetorImpares.length = 0; // Limpa o vetor
    }
  }
  vetorCompleto.push(valor);
}

if (vetorPares.length > 0) {
  console.log("Vetor de Pares:", vetorPares);
}

if (vetorImpares.length > 0) {
  console.log("Vetor de Ímpares:", vetorImpares);
}

console.log("Vetor Completo:", vetorCompleto);
