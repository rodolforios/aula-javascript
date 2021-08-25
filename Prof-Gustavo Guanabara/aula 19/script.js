function calcular() {

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value=` ${c}`
            tab.appendChild(item)
            c++


        }
    }


}
















/*
function calcular() {
    var num = document.getElementById('txtnum')
    var tab = Number(num.value)
    var res = document.querySelector('div#exib')
    res.innerHTML = ''

    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        res.innerHTML = ''
        for (i = 0; i <= 10; i++) {
            res.innerHTML += `${tab} x ${i} = ${tab * i} <br>`

        }







    }
}

*/