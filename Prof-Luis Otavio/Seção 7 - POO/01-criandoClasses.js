//class e função construtora funcionam da mesma maneira

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;

    }
    falar() {
        console.log(`${this.nome} está falando`);

    }

    comer() {
        console.log(`${this.nome} está comendo`);

    }

    beber() {
        console.log(`${this.nome} está bebendo`);

    }
}

const p1 = new Pessoa('Rodolfo', 'Rios');
console.log(p1)


function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);

}

Pessoa2.prototype.comer = function(){
    console.log(`${this.nome} está comendo`);

}

Pessoa2.prototype.beber = function(){
    console.log(`${this.nome} está bebendo`);

}