
/*

sem callBack

function enviarEmail(corpo,para){
    setTimeout(function(){

        console.log(`
        
        Para:${para}
        -------------------------
        ${corpo}
        ------------------------
        De:Rodolfo Rios
        
        
        
        `)
        
        },5000)
        
}
console.log('Início do envio de e-mail!');
enviarEmail('Olá Mundo','rodolfo@udemy.com');
console.log('Seu e-mail foi enviado, deve chegar em minutos');
console.log('Tudo ok!')


*/

/*

// com callBack


function enviarEmail(corpo, para, callback) {
    setTimeout(function () {
        
        console.log(`
        
        Para:${para}
        -------------------------
        ${corpo}
        ------------------------
        De:Rodolfo Rios`
        
        )
        callback();
    }, 3000)

}
console.log('Início do envio de e-mail!');
console.log('Seu e-mail foi enviado, deve chegar em minutos');
enviarEmail('Olá Mundo', 'rodolfo@udemy.com', ()=>{

    console.log('isso é um callBack')
});


*/

//Passando parâmetros para o callBack

/*

function enviarEmail(corpo, para, callback) {
    setTimeout(function () {
        
        console.log(`
        
        Para:${para}
        -------------------------
        ${corpo}
        ------------------------
        De:Rodolfo Rios`
        
        )
        callback('ok',5,'8s');
    }, 8000)

}
console.log('Início do envio de e-mail!');
console.log('Seu e-mail foi enviado, deve chegar em minutos');
enviarEmail('Olá Mundo', 'rodolfo@udemy.com', (status,amount,time)=>{

    console.log(`
    Status:${status}
    ----------------
    Contatos:${amount}
    ----------------
    tempo de Envio:${time}

    `)

    console.log('isso é um callBack')
});

*/


//CallBack com tratamento de erro

/*

function enviarEmail(corpo, para, callback) {
    setTimeout(function () {

        //Lógica


        var deuErro = false;

        //o Parâmetro de erro deve ser sempre o último

        if (deuErro) {
            callback(12, 'O Envio do e-mail falhou!');
        } else {
            callback(12);
        }

    }, 5000)

}

console.log('Seu e-mail foi enviado, deve chegar em segundos...');
enviarEmail('Olá Mundo', 'rodolfo@udemy.com', (time, erro) => {



    if (erro == undefined) {//tudo ok
        console.log('TUDO OK!')
        console.log(`Tempo:${time}s`)

    } else { //deu erro
        console.log("OCORREU UM ERRO " + erro)
        console.log(`Tempo:${time}s`)
    }
});

*/

/*
//Promise simples

function enviarEmail(corpo,para){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            var deuErro = false;
            

            if(!deuErro){
                
                resolve()//Promessa OK!!
                
            }else{
                
                reject()//foi mal,eu falhei :(
                    
            }

        },5000)
    });
}

console.log('Seu e-mail será enviada em segundos...')

enviarEmail("Olá mundo","victor@udemy.com").then(()=>{ // then só é chamado quando a promessa é cumprinda
    console.log("EMAIL ENVIADO!!")
}).catch(()=>{ // usar cacth quando a promise não for cumprida
    console.log("QUE PENA, NÃO DEU CERTO :(")
})

*/

//Passando parâmetros para o promises

//Você só pode passar um parâmetro em promise, diferentemente de callBack
//para contornar isso use um json como nos exemplo abaixo.

/*

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            var deuErro = true;


            if (!deuErro) {

                resolve({ time: 6, to: "victor@udemy.com" })//Promessa OK!!

            } else {

                reject("erro 123, e-mail não enviado")//foi mal,eu falhei :(

            }

        }, 3000)
    });
}

console.log('Seu e-mail será enviada em segundos...')

enviarEmail("Olá mundo", "victor@udemy.com").then((dados) => { // then tem acesso a os parâmetros do resolve
    console.log(`
    Time:${dados.time}
    ---------------                  
    To:${dados.to}
    
    `)
}).catch((erro) => { //catch tem acesso a os parâmentros de reject
    console.log("QUE PENA, NÃO DEU CERTO :( " + erro) 
})



*/

//Várias promises aninhadas


function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    })
}

function buscarEmailNoBanco() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("victorlima@guia.com.br")
        }, 2000)
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            var deuErro = false;


            if (!deuErro) {

                resolve({ time: 6, to: "victor@udemy.com" })//Promessa OK!!

            } else {

                reject("erro 123, e-mail não enviado")//foi mal,eu falhei :(

            }

        }, 2000)
    });
}


pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("Olá,como vai? ", email).then(() => {
            console.log('E-mail enviado, para o usuário com id: ' +id)

        }).catch(err => {
            console.log(err);
        })
    })


})