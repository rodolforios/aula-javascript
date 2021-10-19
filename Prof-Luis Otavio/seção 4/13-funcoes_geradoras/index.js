//lazy valuetion
/*
function* geradora1() {
    //código qualquer
    yield 'Valor 1';
    //código qualquer
    yield 'Valor 2';
    //código qualquer
    yield 'Valor 3';

}
*/
//const g1 = geradora1()

//console.log(g1) o resutado será  Object [Generator] {}

//console.log(g1.next()) O resultado será { value: 'Valor 1', done: false }
//value é o valor do yield atual e done é se já retornou o último valor ou não,
//neste caso deu false pois ainda tem mais dois retornos para serem efetuados.

/*
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next())
*/
//Neste caso a saída será { value: undefined, done: true }
//value undefined porque não tem um próximo valor, o 3 era o último e done true  
//porque não tem mais nenhum valor para ser chamado ou seja foi encerrado.


//No exemplo abaixo será impresso todos os valores do yield
/*
const g1 = geradora1();
for (let valor of g1){
    console.log(valor);
}
*/
//Abaixo será criado um looping infinito onde cada vez que a função geradora
//for chamada ela irá dar um valor ++
/*
function* geradora2() {
    let c = 0;
    while (true) {
        yield c;
        c++;
    }

}
*/


/*
const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

*/

//Exemplo de gerador que delega tarefa para outro gerador

/*
function* geradora3() {

    yield 0;
    yield 1;
    yield 2;

}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();//dessa forma serão impressos os yields do geradora 3 e 4

for(let valor of g4){
    console.log(valor)
}
*/

//É possível colocar uma serie de funcoes com o yield
function* geradora5() {

    yield function () {

        console.log('Vim do y1');
    };
    yield function () {
        console.log('Vim do y2');
    }



}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();