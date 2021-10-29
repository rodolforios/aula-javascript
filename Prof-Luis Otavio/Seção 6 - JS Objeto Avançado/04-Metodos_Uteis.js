/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)
// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca',preco:1.8};
// Object.assign() traz todo conteúdo de outros objetos para dentro de um apenas.
//mas spread é bem melhor 
/*
const Caneca = Object.assign({},produto,{material: 'porcelana'});
caneca.nome = 'Outra coisa';
caneca.preco = 2.5
*/


//console.log(produto)

//Object.getOwnPropertyDescriptor(objeto, 'propriedade')
//irá exeibir o value,writable,enumerable e configurable.
//console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
console.log(Object.keys(produto))//Mostra as chaves
console.log(Object.values(produto))//Mostra os valores
console.log(Object.entries(produto))//mostras os pares, chave e valores



 


