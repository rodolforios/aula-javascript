/*

const nome = 'Rodolfo';
const sobrenome = 'Rios'

const falaNome = () => nome+ ' '+sobrenome;


module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;



exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'Qualquer coisa que eu quiser escrever'
//o this faz referência tanto para o exports como para o module.


*/

//*********Usando Class*********//

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
