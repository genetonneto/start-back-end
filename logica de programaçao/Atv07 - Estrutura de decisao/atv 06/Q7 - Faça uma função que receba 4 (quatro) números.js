/*
Faça uma função que receba 4 (quatro) números:

Calcule o quadrado de cada um;

Se o valor resultante do quadrado do segundo for >= 1000, imprima-o e finalize;

Caso contrário, imprima os valores de todos e seus respectivos quadrados
*/

function parametro(n1, n2, n3, n4) {
    var n1 = n1 ** 2;
    var n2 = n2 ** 2;
    var n3 = n3 ** 2;
    var n4 = n4 ** 2;

    if (n2 >= 1000) {
        return n2;
    } else {
        return (n1 + " " +  n2 + " " + n3 + " " + n4);
    }

}

var resultado = parametro(1, 2000, 3, 4);
console.log(resultado);