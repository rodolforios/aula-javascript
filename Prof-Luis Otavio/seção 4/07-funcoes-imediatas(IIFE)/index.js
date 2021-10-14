//IIFE -> Immediately invoked function expression


//O objetivo é não deixar a funcao em escopo global para que não corra o risco de alterações.
/*
function qualquerCoisa(){
    console.log(11123455)
}
qualquerCoisa();

//Na forma abaixo ela é isolada

(function(){
    console.log(123);
    const nome = 'Rodolfo';
});
const nome = 'Qualquer coisa'// dessa forma  a constante da função anonima acima está protegida.
*/
//Outro exemplo mais completo.

(function (idade,peso,altura){

    const sobrenome = 'Rios';
    function criaNome(nome){
    return nome + ' ' + sobrenome;
    }

function falaNome(){
    console.log(criaNome('Rodolfo'));

}
falaNome();
console.log(idade,peso,altura)
})(30,80,1.80);

//sempre para passar parametros deve seguir a seguinte sintaxe:
(function (){

})();
