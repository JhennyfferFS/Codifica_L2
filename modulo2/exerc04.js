const prompt = require("prompt-sync")()

const ladoA = parseInt(prompt("Indique o comprimento da primeira reta: "))
const ladoB = parseInt(prompt("Indique o comprimento da segunda reta: "))
const ladoC = parseInt(prompt("Indique o comprimento da terceira reta: "))

if(ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB){
    console.log("Os comprimentos de reta formam um triângulo.")
    return
} else {
    console.log("Os comprimentos de reta não formam um triângulo.")
}