// Faça uma função que exibe todos os números menores que 1000 que são múltiplos de 100.

function parametro(numero) {
    for (i = numero; i <= 1000; i += 100) {
        console.log(i);
    }
}

parametro(100);