const prompt = require("prompt-sync")();

const empregados = [];

for (let i = 0; i < 80; i++) {
  const matricula = prompt(`Digite a matrícula do empregado ${i + 1}: `);
  const nome = prompt(`Digite o nome do empregado ${i + 1}: `);
  const salarioBruto = Number(
    prompt(`Digite o salário bruto do empregado ${i + 1}: `)
  );

  const deducaoINSS = salarioBruto * 0.12;
  const salarioLiquido = salarioBruto - deducaoINSS;

  empregados.push({
    matricula,
    nome,
    salarioBruto,
    deducaoINSS,
    salarioLiquido,
  });
}

empregados.forEach((empregado) => {
  console.log(`Matrícula: ${empregado.matricula}`);
  console.log(`Nome: ${empregado.nome}`);
  console.log(`Salário bruto: R$${empregado.salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS: R$${empregado.deducaoINSS.toFixed(2)}`);
  console.log(`Salário líquido: R$${empregado.salarioLiquido.toFixed(2)}`);
  console.log("-----------------------------");
});
