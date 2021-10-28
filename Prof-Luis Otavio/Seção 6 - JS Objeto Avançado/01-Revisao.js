//Uma string literal possui '',"" ou ``
//Um Array literal tem []
//Um number literal 123
//Função literal tem function no começo
//Quando usa new é um construtor

//Objeto literal {}
//Objetos são feitos de um par de chave e valor
/*
const pessoa = {

nome: 'Rodolfo',
sobrenome: 'Rios'

};
//notação de ponto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

//Notação de colchete
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

//Notação de colchete, ideal para um valor dinâmico
const chave = 'nome';
console.log(pessoa[chave]);

*/



//Usando construtor ex: new Array()

const pessoa1 = new Object();
pessoa1.nome = 'Rodolfo';
pessoa1.sobrenome = 'Rios';
pessoa1.idade = 29
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade;
}
//console.log(pessoa1.getDataNascimento());
//Abaixo temos um objeto literal com os mesmos dados do obj acima

//usando for in para ver as chaves
for (let chave in pessoa1) {
    console.log(chave)
}
//usando for in para ver as chaves usando colchetes(dinâmica)

//OBS: funções dentro de objetos são chamadas de metodos
for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}



const pessoa2 = {
    nome: 'Luis',
    sobrenome: 'Otavio'
}
//para deletar algum elemento do obj
//delete pessoa1.nome;

//Criar um 'molde' para criar objetos é muito melhor do que ficar criando vários
//pois você pode esquecer de algum sem mencionar que é mais trabalhoso.
//Para isto use Factory Function ou Constructor Function ou até mesmo classes

//Exemplo de Factory Function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Rodolfo', 'Rios')
console.log(p1.nomeCompleto)


//Exemplo de Constructor Function

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p1 = new Pessoa('Rodolfo','Rios')
console.log(p1)

