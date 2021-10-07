//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número não divisível por 3 e 5 = Retorna o próprio número.
//Checar se o número é realmente um número
//Use a função com números de 0 a 100

/*
function fizzBuzz(a) {

   
        if (a % 3 == 0 && a % 5 == 0) {
            console.log("FizzBuzz");
        } else if (a % 3 == 0 && a % 5 !== 0) {
            console.log('Fizz');
        } else if (a % 3 !== 0 && a % 5 == 0) {
            console.log('Buzz');

        } else if (a % 3 !== 0 && a % 5 !== 0) {
            console.log(a);
        }
   


}

*/

function fizzBuzz(numero){
    if(typeof numero !== 'number') return numero;;
    if(numero % 3 === 0 && numero % 5 === 0)return 'FizzBuzz';
    if(numero % 3 === 0)return 'Fizz';
    if(numero % 5 === 0)return 'Buzz';
    return numero;
}

for(let i =0; i <=100;i++){
    console.log(fizzBuzz(i));
}
