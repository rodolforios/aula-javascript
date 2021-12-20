const express = require('express');
const app =express();

app.get('/', (req,res)=>{

    res.send('Hello world 4')
});

app.listen(3030,()=>{


    console.log('Acessando o http://localhost:3030 ');
    console.log('Servidor executando na porta 3030');



});

app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato conosco')
})