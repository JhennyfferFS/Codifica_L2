const inventarioLojaA = {
  item1: 10,
  item2: 5,
  item3: 15,
};

const inventarioLojaB = {
  item2: 7,
  item3: 10,
  item4: 8,
};

function combinarInventarios(invA, invB) {
  const inventarioCombinado = { ...invA };
  for (const item in invB) {
    if (inventarioCombinado[item]) {
      inventarioCombinado[item] += invB[item];
    } else {
      inventarioCombinado[item] = invB[item];
    }
  }
  return inventarioCombinado;
}

const inventarioFinal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log("Inventário combinado:", inventarioFinal);
