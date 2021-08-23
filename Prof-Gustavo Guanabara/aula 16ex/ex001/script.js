function contar() {


    var fini = document.getElementById('txtini')
    var ffim = document.getElementById('txtfim')
    var fpas = document.getElementById('txtpasso')
    var nini = Number(fini.value)
    var nfim = Number(ffim.value)
    var npas = Number(fpas.value)

    var res = document.querySelector('div#res')
    res.innerHTML = `Contando...`

    if(npas == 0){
        npas = 1
        window.alert('Passo inválido considerando Passo 1')
    }


    if (fini.value.length == 0 || ffim.value.length == 0 || fpas.value.length == 0) {
        alert(`Preencha todos os campos`)
    }else if (nini < nfim) {

        while (nini <= nfim) {

            res.innerHTML += `\u{1F449}${nini}` //U+1F449
            nini = (nini + npas)

        }

    } else {

        while (nfim <= nini) {

            res.innerHTML += `\u{1F449}${nini}` //U+1F449
            nini = (nini - npas)

        }
        res.innerHTML += `\u{1F3C1}`
    }


    

}
