
//*********Importar todos atributos e metodos*********
//const mod1 = require('./mod1');
//mod1.falaNome();


//*********Importar apenas um atributo ou metodo.*********
//const falaNome = require('./mod1').falaNome;
//console.log(falaNome());

//*********Associação via desestruturação*********

//const {nome,sobrenome,falaNome} = require('./mod1');
//console.log(falaNome());;

const path = require('path')
const axios = require('axios')
const{Pessoa} = require ('./mod1')

axios('https://www.rodolforios.com.br/filespessoas.json').then(Response => console.log(Response.data))
.catch(e=> console.log(e));
