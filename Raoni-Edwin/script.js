
var lista_numeros = Array()
var lista_numeros = [2,2,23,3,3,7,7,8,8]
var soma =Array()
v

lista_numeros.sort(ordenaNumeros)

function ordenaNumeros(a, b) {
    return a - b
    
}

var unico = lista_numeros.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
});
