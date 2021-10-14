//O escopo de uma variável determina em que partes do programa essa variável pode ser acessada. 
//O exemplo mais simples (e mais conhecido) de escopo é o escopo global e o escopo local:

//As linguagens de programação modernas suportam o conceito de estruturas aninhadas. Ou seja, 
//uma estrutura de código contida em outra estrutura de código (em vez de estar no top-level):

//É nesse momento que surge uma dúvida: as estruturas "de dentro" têm acesso às estruturas "de fora" ou não?

//Cada linguagem implementa isso de uma forma.


//Nas linguagens com escopo léxico, o que conta é a estrutura "gramatical" do programa, ou seja, 
//se no código-fonte uma estrutura está aninhada em outra, a de dentro pode acessar variáveis na de fora.




const nome = 'Luiz';

function falaNome(){
    console.log(nome);
}

falaNome();