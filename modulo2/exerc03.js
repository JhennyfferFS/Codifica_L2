const prompt = require("prompt-sync")()

const distancia = Number(prompt("Qual a distância que você deseja percorrer em Km? "))

if(distancia <= 200){
    const preco = distancia * 0.50
    console.log(`O valor da passagem será R$${preco}`)
    return
} else (distancia > 200); {
    const preco = distancia * 0.45
    console.log(`O valor da passagem será R$${preco}`)
} return