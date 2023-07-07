/* As maçãs custam R$ 1,30 cada, se forem compradas menos de uma dúzia. E R$ 1,00 se forem compradas pelo menos 12. Faça uma função que receba o número de maçãs compradas, calcule e escreva o custo total da compra.*/

function parametro(compraMaça) {
    var maça = 1.30;
    if (compraMaça < 12) {
        return maça * compraMaça;
    } else {
        var maça = 1;
        return maça * compraMaça;
    }
}

var resultado = parametro(8);
console.log(resultado);