const prompt = require("prompt-sync")();

const vetor = [];
for (let i = 0; i < 6; i++) {
  vetor.push(Number(prompt(`Digite o valor ${i + 1}: `)));
}

const operacao = Number(
  prompt(
    "Digite a operação desejada (1-soma, 2-produto, 3-média, 4-ordenar, 5-mostrar): "
  )
);

switch (operacao) {
  case 1:
    const soma = vetor.reduce((acc, val) => acc + val, 0);
    console.log("Soma dos elementos:", soma);
    break;
  case 2:
    const produto = vetor.reduce((acc, val) => acc * val, 1);
    console.log("Produto dos elementos:", produto);
    break;
  case 3:
    const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
    console.log("Média dos elementos:", media);
    break;
  case 4:
    vetor.sort((a, b) => a - b);
    console.log("Vetor ordenado:", vetor);
    break;
  case 5:
    console.log("Vetor:", vetor);
    break;
  default:
    console.log("Operação inválida");
}