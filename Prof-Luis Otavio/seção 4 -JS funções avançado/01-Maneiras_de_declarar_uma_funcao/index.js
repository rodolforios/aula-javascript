//Declaração de função (function hoisting)


falaOi()
//Mesmo a função ter sido chamada antes da criação da mesma,
// é efetuada uma "Elevação"(hoisting)


function falaOi(){
    console.log('Oie');
}

//As funções são objetos de primeira classe(First-class onjects)
//É possível criar uma variável e a ela atribuir uma função(function expression)

const souUmDado=function(){
    console.log('Sou um dado.')
};
souUmDado(); 


//Posso jogar essa variável como parametro de uma outra função e executar essa função

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

//Arrow function é uma function expression porém mais curta.

const funcaoArrow = () =>{
    console.log('sou uma Arrow function')
}
funcaoArrow();

//Dentro do objeto

const obj = {
    falar(){
        console.log('Estou falando...')
    }
}