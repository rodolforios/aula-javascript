const frutas = ['pera', 'maçã','Uva'];//Array de uma única dimensão é um vetor


//for in lê o indice ou chaves de um objeto
for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {

    nome:'Rodolfo',
    sobrenome:'Rios',
    idade:29


}

for(let chave in pessoa){
    console.log(chave,pessoa[chave]);

}
