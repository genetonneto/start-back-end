// Faça uma função que exibe todos os números maiores que 10 e menores que 100 que são pares.

function parametro(numero) {
    for (i = numero; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
 }
parametro(10);