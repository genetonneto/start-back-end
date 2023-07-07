// Faça uma função que receba um valor e diga se ele é positivo ou negativo (considere o valor zero como positivo).

function parametro (valor) {
    if (valor >= 0) {
        return "Valor positivo";
    } else {
        return "Valor negativo";
    }
}

var resultado = parametro(5);
console.log(resultado);