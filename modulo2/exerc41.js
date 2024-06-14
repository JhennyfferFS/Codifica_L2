const prompt = require("prompt-sync")();

const nome = prompt("Digite o nome: ");
const idade = Number(prompt("Digite a idade: "));


const pessoa = {
    nome,
    idade,
};

console.log(pessoa);

const email = prompt("Digite o email: ");

pessoa.email = email;

console.log(pessoa);