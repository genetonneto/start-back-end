/* 
Faça uma função que:

a)Receba código da peça

b)Receba valor da peça

c) Receba Quantidade de peças

d)Calcule o valor total da peça (Quantidade * Valor da peça)

e)Escreva no console o código da peça e seu valor total.
*/

function parametro(codigo, valor, quantidade) {
    
    var valorTotal = (quantidade * valor);
    console.log("Codigo: " + codigo + " Valor Total: " + valorTotal);
}

parametro(123,10,1);