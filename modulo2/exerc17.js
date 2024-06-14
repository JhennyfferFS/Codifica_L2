const prompt = require("prompt-sync")();

const nomes = [];
const idades = [];

for (let i = 0; i < 9; i++) {
    const nome = prompt(`Digite o nome ${i + 1}: `);
    const idade = parseInt(prompt(`Digite a idade de ${nome}: `));
    nomes.push(nome);
    idades.push(idade);
};

console.log("Os menores e suas idades são: ");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
};