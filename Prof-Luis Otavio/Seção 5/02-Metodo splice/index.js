//const nomes = ['Eduardo','Maria','Joana','Wallace','Rosana'];

//nomes.splice(índice,qtos quero deletar,elementos para adicionar e todos separados por virgula)

//pop() remover o último elemento do meu array
/*
const removidos = nomes.splice(4,1);
const removidos = nomes.splice(-1,1);


const removidos = nomes.splice(-2,Number.MAX_VALUE);//max value vai levar até o último indice.
console.log(nomes,removidos);
*/
//OBS:Quando se trata de indices negativos ele começar de trás para frente, oposto do ídice comum


//Adicionar no final como push()
/*
const nomes = ['Eduardo','Maria','Joana','Wallace','Rosana'];

const removidos = nomes.splice(1,0,'josé');
console.log(nomes,removidos);
*/
const cel = '19988556633'
const num = cel.split('')
num.splice(0,0,'(')
num.splice(3,0,')')
num.splice(9,0,'-')



console.log(num.join(''))