const prompt = require("prompt-sync")()

const velocidadeVeiculo = Number(prompt("Digite a velocidade atingida pelo veículo em Km/h: "))

if(velocidadeVeiculo <= 80){
    console.log("Veículo dentro da velocidade permitida")
    return
} else (velocidadeVeiculo > 80); {
    const infracao = (velocidadeVeiculo - 80)
    const multa = infracao * 5 
    console.log(`Veículo está a ${infracao}Km/h acima do limite de velocidade.`)
    console.log(`Será cobrado uma multa de ${multa} reais.`)
} return 