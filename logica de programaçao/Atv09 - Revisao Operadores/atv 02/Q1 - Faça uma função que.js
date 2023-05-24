/* 
Faça uma função que:

a)Receba 4 (quatro) números

b)Calcule o quadrado para cada um

c)Somem todos e

d)Mostre o resultado
*/

function parametro(n1, n2, n3, n4) {
    var resultado1 = n1 ** 2;
    var resultado2 = n2 ** 2;
    var resultado3 = n3 ** 2;
    var resultado4 = n4 ** 2;

    var soma = (resultado1 + resultado2 + resultado3 + resultado4);
    console.log(soma);
}

parametro(2,3,4,5);