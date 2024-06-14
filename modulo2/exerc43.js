const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  b: 20,
  d: 4,
};

function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const objetoCombinado = combinarObjetos(obj1, obj2);
console.log("Objeto combinado:", objetoCombinado);
