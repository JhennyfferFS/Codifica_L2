const transacoes = [
  { id: 1, valor: 100, data: "2024-01-01", categoria: "Alimentação" },
  { id: 2, valor: 200, data: "2024-01-02", categoria: "Transporte" },
  { id: 3, valor: 50, data: "2024-01-03", categoria: "Alimentação" },
  { id: 4, valor: 300, data: "2024-01-04", categoria: "Lazer" },
];

function categorizarTransacoes(transacoes) {
  const resumo = {};
  for (const transacao of transacoes) {
    if (!resumo[transacao.categoria]) {
      resumo[transacao.categoria] = { transacoes: [], subtotal: 0 };
    }
    resumo[transacao.categoria].transacoes.push(transacao);
    resumo[transacao.categoria].subtotal += transacao.valor;
  }
  return resumo;
}

const transacoesPorCategoria = categorizarTransacoes(transacoes);
console.log("Transações por categoria:", transacoesPorCategoria);
