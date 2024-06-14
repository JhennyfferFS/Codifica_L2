const prompt = require ("prompt-sync")();

const nome = prompt("Digite o nome do funcionário: ");
const cargo = prompt("Informe o cargo do funcionário: ");
const salario = Number(prompt("Informe o salário do funcionário: "));

const pessoa = {
    nome,
    cargo,
    salario,
};

console.log("Registro do funcionário: ");
console.log(pessoa);