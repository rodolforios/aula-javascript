const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação
//const {nome ='',sobrenome,idade} = pessoa;//É possível setar um valor padrão caso a variavel não seja declarada



//console.log(nome ,sobrenome,idade);

//Também é possível atribuir o valor de um atributo para um outro nome:
const {nome:teste='',sobrenome}=pessoa;

console.log(teste,sobrenome);
//Para acessar os dados de um objeto dentro de outro objeto

//const {endereco: {rua:r,numero}} = pessoa;
//console.log(r,numero);

const {nome,...resto} =pessoa;
console.log(resto);
