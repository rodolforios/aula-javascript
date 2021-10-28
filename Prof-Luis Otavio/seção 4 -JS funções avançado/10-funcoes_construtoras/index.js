//Funcao construtoras - objetos.

//Construtora sempre começa com letra maiuscula
// é necessário instanciar

function Pessoa(nome,sobrenome){
    //Atributos ou metodos privados não usam 'this'

    const ID = 123456;
    const metodoInterno = function(){
    
}


    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo');
    }
}

const p1 = new Pessoa('Rodolfo','Rios');
const p2 = new Pessoa('Felipe', 'Oliveira');
p1.metodo();

console.log(p2.nome);