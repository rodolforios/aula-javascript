function calcular() {
    var num = document.getElementById('txtnum')
    var tab = Number(num.value)
    var res = document.querySelector('div#exib')
    res.innerHTML =''

    if( num.value.length ==0){
        window.alert('Digite um número')
    }else{

    for (i = 0; i <= 10; i++) {
        res.innerHTML += `${tab} x ${i} = ${tab * i} <br>` 
        
    }




    


}
}