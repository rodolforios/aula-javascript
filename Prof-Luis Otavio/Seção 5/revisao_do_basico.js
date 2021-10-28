/*
const nomes = ['Eduardo','Maria','Joana'];
//String, Objetos, funções
//nomes[2]= 'Joao'; //Array literal

//const nomes = new Array('Eduardo','Maria','Joana');//Array com construtor
//delete nomes[2];
console.log(nomes);

 nomes.pop();//Irá remover o último elemento do array nomes e retornar o valor na constante.
 nomes.shift();//Irá remover o primeiro elemento do array nomes e retornar o valor na constante.

nomes.push('João');//Irá inserir um nome no final do array

nomes.unshift('Walace');//irá inserir no inicio

console.log(nomes)



const nomes = ['Eduardo','Maria','Joana','Wallace','Rosana'];
const novo = nomes.slice(1,3);//fatiar, irá trazer [ 'Maria', 'Joana' ]
console.log(novo);
const novo2 = nomes.slice(0,-1);//irá trazer todos menos o último [ 'Eduardo', 'Maria', 'Joana', 'Wallace' ]
console.log(novo2);


//transformando um string em um Array.

const nome = 'Rodolfo Felipe Rios de Oliveira'

const nomes = nome.split(' ')//ele fatiou entre os espaços e transformou a string em um array
console.log(nomes);

*/

const nome = [ 'Rodolfo', 'Felipe', 'Rios', 'de', 'Oliveira' ] 
const nomes = nome.join(' ');//irá unir o array e transforma lo em uma string
console.log(nomes)