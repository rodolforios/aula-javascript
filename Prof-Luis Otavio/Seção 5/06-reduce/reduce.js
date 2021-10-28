//Some todos os números(reduce)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
//como eu faria sem o reduce()
let acumulador = 0;

for (let i = 0; i<numeros.length;i++){
    acumulador+=numeros[i]
}

console.log(acumulador)

//Com o reduce

const total = numeros.reduce(function(acumulador,valor,indice,array){
acumulador  += valor;
return acumulador;

},0);

//console.log(total);

//Retorne um array com os números pares (Filter)

const total = numeros.reduce(function(acumulador,valor){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
    
    },0);
    
    console.log(total);

//const numerosPares = numeros.filter(valor=> valor % 2 == 0);
//console.log(numerosPares)

//Retorne um array com o dobro dos valores(map)

const dobro = numeros.map(valor=> valor * 2 );
console.log(dobro)

const total = numeros.reduce(function(acumulador,valor){
     acumulador.push(valor*2);
    return acumulador;
    
    },[]);
    
    console.log(total);
    */

//Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Rodolfo', idade: 29 },
    { nome: 'Felipe', idade: 60 },
    { nome: 'Maria', idade: 22 },
    { nome: 'José', idade: 72 },
    { nome: 'Pedro', idade: 11 },
    { nome: 'Julia', idade: 8 }
];


const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;

});
console.log(maisVelha)