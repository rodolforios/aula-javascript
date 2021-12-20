
o 5 depois do profile é um url params

http://facebook.com/profiles/5



query string é iniciado após o sinal de 
interrogação

http://.../profiles/12345?campanha=googleads

se tiver mais parametros ficará da seguinte forma

http://.../profiles/12345?campanha=googleads&nome_campanha=seila

sempre com chave e valor
?campanha=googleads

&nome_campanha=seila


Se vc mandar um parâmetro que não existe, a página irá retornar um erro

porém é possível contornar isso:

app.get('/testes/:idUsuarios',(req,res)=>{
    console.log(req.params)
    res.send('oi')
})