/*Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. 
*/

const prompt = require("prompt-sync")()

const Quantidadefumo = Number(prompt("Digite a quantidade de cigarros fumado por dia: "))
const Anosdeuso = Number(prompt("Digite a quantidade de anos fumando: "))

const cigarrostotal = Quantidadefumo * 365 * Anosdeuso
const tempoperdido = cigarrostotal * 10 
const totalperdido = parseInt(tempoperdido / (60*24))

console.log(`O tempo de vida perdido foi igual a ${totalperdido} dias`)