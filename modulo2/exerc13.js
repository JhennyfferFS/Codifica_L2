let elemento1 = 1;
let elemento2 = 1;
let fibbonacci = [];

let proximoNumero;

while (fibbonacci.length < 15) {
    fibbonacci.push(elemento1);
    proximoNumero = elemento1 + elemento2;
    elemento1 = elemento2;
    elemento2 = proximoNumero;
};

if (fibbonacci.length < 15) {
    fibbonacci.push(elemento1);
}
console.log(fibbonacci);