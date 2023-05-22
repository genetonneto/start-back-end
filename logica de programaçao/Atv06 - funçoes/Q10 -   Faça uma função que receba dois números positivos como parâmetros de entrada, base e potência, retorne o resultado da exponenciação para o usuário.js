// Faça uma função que receba dois números positivos como parâmetros de entrada, base e potência, retorne o resultado da exponenciação para o usuário.

function parametros(base, potencia) {
    var resultado = Math.pow(base, potencia);
    return resultado;
}

var base = 2.5;
var potencia = 3.0;
var resultadoExponenciacao = parametros(base, potencia);
console.log("O resultado da exponenciação é: " + resultadoExponenciacao);
