// Faça uma função que receba um valor e escreva se é positivo, negativo ou zero.

function parametro(valor) {
    if (valor > 0) {
        return "Positivo";
    } else if (valor < 0) {
        return "Negativo"
    } else if (valor == 0) {
        return "Valor 0";
    }
}

var resultado = parametro(-1);
console.log(resultado);