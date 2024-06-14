const prompt = require("prompt-sync")();

let totalSalario = 0;
let totalFilhos = 0;
let quantidadePessoas = 0;
let maiorSalario = 0;
let pessoasAte350 = 0;

while (true) {
  const salario = Number(
    prompt("Digite o salário (ou um valor negativo para sair): ")
  );
  if (salario < 0) break;

  const filhos = Number(prompt("Digite o número de filhos: "));

  totalSalario += salario;
  totalFilhos += filhos;
  quantidadePessoas++;

  if (salario > maiorSalario) maiorSalario = salario;
  if (salario <= 350) pessoasAte350++;
}

if (quantidadePessoas > 0) {
  const mediaSalario = totalSalario / quantidadePessoas;
  const mediaFilhos = totalFilhos / quantidadePessoas;
  const percentualAte350 = (pessoasAte350 / quantidadePessoas) * 100;

  console.log(`Média de salário da população: R$${mediaSalario.toFixed(2)}`);
  console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
  console.log(`Maior salário: R$${maiorSalario.toFixed(2)}`);
  console.log(
    `Percentual de pessoas com salário até R$ 350,00: ${percentualAte350.toFixed(
      2
    )}%`
  );
} else {
  console.log("Nenhum dado foi inserido.");
}
