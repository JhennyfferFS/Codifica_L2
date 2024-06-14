const prompt = require("prompt-sync")();

const numeroSorteado = Math.floor(Math.random() * 5) + 1;
const palpite = Number(
  prompt("Tente adivinhar o número sorteado (entre 1 e 5): ")
);

if (palpite === numeroSorteado) {
  console.log("Parabéns! Você acertou!");
} else {
  console.log(`Que pena! O número sorteado foi ${numeroSorteado}.`);
}
