// Questão 1

var lista_frutas = Array();
lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva'; 

for(i = 0;i< lista_frutas.length;i++)
console.log(lista_frutas[i])


// Questão 2
var x = 1;
var y = 1;

while (x <= 10) {
    y = 1
    while (y <= 10) {
        console.log(`${x} x ${y} = ${x * y}`)
        y++

    }

    x++
}
