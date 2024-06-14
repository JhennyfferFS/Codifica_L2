const prompt = require("prompt-sync")();

const opcoes = ["Pedra", "Papel", "Tesoura"];
const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
const escolhaUsuario = prompt("Escolha Pedra, Papel ou Tesoura: ");

console.log(`Computador escolheu: ${escolhaComputador}`);
console.log(`Você escolheu: ${escolhaUsuario}`);

if (escolhaUsuario === escolhaComputador) {
  console.log("Empate!");
} else if (
  (escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura") ||
  (escolhaUsuario === "Papel" && escolhaComputador === "Pedra") ||
  (escolhaUsuario === "Tesoura" && escolhaComputador === "Papel")
) {
  console.log("Você venceu!");
} else {
  console.log("Você perdeu!");
}
