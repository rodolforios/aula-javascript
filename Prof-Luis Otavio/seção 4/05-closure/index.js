//Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.


//A função init() cria uma variável local chamada name, e depois define uma função chamada displayName().
// displayName() é uma função aninhada (um closure) — ela é definida dentro da função init(),
// e está disponivel apenas dentro do corpo daquela função. Diferente de init(), 
//displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();