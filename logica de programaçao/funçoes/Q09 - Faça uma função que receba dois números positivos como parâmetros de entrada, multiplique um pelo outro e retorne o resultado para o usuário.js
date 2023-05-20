// Faça uma função que receba dois números positivos como parâmetros de entrada, multiplique um pelo outro e retorne o resultado para o usuário.

function parametro(n1, n2) {
    if (n1 > 0 && n2 > 0) {
        return n1 * n2;
    }
}

var multiplicaçao = parametro(2, 4);
console.log(multiplicaçao);