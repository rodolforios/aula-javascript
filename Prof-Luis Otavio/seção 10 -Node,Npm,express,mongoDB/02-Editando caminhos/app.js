/*
const multiplicacao = require('./mod')

console.log(multiplicacao(2,2))

const aaaa = require('./mod');

const cachorrinho = new aaaa('Dog');
cachorrinho.latir();
*/
// ./nomeDoArquivo  ../sobeUmNivel


//path serve para facilitar a forma de escrever o caminho/rota
const path = require('path');
console.log(__dirname);

//no caso abaixo ele voltou duas pastas e depois entrou na arquivos
//e depois imagens

console.log(path.resolve(__dirname,'..','..','arquivos','imagens'));





/*
console.log(__filename);
//mostra o caminho desde a root até o aquivo
console.log(__dirname);
//mostra o caminho desde a root até a pasta atual.
*/