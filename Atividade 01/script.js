function soma(){
    var numero01 = document. getElementById("number1").valueAsNumber
    var numero02 = parseFloat(document. getElementById("number2").value)
    var resposta = document. getElementById("respSoma")
    resposta.textContent = numero01 + numero02
}
function sub(){
    var numero03 = parseFloat(document. getElementById("number3").value)
    var numero04 = parseFloat(document. getElementById("number4").value)
    var resposta = document. getElementById("respSub")
    resposta.textContent = numero03 - numero04
}
function mult(){
    var numero05 = parseFloat(document. getElementById("number5").value)
    var numero06 = parseFloat(document. getElementById("number6").value)
    var resposta = document. getElementById("respMult")
    resposta.textContent = numero05 * numero06
}
function divi(){
    var numero07 = parseFloat(document. getElementById("number7").value)
    var numero08 = parseFloat(document. getElementById("number8").value)
    var resposta = document. getElementById("respDivi")
    resposta.textContent = numero07 / numero08
}