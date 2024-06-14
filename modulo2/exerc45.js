const arrayDeStrings = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

function contarOcorrencias(array) {
  const contagem = {};
  for (const item of array) {
    contagem[item] = (contagem[item] || 0) + 1;
  }
  return contagem;
}

const resultadoContagem = contarOcorrencias(arrayDeStrings);
console.log("Contagem de ocorrências:", resultadoContagem);
