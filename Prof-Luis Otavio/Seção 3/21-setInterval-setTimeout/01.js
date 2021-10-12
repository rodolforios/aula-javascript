function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

//console.log(mostraHora())

function funcaoDoIntervalo() {
    console.log(mostraHora());

}
//set interval executa  algo de x tempo em x tempo(sempre milesimos)
/*
setInterval(function() {
    console.log(mostraHora());
}, 1000);

*/


const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

//A função time out serve para encerrar a função set interval.
setTimeout(function() {
    clearInterval(timer);
}, 3000, );

setTimeout(function() {
    console.log('Olá mundo');
}, 5000);