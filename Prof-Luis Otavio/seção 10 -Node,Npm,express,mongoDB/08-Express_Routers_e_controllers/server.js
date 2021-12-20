const express = require("express");
const app = express();
const routes = require('./routes');


app.use(express.urlencoded({ extended: true }));
app.use(routes);




app.listen(3050, () => {
  console.log("Acessar http://localhost:3050");
  console.log("Servidor executando na porta 3040");
});