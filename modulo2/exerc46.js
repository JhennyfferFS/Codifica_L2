const vendas = [
  { vendedor: "João", valor: 100 },
  { vendedor: "Maria", valor: 200 },
  { vendedor: "João", valor: 150 },
  { vendedor: "Maria", valor: 250 },
];

function sumarizarVendas(vendas) {
  const resumo = {};
  for (const venda of vendas) {
    if (!resumo[venda.vendedor]) {
      resumo[venda.vendedor] = 0;
    }
    resumo[venda.vendedor] += venda.valor;
  }
  return resumo;
}

const totalVendas = sumarizarVendas(vendas);
console.log("Total de vendas por vendedor:", totalVendas);
