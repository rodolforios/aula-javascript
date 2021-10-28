/*Escreva uma função chamada ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.

*/

function ePaisagem1(x,y){
    return x>y?true:false;
}


const ePaisagem2 = (x,y)=> x>y?true:false;



console.log(ePaisagem1(1920,1280));
console.log(ePaisagem2(1080,1920));