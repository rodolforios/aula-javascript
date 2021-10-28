
//Arguments sustenta todos os argumetos enviados.

function funcao(){

let total = 0;
for(let argumento of arguments){
    total += argumento;
}
console.log(total);

}

//funcao(1,2,3,4,5,6,7); //Vai somar todos os argumentos.

function funcao2(a = 0,b=0){
    console.log(a+b)

}

//funcao2(3) //como o b está com valor 0 como default então o resultado será 3

//Atribuição via desestruturação(objeto)

function funcao3({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);

}


//funcao3({nome: 'Rodolfo',sobrenome:'Rios',idade:29});

//Criando um objeto

let obj = {nome: 'Rodolfo',sobrenome:'Rios',idade:29}

//funcao3(obj);

//Atribuição via desestruturação(Array)

function funcao4([valor1,valor2,valor3]){
    console.log(valor1,valor2,valor3);

}

//funcao4(['Rodolfo','Rios',29]);


function conta(operador,acumulador,...numeros){
    for(let numero of numeros){
      if (operador === '+')  acumulador += numero;
      if (operador === '-')  acumulador -= numero;
      if (operador === '/')  acumulador /= numero;
      if (operador === '*')  acumulador *= numero;

    }
    console.log(acumulador)

}

conta('+',0,20,30,40,50)






















