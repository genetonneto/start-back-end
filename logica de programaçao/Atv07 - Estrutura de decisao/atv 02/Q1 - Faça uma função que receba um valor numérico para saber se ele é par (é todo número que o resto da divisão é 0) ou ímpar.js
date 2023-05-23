// Faça uma função que receba um valor numérico para saber se ele é par (é todo número que o resto da divisão é 0) ou ímpar.

function parametro(numPar) {
    if (numPar % 2 == 0) {
        return "Numero Par";
    } else {
        return "Numero Impar";
    }
}

var resultado = parametro(2);
console.log(resultado);