const prompt = require("prompt-sync")();

const gabarito = [];
for (let i = 0; i < 20; i++) {
  gabarito.push(prompt(`Digite o gabarito ${i + 1}: `));
}

for (let i = 0; i < 50; i++) {
  const respostas = [];
  for (let j = 0; j < 20; j++) {
    respostas.push(prompt(`Digite a resposta ${j + 1} do aluno ${i + 1}: `));
  }

  let acertos = 0;
  for (let j = 0; j < 20; j++) {
    if (respostas[j] === gabarito[j]) {
      acertos++;
    }
  }

  console.log(`Número de acertos do aluno ${i + 1}: ${acertos}`);
  if (acertos >= 12) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
}
