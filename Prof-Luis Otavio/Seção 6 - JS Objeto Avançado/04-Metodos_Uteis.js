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


const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

const outraCoisa = {...produto};

//produto.nome = 'Rodolfo Rios'
outraCoisa.nome = 'Outro nome'
outraCoisa.preco = 2.5
console.log(produto)
console.log(outraCoisa)

/*
for(let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
*/