function calcular(){
    var num1 = parseFloat(document.getElementById("num01").value)
    var num2 = parseFloat(document.getElementById("num02").value)
    var resposta = document.getElementById("resultado")
    resposta.textContent = (num1 / (num2 * num2)).toFixed(2)
}