function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        res.innerHTML = `Idade calculada: ${idade}`
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','imagens/male-baby.jpg')

            } else if (idade < 21) {                
                //jovem
                img.setAttribute('src','imagens/male-teenager.jpg')

            } else if (idade < 50) {
                //idoso
                img.setAttribute('src','imagens/adult-man.jpg')
            }else{
                img.setAttribute('src','imagens/old-man.jpg')
            }




        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','imagens/female-baby.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagens/female-teenager.jpg')

            } else if (idade < 50) {
               
                img.setAttribute('src','imagens/adult-woman.jpg')
            }else{
                img.setAttribute('src','imagens/old-woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`       
        res.appendChild(img)

    }
}

