let elemento1 = 1;
let elemento2 = 1;


console.log(elemento1);
console.log(elemento2);


let proximoNumero;

for (let i = 3; i <= 10; i++) {
    proximoNumero = elemento1 + elemento2;
    console.log(proximoNumero);
    
    elemento1 = elemento2;
    elemento2= proximoNumero;
}