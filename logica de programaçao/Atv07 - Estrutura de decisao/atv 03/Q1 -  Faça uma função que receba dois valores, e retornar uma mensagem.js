/* 
Faça uma função que receba dois valores, e retornar uma mensagem de acordo com as validações abaixo:

‘Números iguais’, se os números forem iguais.

‘Primeiro é maior’, se o primeiro for maior que o segundo;

‘Segundo maior’, se o segundo for maior que o primeiro.
*/

function parametro(valor1, valor2){
    if (valor1 == valor2) {
        return "Valor1 e igual ao valor2";
    } else if (valor1 > valor2) {
        return "Valor1 e maior que valor2";
    } else {
        return "Valor2 e maior que o valor1";
    }
}

var resultado = parametro(2,3);
console.log(resultado);