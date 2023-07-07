/* 

Faça uma função que recebe um parâmetros numéricos:

Calcule o resto da divisão por 5
Se o resto da divisão for 0, dizer que o número é dividido por 5.
Se não, dizer que o número não é dividido por 5.

*/

function parametro(numero) {
    if (numero % 5 == 0) {
        return "O numero e divisivel por 5";
    } else {
        return "O numero nao e divisivel por 5";
    }
}

var resultado = parametro(10);
console.log(resultado);