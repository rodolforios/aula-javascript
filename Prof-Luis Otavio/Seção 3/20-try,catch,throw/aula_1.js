//é como se fosse um if else, se der certo ele executará o try e se der errado ele 
//exibirá o catch(erro)
/*
try{
    console.log(naoExisto);
}catch(err){
    console.log('naoExisto não existe.')
    
}

*/
function soma(x, y) {

    if
        (
        typeof x !== 'number' ||
        typeof y !== 'number'
        ) {
        throw ('x e y precisam ser números.');
    }
    return x + y;


}

try{

console.log(soma(456, 1547));
console.log(soma('12', 1547));

}catch(error){
    console.log(error);
}