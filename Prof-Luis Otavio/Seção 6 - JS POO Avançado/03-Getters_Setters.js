function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    //property é para uma única propriedade
    Object.defineProperty(this, 'estoque', {
        enumerable: true,//permite ser exibida
        configurable: false,// permite ser apagada ou configurável
        get: function(){//o getter apenas exibe o valor
            return estoque;
        },
        set:function(valor){

        }

    });
    
    }

    const p1 = new Produto('Camiseta', 20, 3);
    //console.log(p1);
    //console.log(p1.estoque);


function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

   const p2 = criaProduto('Camiseta')
   
   p2.nome = 'Qualquer coisa.'
   console.log(p2.nome)