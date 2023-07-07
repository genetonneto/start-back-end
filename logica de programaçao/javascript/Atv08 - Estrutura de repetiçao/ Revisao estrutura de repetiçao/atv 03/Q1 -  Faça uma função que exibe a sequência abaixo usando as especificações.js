// Faça uma função que exibe a sequência abaixo usando as especificações:
/*
Exibir os 100 primeiros números da sequência da acima.

O primeiro valor é 0.

O segundo valor é 1.

O terceiro valor em diante é o resultado da soma de valores, por exemplo:

Se somar o primeiro valor e o segundo, o resultado é 1.

Se somar o segundo valor e o resultado da soma anterior,  o novo resultado será 2, e assim por diante.
*/


function parametro(numero) {
    var anterior = 0;
    var atual = 1;
    
    console.log(anterior);
    
    for (var i = 1; atual <= 100; i++) {
        console.log(atual);
        var proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
}

parametro(0);
