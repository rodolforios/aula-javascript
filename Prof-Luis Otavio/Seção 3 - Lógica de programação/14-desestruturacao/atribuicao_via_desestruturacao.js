
/*
let a = 'A';// B
let b = 'B';// C
let c = 'C';// A

const letras = [b,c,a];

[a,b,c] = letras;

console.log(a,b,c);

const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000];

const primeiroNumero =numeros[0];
console.log(primeiroNumero);

const [primeiroNumero,segundoNumero,terceiroNumero,...resto]= numeros;

console.log(primeiroNumero,segundoNumero,terceiroNumero);

console.log(resto);
console.log(numeros);

*/

const numeros = [
    [1,2,[10,20,30]],
    [4,[40,50,60],6],
    [[70,80,90],8,9]
]



console.log(numeros[0][2][2],numeros[1][1][0],numeros[2][0][1]);
