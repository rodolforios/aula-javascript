//Object.freeze impede mudanças no objeto
//defineProperty - defineProperties


//imagine  que a propriedade estoque fique travada, sem poder ser alterada
//Ou até mesmo sem ser exibida

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
//property é para uma única propriedade
    Object.defineProperty(this, 'estoque',{
        enumerable:true,//permite ser exibida
        value: estoque,//Atribui o valor estoque
        writable:false, //Não permite ou permite o valor ser alterado
        configurable:false// permite ser apagada ou configurável

    });
//properties serve para várias propriedades
    Object.defineProperties(this,{
        nome:{
            enumerable:true,//permite ser exibida
            value: nome,//Atribui o valor estoque
            writable:false, //Não permite ou permite o valor ser alterado
            configurable:false// permite ser apagada ou configurável
        },
        preco:{
            enumerable:true,//permite ser exibida
            value: preco,//Atribui o valor estoque
            writable:false, //Não permite ou permite o valor ser alterado
            configurable:false// permite ser apagada ou configurável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);


for ( let chave in p1){
    //console.log(chave)
}