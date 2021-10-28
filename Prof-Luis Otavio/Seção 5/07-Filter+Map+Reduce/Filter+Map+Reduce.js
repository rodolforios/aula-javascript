//Retorne a soma do dobro de totos os pares

//Filtrar pares
//Dobrar valores
//reduzir(somar tudo)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*

COMO EU FARIA
//Filtrar pares
const pares = numeros.filter(valor=> valor % 2 ===0)
//Dobrar valores
const dobro = pares.map(valor=>valor*2)
//reduzir(somar tudo)
const total = dobro.reduce(function(acumulador,valor){
acumulador += valor;
return acumulador;
},)
*/

//Maneira abreviada

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);









