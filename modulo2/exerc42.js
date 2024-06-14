const dados = {
  numeros: [1, 2, 3],
  nome: "Exemplo",
  valores: [10, 20, 30],
  ativo: true,
  descricao: "Objeto de teste",
};

function filtrarArrays(obj) {
  const novoObjeto = {};
  for (const chave in obj) {
    if (Array.isArray(obj[chave])) {
      novoObjeto[chave] = obj[chave];
    }
  }
  return novoObjeto;
}

const resultado = filtrarArrays(dados);
console.log("Propriedades que são arrays:", resultado);
