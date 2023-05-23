/* 
Faça uma função que receba:

A descrição do produto (nome), a quantidade adquirida e o preço unitário.

Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:

Se quantidade <= 5 o desconto será de 2%

Se quantidade > 5 e quantidade <=10 o desconto será de 3%

Se quantidade > 10 o desconto será de 5%
*/

function produto(nomeProd, quantidadeAdq, preçoUnit) {
    var total = (quantidadeAdq * preçoUnit);

    if (quantidadeAdq <= 5) {
        var totalPagar = (total - (2 / 100));
        return nomeProd + " " + totalPagar;
    } else if (quantidadeAdq > 5 && quantidadeAdq <= 10) {
        var totalPagar = (total - (3 / 100));
        return nomeProd + " " + totalPagar;
    } else if (quantidadeAdq > 10) {
        var totalPagar = (total - (10 / 100));
        return nomeProd + " " + totalPagar;
    }
}

var resultado = produto("celular", 11, 100);
console.log(resultado);