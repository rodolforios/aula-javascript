
//Arguments sustenta todos os argumetos enviados.

function funcao(){

let total = 0;
for(let argumento of arguments){
    total += argumento;
}
console.log(total);

}

funcao(1,2,3,4,5,6,7);

function funcao2(a = 0,b=0){
    console.log(a+b)

}

funcao2(3)


