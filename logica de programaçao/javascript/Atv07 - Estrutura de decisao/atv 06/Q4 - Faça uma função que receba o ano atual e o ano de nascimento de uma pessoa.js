/*
Faça uma função que receba o ano atual e o ano de nascimento de uma pessoa:

Calcular a idade da pessoa;

Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/

function parametro(anoAtual, anoNasc) {
    return (anoAtual - anoNasc);
}

var resultado = parametro(2023, 1998);
console.log(resultado);