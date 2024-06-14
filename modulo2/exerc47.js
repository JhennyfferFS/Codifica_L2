//Crie uma função que transforme um objeto de entrada aplicando uma função
//fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
//resultados.

//imposto brasileiro

//crie um objeto que se chame pessoa com propriedade salario e nome

//faça uma conta que pegue o salario e diminua por 99999, dps adicione trouxa ao fim do nome

//retorne o objeto com o valor novo do salario 

const prompt = require("prompt-sync")();

const salario = Number(prompt("Informe o salário recebido: "));
const nome = prompt("Digite o seu nome: ");

const pessoa ={
    salario,
    nome,
};

const min = pessoa.salario - 99999
const trouxa = pessoa.nome
pessoa.salario = min
pessoa.nome = trouxa

console.log(pessoa)