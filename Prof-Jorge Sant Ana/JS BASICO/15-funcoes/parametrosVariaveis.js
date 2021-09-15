
function soma() {
    var resultado = 0
    for (var i in arguments) {
     // console.log(arguments[i]) //retorna um array com parametros das funções
    resultado += arguments[i]
    }
    return resultado
  }

  console.log(soma(7, 5, 3.2, 'Texto'))