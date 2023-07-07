/* 
Faça uma função que receba a quantidade de peças a serem compradas, e obedeça as regras abaixo:

Se a quantidade = 50, informar ao cliente que ele tem desconto de 5%.

Se a quantidade = 100, informar ao cliente que ele tem desconto de 10%.

Qualquer valor diferente, o cliente não tem desconto.
*/


function parametro(quantPeças) {
    if (quantPeças == 50) {
        return "Voce tem direito a 5% de desconto";
    } else if (quantPeças == 100) {
        return "Voce tem direito a 10% de desconto";
    } else {
        return "Voce nao tem direito a desconto";
    }
}

var resultado = parametro(100);
console.log(resultado);