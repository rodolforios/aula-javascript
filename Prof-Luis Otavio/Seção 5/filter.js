//Filtrar o array
//Filter sempre rerona um array, com a mesma quantidade de elementos ou menos.

//retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
/*
let maiores = [];
for (let i = 0; i <numeros.length; i++){
if (numeros[i]>10){
    maiores.push(numeros[i]) ;
}

}
console.log(maiores);

*/
//Usando Filter ( solução long)
/*
function callbackFilter(valor) {
    if (valor > 10) {
        return valor > 10
    }

    }

    const numerosFiltrados = numeros.filter(callbackFilter);

    console.log(numerosFiltrados);
*/

//Função anônima como callback de filter
/*
    const numerosFiltrados = numeros.filter(function(valor) {
        if (valor > 10) {
            return valor > 10
        }

        });

    console.log(numerosFiltrados);
    */

//Função anônima com arrow function
/*
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
*/


//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termia com a
const pessoas = [
    { nome: 'Rodolfo', idade: 29 },
    { nome: 'Felipe', idade: 60 },
    { nome: 'Maria', idade: 22 },
    { nome: 'José', idade: 72 },
    { nome: 'Pedro', idade: 11 },
    { nome: 'Julia', idade: 8 }
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

console.log(pessoasComNomeGrande);

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDe50);

const pessoasComNomeQueTerminamComA = pessoas.filter(obj =>  obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeQueTerminamComA)

