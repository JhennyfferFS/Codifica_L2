const prompt = require("prompt-sync")();

const modelo = prompt("Digite se você deseja alugar um veículo de luxo ou popular: ");

if (modelo !== "popular" && modelo !== "luxo") {
  console.log("Escolha um modelo de carro válido");
  return;
}

const kmRodado = Number(prompt("Digite a quantidade de km rodados: "));

if (isNaN(kmRodado)) {
  console.log("Digite um número válido");
  return;
}

let dias = parseInt(prompt("Informe a quantidade de dias de aluguel: "));

if (dias <= 0) {
    console.log("Digite um número válido");
    return;
    }

function calculoAluguel(kmRodado, modelo, dias) {
    let aluguel;
    let km;

  if (modelo === "popular") {
    aluguel = 90.0 * dias;
    km = kmRodado <= 100 ? kmRodado * 0.2 : kmRodado * 0.1;
  } else if (modelo === "luxo") {
    aluguel = 150.0 * dias;
    km = kmRodado <= 200 ? kmRodado * 0.3 : kmRodado * 0.25;
  } else {
    return "Escolha um modelo de carro válido";
  }

  return aluguel + km;
}

const custo = calculoAluguel(kmRodado, modelo, dias);

console.log(`O valor do aluguel é R$${custo}`);