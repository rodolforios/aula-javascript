const express = require('express');
const route = express.Router();
const homecontroller = require('./controllers/homeController')
const contatoControler = require('./controllers/contatoController')
const testeController = require('./controllers/testeController')
//Rotas da home
route.get("/",homecontroller.paginaInicial);
route.post('/',homecontroller.trataPost);

//Rotas de contato

route.get('/contato',contatoControler.paginaInicial)

//Rota de teste

route.get('/teste',testeController.testando)

module.exports = route;