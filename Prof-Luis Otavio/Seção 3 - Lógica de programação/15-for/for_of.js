//for classico - Geralmente com interáveis (array ou strings)
//for in -Retorna o índice ou chave(string,array ou objetos)
//for of - Retorna o valor em si (iteráveis.arrays, ou string)



/*
const nome = ['Rodolfo','Rios']

for (let i =0; i<nome.length;i++){
    console.log(nome[i]);
}
console.log('*****************')

for(let i in nome){
    console.log(nome[i]);
}


console.log('*****************')

//for of trabalha o valor, o oposto do for in que trabalha com chave/indice.
for (let valor of nome){
    console.log(valor);
}

console.log('*****************')

nome.forEach(function (valor,indice,array){
console.log(valor,indice,array);
});


console.log('*****************')
*/
//Para Arrays e elementos interaveis(strings,array, possui indice.), qualquer um desses irá funcionar.

//Para objetos o for in e for of são os ideias para utilizar


const pessoa = {
    nome:'Rodolfo',
    sobrenome:'Rios'
}

for (let chave in pessoa){
    console.log(chave,pessoa[chave]);
}
/*será exibido isso:

nome Rodolfo
sobrenome Rios
*/

for(let valor of pessoa){
    console.log(valor)
}
