const prompt = require("prompt-sync")();

const gabarito = [];
for (let i = 0; i < 13; i++) {
  gabarito.push(Number(prompt(`Digite o gabarito ${i + 1}: `)));
}

for (let i = 0; i < 100; i++) {
  const numeroCartao = prompt(
    `Digite o número do cartão do apostador ${i + 1}: `
  );
  const respostas = [];
  for (let j = 0; j < 13; j++) {
    respostas.push(
      Number(prompt(`Digite a resposta ${j + 1} do apostador ${i + 1}: `))
    );
  }

  let acertos = 0;
  for (let j = 0; j < 13; j++) {
    if (respostas[j] === gabarito[j]) {
      acertos++;
    }
  }

  console.log(`Número do cartão: ${numeroCartao}`);
  console.log(`Número de acertos: ${acertos}`);
  if (acertos === 13) {
    console.log("Parabéns, tu foi o GANHADOR");
  }
}
