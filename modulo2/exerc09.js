const prompt = require("prompt-sync")();

let salarioHomens = 0;
let salarioMulheres = 0;
let estaSomando = true;

while (estaSomando){
const sexo = prompt("Digite o sexo do funcionário: Masculino/Feminino: ");
const salario = Number(prompt("Digite o salário recebido: "));


    if(sexo === 'masculino'){
        salarioHomens += salario;
    } else if (sexo === 'feminino'){
        salarioMulheres += salario;
    } else {
        console.log("Sexo inválido. Digite se o sexo é Masculino ou Feminino: ");
        continue;
    }
    const prosseguir = prompt("Você deseja prosseguir? ");
    if (prosseguir != 'sim'){
        estaSomando = false
    }

}

console.log(`O salário total pago aos homens é igual a R$${salarioHomens}`);
console.log(`O salário pago as mulheres é igual a R$${salarioMulheres}`);