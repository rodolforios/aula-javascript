/*
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
*/


function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string'){
      reject("caí no erro");
      return;

    } 

    setTimeout(() => {
      
      resolve(msg.toUpperCase() + ' Passei na promise');
      return;
    },tempo);
  });
}




//Promise.all Promise.race Promise.resolve Promise.reject



//************************Promise.all************************ //

//retorna uma única promise, é como se ela transformasse um array de promises
//em uma única promisse, e quando todas foram cumpridas ela é executada

/*

const promises = [
  'Primeiro valor',
  esperaAi('Promise 1', 3000),//'Promise 1'
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  'outro valor'


]

Promise.all(promises).then((valor)=>{
  console.log(valor)
}).catch((erro)=>{
  console.log(erro)
})

*/
//************************Promise.race************************//

//você colocar duas ou mais promises em um array, a que tiver o menor tempo de execução
//comparada as outras irá ser executada.

/*
var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(function(value) {
console.log(value); // "two"
// Ambos resolvem, mas p2 é mais rápido
});

var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function(resolve, reject) {
  setTimeout(reject, 500, "four");
});

Promise.race([p3, p4]).then(function(value) {
console.log(value); // "three"
// p3 é mais rápido, então ela resolve
}, function(reason) {
// Não é chamado
});

var p5 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "five");
});
var p6 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
// Não é chamado
}, function(reason) {
console.log(reason); // "six"
// p6 é mais rápido, então ela rejeita
});

*/


//************************Promise.resolve*********************//

function baixaPagina(){
const emCache = true;

if(emCache){
  return Promise.resolve('Página em cache');

}else{
  return esperaAi('Baixei a página',3000);
}

}

//************************Promise.reject*********************//