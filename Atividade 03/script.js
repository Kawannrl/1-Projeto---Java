function calcular(){
    var num01 = parseFloat(document.getElementById("num 1").value)
    var num02 = parseFloat(document.getElementById("num 2").value)
    var operador = document.getElementById("operador").value
    var resultado

    switch (operador) {
        case "+":
            resultado = num01 + num02
            break;
        case "-":
            resultado = num01 - num02
            break;
        case "*":
            resultado = num01 * num02
            break;
        case "/":
            if(num02 !== 0){
            resultado = num01 / num02
            }else{
                resultado = "Erro: divisão por zero não exite!"
            }
            break;
    
        default:
            resultado = "Operador inválido"
    }
    document.getElementById("resultado").textContent = resultado
}