const objeto = {
  nome: "Exemplo",
  idade: 25,
  cidade: "São Paulo",
  ativo: true,
  descricao: "Teste",
};

function contarStrings(obj) {
  let contador = 0;
  for (const chave in obj) {
    if (typeof obj[chave] === "string") {
      contador++;
    }
  }
  return contador;
}

const numeroStrings = contarStrings(objeto);
console.log("Número de propriedades do tipo string:", numeroStrings);
