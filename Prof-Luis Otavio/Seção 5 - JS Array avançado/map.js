//Altera os valores de array
//Map sempre terá o mesmo tamanho do array original

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map(valor => valor*2);
//console.log(dobro)

//Retorne apenas uma string com o nome da pessoa
const pessoas = [
    { nome: 'Rodolfo', idade: 29 },
    { nome: 'Felipe', idade: 60 },
    { nome: 'Maria', idade: 22 },
    { nome: 'José', idade: 72 },
    { nome: 'Pedro', idade: 11 },
    { nome: 'Julia', idade: 8 }
];

const nomeString = pessoas.map(obj => obj.nome)
//console.log(nomeString)

//Remova apenas a chave "nome do objeto"

const semNome = pessoas.map(obj => ({idade: obj.idade}));
//console.log(semNome)

//adicione uma chave de ID em cada objeto

const chaveId = pessoas.map(function(obj,indice){
const newObj ={...obj};
newObj.id = indice;
return newObj;


});
console.log(chaveId)