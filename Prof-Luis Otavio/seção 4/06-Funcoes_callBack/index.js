//https://blog.betrybe.com/tecnologia/callback/



/*callback é um tipo de função que só é executada após o processamento de outra função. 
Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então,
chamada de callback.

Isso é importante porque uma característica dessa linguagem é não esperar o término de cada 
evento para a execução do próximo. Portanto, ela contribui para controlar melhor o fluxo de 
processamento assíncrono. Para ilustrar a explicação, imagine o seguinte bloco de código
*/

function primeiroBloco() {
    // Aguardar 5 segundos
    setTimeout(function () {
        console.log('Esse é o primeiro bloco de comandos após 5 segundos');
    }, 5000);
}
function segundoBloco() {
    console.log('Esse é o segundo bloco de comandos');
}
primeiroBloco();
segundoBloco();

/*
Ao executar o código em um navegador, o retorno será o seguinte:

“Esse é o segundo bloco de comandos”.

“Esse é o primeiro bloco de comandos após 5 segundos”.

Observe que as mensagens foram exibidas fora da ordem, o que demonstra como o JavaScript
pode funcionar ao processar os blocos de código, ou seja, mesmo sem terminar o primeiro
bloco, o segundo foi iniciado. Portanto, para fazer com que as mensagens sejam exibidas
na ordem desejada, é preciso utilizar a função callback. Confira, a seguir, como deve ficar
o código ao adicionar esse recurso.
*/

function exibeMensagensNaOrdem(mensagem, callback) {
	console.log(mensagem);
	callback();
}
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', function() {
	console.log('Essa é a segunda mensagem exibida na ordem');
});

/*Ao executar o código no navegador, o retorno será:

“Essa é a primeira mensagem exibida na ordem.”

“Essa é a segunda mensagem exibida na ordem.”

Portanto, ao utilizar a função callback, o JavaScript mantém a ordem de execução 
desejada para os blocos de código. Vale ressaltar que existem outras formas para 
escrever esse código e utilizar a função callback.

*/