//A função recursiva fica chamando a si mesma até que que a condição seja preenchida



//com o código abaixo a recursividade irá se chamar até dar erro pois não tem um limitador

/*
function contagemRegressiva(inicio){
    console.log(inicio)
    inicio--
    contagemRegressiva(inicio)

}
contagemRegressiva(10)

*/
//A forma correta é colocando um limitador

function contagemRegressiva(inicio){
    
    if(inicio > 0){
        console.log(inicio)
        inicio--
        contagemRegressiva(inicio)
        
    }
    
}
contagemRegressiva(10)

