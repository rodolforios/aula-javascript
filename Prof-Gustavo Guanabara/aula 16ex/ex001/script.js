function contar() {


    var fini = document.getElementById('txtini')
    var ffim = document.getElementById('txtfim')
    var fpas = document.getElementById('txtpasso')

    var nini = Number(fini.value)
    var nfim = Number(ffim.value)
    var npas = Number(fpas.value)

    var res = document.querySelector('div#res')





    if (ffim.value.length == 0) {
        alert(`Digite um número no campo fim`)
    } else if (nini < nfim) {
        res.innerHTML = `Contando...`
        while (nini <= nfim) {

            res.innerHTML += `👉${nini}`
            nini = (nini + npas)

        }


    } else {
        res.innerHTML = `Contando...`
        while (nfim <= nini) {

            res.innerHTML += `👉${nini}`
            nini = (nini - npas)

        }
    }



    res.innerHTML += `🏁`

}
