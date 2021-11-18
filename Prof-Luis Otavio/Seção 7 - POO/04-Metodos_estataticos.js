class ControleRemoto {
    constructor(tv){

        this.tv = tv;
        this.volume = 0;
    }
    //metodo de instância
    aumentarVolume(){
        this.volume += 2;
    }
    //metodo de instância
    diminuirVolume(){
        this.volume -= 2;
    }

    //metodo de estático
   static trocaPilha(){

    console.log('A pilha será trocada')

    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
//só é possível chamar um método estático chamando a classe
//Quando um método estático for chamado ele irá executar em todos objetos de sua classe

ControleRemoto.trocaPilha();

console.log(controle1)