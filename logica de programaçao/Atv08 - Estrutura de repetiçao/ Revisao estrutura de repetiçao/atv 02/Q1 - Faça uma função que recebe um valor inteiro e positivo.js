/* 
Faça uma função que recebe um valor inteiro e positivo:

a)Se o valor for menor que 350, a função deverá incrementar o valor recebido com o valor 5.

b)Se o novo valor for múltiplo de 5, deverá exibir a mensagem: "MÚLTIPLO DE 5".

c)Se o novo valor for múltiplo de 7, deverá exibir a mensagem: "MÚLTIPLO DE 7".
*/


// Professor, acredito que o enunciado tem inconsistencia de dados, pois o valor pode ser menor que 350 e ser multiplo de 5 ou de 7, logo, o codigo so vai entrar na primeira condicional.

/*
function parametro(valor) {
    var i = 5;
    if (valor < 350) {
        var soma = valor + 5;
        console.log(soma);
    } else if (valor % 5 == 0) {
        console.log("Multiplo de 5");
    } else if (valor % 7 == 0) {
        console.log("Multiplo de 7");
    }
}
parametro(3);
*/

// Acredito que esta seria a forma mais correta de realizar de realizar a atividade:


function parametro(valor) { // Uma função para realizar se o numero é ou não menor que 350;
    for (i = valor; i <= 350; i++) {
        if (valor < 350) {
            var incremento = 5;
            var soma = valor + incremento;
        }
    }
    console.log("Resultado da primeira funçao" + " = " + soma);
}

parametro(10);


function multiplo(numero) { // Verifica se o numero e seus multiplos;
    if (numero % 5 == 0) {
        console.log("Resultado da segunda funçao" + " = " + "Multiplo de 5");
    } else if (numero % 7 == 0) {
        console.log("Resultado da segunda funçao" + " = " + "Multiplo de 7");
    }
}

multiplo(7);