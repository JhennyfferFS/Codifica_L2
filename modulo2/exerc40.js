const prompt = require("prompt-sync")();

const resultadoOficial = [];
for (let i = 0; i < 5; i++) {
  resultadoOficial.push(
    Number(prompt(`Digite o resultado oficial ${i + 1}: `))
  );
}

for (let i = 0; i < 50; i++) {
  const aposta = [];
  for (let j = 0; j < 5; j++) {
    aposta.push(
      Number(prompt(`Digite a aposta ${j + 1} do apostador ${i + 1}: `))
    );
  }

  const ganhou = aposta.every((val, idx) => val === resultadoOficial[idx]);

  if (ganhou) {
    console.log(`Apostador ${i + 1} é o Ganhador!`);
  }
}
