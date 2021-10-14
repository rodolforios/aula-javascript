//return 
//Retorna um valaor
//Termina a função

function soma(a,b){
    return a + b
}

console.log(soma(9,8));

//Utilizando objeto

function criaPessoa(nome,sobrenome){
    return {nome,sobrenome};
}

const p1 = criaPessoa('Rodolfo','Felipe')
const p2 = {
    nome:'João',
    sobrenome:'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);

//funcão dentro da outra

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + '' + resto;
    }
    return falaResto;
}

const fala = falaFrase('olá');
const resto = fala(' mundo');

console.log(resto);

//Segundo exemplo de função dentro de outra
/*
function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 3;
}
function quadriplica(n){
    return n * 4;
}

*/

function criaMultiplicador(multiplicador){
    //multiplicador
    function multiplicacao(n){
        return function(){ n * multiplicador
        }
    }
    
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

