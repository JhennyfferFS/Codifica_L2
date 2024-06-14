const prompt = require("prompt-sync")();

let horasAtividade = Number(prompt("Digite a quantidade de horas de atividade realizadas: "));

if (isNaN(horasAtividade)) {
    console.log("Digite um número válido");
    return;
}

function CalculoPontos(horasAtividade, pontos){

if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
    pontos = horasAtividade * 5;
} else {
    pontos = horasAtividade * 10;
}

return pontos;
}

let pontos = CalculoPontos(horasAtividade);
let dinheiro = pontos * 0.05;

console.log(`A quantidade de pontos adquirida foi igual a ${pontos}. Porntato, você ganhou R$${dinheiro}.`)
