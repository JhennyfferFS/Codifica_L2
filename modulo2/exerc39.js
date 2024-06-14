const prompt = require("prompt-sync")();

const vetorA = [];
for (let i = 0; i < 100; i++) {
  vetorA.push(Number(prompt(`Digite o valor ${i + 1}: `)));
}

const vetorB = vetorA.filter((val) => val > 0);

console.log("Vetor compactado sem valores nulos ou negativos:");
console.log(vetorB);
