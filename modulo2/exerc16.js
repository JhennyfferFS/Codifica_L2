const numeros = [];
for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100));
}

console.log("Números gerados:");
console.log(numeros);

numeros.sort((a, b) => a - b);

console.log("Números ordenados:");
console.log(numeros);
