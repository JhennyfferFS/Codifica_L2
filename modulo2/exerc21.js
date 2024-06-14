const prompt = require("prompt-sync")();

const altura = Number(prompt("Digite sua altura em cm: "));
const sexo = prompt("Informe seu sexo (Masculino/Feminino): ");
const peso = 0;

function calculoPesoIdeal (altura, peso, sexo){

if (sexo === "masculino" ){
    peso = (72.7 * altura) - 58;
    } else if (sexo === "feminino"){
    peso = (62.1 * altura) - 44.7;
    } else {
    console.log("Por favor, informe se o sexo é masculino ou feminino");
    } return peso
}

const pesoIdeal = calculoPesoIdeal(altura, peso, sexo);
console.log(`O seu peso ideal é: ${pesoIdeal}`);