/* 
Javascript é baseado em protótipo para passar proprieddades e métodos de um objeto para outro

*Definição de protótipo
Protótipo é o termo usdo para se referir ao que foi criado pela primeira vez, servindo 
de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (_proto_)
que vem da propriedade prototype da função construtora que foi usada para criá-lo.
Quando tentamos acessar um mento de um objeto. primeiro o motor do JS vai tentar encontrar
este membro no  próprio objeto e depois a cadeia de protótipos é usada até o topo (null)
até encontrar (ou não) tal membro.
*/


/*
function Pessoa (nome,sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenomenome;



}

const pessoa1 = new Pessoa ('Luiz', 'O.')

*/

