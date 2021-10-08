
/*
try{
    //Executa quando não há erros
    
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log(a);
    console.log('Fechei o arquivo');

}catch(err){

    //Executa quando não há erros

    console.log('Tratando o erro')


} finally{
    //É executado sempre

    console.log('Eu sempre sou executado')


}

*/

function retornaHora(data){

if(data && !(data instanceof Date)){
    throw new TypeError('Esperando instância de Date.')
    
}
if (!data){
    data = new Date();
}

return data.toLocaleTimeString('pt-BR',{
hour12:false
});
}

const hora = retornaHora();
console.log(hora);


