/*
Faça uma função que escreva no console uma palavra de acordo com a especificação abaixo:

a)Utiliza os valores de 1 a 299.

b)Para cada valor, se ele for múltiplo de 3, deverá exibir a palavra: VAMO.

c)Para cada valor, se ele for múltiplo de 5, deverá exibir a palavra: BORA.

d)Para cada valor, se ele for múltiplo de 3 e 5 ao mesmo tempo, deverá exibir a palavra: VAMBORA.
*/

function parametro(numero) {
    for (i = numero; i <= 299; i++) {
        if (i % 3 == 0) {
            console.log("VAMO");
        } else if (5 % 3 == 0) {
            console.log("BORA");
        } else if ((3 % 2 == 0) || (5 % 2 == 0)) {
            console.log("VAMBORA");
        }
    }
}
parametro(1);