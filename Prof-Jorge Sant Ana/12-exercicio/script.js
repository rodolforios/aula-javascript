

var idade = prompt('Qual a sua idade?')
        var idade = parseInt(idade)

        if (idade < 15) {
            document.write('Criança')

        }else if (idade <30 ) {
            document.write('Jovem')

        }else if (idade <60 ) {
            document.write('Adulto')

        }else {
            if (idade >=60 ) {
            document.write('Idoso')

        }
    }